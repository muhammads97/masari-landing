import HowItWorksCard from "./HowItWorksCard";

import step1 from "@/public/images/hero.png";
import step2 from "@/public/images/hero.png";
import step3 from "@/public/images/hero.png";

const steps = [
  {
    step: 1,
    image: step1,
    title: "Capture Receipts",
    description: "Take a photo of your receipt and let AI do the rest.",
  },
  {
    step: 2,
    image: step2,
    title: "AI Processing",
    description: "Our AI extracts and categorizes all transaction details instantly.",
  },
  {
    step: 3,
    image: step3,
    title: "Track & Analyze",
    description: "Monitor spending trends and receive smart financial insights.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="howItWorks" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
          How Masari Works
        </h2>

        {/* Paragraph */}
        <p className="text-secondaryText text-base sm:text-lg mx-auto mb-14 leading-relaxed">
          Three simple steps to smarter expense management
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <HowItWorksCard key={item.step} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}