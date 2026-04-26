type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        border border-borderGreen
        rounded-2xl
        p-6 sm:p-7
        text-left
        transition-all duration-300
        hover:border-primary
        hover:shadow-xl
        hover:-translate-y-1
      "
    >
      {/* Icon */}
      <div
        className="
          w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          rounded-xl
          bg-primaryLight
          mb-5
        "
      >
        <Icon className="text-primary" size={22} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg sm:text-xl mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}