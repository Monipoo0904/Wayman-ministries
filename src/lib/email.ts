import "server-only";
import { contact } from "@/lib/site";

export const emailConfigured = () => Boolean(process.env.RESEND_API_KEY);

/** Where registrations are delivered (defaults to the church office). */
export const registrationInbox = () => process.env.REGISTRATION_TO_EMAIL || contact.email;

export function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/** Renders label/value rows as a simple, email-client-safe HTML table. */
export function detailsTable(rows: [string, string][]) {
  return `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="color:#7c3f78;font-weight:bold;vertical-align:top">${escapeHtml(k)}</td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;
}

export async function sendEmail(msg: { to: string; subject: string; html: string; replyTo?: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.REGISTRATION_FROM_EMAIL || "Wayman Temple <onboarding@resend.dev>",
      to: [msg.to],
      subject: msg.subject,
      html: msg.html,
      reply_to: msg.replyTo,
    }),
  });
  if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
}
