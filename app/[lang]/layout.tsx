import type { Metadata } from 'next';
import Script from 'next/script';
import LangUpdater from '../components/LangUpdater';
import { locales, Locale } from '../i18n/translations';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const SITE_URL = 'https://masari.salahslab.com';

const titles: Record<Locale, string> = {
  en: 'Masari App – AI Expense Tracker | Snap Receipts & Chat with AI',
  ja: 'Masariアプリ – AIで支出管理 | レシート撮影・チャットで簡単記録',
};

const descriptions: Record<Locale, string> = {
  en: 'Masari is the AI expense tracker app that lets you log spending by snapping receipts or chatting in plain language. Ask Masari anything about your finances and get instant answers.',
  ja: 'MasariはAIを使った支出管理アプリです。レシートを撮影するか、自然な言葉で入力するだけで支出を記録。家計に関する質問にすぐ答えます。',
};

const keywords: Record<Locale, string> = {
  en: 'masari, masari app, masari ai, expense tracker, ai expense tracker, receipt scanner app, expense tracking app, ai finance app, spending tracker, personal finance ai',
  ja: 'masari, masariアプリ, masari ai, 支出管理, 家計簿アプリ, レシート読み取り, AIで家計管理, 支出トラッカー, 家計管理アプリ',
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
    keywords: keywords[locale],
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

function buildJsonLd(locale: Locale) {
  const isJa = locale === 'ja';

  const appDescription = isJa
    ? 'MasariはAIを使った支出管理アプリです。レシートを撮影するか、自然な言葉で入力するだけで支出を記録できます。家計に関する質問にすぐ答えます。'
    : 'Masari is an AI expense tracker app. Snap receipts or type what you spent, then ask Masari anything about your finances in plain language.';

  const featureList = isJa
    ? [
        'AIによるレシートスキャン',
        '自然言語での支出入力',
        'AI搭載の支出インサイト',
        'カテゴリ・日付別支出レポート',
        '多言語対応',
      ]
    : [
        'Receipt scanning with AI',
        'Natural language expense logging',
        'AI-powered spending insights',
        'Expense reports by category and date',
        'Multi-language support',
      ];

  const faqs = isJa
    ? [
        {
          '@type': 'Question',
          name: '支出はどのように記録しますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '支出を記録する方法は2つあります。カメラでレシートをスキャンするか、テキスト入力で手動入力するかです。Masariは利用可能な情報のみを記録します。たとえば、レシートに場所の情報がなく、入力でも提供されていない場合、推測せずに「不明」として保存されます。',
          },
        },
        {
          '@type': 'Question',
          name: 'Masariはどんな質問に答えられますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '支出に関するあらゆる質問ができます。たとえば「今月、食費にいくら使いましたか？」「先週の最大の支出は？」「4月の交通費をすべて見せて」などです。Masariは実際に記録された支出に基づいて回答するため、記録が多いほど有益なインサイトが得られます。',
          },
        },
        {
          '@type': 'Question',
          name: '支出を編集・削除するには？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '支出リスト画面を開き、対象の支出が記録された月を選択します。変更したい支出をタップし、内容を更新して「保存」をタップします。削除する場合は、支出のゴミ箱アイコンをタップしてください。',
          },
        },
      ]
    : [
        {
          '@type': 'Question',
          name: 'How do I record an expense?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You can record an expense in two ways: by scanning a receipt with your camera, or by entering the details manually via text input. Masari only records what's available — if a detail like location isn't found on the receipt or provided in your input, it will be saved as unknown rather than guessed.",
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of questions can Masari answer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can ask Masari anything about your spending — for example: "How much did I spend on food this month?", "What was my biggest expense last week?", or "Show me all my transportation costs in April." Masari answers based on your actual recorded expenses, so the more you log, the more useful its insights become.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I edit or delete an expense?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open the expense list screen and select the month in which the expense was recorded. Tap the expense you want to change, update the details, and tap Save. To delete it, tap the trash icon on the expense.',
          },
        },
      ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `https://masari.salahslab.com/#website`,
        url: 'https://masari.salahslab.com',
        name: 'Masari',
        description: isJa ? 'AIを使った支出管理アプリ' : 'AI-Powered Expense Tracking App',
        inLanguage: isJa ? 'ja' : 'en',
      },
      {
        '@type': 'MobileApplication',
        '@id': `https://masari.salahslab.com/${locale}#app`,
        name: 'Masari',
        alternateName: isJa
          ? ['Masariアプリ', 'Masari AI', 'Masari 家計簿', '支出管理アプリ Masari']
          : ['Masari App', 'Masari AI', 'Masari Expense Tracker'],
        description: appDescription,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'iOS',
        inLanguage: isJa ? 'ja' : 'en',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: isJa ? 'JPY' : 'USD',
        },
        url: `https://masari.salahslab.com/${locale}`,
        image: 'https://masari.salahslab.com/og-image.png',
        publisher: {
          '@type': 'Organization',
          name: "Salah's Lab",
          url: 'https://salahslab.com',
        },
        featureList,
      },
      {
        '@type': 'FAQPage',
        inLanguage: isJa ? 'ja' : 'en',
        mainEntity: faqs,
      },
    ],
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
  const locale: Locale = lang === 'ja' ? 'ja' : 'en';
  const jsonLd = buildJsonLd(locale);

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LangUpdater lang={lang} />
      {children}
    </>
  );
}
