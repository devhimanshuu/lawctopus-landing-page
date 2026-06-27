import { Check, X } from "lucide-react";
import { type ReactNode } from "react";

type Cell = string | boolean;

const rows: { label: string; a: Cell; b: Cell }[] = [
  {
    label: "Goal",
    a: "Begin to master contract drafting",
    b: "Become an expert + earn as a freelancer",
  },
  { label: "Type", a: "LIVE", b: "LIVE" },
  { label: "Duration", a: "2 Months", b: "6 Months" },
  { label: "Total Live Classes", a: "8", b: "55" },
  {
    label: "Live Lectures",
    a: "Weekly live lectures",
    b: "Weekly for first 2 months, then 7–8 sessions/month for 4 months",
  },
  { label: "Live Lecture Hours", a: "13 hours", b: "85 hours" },
  { label: "Recorded Lecture Hours", a: "8h 38m", b: "32h 3m" },
  { label: "Reading Modules", a: "202 pages", b: "800 pages" },
  {
    label: "Assignments + Personal Feedback",
    a: "2 assignments",
    b: "17 assignments (10 drafting + 7 freelance/CV)",
  },
  { label: "Negotiation Module", a: "Fundamentals", b: "Expert-level" },
  {
    label: "Eligibility",
    a: "Want the fundamentals of drafting & basics of negotiation",
    b: "Want to learn from scratch & become an expert draftsman",
  },
  {
    label: "Ideal Candidates",
    a: "Law students, lawyers, business professionals, CAs",
    b: "Law students, lawyers, business professionals, negotiators, CAs",
  },
  {
    label: "Time Commitment",
    a: "4–5 hrs/wk (pros) · 5–6 hrs/wk (students)",
    b: "5–6 hrs/wk (pros) · 6–7 hrs/wk (students)",
  },
  { label: "Freelancer Career Sessions", a: false, b: true },
  { label: "Networking Sessions", a: false, b: true },
  { label: "Online Discussion Forum", a: true, b: true },
  { label: "Learning Manager Support", a: true, b: true },
  { label: "WhatsApp & Email Reminders", a: true, b: true },
  { label: "Money-Back Guarantee", a: true, b: true },
  { label: "LLS Alumni Status", a: true, b: true },
];

function renderCell(value: Cell, highlight: boolean): ReactNode {
  if (typeof value === "boolean") {
    return value ? (
      <Check
        className={`w-5 h-5 mx-auto ${highlight ? "text-gold" : "text-emerald-500"}`}
        strokeWidth={2.5}
      />
    ) : (
      <X className="w-5 h-5 mx-auto text-gray-300" strokeWidth={2.5} />
    );
  }
  return <span>{value}</span>;
}

export default function CourseComparison() {
  return (
    <section className="py-16 md:py-24 bg-white" id="compare">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            Courses and Costs
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Two Expert-Crafted Paths
          </h2>
          <div className="max-w-2xl mx-auto text-gray-600 space-y-4">
            <p>
              Lawctopus Law School currently offers 2 courses in the field of Contract Drafting and Negotiation:
            </p>
            <ul className="text-left bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-3 font-medium">
              <li className="flex items-start gap-3">
                <span className="bg-gold text-navy text-xs font-black px-2 py-0.5 rounded uppercase mt-0.5 whitespace-nowrap">6 Months</span>
                <span>Mastering Contract Drafting and Freelancing: <span className="line-through text-gray-400 font-normal">Rs. 60,000</span> <strong className="text-gray-900">Rs. 24,999/-</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-gray-200 text-gray-600 text-xs font-black px-2 py-0.5 rounded uppercase mt-0.5 whitespace-nowrap">2 Months</span>
                <span>Online Certificate Course on Contract Drafting and Negotiation: <strong className="text-gray-900">Rs. 7,999/-</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-navy/10 blur-3xl -z-10" />

          <div className="overflow-x-auto overflow-y-hidden rounded-3xl border border-gray-200 shadow-[0_8px_40px_rgb(0,0,0,0.06)] bg-white/60 backdrop-blur-xl">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-5 sm:p-6 bg-white/80 text-gray-500 font-semibold w-2/5 border-b border-gray-100">
                    Feature
                  </th>
                  <th className="p-5 sm:p-6 bg-gray-50/80 text-center border-b border-gray-100">
                    <span className="block text-gray-900 font-bold text-lg">2-Month</span>
                    <span className="block text-xs text-gray-500 font-medium mt-1">
                      ₹7,999
                    </span>
                  </th>
                  <th className="p-5 sm:p-6 bg-gradient-to-b from-navy to-[#1a2950] text-center relative border-b border-navy-light shadow-[inset_0_4px_20px_rgba(201,168,76,0.15)] align-top">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-light via-gold to-gold-dark" />
                    <div className="flex flex-col items-center justify-start h-full mt-1">
                      <span className="inline-block bg-gradient-to-r from-gold to-gold-dark text-navy text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-gold/30 whitespace-nowrap mb-2">
                        Best Value
                      </span>
                      <span className="block text-white font-bold text-lg">6-Month</span>
                      <span className="block text-xs text-gold-light font-bold mt-1">
                        ₹24,999
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.map((r, i) => (
                  <tr
                    key={r.label}
                    className="hover:bg-white transition-colors group"
                  >
                    <td className="p-4 sm:p-5 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                      {r.label}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-500 bg-gray-50/30">
                      {renderCell(r.a, false)}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-900 font-semibold bg-gold/[0.02] border-x border-gold/10 group-hover:bg-gold/[0.05] transition-colors relative">
                      {renderCell(r.b, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12 relative z-10">
          <a
            href="https://www.lawctopuslawschool.com/courses/cdn6-months/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-navy font-bold px-10 py-5 rounded-2xl hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all"
          >
            Enroll in the 6-Month Course →
          </a>
          <a
            href="https://www.lawctopuslawschool.com/contract-drafting-negotiation/?utm_source=lawctopus&utm_medium=post&utm_campaign=CDN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-center justify-center gap-2 bg-white text-navy font-bold px-10 py-5 rounded-2xl border-2 border-gold/40 hover:border-gold shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] hover:-translate-y-1 transition-all"
          >
            Enroll in 2-Month Course →
          </a>
        </div>
      </div>
    </section>
  );
}
