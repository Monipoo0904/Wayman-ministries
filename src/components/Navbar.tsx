"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Our Vision", href: "#vision" },
      { label: "Pastor's Desk", href: "/ministries#pastor" },
      { label: "What to Expect", href: "/ministries#expect" },
    ],
  },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/ministries#events" },
  { label: "Sermons", href: "/ministries#sermons" },
  { label: "Resources", href: "/ministries#resources" },
  { label: "Online Giving", href: "https://wayman.org/ministries/?page_id=175", external: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2d0e48]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[#f0c040] font-bold text-xl tracking-widest uppercase">
              Wayman
            </span>
            <span className="text-white text-xs tracking-[0.3em] uppercase">
              Ministries
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-200 hover:text-[#f0c040] transition-colors">
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  {dropdown === link.label && (
                    <div className="absolute top-full left-0 bg-[#2d0e48] border border-[#f0c040]/20 rounded-lg shadow-xl min-w-48 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-[#f0c040] hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-[#f0c040] transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="https://wayman.org/ministries/?page_id=139"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#f0c040] text-[#2d0e48] text-sm font-bold px-4 py-2 rounded-full hover:bg-[#d9a81a] transition-colors"
            >
              <span className="w-2 h-2 bg-[#2d0e48] rounded-full animate-pulse" />
              Watch Live
            </Link>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#2d0e48] border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="block px-3 py-3 text-sm font-medium text-gray-200 hover:text-[#f0c040] hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wayman.org/ministries/?page_id=139"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-3 bg-[#f0c040] text-[#2d0e48] font-bold px-4 py-3 rounded-full text-sm justify-center"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 bg-[#2d0e48] rounded-full animate-pulse" />
            Watch Live
          </Link>
        </div>
      )}
    </header>
  );
}
