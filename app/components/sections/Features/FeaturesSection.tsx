import {
  ChartSpline,
  List,
  Camera,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import { Translations } from "@/app/i18n/translations";

const icons = [Camera, MessageSquare, Sparkles, ChartSpline, List];

type Props = {
  t: Translations['features'];
};

export default function FeaturesSection({ t }: Props) {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            {t.heading}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((item, i) => (
            <FeatureCard
              key={item.title}
              icon={icons[i]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
