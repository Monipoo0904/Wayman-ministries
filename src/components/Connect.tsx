"use client";

import { useActionState, useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import CheckoutPanel from "@/components/CheckoutPanel";
import { submitRegistration, type FormState } from "@/app/actions";
import type { ChurchEvent } from "@/lib/events";
import { formatDay, formatTime } from "@/lib/eventFormat";
import { campuses } from "@/lib/site";

const tabs = [
  { key: "visit", label: "Plan a Visit" },
  { key: "event", label: "Register for an Event" },
  { key: "serve", label: "Serve / Volunteer" },
] as const;

type Kind = (typeof tabs)[number]["key"];

// Ministries that meet on the church calendar, plus the WCDC mentoring program
const ministries = [
  "Adult Choir",
  "Youth Choir",
  "Sunday Youth Church",
  "Youth Empowerment Saturday",
  "Women’s Ministry",
  "Men’s Ministry",
  "Missionary Society",
  "Seniors",
  "Mentoring & Tutoring (Wayman CDC)",
  "Other",
];

const interests = ["Bible Discovery Hour", "Wednesday in the Word", "Sunday Youth Church", "Becoming a member", "Prayer request"];

const inputClass =
  "w-full rounded-xl bg-white px-4 py-3 text-sm text-ink ring-1 ring-cream-300 outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-plum-500";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-plum-900">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-berry-500">{error}</span>}
    </label>
  );
}

const initial: FormState = { status: "idle" };

export default function Connect({ events }: { events: ChurchEvent[] }) {
  const [kind, setKind] = useState<Kind>("visit");
  const [eventId, setEventId] = useState<string>("");
  const [state, formAction, pending] = useActionState(submitRegistration, initial);
  const [dismissed, setDismissed] = useState<FormState | null>(null);

  useEffect(() => {
    const onRsvp = (e: Event) => {
      setKind("event");
      setEventId(String((e as CustomEvent<number>).detail));
      setDismissed(state);
    };
    window.addEventListener("wayman:rsvp", onRsvp);
    return () => window.removeEventListener("wayman:rsvp", onRsvp);
  }, [state]);

  const result = dismissed === state ? initial : state;
  const errors = result.errors ?? {};
  const selected = events.find((e) => String(e.id) === eventId);

  if (result.status === "success") {
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center ring-1 ring-cream-200">
          <CheckCircle2 size={44} className="text-plum-600" />
          <p className="mt-4 font-serif text-3xl font-semibold text-plum-900">{result.message}</p>
          {!result.clientSecret && (
            <button onClick={() => setDismissed(state)} className="mt-6 text-sm font-semibold text-plum-700 hover:text-berry-500">
              Submit another form
            </button>
          )}
        </div>
        {result.clientSecret && <CheckoutPanel clientSecret={result.clientSecret} onCancel={() => setDismissed(state)} />}
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-cream-100 p-2 ring-1 ring-cream-200">
      <div role="tablist" className="grid grid-cols-1 gap-1 sm:grid-cols-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={kind === t.key}
            onClick={() => setKind(t.key)}
            className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
              kind === t.key ? "bg-white text-plum-800 shadow-sm" : "text-ink/60 hover:text-plum-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form action={formAction} className="space-y-5 p-5 sm:p-8">
        <input type="hidden" name="kind" value={kind} />
        {/* Honeypot for spam bots */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        {kind === "event" && (
          <>
            <Field label="Event" error={errors.eventId}>
              <select name="eventId" required value={eventId} onChange={(e) => setEventId(e.target.value)} className={inputClass}>
                <option value="">Choose an upcoming event…</option>
                {events.map((e) => (
                  <option key={e.id} value={e.id}>
                    {formatDay(e.start.slice(0, 10)).replace(/^\w+, /, "")} · {e.title}
                    {e.price ? ` ($${e.price})` : ""}
                  </option>
                ))}
              </select>
            </Field>
            {selected && (
              <p className="rounded-xl bg-white px-4 py-3 text-sm text-ink/70 ring-1 ring-cream-200">
                <strong className="text-plum-900">{selected.title}</strong>
                {selected.subtitle && ` — ${selected.subtitle}`}
                <br />
                {formatDay(selected.start.slice(0, 10))} · {formatTime(selected)}
                {selected.venue && ` · ${selected.venue}`}
              </p>
            )}
          </>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Full name" error={errors.name}>
            <input name="name" required autoComplete="name" className={inputClass} />
          </Field>
          <Field label="Email" error={errors.email}>
            <input name="email" type="email" required autoComplete="email" className={inputClass} />
          </Field>
          <Field label="Phone (optional)">
            <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
          </Field>

          {kind === "visit" && (
            <Field label="Campus" error={errors.campus}>
              <select name="campus" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choose a campus…
                </option>
                {campuses.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} — {c.time}
                  </option>
                ))}
              </select>
            </Field>
          )}
          {kind === "event" && (
            <Field label="Number attending">
              <input name="attendees" type="number" min={1} max={20} defaultValue={1} className={inputClass} />
            </Field>
          )}
          {kind === "serve" && (
            <Field label="Where would you like to serve?" error={errors.ministry}>
              <select name="ministry" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choose a ministry…
                </option>
                {ministries.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>
          )}
        </div>

        {kind === "visit" && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="When are you planning to visit?">
                <input name="date" type="date" className={inputClass} />
              </Field>
              <Field label="How many in your party?">
                <input name="party" type="number" min={1} max={30} defaultValue={1} className={inputClass} />
              </Field>
            </div>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-plum-900">I&rsquo;d like to learn about</legend>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => (
                  <label
                    key={i}
                    className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm text-plum-800 ring-1 ring-cream-300 has-checked:bg-plum-700 has-checked:text-white has-checked:ring-plum-700"
                  >
                    <input type="checkbox" name="interests" value={i} className="sr-only" />
                    {i}
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        )}

        <Field label={kind === "visit" ? "Anything we should know, or a prayer request? (optional)" : "Notes (optional)"}>
          <textarea name="notes" rows={3} className={inputClass} />
        </Field>

        {result.status === "error" && result.message && (
          <p className="rounded-xl bg-berry-500/10 px-4 py-3 text-sm text-berry-500">{result.message}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800 disabled:opacity-50 sm:w-auto"
        >
          {pending ? "Sending…" : selected?.price && kind === "event" ? "Continue to tickets" : "Submit"}
          {!pending && <ArrowRight size={18} />}
        </button>
      </form>
    </div>
  );
}
