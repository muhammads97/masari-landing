'use client';

import { useEffect } from 'react';

export default function LangUpdater({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('masari-locale', lang);
  }, [lang]);
  return null;
}
