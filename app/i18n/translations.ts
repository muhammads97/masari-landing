export type Locale = 'en' | 'ja';
export const locales: Locale[] = ['en', 'ja'];

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/ja')) return 'ja';
  return 'en';
}

export interface Translations {
  navbar: {
    features: string;
    howItWorks: string;
    whyMasari: string;
    support: string;
    download: string;
    getStarted: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    heading3: string;
    description: string;
  };
  features: {
    heading: string;
    subheading: string;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    steps: Array<{ title: string; description: string }>;
  };
  whyMasari: {
    heading: string;
    subheading: string;
    withoutLabel: string;
    withLabel: string;
    rows: Array<{ without: string; with: string; icon: string }>;
  };
  support: {
    heading: string;
    description: string;
    email: string;
    faqsLabel: string;
    faqs: Array<{ question: string; answer: string }>;
  };
  download: {
    heading: string;
    description: string;
    iosButton: string;
    androidWaitlistHeading: string;
    androidWaitlistDescription: string;
    freeNote: string;
  };
  emailForm: {
    placeholder: string;
    button: string;
    loading: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    navbar: {
      features: 'Features',
      howItWorks: 'How It Works',
      whyMasari: 'Why Masari',
      support: 'Support',
      download: 'Download',
      getStarted: 'Get Started',
    },
    hero: {
      heading1: 'AI-Powered',
      heading2: 'Expense Tracking',
      heading3: 'Made Simple',
      description:
        'Chat with AI, snap receipts, and track your expenses effortlessly. Masari brings intelligent financial management to your fingertips.',
    },
    features: {
      heading: 'All your accounting in one place',
      subheading:
        'Masari combines cutting-edge AI technology with intuitive design to revolutionize how you manage your expenses.',
      items: [
        {
          title: 'Snap & Forget',
          description:
            'Point your camera at any receipt. Masari reads it, extracts every item, and logs it instantly. No typing, no categories to pick.',
        },
        {
          title: 'Just Text It',
          description:
            'No receipt? No problem. Type what you spent — in any language — and Masari handles the rest.',
        },
        {
          title: 'Ask Your Money Anything',
          description:
            '"What did I spend last week?" "Can I afford that watch?" "Where did ¥50,000 go?" Real answers, instantly, in plain language.',
        },
        {
          title: 'Reports That Actually Make Sense',
          description:
            'Spending by category, by merchant, by week. Masari surfaces what matters without you having to build a single spreadsheet.',
        },
        {
          title: 'Every Yen, Accounted For',
          description:
            'A clean, searchable log of every expense — no AI required. Filter by date, merchant, or category whenever you need the raw data.',
        },
      ],
    },
    howItWorks: {
      heading: 'How Masari Works',
      subheading: 'Two simple steps to smarter expense management',
      steps: [
        {
          title: 'Capture Expenses',
          description: 'You take a photo — or just type a quick message.',
        },
        {
          title: 'Ask anything, see everything',
          description: 'Query your spending, spot patterns, ask for reports.',
        },
      ],
    },
    whyMasari: {
      heading: 'Why Masari?',
      subheading: 'Minimize lost expenses, increase financial awareness.',
      withoutLabel: 'Without Masari',
      withLabel: 'With Masari',
      rows: [
        {
          without: 'Type every expense manually',
          with: 'Snap a receipt or just send a message',
          icon: '📷',
        },
        {
          without: 'Dig through spreadsheets to find answers',
          with: 'Ask questions in any language, get instant answers',
          icon: '💬',
        },
        {
          without: 'Guess if you can afford something',
          with: 'Know instantly, based on your real spending data',
          icon: '📊',
        },
      ],
    },
    support: {
      heading: 'Need help?',
      description: 'Have a question or want to get in touch? Reach us at',
      email: 'masari@salahslab.com',
      faqsLabel: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How do I record an expense?',
          answer:
            'You can record an expense in two ways: by scanning a receipt with your camera, or by entering the details manually via text input. Masari only records what\'s available — if a detail like location isn\'t found on the receipt or provided in your input, it will be saved as unknown rather than guessed.',
        },
        {
          question: 'What kind of questions can Masari answer?',
          answer:
            'You can ask Masari anything about your spending — for example: "How much did I spend on food this month?", "What was my biggest expense last week?", or "Show me all my transportation costs in April." Masari answers based on your actual recorded expenses, so the more you log, the more useful its insights become.',
        },
        {
          question: 'How do I edit or delete an expense?',
          answer:
            'Open the expense list screen and select the month in which the expense was recorded. Tap the expense you want to change, update the details, and tap Save. To delete it, tap the trash icon on the expense.',
        },
      ],
    },
    download: {
      heading: 'Ready to Transform Your Finances?',
      description:
        'Masari is now available on the App Store. Download it free today.',
      iosButton: 'Download on the App Store',
      androidWaitlistHeading: 'Android Coming Soon',
      androidWaitlistDescription: "Join the waitlist and we'll notify you the moment Masari launches on Android.",
      freeNote: 'Free to download • No credit card required',
    },
    emailForm: {
      placeholder: 'your@email.com',
      button: 'Join Android Waitlist',
      loading: 'Joining...',
      success: "You're on the list! We'll notify you when Masari launches on Android.",
      error: 'Something went wrong. Please try again.',
    },
  },
  ja: {
    navbar: {
      features: '機能',
      howItWorks: '使い方',
      whyMasari: 'なぜMasari？',
      support: 'サポート',
      download: 'ダウンロード',
      getStarted: '始める',
    },
    hero: {
      heading1: 'AIで',
      heading2: '支出管理',
      heading3: 'をシンプルに',
      description:
        'AIとチャットしたり、レシートを撮影するだけで、支出を簡単に記録。Masariはインテリジェントな家計管理をあなたの手のひらに。',
    },
    features: {
      heading: 'すべての会計をひとつに',
      subheading:
        'Masariは最先端のAI技術と直感的なデザインを組み合わせ、支出管理を革新します。',
      items: [
        {
          title: '撮るだけでOK',
          description:
            'レシートにカメラを向けるだけ。Masariが読み取り、すべての品目を瞬時に記録。入力不要、カテゴリ選択不要。',
        },
        {
          title: 'テキストで送るだけ',
          description:
            'レシートがなくても大丈夫。使った金額をどんな言語でも入力するだけで、あとはMasariにお任せ。',
        },
        {
          title: 'お金に何でも聞いて',
          description:
            '「先週いくら使った？」「その時計は買える？」「¥50,000はどこへ？」すぐにわかりやすい回答が得られます。',
        },
        {
          title: 'わかりやすいレポート',
          description:
            'カテゴリ別、店舗別、週別の支出。スプレッドシートを作らなくても、重要な情報をMasariが提示します。',
        },
        {
          title: '1円もれなく管理',
          description:
            'すべての支出をきれいに検索可能なリストで管理。AIが不要なときは、日付・店舗・カテゴリでフィルタリング。',
        },
      ],
    },
    howItWorks: {
      heading: 'Masariの使い方',
      subheading: '2つの簡単なステップでスマートな支出管理を',
      steps: [
        {
          title: '支出を記録',
          description: '写真を撮るか、メッセージを入力するだけ。',
        },
        {
          title: '何でも質問、全部わかる',
          description: '支出を照会し、パターンを把握し、レポートを依頼。',
        },
      ],
    },
    whyMasari: {
      heading: 'なぜMasari？',
      subheading: '記録漏れを減らし、家計の把握力を高める。',
      withoutLabel: 'Masariなし',
      withLabel: 'Masariあり',
      rows: [
        {
          without: '支出をひとつひとつ手入力',
          with: 'レシートを撮るかメッセージを送るだけ',
          icon: '📷',
        },
        {
          without: 'スプレッドシートを掘り返して答えを探す',
          with: 'どんな言語でも質問でき、すぐに回答が得られる',
          icon: '💬',
        },
        {
          without: '何かを買えるか感覚で判断',
          with: '実際の支出データに基づき即座に把握',
          icon: '📊',
        },
      ],
    },
    support: {
      heading: 'お困りですか？',
      description: 'ご質問やお問い合わせはこちらまで',
      email: 'masari@salahslab.com',
      faqsLabel: 'よくある質問',
      faqs: [
        {
          question: '支出はどのように記録しますか？',
          answer:
            '支出を記録する方法は2つあります。カメラでレシートをスキャンするか、テキスト入力で手動入力するかです。Masariは利用可能な情報のみを記録します。たとえば、レシートに場所の情報がなく、入力でも提供されていない場合、推測せずに「不明」として保存されます。',
        },
        {
          question: 'Masariはどんな質問に答えられますか？',
          answer:
            '支出に関するあらゆる質問ができます。たとえば「今月、食費にいくら使いましたか？」「先週の最大の支出は？」「4月の交通費をすべて見せて」などです。Masariは実際に記録された支出に基づいて回答するため、記録が多いほど有益なインサイトが得られます。',
        },
        {
          question: '支出を編集・削除するには？',
          answer:
            '支出リスト画面を開き、対象の支出が記録された月を選択します。変更したい支出をタップし、内容を更新して「保存」をタップします。削除する場合は、支出のゴミ箱アイコンをタップしてください。',
        },
      ],
    },
    download: {
      heading: '家計を変える準備はできていますか？',
      description:
        'MasariはApp Storeで今すぐ無料ダウンロードできます。',
      iosButton: 'App Storeでダウンロード',
      androidWaitlistHeading: 'Android版 近日公開',
      androidWaitlistDescription: 'ウェイティングリストに登録すれば、Android版リリース時にお知らせします。',
      freeNote: '無料でダウンロード • クレジットカード不要',
    },
    emailForm: {
      placeholder: 'your@email.com',
      button: 'Androidウェイティングリストに登録',
      loading: '登録中...',
      success: 'リストに追加されました！Android版リリース時にお知らせします。',
      error: 'エラーが発生しました。もう一度お試しください。',
    },
  },
};
