"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Faculty", href: "#faculty" },
    { label: "Careers", href: "#careers" },
    { label: "Compare", href: "#compare" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-xl shadow-lg"
          : "bg-navy/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo-light.png"
            alt="Lawctopus Law School"
            width={160}
            height={36}
            className="h-9 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
            target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-slate-300 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
            target="_blank" rel="noopener noreferrer"
            className="block mt-2 text-center bg-gradient-to-r from-gold to-gold-dark text-navy font-bold py-3 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
