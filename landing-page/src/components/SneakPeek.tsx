import { FileText, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";
import Typewriter from "./Typewriter";

const documents = [
  "Non-Disclosure Agreement (NDA)",
  "Founders Agreement",
  "Employment Agreement",
  "Software as a Service (SaaS) Agreement",
  "Service Level Agreement (SLA)",
  "Shareholders Agreement",
  "Master Service Agreement (MSA)",
  "Franchise Agreement",
  "Term Sheet",
  "Commercial Lease Agreement",
];

export default function SneakPeek() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-6">
              Sneak Peek: What You'll <span className="text-gold">Draft</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              By the end of this course, you won't just have theoretical knowledge. You will have a professional portfolio featuring 24+ complex, real-world agreements.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={150}>
            {/* Visual Document Stack */}
            <div className="relative h-[300px] md:h-[450px] w-full flex justify-center items-center perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl transform rotate-3 scale-105 shadow-xl transition-transform hover:rotate-6"></div>
              <div className="absolute inset-0 bg-white rounded-2xl transform -rotate-2 shadow-2xl p-8 border border-slate-100 flex flex-col transition-transform hover:-rotate-4">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3 text-navy">
                    <FileText className="w-8 h-8 text-gold" />
                    <span className="font-bold text-xl">SaaS Agreement.pdf</span>
                  </div>
                  <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase">Drafted</span>
                </div>
                <div className="flex-grow relative overflow-hidden h-[120px] sm:h-auto">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  <Typewriter 
                    text={"This SOFTWARE AS A SERVICE AGREEMENT (the \"Agreement\") is entered into as of the Effective Date, by and between the Provider and the Customer.\n\nWHEREAS, Provider has developed a proprietary software application;\nWHEREAS, Customer desires to subscribe to the Service;\n\nNOW, THEREFORE, the parties hereby agree as follows..."}
                    delay={800}
                    speed={25}
                  />
                </div>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded-full w-24"></div>
                    <div className="h-3 bg-slate-200 rounded-full w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 h-full">
              <h3 className="text-xl font-bold text-navy mb-6 pb-4 border-b border-slate-100">
                Sample Documents Included
              </h3>
              <ul className="space-y-4">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                <p className="text-slate-500 italic mb-4">...and 14 more high-value agreements.</p>
                <a
                  href="https://docs.google.com/document/d/1WDeHa90-mEcnmjQui3dI4WGDaHvpiXlazvsYgGmI-n4/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-bold hover:underline inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Download Full Course Outline
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
