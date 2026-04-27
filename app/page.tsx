import DownloadSection from "./components/sections/DownloadSection";
import FeaturesSection from "./components/sections/Features/FeaturesSection";
import Hero from "./components/sections/Hero";
import HowItWorksSection from "./components/sections/HowItWorks/HowItWorksSection";
import TestimonialsSection from "./components/sections/Testimonials/TestimonialsSection";
import WhyMasariSection from "./components/sections/WhyMasariSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyMasariSection />
      <TestimonialsSection />
      <DownloadSection />
    </>
  );
}
