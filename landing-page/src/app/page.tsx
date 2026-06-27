import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import AboutCourse from "@/components/AboutCourse";
import PainPoints from "@/components/PainPoints";
import Outcomes from "@/components/Outcomes";
import Curriculum from "@/components/Curriculum";
import SneakPeek from "@/components/SneakPeek";
import AISection from "@/components/AISection";
import Faculty from "@/components/Faculty";
import Testimonials from "@/components/Testimonials";
import CareerSupport from "@/components/CareerSupport";
import Benefits from "@/components/Benefits";
import CourseComparison from "@/components/CourseComparison";
import Audience from "@/components/Audience";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import AboutLLS from "@/components/AboutLLS";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import StickyDesktopCTA from "@/components/StickyDesktopCTA";
import SocialShare from "@/components/SocialShare";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <StickyDesktopCTA />
      <Navbar />
      <Hero />
      <SocialProofBar />
      
      <FadeIn>
        <AboutCourse />
      </FadeIn>
      
      <FadeIn delay={100}>
        <PainPoints />
      </FadeIn>
      
      <FadeIn>
        <Outcomes />
      </FadeIn>
      
      <FadeIn>
        <Curriculum />
      </FadeIn>

      <SneakPeek />
      
      <FadeIn>
        <AISection />
      </FadeIn>
      
      <FadeIn>
        <Faculty />
      </FadeIn>

      <Testimonials />
      
      <FadeIn>
        <CareerSupport />
      </FadeIn>
      
      <FadeIn>
        <Benefits />
      </FadeIn>
      
      <FadeIn>
        <CourseComparison />
      </FadeIn>
      
      <FadeIn>
        <Audience />
      </FadeIn>
      
      <FadeIn>
        <Guarantee />
      </FadeIn>
      
      <FadeIn>
        <FAQ />
      </FadeIn>
      
      <FadeIn>
        <AboutLLS />
      </FadeIn>
      
      <FadeIn>
        <FinalCTA />
      </FadeIn>
      
      <Footer />
      <StickyMobileCTA />
      <SocialShare />
    </>
  );
}
