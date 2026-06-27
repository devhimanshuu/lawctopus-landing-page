import {
  GraduationCap,
  Briefcase,
  Globe,
  MonitorSmartphone,
  Rocket,
  Handshake,
} from "lucide-react";
import { type ReactNode } from "react";

const outcomes: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    title: "Ace Internships & Law Firm Jobs",
    desc: "For law students: Create standout CVs and cover letters, ace law firm internships, and secure early freelance opportunities.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-white" />,
    title: "Earn Additional Income",
    desc: "For young lawyers (0-4 yrs): Leverage high-demand contract drafting skills to build an independent, secondary income stream.",
  },
  {
    icon: <Handshake className="w-5 h-5 text-white" />,
    title: "Master Everyday Negotiation",
    desc: "Negotiate confidently in your daily life—from salary discussions and apartment hunting to M&A transactions and interviews.",
  },
  {
    icon: <Globe className="w-5 h-5 text-white" />,
    title: "Go Global with International Contracts",
    desc: "Understand arbitration rules and governing laws of international agreements, massively expanding your freelance scope.",
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5 text-white" />,
    title: "Dominate the Digital World",
    desc: "Learn the nuances of drafting Terms & Conditions and Privacy Policies for websites in an increasingly online world.",
  },
  {
    icon: <Rocket className="w-5 h-5 text-white" />,
    title: "Launch a Freelance Career",
    desc: "Build strong profiles on Upwork and LinkedIn, write winning proposals, master networking, and get expert mentorship.",
  },
];

export default function Outcomes() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            How Will This Course Help You?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            From Zero Drafting Skills to Freelancing Pro
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Become an expert in 24+ most in-demand agreements in India and unlock multiple streams of income and career growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="flex gap-4 p-6 bg-gold/[0.04] border border-gold/15 rounded-xl hover:bg-gold/[0.08] hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                {o.icon}
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1 leading-tight">{o.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {o.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
