import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/images/logo-light.png"
            alt="Lawctopus Law School"
            width={140}
            height={32}
            className="h-7 w-auto opacity-90"
          />
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="mailto:courses@lawctopus.com"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              courses@lawctopus.com
            </a>
            <a
              href="tel:+919214883452"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              +91 9214883452
            </a>
            <a
              href="tel:+919023543927"
              className="text-slate-400 hover:text-gold transition-colors"
            >
              +91 90235 43927
            </a>
          </div>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Lawctopus Law School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
