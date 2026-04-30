"use client";

import NavLinks from "./NavLinks";
import { usePathname, useRouter } from "next/navigation";
import { translations, getLocaleFromPath } from "@/app/i18n/translations";

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ isOpen, closeMenu }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);
  const t = translations[locale].navbar;

  const handleGetStarted = () => {
    closeMenu();
    const isLandingPage = pathname === `/${locale}` || pathname === "/";
    if (isLandingPage) {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${locale}#hero`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-md px-6 pb-6 space-y-4">
      <NavLinks isMobile onClick={closeMenu} />
      <button
        onClick={handleGetStarted}
        className="w-full bg-primary hover:bg-hoverGreen text-white px-5 py-2 rounded-lg text-center transition cursor-pointer"
      >
        {t.getStarted}
      </button>
    </div>
  );
}
