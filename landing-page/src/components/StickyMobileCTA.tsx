"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/20 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] z-50 p-3 md:hidden">
      <div className="flex items-center justify-between max-w-lg mx-auto">
        <div>
          <span className="text-xl font-extrabold text-navy">₹24,999</span>
          <span className="text-sm text-gray-400 line-through ml-2">
            ₹60,000
          </span>
        </div>
        <a
          href="#enroll"
          className="bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-sm px-6 py-3 rounded-lg"
        >
          Enroll Now →
        </a>
      </div>
    </div>
  );
}
