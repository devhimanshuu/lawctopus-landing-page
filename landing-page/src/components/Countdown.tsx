"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function Countdown() {
  const targetDate = new Date("2026-07-01T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-4 bg-navy-light/40 border border-gold/20 p-4 rounded-xl mb-6">
      <div className="flex items-center gap-2 text-gold-light">
        <Clock className="w-5 h-5 animate-pulse" />
        <span className="text-sm font-bold uppercase tracking-wider">Starts In:</span>
      </div>
      <div className="flex items-center gap-3 text-white font-black text-lg sm:text-xl">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-400 font-normal uppercase">Days</span>
        </div>
        <span className="text-gold pb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-400 font-normal uppercase">Hrs</span>
        </div>
        <span className="text-gold pb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-400 font-normal uppercase">Mins</span>
        </div>
        <span className="text-gold pb-4">:</span>
        <div className="flex flex-col items-center text-gold-light">
          <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-[10px] text-slate-400 font-normal uppercase">Secs</span>
        </div>
      </div>
    </div>
  );
}
