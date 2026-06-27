import { Heart, Users, Star } from "lucide-react";

export default function AboutLLS() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy text-center">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          About <a href="https://www.lawctopuslawschool.com/" target="_blank" rel="noopener noreferrer" className="text-gold transition-colors decoration-gold/30 hover:decoration-gold underline-offset-4">Lawctopus Law School</a>
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-12">
          <a href="https://www.lawctopuslawschool.com/" target="_blank" rel="noopener noreferrer" className="text-gold transition-colors">Lawctopus Law School</a> has taught a wide range of practical skills to over <strong className="text-white">20,000+</strong> law students, young lawyers, professionals, academicians, and business people. Our online courses are designed to be <strong className="text-gold-light italic">'warm'</strong> learning experiences!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all group shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <Users className="w-10 h-10 text-gold mx-auto mb-5 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black text-white mb-2">20,000+</div>
            <div className="text-sm text-gold-light font-bold uppercase tracking-widest">Students Taught</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all group shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full blur-xl -mr-4 -mt-4" />
            <Star className="w-10 h-10 text-gold mx-auto mb-5 group-hover:scale-110 transition-transform relative z-10" />
            <div className="text-4xl font-black text-white mb-2 relative z-10">93.2<span className="text-2xl text-slate-400">/100</span></div>
            <div className="text-sm text-gold-light font-bold uppercase tracking-widest relative z-10">Average Rating</div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all group shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <Heart className="w-10 h-10 text-gold mx-auto mb-5 group-hover:scale-110 transition-transform" />
            <div className="text-4xl font-black text-white mb-2">1,000+</div>
            <div className="text-sm text-gold-light font-bold uppercase tracking-widest">Verified Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
