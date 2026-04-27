// import { Download } from "lucide-react";
import { Clock } from "lucide-react";
// import Button from "../ui/Button";
import EmailForm from "../ui/EmailForm";

export default function DownloadSection() {
  return (
    <section id="download" className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-center items-center">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Finances?
        </h3>

        {/* Description */}
        <p className="text-primaryLight pb-9 mx-auto leading-relaxed">
          Be among the first to get Masari when it launches on the App Store.
          Enter your email and we&apos;ll notify you the moment it&apos;s live.
        </p>

        {/* Email Form */}
        <div className="w-full flex justify-center mb-6">
          <EmailForm dark />
        </div>

        {/* Android Coming Soon */}
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
          Android Coming Soon
        </button>

        {/* Bottom Text */}
        <p className="text-sm font-light text-white/70">
          Free to download • No credit card required
        </p>
      </div>
    </section>
  );
}
