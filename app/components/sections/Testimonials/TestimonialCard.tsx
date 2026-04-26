import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  location,
  quote,
  rating,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="bg-white border border-borderGreen rounded-2xl p-6 text-left
                 transition-all duration-300
                 hover:shadow-lg hover:-translate-y-1 hover:border-primary"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-primary fill-primary"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 leading-relaxed mb-6">
        &quot;{quote}&quot;
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
          {initials}
        </div>

        <div>
          <p className="font-bold text-black">{name}</p>
          <p className="text-sm text-secondaryText">{location}</p>
        </div>
      </div>
    </div>
  );
}