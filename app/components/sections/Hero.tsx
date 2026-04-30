import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import EmailForm from "../ui/EmailForm";
import { Translations } from "@/app/i18n/translations";

type Props = {
  t: Translations['hero'];
  emailForm: Translations['emailForm'];
};

export default function Hero({ t, emailForm }: Props) {
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
