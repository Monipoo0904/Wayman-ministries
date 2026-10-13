import Image from "next/image";
import { Mail } from "lucide-react";
import { YoutubeIcon, FacebookIcon } from "@/components/icons";
import { campuses, contact, links, serviceTimes } from "@/lib/site";

const socialClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-gold-400 hover:text-plum-950";

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/crest-temple.jpg"
                alt="Wayman Temple crest"
                width={266}
                height={196}
                className="h-20 w-auto rounded-xl"
              />
              <Image
                src="/images/wm-logo.png"
                alt="Wayman Temple"
                width={479}
                height={180}
                className="h-12 w-auto opacity-90"
              />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed">
              We are Wayman Ministries &ndash; the Ministry that is Making a
              Difference!
            </p>
            <div className="mt-6 flex gap-3">
              <a href={links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialClass}>
                <YoutubeIcon />
              </a>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialClass}>
                <FacebookIcon />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email" className={socialClass}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Campuses */}
          <div className="lg:col-span-4">
            <h4 className="eyebrow mb-5 text-gold-300">Locations</h4>
            <ul className="space-y-5 text-sm">
              {campuses.map((c) => (
                <li key={c.name}>
                  <p className="font-medium text-white">{c.name}</p>
                  <a href={c.map} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                    {c.street}, {c.city}
                  </a>
                  <a href={c.phoneHref} className="block transition-colors hover:text-gold-300">
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-5 text-gold-300">Services</h4>
            <ul className="space-y-3 text-sm">
              {serviceTimes.map((s) => (
                <li key={s.label}>
                  <p className="font-medium text-white">{s.label}</p>
                  <p>
                    {s.day} · {s.time}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-5 text-gold-300">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={links.academy} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                  Wayman Academy of the Arts
                </a>
              </li>
              <li>
                <a href={links.cdc} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                  Wayman Community Development Center
                </a>
              </li>
              <li>
                <a href={links.calendar} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                  Event Calendar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ame-logo.jpg"
              alt="African Methodist Episcopal Church"
              width={290}
              height={190}
              className="h-8 w-auto rounded bg-white"
            />
            <p>© {new Date().getFullYear()}, Wayman Ministries</p>
          </div>
          <p>Original Design Kelvin Chappell, Updated by Darien Bathalter, LLC</p>
        </div>
      </div>
    </footer>
  );
}
