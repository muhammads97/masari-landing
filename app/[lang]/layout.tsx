import LangUpdater from '../components/LangUpdater';
import { locales, Locale } from '../i18n/translations';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
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
