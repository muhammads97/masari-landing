import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "Masari completely changed how I manage my expenses. The AI assistant is incredibly helpful and intuitive.",
    rating: 5,
  },
  {
    name: "Ahmed Khaled",
    location: "Cairo, Egypt",
    quote:
      "The receipt scanning feature saves me so much time. I no longer manually track anything!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    location: "Toronto, Canada",
    quote:
      "Smart tracking and instant answers make budgeting effortless. Highly recommended!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5">
          What Our Users Say
        </h2>

        <p className="text-secondaryText text-base sm:text-lg mx-auto mb-14 leading-relaxed">
          Join thousands of satisfied users who&apos;ve transformed their financial management
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((user, index) => (
            <TestimonialCard key={index} {...user} />
          ))}
        </div>

      </div>
    </section>
  );
}