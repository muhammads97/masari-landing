import Image from "next/image";
import { Check, CircleCheckBig } from "lucide-react";
import whyImage from "@/public/images/hero.png";

const benefits = [
  {
    title: "AI-Powered Insights",
    description:
      "Get intelligent recommendations and real-time financial insights tailored to your spending habits.",
  },
  {
    title: "Time-Saving Automation",
    description:
      "Automatically categorize expenses and eliminate manual tracking forever.",
  },
  {
    title: "Secure & Private",
    description:
      "Your financial data is encrypted and protected with enterprise-grade security.",
  },
  {
    title: "Simple & Intuitive",
    description:
      "Designed with clarity and ease-of-use so anyone can manage finances effortlessly.",
  },
];

export default function WhyMasariSection() {
  return (
    <section id="whyMasari" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10">
            Why Choose Masari?
          </h2>

          <div className="space-y-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="w-8 h-8 flex items-start justify-center shrink-0">
                  <CircleCheckBig className="text-primary" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    {item.title}
                  </h3>
                  <p className="text-secondaryText leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={whyImage}
            alt="Why Choose Masari"
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
