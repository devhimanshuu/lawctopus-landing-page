import {
  ShieldCheck,
  Video,
  ClipboardCheck,
  Mail,
  Award,
  Trophy,
  MonitorPlay,
  Users,
} from "lucide-react";
import { type ReactNode } from "react";

const requirements = [
  {
    icon: <Video className="w-5 h-5 text-emerald-600" />,
    text: "Attend at least 66% of live classes (with your video turned ON)",
  },
  {
    icon: <ClipboardCheck className="w-5 h-5 text-emerald-600" />,
    text: "Submit all assignments and receive a passing grade in each (one extra attempt per assignment if you don't pass first time)",
  },
  {
    icon: <Mail className="w-5 h-5 text-emerald-600" />,
    text: "Email support@lawctopus.com within 10 days of your batch's closing session, subject line 'Request for Refund'",
  },
];

const claimSteps = [
  "Send an email to support@lawctopus.com within 10 days after the course ends.",
  "We review your request and reply within 5 days.",
  "If eligible, your refund is processed within 10 working days.",
];

const addOns: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <Award className="w-5 h-5 text-gold-dark" />,
    title: "Completion Certificate",
    desc: "Issued by Lawctopus Law School on completing the course.",
  },
  {
    icon: <Trophy className="w-5 h-5 text-gold-dark" />,
    title: "Merit Certificate",
    desc: "Awarded to the best-performing learners.",
  },
  {
    icon: <MonitorPlay className="w-5 h-5 text-gold-dark" />,
    title: "Free Webinars",
    desc: "On contract drafting, contract lifecycle management & more.",
  },
  {
    icon: <Users className="w-5 h-5 text-gold-dark" />,
    title: "LLS Alumni Groups",
    desc: "Exclusive internship/job notifications & discounts on courses.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            {/* Left badge panel */}
            <div className="bg-gradient-to-br from-navy via-[#162240] to-navy relative p-10 sm:p-12 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/20 to-transparent border-2 border-gold/40 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(201,168,76,0.2)]">
                <ShieldCheck className="w-14 h-14 text-gold drop-shadow-lg" strokeWidth={1.5} />
              </div>
              <p className="text-5xl font-black text-white mb-2 relative z-10 tracking-tight">100%</p>
              <p className="text-gold font-bold uppercase tracking-[4px] text-sm relative z-10 mb-6">
                Money-Back Guarantee
              </p>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                Complete the course sincerely and still feel it didn&apos;t add
                value? We refund every rupee — no questions asked.
              </p>
            </div>

            {/* Right requirements panel */}
            <div className="p-10 sm:p-12 bg-white">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Risk-Free Enrollment
              </h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                To qualify, simply complete the course sincerely. Here&apos;s all
                it takes:
              </p>
              <ul className="space-y-6">
                {requirements.map((r) => (
                  <li key={r.text} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 group-hover:scale-110 transition-all">
                      {r.icon}
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed font-medium">
                      {r.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How to claim */}
          <div className="border-t border-gray-100 p-10 sm:p-12 bg-gray-50/50">
            <h4 className="text-lg font-extrabold text-gray-900 mb-6 tracking-tight">
              How to Claim Your Refund
            </h4>
            <div className="grid sm:grid-cols-3 gap-6">
              {claimSteps.map((s, i) => (
                <div key={i} className="flex flex-col gap-3 group">
                  <span className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-navy font-black flex items-center justify-center shadow-sm group-hover:border-gold group-hover:text-gold transition-colors">
                    0{i + 1}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-navy/70 mt-8 font-medium">
              If you put in the effort, we promise you&apos;ll see real results.
              And if not — we&apos;ll return your money.
            </p>
          </div>
        </div>

        {/* Add-on benefits */}
        <div className="mt-16">
          <p className="text-center text-sm font-bold tracking-[3px] uppercase text-gold mb-8">
            Add-on Benefits — Included Free
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((b) => (
              <div
                key={b.title}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {b.icon}
                </div>
                <h5 className="font-bold text-gray-900 text-base mb-2">
                  {b.title}
                </h5>
                <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
