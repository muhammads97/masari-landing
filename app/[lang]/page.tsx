import DownloadSection from '../components/sections/DownloadSection';
import FeaturesSection from '../components/sections/Features/FeaturesSection';
import Hero from '../components/sections/Hero';
import HowItWorksSection from '../components/sections/HowItWorks/HowItWorksSection';
import SupportSection from '../components/sections/SupportSection';
import WhyMasariSection from '../components/sections/WhyMasariSection';
import { translations, Locale } from '../i18n/translations';

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = lang === 'ja' ? 'ja' : 'en';
  const t = translations[locale];

  return (
    <>
      <Hero t={t.hero} emailForm={t.emailForm} download={t.download} />
      <FeaturesSection t={t.features} />
      <HowItWorksSection t={t.howItWorks} />
      <WhyMasariSection t={t.whyMasari} />
      <SupportSection t={t.support} />
      <DownloadSection t={t.download} emailForm={t.emailForm} />
    </>
  );
}
