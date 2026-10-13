import Image from "next/image";
import { Church, Mail } from "lucide-react";
import GiveForm from "@/components/GiveForm";
import { contact, givingQuote } from "@/lib/site";

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
        <div className="grid grid-cols-1 gap-10 p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="eyebrow mb-4 text-berry-500">Online Giving</p>
            <blockquote className="font-serif text-3xl leading-snug font-medium text-plum-900 italic sm:text-4xl">
              &ldquo;{givingQuote}&rdquo;
            </blockquote>
            <p className="mt-6 text-ink/70">Thank you for your support of this ministry.</p>

            <div className="mt-10 space-y-5">
              <p className="eyebrow text-[11px] text-gold-600">Other ways to give</p>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-plum-600">
                  <Church size={18} />
                </span>
                <div>
                  <p className="font-semibold text-plum-900">In person</p>
                  <p className="text-sm text-ink/65">During worship at the South or West Campus.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-plum-600">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-semibold text-plum-900">By mail</p>
                  <p className="text-sm text-ink/65">
                    {contact.mailingAddress.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <GiveForm />
        </div>
      </div>
    </section>
  );
}
