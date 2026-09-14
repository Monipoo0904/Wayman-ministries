import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function YoutubeSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.6 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.3.6 9.3.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

function FacebookSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#200835] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-[#f0c040] font-bold text-2xl tracking-widest uppercase mb-1">
              Wayman
            </h3>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
              Ministries
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              The Ministry that is Making a Difference in Jacksonville, Florida
              and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/channel/UC88lMrs-898tVFWKxs_9LSA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040] hover:text-[#2d0e48] text-gray-300 transition-colors"
              >
                <YoutubeSvg />
              </a>
              <a
                href="https://www.facebook.com/WaymanMinistries/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040] hover:text-[#2d0e48] text-gray-300 transition-colors"
              >
                <FacebookSvg />
              </a>
              <a
                href="mailto:temple@wayman.org"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f0c040] hover:text-[#2d0e48] text-gray-300 transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-[#f0c040]/30">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Watch Live", href: "https://wayman.org/ministries/?page_id=139" },
                { label: "About Us", href: "/ministries#about" },
                { label: "Pastor's Desk", href: "/ministries#pastor" },
                { label: "Events", href: "/ministries#events" },
                { label: "Resources", href: "/ministries#resources" },
                { label: "Online Giving", href: "https://wayman.org/ministries/?page_id=175" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-[#f0c040] transition-colors flex items-center gap-1"
                  >
                    <span className="text-[#f0c040] text-xs">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Campuses */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-[#f0c040]/30">
              Our Network
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Wayman Temple", href: "/ministries", desc: "Main Worship Campus" },
                { label: "Wayman Academy", href: "http://www.waymanacademy.org/", desc: "Charter School (K–5)" },
                { label: "Wayman CDC", href: "http://www.waymancommunity.org/", desc: "Community Development" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-gray-400 hover:text-[#f0c040] transition-colors font-medium"
                  >
                    {s.label}
                  </a>
                  <p className="text-gray-500 text-xs">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Contact */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4 pb-2 border-b border-[#f0c040]/30">
              Service Times
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-6">
              <li>
                <span className="text-white font-medium">Sunday</span>
                <br />Early Morning · Morning Worship
              </li>
              <li>
                <span className="text-white font-medium">Wednesday</span>
                <br />Bible Study
              </li>
            </ul>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href="tel:+19046931503"
                className="flex items-center gap-2 hover:text-[#f0c040] transition-colors"
              >
                <Phone size={14} />
                (904) 693-1503
              </a>
              <a
                href="mailto:temple@wayman.org"
                className="flex items-center gap-2 hover:text-[#f0c040] transition-colors"
              >
                <Mail size={14} />
                temple@wayman.org
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                Jacksonville, Florida
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Wayman Ministries · Jacksonville, FL. All rights reserved.</p>
          <p>Original Design: Kelvin Chappell</p>
        </div>
      </div>
    </footer>
  );
}
