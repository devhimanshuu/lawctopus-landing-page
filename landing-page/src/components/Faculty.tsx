"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Member = {
  name: string;
  role: string;
  detail: string;
  image: string;
  bio: string;
  tag?: string;
};

const faculty: Member[] = [
  {
    name: "Shashank Sardesai",
    role: "Independent Litigator & Company Secretary",
    detail: "Co-founder, EverTrust Legal · Ex-Wadia Ghandy, HSA, Khaitan",
    image: "/images/shashank-sardesai.png",
    bio: "Graduated from the University of Pune in 2018, Shashank is an Independent Litigator and Company Secretary. He co-founded EverTrust Legal, a full-service law firm, after working with Wadia Ghandy & Co., HSA Advocates and Khaitan Legal Associates. He holds a Diploma in International Business Laws from Symbiosis Law School, Pune (2014) and a Diploma in Cyber Laws from GLC, Mumbai (2017). His work spans partnership deeds, leave & license agreements, lease deeds, service agreements, loan agreements, NDAs, mortgage deeds and deeds of guarantee.",
  },
  {
    name: "Akanksha Mishra",
    role: "Head of Lawctopus Law School",
    detail: "Litigator, Bombay HC (Nagpur) · SLS Pune · Gold Medalist LLM",
    image: "/images/Akanksha-Mishra.webp",
    bio: "Akanksha heads Lawctopus Law School, where she has taught contract drafting & negotiation to 1500+ learners with an average rating of 96.5/100. An independent litigator practising at the Bombay High Court, Nagpur Bench, she has diverse experience in commercial and real estate litigation. She has been corporate counsel for start-ups, media and software companies, and PSUs like BHEL, MyCaptain and Mastersoft ERP Solutions. She graduated from SLS, Pune (2018) and earned a gold-medal LLM in Constitutional Law from Nagpur University (2021).",
  },
  {
    name: "Pranjal Doshi",
    role: "Associate, Walker Morris LLP (UK)",
    detail: "M&A & Private Equity · HNLU · Cambridge",
    image: "/images/Pranjal-Doshi.webp",
    bio: "Pranjal completed his law education at HNLU (2018) and a postgraduate specialization in corporate law at the University of Cambridge (2019). He has worked with leading Indian law firms including Trilegal and Khaitan & Co., and is currently an Associate at Walker Morris LLP, United Kingdom. He specializes in mergers, acquisitions and private equity transactions, working extensively on investment documents such as share purchase agreements and shareholders' agreements on both the buy and sell sides.",
  },
  {
    name: "Arunima Jha",
    role: "Head Legal Counsel, Omnicom Media Group",
    detail: "Ex-BookMyShow & K Raheja Corp · 10+ yrs · LLM Mumbai",
    image: "/images/Arunima-Jha.webp",
    bio: "With over ten years in the legal field, Arunima is Head Legal Counsel at Omnicom Media Group, a global leader in media, marketing and corporate communications. Her media-law expertise comes from earlier roles as Legal Counsel at BookMyShow and at K Raheja Corp, a distinguished real estate developer. She holds an LLM in Business & Corporate Law from Mumbai University and is a guest lecturer at various law institutes. She is also adept in privacy law, advising on complex privacy and data-security regulations, privacy assessments, separation plans, exit strategies and public-offering preparations.",
  },
  {
    name: "Gourav Mohanty",
    role: "Advocate, Bombay High Court",
    detail: "Ex-Shardul Amarchand Mangaldas · Gold Medalist, Symbiosis",
    image: "/images/Gourav-1.webp",
    bio: "Gourav is an advocate practising primarily before the Hon'ble Bombay High Court as well as courts and tribunals across the country. Before becoming an independent practitioner, he was a Senior Associate in the Dispute Resolution team at Shardul Amarchand Mangaldas & Co (SAM). A gold medalist, he graduated from Symbiosis Law School, Pune (2016), where he received the Ram Jethmalani Scholarship and the Chancellor's Award. He also won 2nd Prize in the Linklaters NSLR Contract Drafting Competition.",
  },
  {
    name: "Jaibatruka Mohanta",
    role: "Advocate & Research Associate, CEERA NLSIU",
    detail: "Advises Govt. of India on criminal law reforms",
    image: "/images/Jai.webp",
    bio: "Adv. Jaibatruka Mohanta practises before the courts of Karnataka and other courts across India. As a Research Associate at the Centre for Environmental Law, Education, Research and Advocacy (CEERA), NLSIU, he works on cutting-edge research, policy formulation and capacity-building programmes for the Government of India. He and his team advise the Government on matters of Criminal Law reform and work to strengthen criminal procedure in India. He also teaches Advanced Contracts and assists the Professor at NLSIU in sessions on Public Policy, Procurement and Tendering.",
  },
  {
    name: "H. B. Keshava",
    role: "Managing Attorney, Baskaran & Associates",
    detail: "IPR advisory & practice · Guest faculty, New Law College Pune",
    image: "/images/H.-B-Keshava.webp",
    bio: "Keshava graduated from UPES Dehradun and completed a BSc in Cognitive Psychology from Annamalai University. He is currently the Managing Attorney of Baskaran and Associates, an IPR advisory and practice firm based in Pune. He has been a guest faculty at New Law College, Pune, and at Career Launcher, Chennai.",
  },
];

