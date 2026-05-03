import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import EmailForm from "../ui/EmailForm";
import { Translations } from "@/app/i18n/translations";

type Props = {
  t: Translations['hero'];
  emailForm: Translations['emailForm'];
  download: Translations['download'];
};

export default function Hero({ t, emailForm, download }: Props) {
  return (
    <section id="hero" className="bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            {t.heading1} <br />
            <span className="text-primary">{t.heading2}</span> <br />
            {t.heading3}
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            {t.description}
          </p>

          {/* iOS App Store Button */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-6">
            <a
              href="https://apps.apple.com/app/id6759659967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>{download.iosButton}</span>
            </a>
          </div>

          {/* Android Waitlist */}
          <p className="text-sm text-gray-500 mb-3">{download.androidWaitlistHeading} — {download.androidWaitlistDescription}</p>
          <EmailForm t={emailForm} />
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={heroImage}
            alt="Masari App Preview"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
