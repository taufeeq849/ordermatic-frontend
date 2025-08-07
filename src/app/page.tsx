import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhatsappFeatureSection from "@/components/WhatsappFeatureSection";
import DashboardFeatureSection from "@/components/DashboardFeatureSection";
import SetupFeatureSection from "@/components/SetupFeatureSection";
import BeyondOrdersSection from "@/components/BeyondOrdersSection";
import CtaSection from "@/components/CtaSection";
import FAQSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TestimonialSection />
      <FeaturesSection />
      <WhatsappFeatureSection />
      <DashboardFeatureSection />
      <SetupFeatureSection />
      <BeyondOrdersSection />
      <CtaSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
