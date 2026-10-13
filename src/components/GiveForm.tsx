"use client";

import { useState, useTransition } from "react";
import { ArrowRight, Lock } from "lucide-react";
import CheckoutPanel, { stripeEnabled } from "@/components/CheckoutPanel";
import { createDonationSession } from "@/app/actions";
import { givingFunds, links } from "@/lib/site";

const presets = [25, 50, 100, 250, 500];

export default function GiveForm() {
  const [fund, setFund] = useState<string>(givingFunds[0]);
  const [amount, setAmount] = useState<string>("50");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (!stripeEnabled) {
    return (
      <a
        href={links.vanco}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800"
      >
        Click Here to Give <ArrowRight size={18} />
      </a>
    );
  }

  if (clientSecret) return <CheckoutPanel clientSecret={clientSecret} onCancel={() => setClientSecret(null)} />;

  const value = Number(amount);

  function submit() {
    setError(null);
    startTransition(async () => {
      const res = await createDonationSession({ amount: value, fund, frequency });
      if (res.clientSecret) setClientSecret(res.clientSecret);
      else setError(res.error ?? "Something went wrong.");
    });
  }

  const chip = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
      active ? "bg-plum-700 text-white" : "bg-white text-plum-800 ring-1 ring-cream-300 hover:bg-plum-50"
    }`;

  return (
    <div className="rounded-3xl bg-white p-6 ring-1 ring-cream-300 sm:p-8">
      <fieldset>
        <legend className="eyebrow mb-3 text-[11px] text-gold-600">Give to</legend>
        <div className="flex flex-wrap gap-2">
          {givingFunds.map((f) => (
            <button key={f} type="button" onClick={() => setFund(f)} className={chip(fund === f)} aria-pressed={fund === f}>
              {f}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="eyebrow mb-3 text-[11px] text-gold-600">Amount</legend>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setAmount(String(p))}
              className={chip(value === p)}
              aria-pressed={value === p}
            >
              ${p}
            </button>
          ))}
          <label className="flex items-center rounded-full bg-white px-4 ring-1 ring-cream-300 focus-within:ring-plum-500">
            <span className="text-ink/50">$</span>
            <input
              type="number"
              min={1}
              step="1"
              inputMode="decimal"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              aria-label="Custom amount"
              className="w-24 bg-transparent px-1 py-2.5 text-sm font-semibold text-plum-900 outline-none"
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="eyebrow mb-3 text-[11px] text-gold-600">Frequency</legend>
        <div className="inline-flex rounded-full bg-cream-100 p-1">
          {(["once", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              aria-pressed={frequency === f}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                frequency === f ? "bg-white text-plum-800 shadow-sm" : "text-ink/60"
              }`}
            >
              {f === "once" ? "One time" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      {error && <p className="mt-5 text-sm text-berry-500">{error}</p>}

      <button
        type="button"
        onClick={submit}
        disabled={pending || !(value >= 1)}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800 disabled:opacity-50"
      >
        {pending ? "Starting secure checkout…" : `Give $${value >= 1 ? value.toLocaleString() : "—"}${frequency === "monthly" ? " monthly" : ""}`}
        {!pending && <ArrowRight size={18} />}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink/50">
        <Lock size={12} /> Secure payment by Stripe · Card, Apple Pay &amp; Google Pay
      </p>
    </div>
  );
}
