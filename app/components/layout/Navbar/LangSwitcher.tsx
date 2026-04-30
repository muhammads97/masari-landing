"use client";

import { usePathname, useRouter } from "next/navigation";
import { getLocaleFromPath } from "@/app/i18n/translations";

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);

  const switchLocale = () => {
    const next = locale === "en" ? "ja" : "en";
    localStorage.setItem("masari-locale", next);
    const newPath = pathname.replace(`/${locale}`, `/${next}`) || `/${next}`;
    router.push(newPath);
  };

  return (
    <button
      onClick={switchLocale}
      aria-label="Switch language"
      className="text-sm text-secondaryText hover:text-primary transition"
    >
      {locale === "en" ? "日本語" : "English"}
    </button>
  );
}
