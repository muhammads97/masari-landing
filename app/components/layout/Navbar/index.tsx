"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import LangSwitcher from "./LangSwitcher";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { translations, getLocaleFromPath } from "@/app/i18n/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);
  const t = translations[locale].navbar;

  const handleGetStarted = () => {
    const isLandingPage = pathname === `/${locale}` || pathname === "/";
    if (isLandingPage) {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${locale}#hero`);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="flex items-center gap-2 text-primary">
          <Image src={logo} alt="Logo" width={38} height={38} />
          <span className="font-bold text-2xl">MASARI</span>
        </Link>

        <nav className="hidden md:flex gap-8">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher />
          <button
            onClick={handleGetStarted}
            className="bg-primary hover:bg-hoverGreen text-white px-5 py-2 rounded-lg transition cursor-pointer"
          >
            {t.getStarted}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-11 h-11 text-xl flex items-center justify-center rounded-lg border border-secondaryText/40 text-primary transition-all duration-300 hover:bg-primary hover:text-white active:scale-95"
          >
            <Menu />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </header>
  );
}
