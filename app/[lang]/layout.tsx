import type { Metadata } from 'next';
import LangUpdater from '../components/LangUpdater';
import { locales, Locale } from '../i18n/translations';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const SITE_URL = 'https://masari.salahslab.com';

const titles: Record<Locale, string> = {
  en: 'AI-Powered Expense Tracking',
  ja: 'AIで支出管理をシンプルに',
};

const descriptions: Record<Locale, string> = {
  en: 'Chat with AI, snap receipts, and track expenses effortlessly. Masari brings intelligent financial management to your fingertips.',
  ja: 'AIとチャットしたり、レシートを撮影するだけで、支出を簡単に記録。Masariはインテリジェントな家計管理をあなたの手のひらに。',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = lang === 'ja' ? 'ja' : 'en';
  const title = titles[locale];
  const description = descriptions[locale];

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        en: `${SITE_URL}/en`,
        ja: `${SITE_URL}/ja`,
        'x-default': `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'Masari',
      type: 'website',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Masari – AI-Powered Expense Tracking',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <>
      <LangUpdater lang={lang} />
      {children}
    </>
  );
}
