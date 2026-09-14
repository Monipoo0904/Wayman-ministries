"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        placeholder="Your email address"
        required
        className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#f0c040] text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3.5 bg-[#f0c040] text-[#2d0e48] font-bold rounded-full text-sm hover:bg-[#d9a81a] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
