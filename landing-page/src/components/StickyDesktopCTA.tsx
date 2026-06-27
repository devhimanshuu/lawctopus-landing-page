"use client";

import { useEffect, useState } from "react";

export default function StickyDesktopCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA when scrolling past 800px (roughly past the Hero section)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-[60] shadow-sm transition-transform duration-500 hidden md:block ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://cdn.lawctopus.com/wp-content/uploads/2021/08/Lawctopus-1.png" 
            alt="Lawctopus" 
            className="h-8 object-contain"
          />
          <div className="h-6 w-px bg-gray-300"></div>
          <h3 className="font-bold text-navy hidden lg:block">
            Mastering Contract Drafting and Freelancing
          </h3>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right">
            <span className="text-xl font-black text-navy">₹24,999</span>
            <span className="text-sm text-gray-500 line-through ml-2">₹60,000</span>
          </div>
          <a
            href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gold to-gold-dark text-navy font-bold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
