"use client";

import { useState } from "react";
import { ChevronDown, Video, Radio, BookOpen } from "lucide-react";

type Month = {
  month: string;
  title: string;
  desc: string;
  recordedCount: number;
  liveCount: number;
  recorded: string[];
  live: string[];
  reading: string[];
};

const months: Month[] = [
  {
    month: "Month 1",
    title: "Drafting of Essential Clauses of a Contract",
    desc: "Build your foundation by mastering every critical contract clause — from definitions and recitals to representations, termination, force majeure, and IP.",
    recordedCount: 25,
    liveCount: 4,
    recorded: [
      "What is a contract; difference between a contract and an agreement; importance of a written contract",
      "Essential features & components of a contract; consideration clause; damages for default",
      "Pre-contractual instruments",
      "Primary focus of a draftsperson; disadvantages of using a standard template",
      "Effective date of a contract",
      "Definition clause; Identification of parties clause; Recitals clause",
      "Territory of operation",
      "Representations & warranties; non-compete & non-solicitation; termination; force majeure; confidentiality",
      "Governing law and Jurisdiction clause",
      "IP clause; Dispute Resolution; Assignment of obligations; Conditions Precedent clause",
    ],
    live: [
      "Skeleton of a contract and pre-contractual instruments",
      "Substance and style of a contract",
      "Drafting introductory clauses — Description of Parties, Recitals, Interpretations, Definitions",
      "Drafting operative clauses — Indemnity, Confidentiality, Conditions Precedent/Subsequent, IP, Termination",
      "Drafting boilerplate clauses — Force Majeure, Severability, Waiver",
      "Networking Skills 1",
    ],
    reading: [
      "Purpose and Theories of Contract Law",
      "Elements of a Contract",
      "Pre-contractual Instruments: the step before a formal contract",
      "Drafting of Agreements: Preliminary Terms",
      "Drafting of Agreements: Operative Clauses",
      "Drafting of Agreements: Boilerplate Clauses",
    ],
  },
  {
    month: "Month 2",
    title: "Execution Formalities & Basic Negotiation Skills",
    desc: "Learn how contracts are executed, stamped, registered, and witnessed — and build a strong foundation in negotiation.",
    recordedCount: 18,
    liveCount: 4,
    recorded: [
      "Allocation of costs pertaining to a contract",
      "Role of witnesses in a contract",
      "Drafting an Employment Agreement, a Software Licensing Agreement, and an NDA",
      "Introduction to Negotiation; core concepts, importance & key features",
      "Negotiation Terms",
      "Types & techniques of negotiation; the negotiation mindset; role of a negotiator",
      "Essential skills of a good negotiator",
      "Steps in Negotiation — Pre-Negotiation & Post-Negotiation",
      "Results of Negotiation",
      "Special videos on 'Anatomy of Contracts'",
    ],
    live: [
      "Execution Formalities — Stamp Duty, Registration Charges, Witnesses, Signatures",
      "Contract Lab",
      "Negotiation Table Exercise",
      "Oral Assignment Feedback Session",
    ],
    reading: [
      "Execution Formalities & Processes",
      "Introduction to Negotiation",
      "Key Commercial Contracts",
    ],
  },
  {
    month: "Month 3",
    title: "International Agreements, Common Agreements & Advanced Negotiation",
    desc: "Tackle cross-border agreements, e-contracts, loan agreements, and master advanced negotiation strategy.",
    recordedCount: 15,
    liveCount: 8,
    recorded: [
      "Introduction to international commercial contracts (Part I)",
      "Introduction to international commercial contracts (Part II)",
      "Governing Law, Jurisdiction & Dispute Resolution in an International Contract",
      "How to draft international agreements",
      "Introduction to Loan Agreement",
      "How to draft a Loan Agreement",
      "An alternate method of drafting a Loan Agreement",
      "How to draft an Employment Agreement",
      "Introduction + How to draft a Non-Disclosure Agreement",
      "Essentials of an effective negotiation",
      "Mindset of an effective negotiator",
      "How to negotiate commercial contracts",
      "Mock negotiation of a Service Level Agreement (Company vs. Service-Provider)",
      "Add-on recordings of webinars",
    ],
    live: [
      "International contracts and e-contracts",
      "How to draft an Employment Agreement",
      "How to draft a Non-Disclosure Agreement",
      "How to draft a Software Licensing Agreement",
      "2 Sessions on Negotiation Skills by Tanuj Kalia",
      "Networking Skills 2",
      "Freelancing Session 1",
    ],
    reading: [
      "All about International Commercial Contracts",
      "Draft of Employment Agreement",
      "Draft of Non-Disclosure Agreement",
      "Draft of Software Licensing Agreement",
      "Introduction to Negotiation",
      "Essentials of an effective negotiation",
      "Mindset, Techniques & Skills required to be an Effective Negotiator",
      "Negotiation of commercial contracts",
    ],
  },
  {
    month: "Month 4",
    title: "Intellectual Property, Technology Agreements & Website Terms",
    desc: "Specialise in IP licensing, SaaS agreements, and the terms, policies, and contracts that power the digital world.",
    recordedCount: 13,
    liveCount: 8,
    recorded: [
      "Introduction to Trademark Licensing & Trademark Assignment Agreement",
      "How to draft a Trademark Licensing Agreement",
      "How to draft a Trademark Assignment Agreement",
      "Introduction to Patent Licensing Agreement",
      "How to draft a Patent Licensing Agreement",
      "Introduction to Copyright Licensing Agreement",
      "How to draft a Copyright Licensing Agreement",
      "How to draft a Joint Venture Intellectual Property Agreement",
      "Introduction + How to draft Terms & Conditions of an e-commerce website",
      "How to draft Terms of Use of an e-commerce website",
      "How to draft Terms of Use of a subscription-based product website",
      "How to draft Return & Refund Policy of an e-commerce website",
      "How to draft Privacy Policy of an e-commerce website",
    ],
    live: [
      "International contracts and e-contracts",
      "Drafting a Copyright Licensing Agreement and a Patent Licensing Agreement",
      "Drafting a Trademark Licensing Agreement and a Trademark Assignment Agreement",
      "How to draft a SAAS Agreement",
      "Drafting Terms & Conditions (2 types) and Terms of Use (2 types) of a website",
      "Drafting the Return & Refund Policy and the Privacy Policy of a website",
      "Networking Skills 3",
      "Freelancing Session 2",
    ],
    reading: [
      "Draft of a Trademark Licensing Agreement",
      "Draft of a Trademark Assignment Agreement",
      "Draft of a Patent Licensing Agreement",
      "Draft of a Copyright Licensing Agreement",
      "Draft of a Joint Venture Intellectual Property Agreement",
      "Draft of Terms & Conditions of an e-commerce website",
      "Draft of Terms of Use of an e-commerce website",
      "Draft of Terms of Use of a subscription-based product website",
      "Draft of Return & Refund Policy of an e-commerce website",
      "Draft of Privacy Policy of an e-commerce website",
    ],
  },
  {
    month: "Month 5",
    title: "Real Estate Agreements",
    desc: "Draft property sale deeds, leave & license agreements, powers of attorney, and franchise contracts.",
    recordedCount: 4,
    liveCount: 6,
    recorded: [
      "Introduction to Sale Deed",
      "How to draft a Sale Deed",
      "Introduction to Leave and License Agreement",
      "How to draft a Leave and License Agreement",
    ],
    live: [
      "How to draft a Sale Deed",
      "How to draft a Power of Attorney",
      "How to draft a Franchisee Agreement",
      "How to draft a Leave and License Agreement",
      "Networking Skills 4",
      "Freelancing Session 3",
    ],
    reading: [
      "Draft of a Sale Deed",
      "Draft of a Leave and License Agreement",
      "Draft of a Power of Attorney",
      "Draft of a Franchisee Agreement",
    ],
  },
  {
    month: "Month 6",
    title: "Business and Commercial Agreements",
    desc: "Master shareholders agreements, share purchase, partnerships, and joint ventures that drive business.",
    recordedCount: 8,
    liveCount: 6,
    recorded: [
      "Introduction to Sports Sponsorship Agreement",
      "How to draft a Sports Sponsorship Agreement",
      "Introduction to Shareholders Agreement",
      "How to draft a Shareholders Agreement",
      "Introduction to Share Purchase & Share Subscription Agreement",
      "How to draft a Share Purchase & Share Subscription Agreement",
      "Introduction to Partnership Agreement",
      "How to draft a Partnership Agreement",
    ],
    live: [
      "How to draft a Shareholders Agreement",
      "How to draft a Share Purchase & Share Subscription Agreement",
      "How to draft a Partnership Agreement",
      "How to draft a Joint Venture Agreement",
    ],
    reading: [
      "Draft of Sports Sponsorship Agreement",
      "Draft of Shareholders Agreement",
      "Draft of Share Purchase & Share Subscription Agreement",
      "Draft of Partnership Agreement",
      "Draft of Joint Venture Agreement",
      "Draft of Business Transfer Agreement",
    ],
  },
];

