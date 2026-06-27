import { BookOpen, FileSignature, Briefcase, GraduationCap } from "lucide-react";

export default function AboutCourse() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold tracking-[3px] uppercase text-gold mb-3">
            About The Program
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            6-Month Expert-Level Course on Mastering Contract Drafting & Freelancing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This course is an unparalleled opportunity for anyone looking to become an expert in contract drafting. It’s a complete package for those serious about advancing their drafting skills and earning money as a freelancer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Timeline / phases */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">First 2 Months: Fundamentals</h4>
                <p className="text-gray-600 leading-relaxed">
                  Learn the absolute fundamentals of drafting contracts. Get hands-on experience by identifying contracts, and reviewing and redrafting a sale deed entirely by yourself.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <FileSignature className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Next 4 Months: Specialized Agreements</h4>
                <p className="text-gray-600 leading-relaxed">
                  Focus on specific contracts in real estate, intellectual property, and business (NDAs, MSAs, PoA, Shareholder Agreements, JVs, e-contracts). With 7-8 LIVE sessions each month, you’ll learn everything from drafting and negotiating clauses to handling execution formalities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <Briefcase className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Freelancing & Career Prep</h4>
                <p className="text-gray-600 leading-relaxed">
                  Monthly sessions where experts show you how to build online profiles on Upwork and LinkedIn to earn money. Plus, monthly networking sessions to accelerate your career growth.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights card */}
          <div className="bg-gold/[0.04] border border-gold/20 rounded-2xl p-8 lg:p-10">
            <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-gold/20">
              <GraduationCap className="w-7 h-7 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We Train You To Succeed
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond drafting, we will train you to write excellent CVs and cover letters, meticulously set up your Upwork profile, share direct Upwork opportunities with you, and support you so you can apply with confidence.
            </p>
            
            <a
              href="#curriculum"
              className="inline-flex items-center text-navy font-bold hover:text-gold-dark transition-colors group"
            >
              View detailed course schedule (draft)
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
