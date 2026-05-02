"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { translations, getLocaleFromPath } from "@/app/i18n/translations";

type Props = {
  isMobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({ isMobile, onClick }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);
  const t = translations[locale].navbar;

  const links = [
    { label: t.features, id: "features" },
    { label: t.howItWorks, id: "howItWorks" },
    { label: t.whyMasari, id: "whyMasari" },
    { label: t.support, id: "support" },
    { label: t.download, id: "download" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    const isLandingPage = pathname === '/en' || pathname === '/ja' || pathname === '/';
    if (isLandingPage) {
      e.preventDefault();
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push(`/${locale}#${id}`);
    }
    onClick?.();
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/${locale}#${link.id}`}
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
