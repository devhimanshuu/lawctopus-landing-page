import {
  FileText,
  Video,
  Radio,
  BookOpen,
  Briefcase,
  Globe,
  MessageSquare,
  Users,
  Award,
  CheckCircle2
} from "lucide-react";
import { type ReactNode } from "react";

const uniqueElements: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <BookOpen className="w-6 h-6 text-gold" />,
    title: "Detailed Reading Resources",
    desc: "Well-researched, practical & comprehensive reading materials to build your foundation.",
  },
  {
    icon: <Radio className="w-6 h-6 text-gold" />,
    title: "Weekly Live Sessions",
    desc: "Intensive weekly live training sessions for the first 2 months to get you started strong.",
  },
  {
    icon: <Video className="w-6 h-6 text-gold" />,
    title: "7-8 Live Sessions/Month",
    desc: "For the next 4 months, deep-dive into complex contracts with 7-8 live sessions every month.",
  },
  {
    icon: <FileText className="w-6 h-6 text-gold" />,
    title: "Learn From Faculty",
    desc: "Learn drafting clauses and agreements first-hand from practicing lawyers and industry experts.",
  },
  {
    icon: <Video className="w-6 h-6 text-gold" />,
    title: "Expert Recorded Lectures",
    desc: "Access a treasure trove of recorded lectures delivered by top industry professionals.",
  },
  {
    icon: <Globe className="w-6 h-6 text-gold" />,
    title: "International Contracts",
    desc: "Gain a deep understanding of cross-border agreements and international contract drafting.",
  },
  {
    icon: <Users className="w-6 h-6 text-gold" />,
    title: "Freelancing & Networking",
    desc: "Monthly sessions dedicated entirely to building your Upwork profile and networking skills.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-gold" />,
    title: "9 Practical Assignments",
    desc: "Draft real-life scenarios including Sale Deeds, NDAs, SaaS Agreements, JVs, and more.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-gold" />,
    title: "Individualized Feedback",
    desc: "Get detailed, personalized feedback on each of your drafts to perfect your skills.",
  },
];

const whyJoin = [
  "Learn to draft 24 essential, high-demand agreements with hands-on guidance through 54 live training sessions led by industry experts.",
  "Develop drafting expertise in practice areas like: Real Estate, IPR, General Corporate, and International Contracts.",
  "Get freelancing training from a top-rated Upwork contract expert, receive direct opportunities, and handle your first client confidently!",
  "Assignments: Draft 10 contracts and get personalised feedback on each. Use these fine-tuned contracts in your Upwork portfolio!",
  "Save 4 years of your legal career! Learn in 6 months what a lawyer learns in 4-5 years!",
  "Get lifetime access to all course materials (recorded lectures, reading resources, drafts, recordings of live sessions).",
];

export default function Benefits() {
  return (
    <section className="py-24 bg-cream" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Join Section */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center mb-24">
          <div>
            <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
              Why You Should Join
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Save 4 Years of Your Legal Career
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This isn't just another theory course. It's an intensive, practical bootcamp designed to turn you into a highly paid contract drafting professional.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ul className="space-y-5">
              {whyJoin.map((point, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-dark flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 9 Unique Elements */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            What Makes Us Different
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            9 Unique Elements of the Course
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uniqueElements.map((b, i) => (
            <div
              key={b.title}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-gold/10 hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-6 shadow-md shadow-navy/20 relative z-10">
                {b.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3 relative z-10">{b.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed relative z-10">{b.desc}</p>
              
              <div className="absolute bottom-4 right-6 text-6xl font-black text-gray-50 opacity-50 select-none pointer-events-none">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
