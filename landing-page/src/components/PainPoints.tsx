import { AlertTriangle, Frown, CircleOff } from "lucide-react";
import { type ReactNode } from "react";

const problems: { title: string; desc: string; icon: ReactNode }[] = [
  {
    title: "No Practical Drafting Skills",
    desc: "You studied contract law theory but never actually drafted a real agreement from scratch.",
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Fear of Freelancing",
    desc: "You want to freelance but don't know how to find clients, set rates, or build a portfolio.",
    icon: <Frown className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Stuck in a Career Rut",
    desc: "0-4 years into practice and still unsure how to specialise or build a niche in contracts.",
    icon: <CircleOff className="w-6 h-6 text-red-500" />,
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            Sound Familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Law School Didn&apos;t Teach You How to Draft Contracts
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Most law graduates feel unprepared when it comes to real-world
            contract drafting. You&apos;re not alone.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white p-7 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-3">{p.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {p.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#enroll"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-navy font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 transition-all"
          >
            This Course Fixes All of That →
          </a>
        </div>
      </div>
    </section>
  );
}
