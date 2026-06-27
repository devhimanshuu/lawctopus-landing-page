"use client";

import { Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Freelance Legal Consultant",
    image: "https://i.pravatar.cc/150?img=1", // Placeholder, use real images later
    content: "I landed my first freelance contract worth ₹50,000 within 2 months of starting this course. The practical drafting exercises and prompt feedback were game-changers for my confidence.",
  },
  {
    name: "Karan Verma",
    role: "Law Student, 4th Year",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The best part of this course is the focus on real-world agreements. I walked into my law firm internship with a portfolio of 24+ drafted contracts. The partners were blown away.",
  },
  {
    name: "Ananya Desai",
    role: "In-house Counsel",
    image: "https://i.pravatar.cc/150?img=5",
    content: "Lawctopus's module on AI in legal drafting is phenomenal. Using Prism and the prompt library has cut my drafting time in half. Highly recommended for young professionals!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Hear from our <span className="text-gold">Alumni</span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Join 20,000+ successful learners who have transformed their legal careers with Lawctopus.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 150}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col hover:bg-white/10 hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-1 mb-6 text-gold">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border-2 border-gold/30"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-sm text-gold-light">{t.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
