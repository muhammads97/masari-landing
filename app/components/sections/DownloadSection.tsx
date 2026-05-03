import EmailForm from "../ui/EmailForm";
import { Translations } from "@/app/i18n/translations";

type Props = {
  t: Translations['download'];
  emailForm: Translations['emailForm'];
};

export default function DownloadSection({ t, emailForm }: Props) {
  return (
    <section id="download" className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-center items-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          {t.heading}
        </h3>

        <p className="text-primaryLight pb-9 mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* iOS App Store Button */}
        <a
          href="https://apps.apple.com/app/id6759659967"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition mb-10"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>{t.iosButton}</span>
        </a>

        {/* Android Waitlist */}
        <div className="w-full border-t border-white/20 pt-8">
          <h4 className="text-lg font-semibold mb-2">{t.androidWaitlistHeading}</h4>
          <p className="text-primaryLight mb-6 text-sm leading-relaxed">
            {t.androidWaitlistDescription}
          </p>
          <div className="w-full flex justify-center">
            <EmailForm dark t={emailForm} />
          </div>
        </div>

        <p className="text-sm font-light text-white/70 mt-6">
          {t.freeNote}
        </p>
      </div>
    </section>
  );
}
