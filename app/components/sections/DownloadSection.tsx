import { Clock } from "lucide-react";
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

        <div className="w-full flex justify-center mb-6">
          <EmailForm dark t={emailForm} />
        </div>

        <button
          className="flex items-center justify-center gap-2
                     border border-white/30
                     text-white/80
                     px-6 py-3 rounded-lg
                     font-medium
                     transition mb-6"
          disabled
        >
          <Clock size={18} />
          {t.androidSoon}
        </button>

        <p className="text-sm font-light text-white/70">
          {t.freeNote}
        </p>
      </div>
    </section>
  );
}