const stats = [
  { num: "55", label: "Live Training Sessions" },
  { num: "800", label: "Pages of Reading Modules" },
  { num: "85 hrs", label: "of Live Lecture Content" },
  { num: "32 hrs", label: "of Recorded Lectures" },
];

function LectureColumn({
  icon,
  title,
  items,
  accent,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accent: "gold" | "slate";
  count?: number;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`w-7 h-7 rounded-md flex items-center justify-center ${
            accent === "gold" ? "bg-gold/15" : "bg-white/[0.06]"
          }`}
        >
          {icon}
        </span>
        <h5 className="text-sm font-bold text-white">
          {title}{" "}
          <span className="text-slate-500 font-medium">
            ({count ?? items.length})
          </span>
        </h5>
      </div>
      <ul className="space-y-2">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2 text-[13px] text-slate-300 leading-relaxed">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                accent === "gold" ? "bg-gold" : "bg-slate-500"
              }`}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Curriculum() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="py-20 bg-navy" id="curriculum">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            6-Month Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Structure of this Course
          </h2>
          <div className="max-w-2xl mx-auto text-slate-400 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              The course begins with a live <strong>‘Orientation Session,’</strong> which explains how to fully benefit from it. 
              This course will also teach you to build a strong profile, write winning proposals, and master networking and negotiation for career success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 transition-colors">
                Download Course Outline
              </a>
              <a href="https://www.lawctopuslawschool.com/courses/cdn6-months/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-navy font-bold hover:bg-gold-light transition-colors">
                Register for 6-Month Course
              </a>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-16">
          {months.map((m, i) => {
            const isOpen = open === i;
            return (
              <div
                key={m.month}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "bg-white/[0.06] border-gold/40"
                    : "bg-white/[0.03] border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center">
                    <span className="text-lg font-black text-gold">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold tracking-[2px] uppercase text-gold mb-0.5">
                      {m.month}
                    </p>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {m.title}
                    </h4>
                  </div>
                  <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold/10 text-gold-light">
                      <Radio className="w-3 h-3" /> {m.liveCount} Live
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.06] text-slate-300">
                      <Video className="w-3 h-3" /> {m.recordedCount} Recorded
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-7 pt-1">
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-3xl">
                        {m.desc}
                      </p>
                      <div className="grid lg:grid-cols-3 gap-x-8 gap-y-7">
                        <LectureColumn
                          accent="slate"
                          icon={<Video className="w-4 h-4 text-slate-300" />}
                          title="Recorded Lectures"
                          items={m.recorded}
                          count={m.recordedCount}
                        />
                        <LectureColumn
                          accent="gold"
                          icon={<Radio className="w-4 h-4 text-gold" />}
                          title="Live Sessions"
                          items={m.live}
                          count={m.liveCount}
                        />
                        <LectureColumn
                          accent="gold"
                          icon={<BookOpen className="w-4 h-4 text-gold" />}
                          title="Reading Resources"
                          items={m.reading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-8 bg-white/[0.04] border border-white/[0.08] rounded-xl"
            >
              <div className="text-3xl sm:text-4xl font-black text-gold mb-1">
                {s.num}
              </div>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
