import Link from "next/link";

type Props = {
  isMobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({ isMobile, onClick }: Props) {
  return (
    <>
      {[
        { label: "Features", href: "#features" },
        { label: "How It Works", href: "#howItWorks" },
        { label: "Download", href: "#download" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className={`${
            isMobile ? "block" : ""
          } text-secondaryText hover:text-primary transition`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}