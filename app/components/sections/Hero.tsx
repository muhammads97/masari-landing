import Image from "next/image";
import { Download } from "lucide-react";
import heroImage from "@/public/images/hero.png";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
            AI-Powered <br />
            <span className="text-primary">Expense Tracking</span> <br />
            Made Simple
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Chat with AI, snap receipts, and track your expenses effortlessly.
            Masari brings intelligent financial management to your fingertips.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <Button
              icon={<Download size={18} />}
              bgColor="bg-primary"
              textColor="text-white"
              borderColor="border-transparent"
            >
              Download Now on iOS
            </Button>
          </div>
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
