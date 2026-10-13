import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";
import { getStripe } from "@/lib/stripe";
import { contact, givingQuote } from "@/lib/site";

export const metadata: Metadata = { title: "Thank You – Wayman Temple", robots: { index: false } };

async function getSession(id?: string) {
  const stripe = getStripe();
  if (!stripe || !id) return null;
  try {
    return await stripe.checkout.sessions.retrieve(id);
  } catch {
    return null;
  }
}

export default async function ThankYouPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const session = await getSession(session_id);
  const complete = session?.status === "complete";
  const donation = session?.metadata?.type === "donation";
  const amount = session?.amount_total != null ? `$${(session.amount_total / 100).toFixed(2)}` : null;

  return (
    <section className="bokeh flex min-h-[80vh] items-center px-4 pt-32 pb-24">
      <div className="mx-auto max-w-xl rounded-[2rem] bg-cream-50 p-10 text-center shadow-2xl sm:p-14">
        {complete ? (
          <>
            <CheckCircle2 size={52} className="mx-auto text-plum-600" />
            <h1 className="mt-6 font-serif text-4xl font-semibold text-plum-900">Thank you!</h1>
            <p className="mt-4 text-lg text-ink/70">
              {donation
                ? `Your gift${amount ? ` of ${amount}` : ""} to ${session?.metadata?.fund ?? "Wayman Temple"} was received.`
                : `Your ticket purchase${amount ? ` of ${amount}` : ""} is complete.`}{" "}
              A receipt was sent to {session?.customer_details?.email ?? "your email"}.
            </p>
            {donation && <p className="mt-6 font-serif text-xl text-plum-700 italic">&ldquo;{givingQuote}&rdquo;</p>}
          </>
        ) : (
          <>
            <Clock size={52} className="mx-auto text-plum-600" />
            <h1 className="mt-6 font-serif text-4xl font-semibold text-plum-900">Payment not completed</h1>
            <p className="mt-4 text-ink/70">
              We couldn&rsquo;t confirm this payment. If you were charged, please contact us at {contact.email}.
            </p>
          </>
        )}
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800"
        >
          Back to Wayman Temple
        </Link>
      </div>
    </section>
  );
}
