import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ScrollStorySection />
        <PortfolioSection />
        <WhyChooseSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
