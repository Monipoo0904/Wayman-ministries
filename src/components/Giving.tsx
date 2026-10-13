import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { givingQuote, links } from "@/lib/site";

export default function Giving() {
  return (
    <section id="give" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-cream-200">
        <Image
          src="/images/online-giving-banner.png"
          alt="Wayman Ministries Online Giving"
          width={960}
          height={300}
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="h-auto w-full"
        />
        <div className="flex flex-col items-center gap-8 p-10 text-center lg:flex-row lg:justify-between lg:p-14 lg:text-left">
          <div>
            <p className="eyebrow mb-4 text-berry-500">Online Giving</p>
            <blockquote className="max-w-2xl font-serif text-3xl leading-snug font-medium text-plum-900 italic sm:text-4xl">
              &ldquo;{givingQuote}&rdquo;
            </blockquote>
          </div>
          <a
            href={links.give}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-plum-700 px-8 py-4 font-semibold text-white transition-colors hover:bg-plum-800"
          >
            Click Here to Give <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
