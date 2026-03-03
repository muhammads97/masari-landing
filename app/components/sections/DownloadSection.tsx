import { Download, Clock } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="bg-primary text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col justify-center items-center">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Finances?
        </h3>

        {/* Description */}
        <p className="text-primaryLight pb-9  mx-auto leading-relaxed">
          Join thousands of users in Japan who are already managing their
          expenses smarter with Masari .
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 w-full ">
          {/* iOS Button */}
          <button
            className="flex items-center justify-center gap-2 
                             bg-white text-primary 
                             px-6 py-3 rounded-lg  cursor-pointer
                             font-medium 
                             transition hover:scale-105 w-full sm:w-auto"
          >
            <Download size={18} />
            Download on iOS
          </button>

          {/* Android Coming Soon */}
          <button
            className="flex items-center justify-center gap-2 
                             border border-borderLight 
                             text-white
                             px-6 py-3 rounded-lg 
                             font-medium w-full sm:w-auto
                             transition"
          >
            <Clock size={18} />
            Android Coming Soon
          </button>
        </div>

        {/* Bottom Text */}
        <p className="text-sm font-light text-white/70">
          Free to download • No credit card required
        </p>
      </div>
    </section>
  );
}
