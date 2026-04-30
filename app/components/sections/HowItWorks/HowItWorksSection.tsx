import HowItWorksCard from "./HowItWorksCard";
import { Translations } from "@/app/i18n/translations";

import step1 from "@/public/images/step1.png";
import step2 from "@/public/images/step2.png";

const images = [step1, step2];

type Props = {
  t: Translations['howItWorks'];
};

export default function HowItWorksSection({ t }: Props) {
  return (
    <section id="howItWorks" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
          {t.heading}
        </h2>
        <p className="text-secondaryText text-base sm:text-lg mx-auto mb-14 leading-relaxed">
          {t.subheading}
        </p>

        <div className="grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
          {t.steps.map((step, i) => (
            <HowItWorksCard
              key={step.title}
              step={i + 1}
              image={images[i]}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
