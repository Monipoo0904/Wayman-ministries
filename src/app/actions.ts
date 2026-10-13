"use server";

import { getEventById } from "@/lib/events";
import { formatDay, formatTime } from "@/lib/eventFormat";
import { detailsTable, emailConfigured, registrationInbox, sendEmail } from "@/lib/email";
import { getStripe, siteOrigin } from "@/lib/stripe";
import { campuses, contact, givingFunds } from "@/lib/site";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
  /** Present when a paid event registration needs checkout */
  clientSecret?: string;
};

const MAX = 2000;
const field = (fd: FormData, name: string) => String(fd.get(name) ?? "").trim().slice(0, MAX);
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

const kinds = {
  visit: "Plan a Visit",
  event: "Event Registration",
  serve: "Ministry / Volunteer Sign-up",
} as const;

export async function submitRegistration(_prev: FormState, fd: FormData): Promise<FormState> {
  // Honeypot: real visitors never see or fill this field
  if (field(fd, "company")) return { status: "success", message: "Thank you!" };

  const kind = field(fd, "kind") as keyof typeof kinds;
  if (!(kind in kinds)) return { status: "error", message: "Please choose a form." };

  const name = field(fd, "name");
  const email = field(fd, "email");
  const phone = field(fd, "phone");
  const notes = field(fd, "notes");
  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!isEmail(email)) errors.email = "Please enter a valid email address.";

  const rows: [string, string][] = [
    ["Form", kinds[kind]],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
  ];

  let event: Awaited<ReturnType<typeof getEventById>> = null;
  let attendees = 1;

  if (kind === "visit") {
    const campus = field(fd, "campus");
    if (!campuses.some((c) => c.name === campus)) errors.campus = "Please choose a campus.";
    rows.push(
      ["Campus", campus],
      ["Planned date", field(fd, "date")],
      ["Party size", field(fd, "party")],
      ["Interested in", fd.getAll("interests").map(String).join(", ")],
    );
  } else if (kind === "event") {
    event = await getEventById(Number(field(fd, "eventId")));
    attendees = Math.min(20, Math.max(1, Number(field(fd, "attendees")) || 1));
    if (!event) errors.eventId = "Please choose an upcoming event.";
    else
      rows.push(
        ["Event", event.title + (event.subtitle ? ` — ${event.subtitle}` : "")],
        ["When", `${formatDay(event.start.slice(0, 10))}, ${formatTime(event)}`],
        ["Where", event.venue],
        ["Attendees", String(attendees)],
      );
  } else {
    const ministry = field(fd, "ministry");
    if (!ministry) errors.ministry = "Please tell us where you'd like to serve.";
    rows.push(["Ministry", ministry]);
  }
  rows.push(["Notes", notes]);

  if (Object.keys(errors).length) return { status: "error", message: "Please fix the highlighted fields.", errors };

  if (!emailConfigured()) {
    return {
      status: "error",
      message: `Online registration isn't available right now. Please email ${contact.email} or call the church office.`,
    };
  }

  // Paid event: start a Stripe checkout for the tickets
  let clientSecret: string | undefined;
  if (event?.price) {
    const stripe = getStripe();
    if (!stripe) return { status: "error", message: "Ticket sales aren't available online right now. Please contact the church office." };
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: attendees,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(event.price * 100),
            product_data: { name: `${event.title} — ${formatDay(event.start.slice(0, 10))}` },
          },
        },
      ],
      metadata: { type: "event", eventId: String(event.id), name, phone },
      return_url: `${await siteOrigin()}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    });
    clientSecret = session.client_secret ?? undefined;
    rows.push(["Payment", `$${(event.price * attendees).toFixed(2)} via online checkout (Stripe session ${session.id})`]);
  }

  try {
    await sendEmail({
      to: registrationInbox(),
      replyTo: email,
      subject: `${kinds[kind]}: ${name}${event ? ` — ${event.title}` : ""}`,
      html: `<p>A new ${kinds[kind].toLowerCase()} was submitted on the website.</p>${detailsTable(rows)}`,
    });
    await sendEmail({
      to: email,
      replyTo: contact.email,
      subject: `Thank you from Wayman Temple`,
      html: `<p>Hi ${name.split(" ")[0].replace(/[<>&]/g, "")},</p><p>Thank you — we received your ${kinds[kind].toLowerCase()}. Someone from Wayman Temple will be in touch. You're always welcome at Wayman Temple!</p>${detailsTable(rows.slice(4))}`,
    });
  } catch (err) {
    console.error(err);
    return { status: "error", message: `Something went wrong sending your form. Please email ${contact.email}.` };
  }

  return {
    status: "success",
    message: clientSecret
      ? "You're registered! Complete your ticket purchase below."
      : "Thank you! We received your information and sent you a confirmation email.",
    clientSecret,
  };
}

export async function createDonationSession(input: {
  amount: number;
  fund: string;
  frequency: "once" | "monthly";
}): Promise<{ clientSecret?: string; error?: string }> {
  const stripe = getStripe();
  if (!stripe) return { error: "Online giving isn't configured yet." };

  const amount = Math.round(Number(input.amount) * 100);
  if (!Number.isFinite(amount) || amount < 100 || amount > 5_000_000)
    return { error: "Please enter an amount between $1 and $50,000." };
  const fund = givingFunds.find((f) => f === input.fund) ?? givingFunds[0];
  const monthly = input.frequency === "monthly";

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded_page",
    mode: monthly ? "subscription" : "payment",
    ...(monthly ? {} : { submit_type: "donate" as const }),
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: { name: `${fund} — Wayman Temple AME Church` },
          ...(monthly ? { recurring: { interval: "month" as const } } : {}),
        },
      },
    ],
    metadata: { type: "donation", fund },
    return_url: `${await siteOrigin()}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
  });
  return session.client_secret ? { clientSecret: session.client_secret } : { error: "Could not start checkout." };
}
