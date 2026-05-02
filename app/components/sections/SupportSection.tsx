'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Translations } from '@/app/i18n/translations';

type Props = {
  t: Translations['support'];
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-borderLight last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left"
        aria-expanded={open}
      >
        <span className="text-primaryText font-medium text-sm sm:text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondaryText shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-secondaryText text-sm sm:text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function SupportSection({ t }: Props) {
  return (
    <section id="support" className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
            {t.heading}
          </h2>
          <p className="text-secondaryText text-base sm:text-lg leading-relaxed">
            {t.description}{' '}
            <a
              href={`mailto:${t.email}`}
              className="text-primary font-medium hover:underline"
            >
              {t.email}
            </a>
          </p>
        </div>

        <p className="text-xs font-semibold uppercase tracking-widest text-secondaryText mb-4">
          {t.faqsLabel}
        </p>

        <div className="rounded-2xl border border-borderLight bg-white shadow-sm overflow-hidden">
          {t.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
