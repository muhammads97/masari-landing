import { X, Check } from "lucide-react";
import { Translations } from "@/app/i18n/translations";

type Props = {
  t: Translations['whyMasari'];
};

export default function WhyMasariSection({ t }: Props) {
  return (
    <section id="whyMasari" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            {t.heading}
          </h2>
          <p className="text-secondaryText text-base sm:text-lg leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-borderLight shadow-sm">
          {/* Column Headers — desktop only */}
          <div className="hidden sm:grid sm:grid-cols-2">
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-r border-borderLight">
              <X className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-sm font-semibold text-gray-400 tracking-wide">
                {t.withoutLabel}
              </span>
            </div>
            <div className="bg-primaryLight px-6 py-4 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                {t.withLabel}
              </span>
            </div>
          </div>

          {/* Rows */}
          {t.rows.map((row, index) => (
            <div
              key={index}
              className={`border-t border-borderLight ${index % 2 === 0 ? "bg-white" : "bg-background"}`}
            >
              {/* Desktop: side by side */}
              <div className="hidden sm:grid sm:grid-cols-2">
                <div className="px-6 py-5 border-r border-borderLight flex items-center">
                  <p className="text-secondaryText text-sm sm:text-base leading-relaxed">
                    {row.without}
                  </p>
                </div>
                <div className="px-6 py-5 flex items-center gap-3">
                  <span className="text-xl shrink-0">{row.icon}</span>
                  <p className="text-primaryText text-sm sm:text-base leading-relaxed font-medium">
                    {row.with}
                  </p>
                </div>
              </div>

              {/* Mobile: stacked before → after */}
              <div className="sm:hidden">
                <div className="px-5 pt-4 pb-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <X className="w-3 h-3 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {t.withoutLabel}
                    </span>
                  </div>
                  <p className="text-secondaryText text-sm leading-relaxed">
                    {row.without}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 py-1">
                  <div className="h-px flex-1 mx-5 bg-borderLight" />
                  <span className="text-mutedText text-sm">→</span>
                  <div className="h-px flex-1 mx-5 bg-borderLight" />
                </div>

                <div className="px-5 pt-3 pb-4 bg-primaryLight/40">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Check className="w-3 h-3 text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {t.withLabel}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-base shrink-0">{row.icon}</span>
                    <p className="text-primaryText text-sm leading-relaxed font-medium">
                      {row.with}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
