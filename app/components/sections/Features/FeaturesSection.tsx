import { ChartSpline, Camera, MessageSquare, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description:
      "Ask questions about your spending, get insights, and receive personalized financial advice through natural conversation.",
  },
  {
    icon: Camera,
    title: "Receipt Scanning",
    description:
      "Simply snap a photo of your receipt. Our AI automatically extracts and categorizes all transaction details.",
  },
  {
    icon: ChartSpline,
    title: "Smart Tracking",
    description:
      "Automatic expense categorization, budget alerts, and spending trends to keep you financially aware.",
  },
  {
    icon: Sparkles,
    title: "Instant Answers",
    description:
      "Get instant answers to any financial question. From spending patterns to budget advice, we've got you covered.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            Everything You Need in One App
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Masari combines cutting-edge AI technology with intuitive design
            to revolutionize how you manage your expenses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title} 
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}