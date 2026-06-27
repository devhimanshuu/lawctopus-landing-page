import {
  GraduationCap,
  Scale,
  BookOpen,
  Laptop,
  Briefcase,
} from "lucide-react";
import { type ReactNode } from "react";

const audiences: { icon: ReactNode; label: string }[] = [
  { icon: <GraduationCap className="w-6 h-6" />, label: "Law Students" },
  { icon: <Scale className="w-6 h-6" />, label: "Young Lawyers (0-4 yrs)" },
  { icon: <BookOpen className="w-6 h-6" />, label: "Legal Academicians" },
  { icon: <Laptop className="w-6 h-6" />, label: "Freelancing Enthusiasts" },
  { icon: <Briefcase className="w-6 h-6" />, label: "Business Professionals" },
];

export default function Audience() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4">
          Who Is This For?
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-14 leading-tight">
          This Course Is Built For You If You're A...
        </h2>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-4 px-8 py-5 bg-white/[0.03] border border-white/10 rounded-2xl text-lg font-semibold text-white backdrop-blur-md hover:bg-white/[0.08] hover:border-gold/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] hover:-translate-y-1 transition-all cursor-default group"
            >
              <div className="text-gold group-hover:scale-110 transition-transform">
                {a.icon}
              </div>
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
