export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      {/* Dramatic glowing orb background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,rgba(201,168,76,0.05)_30%,transparent_70%)] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
          Ready to Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Contract Drafting?</span>
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 20,000+ law professionals who&apos;ve transformed their careers
          with Lawctopus Law School. Start your journey today.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://www.lawctopus.com/expert-level-mastering-contract-drafting-freelancing/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center"
          >
            {/* Button Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-gold-dark rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
            
            <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-gold to-gold-dark text-navy font-black text-lg px-12 py-5 rounded-xl hover:-translate-y-1 transition-transform">
              Enroll Now at ₹24,999 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          <p className="text-slate-400 font-medium mt-4">
            Also available:{" "}
            <a
              href="https://www.lawctopus.com/expert-level-mastering-contract-drafting-freelancing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-light underline hover:text-gold transition-colors underline-offset-4 decoration-gold/30 hover:decoration-gold"
            >
              2-Month Course at ₹7,999
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
