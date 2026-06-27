import { Check, ShieldCheck } from "lucide-react";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-[#162240] to-navy-light overflow-hidden pt-16">
      {/* Decorative glow */}
      <div className="absolute -top-[30%] -right-[15%] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-5 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-dot" />
              <span className="text-sm font-semibold text-gold-light">
                Enrollments Open — Starts July 1
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.12] mb-5">
              Master{" "}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Contract Drafting
              </span>{" "}
              &amp; Start Freelancing with Confidence
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              A 6-month expert-level program by Lawctopus Law School. Draft 24+
              real-world agreements, learn from top industry practitioners, and
              launch your freelancing career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
                target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-[0_4px_24px_rgba(201,168,76,0.4)] hover:shadow-[0_8px_32px_rgba(201,168,76,0.5)] hover:-translate-y-0.5 transition-all text-center"
              >
                Enroll Now — Limited Seats →
              </a>
              <a
                href="#curriculum"
                className="border-2 border-gold text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gold hover:text-navy transition-all text-center"
              >
                View Full Curriculum
              </a>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-12 pt-8 border-t border-white/10">
              {[
                { num: "20,000+", label: "Students Trained" },
                { num: "96.5/100", label: "Course Rating" },
                { num: "1,500+", label: "Learners Enrolled" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-black text-gold">
                    {s.num}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <Countdown />
            {/* Pricing card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.3)] relative" id="enroll">
            <span className="absolute -top-3.5 right-6 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-md">
              58% OFF
            </span>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              6-Month Expert Program
            </p>

            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-4xl sm:text-5xl font-black text-navy">₹24,999</span>
              <span className="text-lg sm:text-xl text-gray-400 line-through">₹60,000</span>
            </div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-bold px-3 py-1 rounded mb-6">
              You save ₹35,001
            </span>

            <ul className="space-y-3 mb-6">
              {[
                "54 Live Training Sessions with Experts",
                "Draft 24+ Real-World Agreements",
                "800+ Pages of Reading Resources",
                "Lifetime Access to Recordings",
                "Bi-Monthly 1-on-1 Career Coaching",
                "Freelancing & Networking Sessions",
                "Completion & Merit Certificates",
                "100% Money-Back Guarantee",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-gold to-gold-dark text-navy font-bold text-lg py-4 rounded-xl text-center hover:shadow-lg hover:shadow-gold/30 transition-all hover:-translate-y-0.5"
            >
              Enroll Now →
            </a>

            <p className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
              <ShieldCheck className="w-4 h-4" />
              100% Refund if unsatisfied after sincere completion
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
