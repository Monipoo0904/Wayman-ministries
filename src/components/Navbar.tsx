"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Mirrors the menu on wayman.org/ministries
const navLinks = [
  { label: "Home", href: "/#" },
  { label: "About Us", href: "/#about" },
  { label: "Pastor’s Desk", href: "/#pastor" },
  { label: "Events", href: "/#events" },
  { label: "Resources", href: "/#resources" },
  { label: "Online Giving", href: "/#give" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-plum-950/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgb(0_0_0/0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all ${solid ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/emblem-temple-square.jpg"
              alt=""
              width={192}
              height={140}
              priority
              className="h-10 w-12 rounded-lg object-cover ring-1 ring-white/15"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-xl font-semibold tracking-[0.12em] text-white uppercase">
                Wayman
              </span>
              <span className="mt-1 text-[10px] tracking-[0.35em] text-gold-300 uppercase">
                Temple
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white xl:px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/#live"
              className="hidden items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-plum-800 transition-colors hover:bg-gold-300 sm:inline-flex"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-berry-500" />
              Live
            </Link>
            <button
              className="p-2 text-white lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-1 border-t border-white/10 px-4 pt-3 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#live"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cream-50 px-4 py-3 text-sm font-semibold text-plum-800"
            onClick={() => setOpen(false)}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-berry-500" />
            Live
          </Link>
        </div>
      )}
    </header>
  );
}
