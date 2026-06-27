import {
  Sparkles,
  Radio,
  PlayCircle,
  KeyRound,
  GraduationCap,
  BookText,
  Check,
} from "lucide-react";
import { type ReactNode } from "react";

type Element = {
  icon: ReactNode;
  title: string;
  desc: string;
  points: string[];
  footnote?: ReactNode;
  pills?: string[];
};

const elements: Element[] = [
  {
    icon: <Radio className="w-6 h-6 text-gold" />,
    title: "LIVE AI Sessions with Leading Legal-Tech Organisations",
    desc: "Regular 60–90 minute live sessions (once every month or two) with two of India's most credible AI-driven legal platforms, under the theme “Using AI in Real Legal Work.”",
    pills: ["Indian Kanoon (Prism)", "Jurisphere"],
    points: [
      "Practical demonstrations of AI tools used in Indian legal work",
      "Real use cases in research, drafting, litigation, and analysis",
      "How these tools fit into everyday legal practice",
      "A clear understanding of where AI can and cannot be used",
    ],
  },
  {
    icon: <PlayCircle className="w-6 h-6 text-gold" />,
    title: "4-Hour Recorded Workshop: AI for Lawyers",
    desc: "A 4-session recorded workshop giving every learner technical depth and legal accuracy.",
    points: [
      "Using AI for Legal Research",
      "Using AI for Argumentation and Mooting",
      "Using AI for Legal & Contract Drafting",
      "Technology & Ethics Behind AI in Law",
    ],
    footnote: (
      <>
        Recorded by{" "}
        <a
          href="https://www.linkedin.com/in/himansh-wadhwa-78293418b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfY%2F7yIOvTBq%2BnavSoC7C8Q%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline transition-colors"
        >
          Himansh Wadhwa
        </a>{" "}
        &amp;{" "}
        <a
          href="https://www.linkedin.com/in/shruti-kaushik-76990918b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline transition-colors"
        >
          Shruti Kaushik
        </a>
        , Legal Product Developers at Indian Kanoon.
      </>
    ),
  },
  {
    icon: <KeyRound className="w-6 h-6 text-gold" />,
    title: "1-Month Complimentary Access to Prism",
    desc: "Every learner receives free access to Indian Kanoon's AI tool, Prism, to practice hands-on:",
    points: [
      "Conducting faster and smarter legal research",
      "Drafting and refining legal documents & contracts with AI assistance",
      "Exploring real-world AI use cases on India's largest caselaw repository",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-gold" />,
    title: "AI Guidance from Faculty & Course Mentors",
    desc: "AI is actively discussed in select live classes. Mentors — continuously upskilling themselves — show how AI enhances, not replaces, sound legal thinking:",
    points: [
      "Improve performance in corporate law & contract drafting",
      "Strengthen legal research and writing",
      "Support civil & criminal litigation",
      "Enhance work in IPR and tech law",
      "Build stronger CVs, portfolios, and career narratives",
    ],
  },
  {
    icon: <BookText className="w-6 h-6 text-gold" />,
    title: "31-Page eBook: AI Prompts Library",
    desc: "An exclusive, curated collection of ready-to-use prompts built for law students and young professionals — bridging the gap between knowing AI exists and knowing what to ask it. Covers six key practice areas:",
    pills: [
      "Contract Drafting",
      "Legal Research & Mooting",
      "Litigation",
      "Corporate Law",
      "Intellectual Property (IPR)",
      "Legal Careers",
    ],
    points: [],
    footnote: (
      <>
        Developed in collaboration with{" "}
        <a
          href="https://www.linkedin.com/in/himansh-wadhwa-78293418b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfY%2F7yIOvTBq%2BnavSoC7C8Q%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline transition-colors"
        >
          Himansh Wadhwa
        </a>
        , Legal Product Developer at Indian Kanoon &amp; Prism.
      </>
    ),
  },
];

const summary = [
  "Regular LIVE AI sessions by Indian Kanoon & Jurisphere",
  "A 4-hour structured workshop on AI for legal work",
  "1-month complimentary access to Prism",
  "Ongoing AI insights from faculty during live classes",
  "A 31-page eBook on AI prompts",
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="py-20 bg-gradient-to-br from-navy via-[#162240] to-navy-light relative overflow-hidden"
    >
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 px-5 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-semibold text-gold-light">
              AI-Ready Legal Careers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Building AI-Ready Legal Careers
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            AI is no longer optional for lawyers — it&apos;s a core professional
            skill that must be used responsibly and ethically. Every live course
            includes five structured AI learning elements to help you use AI
            confidently in real legal work.
          </p>
        </div>

        {/* Detailed elements */}
        <div className="space-y-5">
          {elements.map((el, i) => (
            <div
              key={el.title}
              className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 relative">
                  {el.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-navy text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {el.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {el.desc}
              </p>

              {el.pills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {el.pills.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              )}

              {el.points.length > 0 && (
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {el.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                    >
                      <Check
                        className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              )}

              {el.footnote && (
                <p className="text-xs text-slate-500 italic mt-4 pt-4 border-t border-white/[0.06]">
                  {el.footnote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* In summary strip */}
        <div className="mt-12 rounded-2xl bg-gold/[0.08] border border-gold/25 p-7 sm:p-9">
          <h3 className="text-xl font-bold text-white mb-1">In Summary</h3>
          <p className="text-sm text-slate-400 mb-6">
            Every Lawctopus Law School learner is prepared for the future of legal
            practice — responsibly, practically, and ahead of the curve.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {summary.map((s) => (
              <div key={s} className="flex items-start gap-2.5">
                <Check
                  className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-sm text-slate-200 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