const careerTeam: Member[] = [
  {
    name: "Saloni Sahu",
    role: "Manager, Career Advancement Cell",
    detail: "BBA LLB & LLM · Ex-Deadly Law",
    image: "/images/Akanksha-Mishra.webp", // Using placeholder image as no specific image is provided
    tag: "Career Advancement",
    bio: "Saloni holds a BBA LLB from Prestige Institute of Management and Research and an LLM from Oriental University. Her experience includes working as a Content Manager at Deadly Law, Community Manager at LedX, and Corporate Relations and Academic Associate at Oriental University. She is currently the Outreach and Recruitment Manager at Lawctopus Law School's Career Advancement Cell.",
  },
  {
    name: "Anup Menon V",
    role: "Top-Rated UpWork Freelancer",
    detail: "Senior Legal Counsel · LL.M. Corporate Laws",
    image: "/images/Anup-Menon-V.webp",
    tag: "Freelancing Expert",
    bio: "A rank holder from Karnataka State Law University with an LL.M. in Corporate Laws. Anup is a Senior Legal Counsel at C. Mohanram & Associates, a Kerala-based law firm focused on corporate and civil law. As a top-rated UpWork freelancer, he has extensive experience advising clients in India and internationally, including in the USA.",
  },
  {
    name: "Tanuj Kalia",
    role: "Founding CEO, Lawctopus",
    detail: "Author 'Law as a Career' (LexisNexis) · NUJS",
    image: "/images/Tanuj.webp",
    tag: "Networking & Negotiation",
    bio: "Tanuj, the founding CEO of Lawctopus.com, graduated from NUJS Kolkata in 2013 and completed his MA in Law, Politics and Society from AUD in 2019. He previously worked as VP Marketing at Vakilsearch and is the author of 'Law as a Career' (LexisNexis). As an MSME business owner, he brings immense practical experience in high-stakes negotiations.",
  },
];

const contentTeam: Member[] = [
  {
    name: "Bhumesh Verma",
    role: "Managing Partner, Corp Comm Legal",
    detail: "25+ yrs Corporate Lawyer · Ex-Khaitan & Co.",
    image: "/images/Bhumesh-Varma_Faculty_0017_Group-4.webp",
    tag: "Recorded Lectures",
    bio: "Bhumesh Verma is a seasoned legal practitioner with over 25 years of experience as a corporate lawyer. He has been a partner at Khaitan & Co. and Paras Kuhad & Associates, and is currently the Managing Partner at Corp Comm Legal. He is the author of 'Practical Guide to Drafting Commercial Contracts', published by OakBridge.",
  },
  {
    name: "Shayonee Dasgupta",
    role: "NUJS · Ex-Trilegal & Shardul Amarchand Mangaldas",
    detail: "Consultant at IDIA · Freelance researcher-writer",
    image: "/images/Shayonee-Dasgupta_Faculty_0012_Group-9.webp",
    tag: "Lead Researcher",
    bio: "Shayonee is a 2012 graduate of NUJS, Kolkata. She worked as an Associate at Trilegal (2012–15) and then at Shardul Amarchand Mangaldas, where she was a Senior Associate in 2017–18. Deeply passionate about legal education, she is currently a consultant at IDIA and a freelance researcher-writer.",
  },
  {
    name: "Debanshu Khettry",
    role: "Founder, Standard Indian Legal Citation (SILC)",
    detail: "NUJS · LLM (UCL) · Angel Investor",
    image: "/images/Debanshu-Khettry-Faculty_0015_Group-6.webp",
    tag: "Reading Modules",
    bio: "Debanshu graduated from NUJS Kolkata in 2013 and completed his LLM from University College London in 2014. He is the founder of Standard Indian Legal Citation (SILC), an Angel Investor with the Mumbai Angels Network and Calcutta Angels Network, and a corporate lawyer par excellence. He worked with Platinum Partners, Delhi, before taking the reins of Leslie and Khettry, a renowned law firm established in 1944.",
  },
];

function FacultyCard({ m }: { m: Member }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border transition-all ${
        open ? "border-gold/40 shadow-md" : "border-gray-100 hover:shadow-md"
      }`}
    >
      <button
        className="w-full flex items-start gap-4 p-6 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-navy to-navy-light">
          <Image
            src={m.image}
            alt={m.name}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          {m.tag && (
            <span className="inline-block bg-gold/15 text-gold-dark text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-1.5">
              {m.tag}
            </span>
          )}
          <h4 className="text-base font-bold text-gray-900 leading-tight">
            {m.name}
          </h4>
          <p className="text-sm font-semibold text-gold-dark mt-1 leading-snug">
            {m.role}
          </p>
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            {m.detail}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 mt-1 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[460px]" : "max-h-0"
        }`}
      >
        <div className="mx-6 border-t border-gray-100" />
        <p className="px-6 pb-6 pt-4 text-sm text-gray-600 leading-relaxed">
          {m.bio}
        </p>
      </div>
    </div>
  );
}

export default function Faculty() {
  return (
    <section className="py-20 bg-cream" id="faculty">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            Learn From The Best
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Industry-Leading Faculty
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Practitioners from top law firms and corporations — Trilegal, Khaitan,
            Shardul Amarchand Mangaldas, Walker Morris &amp; more. Click any card
            to read their full profile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start mb-12">
          {faculty.map((m) => (
            <FacultyCard key={m.name} m={m} />
          ))}
        </div>

        {/* Content & research team */}
        <p className="text-center text-xs font-bold tracking-[2px] uppercase text-gold mb-6 mt-16">
          Content & Research Team
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start mb-12">
          {contentTeam.map((m) => (
            <FacultyCard key={m.name} m={m} />
          ))}
        </div>

        {/* Career Advancement Cell */}
        <p className="text-center text-xs font-bold tracking-[2px] uppercase text-gold mb-6 mt-16">
          Career Advancement Cell & Freelancing Experts
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {careerTeam.map((m) => (
            <FacultyCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
