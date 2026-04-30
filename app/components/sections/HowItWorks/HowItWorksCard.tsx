import Image, { StaticImageData } from "next/image";

type Props = {
  step: number;
  image: StaticImageData;
  title: string;
  description: string;
};

export default function HowItWorksCard({
  step,
  image,
  title,
  description,
}: Props) {
  return (
    <div className=" rounded-2xl p-6 text-center">

      {/* Image Wrapper */}
      <div className="relative mb-6">

        {/* Number Badge */}
        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
          {step}
        </div>

        <Image
          src={image}
          alt={title}
          className="rounded-xl w-full shadow-lg"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondaryText leading-relaxed">
        {description}
      </p>
    </div>
  );
}