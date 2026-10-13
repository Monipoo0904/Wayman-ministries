"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3 rounded-full sm:flex-row sm:bg-white/10 sm:p-1.5 sm:ring-1 sm:ring-white/15"
    >
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address"
        required
        className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-sm text-white placeholder-white/50 ring-1 ring-white/15 focus:ring-gold-400 focus:outline-none sm:bg-transparent sm:ring-0"
      />
      <button
        type="submit"
        className="rounded-full bg-gold-400 px-7 py-3.5 text-sm font-semibold whitespace-nowrap text-plum-950 transition-colors hover:bg-gold-300"
      >
        Subscribe
      </button>
    </form>
  );
}
