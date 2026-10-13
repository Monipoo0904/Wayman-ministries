"use client";

import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export const stripeEnabled = Boolean(publishableKey);

/** Stripe's embedded checkout (cards, Apple Pay, Google Pay) rendered in place on the page. */
export default function CheckoutPanel({ clientSecret, onCancel }: { clientSecret: string; onCancel: () => void }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-cream-200">
      <div className="flex items-center justify-between border-b border-cream-200 px-6 py-3">
        <p className="text-sm font-semibold text-plum-800">Secure checkout</p>
        <button onClick={onCancel} className="text-sm text-ink/60 hover:text-plum-700">
          ← Back
        </button>
      </div>
      <div className="p-2 sm:p-4">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={{ clientSecret }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
