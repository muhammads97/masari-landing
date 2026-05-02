'use client';

import { useEffect } from 'react';

export default function RootRedirect() {
  useEffect(() => {
    const stored =
      typeof localStorage !== 'undefined'
        ? localStorage.getItem('masari-locale')
        : null;
    const detected = navigator.language.toLowerCase().startsWith('ja')
      ? 'ja'
      : 'en';
    const lang = stored === 'en' || stored === 'ja' ? stored : detected;
    window.location.replace(`/${lang}${window.location.hash}`);
  }, []);

  return null;
}
