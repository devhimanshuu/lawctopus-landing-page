import {
  FileText,
  Contact,
  Briefcase,
  MessagesSquare,
  Share2,
  UserCheck,
  Check,
} from "lucide-react";
import { type ReactNode } from "react";
import Image from "next/image";

const items: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <FileText className="w-6 h-6 text-navy" />,
    title: "CV & Cover Letter Drafting",
    desc: "Draft CVs and cover letters that get noticed by legal recruiters — with personalised feedback to land internships and jobs.",
  },
  {
    icon: <Contact className="w-6 h-6 text-navy" />,
    title: "LinkedIn Profile Building",
    desc: "Build a standout LinkedIn profile and get live feedback from experts to attract the right opportunities.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-navy" />,
    title: "Upwork & Fiverr Mastery",
    desc: "Advanced tips for both platforms, winning-proposal frameworks, and direct opportunities from a top-rated Upwork expert.",
  },
  {
    icon: <MessagesSquare className="w-6 h-6 text-navy" />,
    title: "Exclusive Opportunity Groups",
    desc: "WhatsApp groups dedicated to internships, jobs, and freelancing opportunities — shared throughout the course.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-navy" />,
    title: "Profile Sharing with Partners",
    desc: "Your profile and CV shared with partner organisations for internships and placement opportunities.",
  },
  {
    icon: <UserCheck className="w-6 h-6 text-navy" />,
    title: "1-on-1 Career Coaching",
    desc: "Bi-monthly 30–45 minute one-to-one coaching sessions with LLS founders and faculty.",
  },
];

const modules = [
  "Drafting CVs that get noticed by legal recruiters",
  "Drafting Cover Letters that help you secure internships and jobs",
  "Building an excellent LinkedIn profile with live expert feedback",
  "Using Upwork and applying for real opportunities",
  "Using Fiverr and applying for real opportunities",
  "Freelancing in legal research, drafting, and writing projects",
  "Freelancing in trademark filing, copyright research, data protection & tech contracts",
  "Freelancing in contract drafting and review",
  "Networking effectively with your cohort",
  "Negotiation for salaries, freelance clients, contracts, sales & M&A deals",
];

const coordinators = [
  {
    name: "Saloni Sahu",
    role: "Manager, Career Advancement Cell",
    detail:
      "BBA LLB (Prestige) · LLM (Oriental University) · Ex-Outreach & Recruitment Manager, LLS",
    image: "/images/Saloni-Sahu.webp",
  },
  {
    name: "Anup Menon V",
    role: "Top-Rated UpWork Freelancer",
    detail:
      "Senior Legal Counsel, C. Mohanram & Associates · LL.M. Corporate Laws · India & USA clients",
    image: "/images/Anup-Menon-V.webp",
  },
  {
    name: "Tanuj Kalia",
    role: "Founding CEO, Lawctopus",
    detail:
      "NUJS Kolkata · Author 'Law as a Career' (LexisNexis) · Ex-VP Marketing, Vakilsearch",
    image: "/images/Tanuj.webp",
  },
];

export default function CareerSupport() {
  return (
    <section className="py-20 bg-cream" id="careers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            Career & Placement Support
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            We Don&apos;t Just Teach — We Launch Your Career
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            22 live sessions (with recordings) on career skills, dedicated
            placement support, and direct freelancing opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white p-7 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                {it.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {it.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>

        {/* Freelancing & career modules checklist */}
        <div className="bg-navy rounded-2xl p-8 sm:p-10 mb-12">
          <h3 className="text-xl font-bold text-white mb-1">
            Freelancing & Career Modules You&apos;ll Master
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            CV drafting, cover letters, LinkedIn, Upwork, Fiverr, networking &
            negotiation — everything you need to start earning.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {modules.map((m) => (
              <div key={m} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-sm text-slate-300 leading-relaxed">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Career Advancement Cell coordinators */}
        <p className="text-center text-xs font-bold tracking-[2px] uppercase text-gold mb-6">
          Meet Your Career Advancement Cell
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {coordinators.map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy to-navy-light">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-bold text-gray-900 leading-tight">
                  {c.name}
                </h4>
                <p className="text-sm font-semibold text-gold-dark mt-1 leading-snug">
                  {c.role}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
