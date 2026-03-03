"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  isMobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({ isMobile, onClick }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (pathname === "/") {
      // We are on home → smooth scroll
      e.preventDefault();
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on home → go to home + section
      e.preventDefault();
      router.push(`/#${id}`);
    }

    onClick?.();
  };

  const links = [
    { label: "Home", id: "/" },
    { label: "Features", id: "features" },
    { label: "How It Works", id: "howItWorks" },
    { label: "Why Masari", id: "whyMasari" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Download", id: "download" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/#${link.id}`}
          onClick={(e) => handleClick(e, link.id)}
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