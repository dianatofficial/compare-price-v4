import { ProductTier, PlanDetail, ComparisonRow, QuizQuestion } from "./types";

export const PLANS: PlanDetail[] = [
  {
    id: ProductTier.STARTER,
    name: "Starter",
    badge: "پایــه",
    priceMonthly: "۴,۲۰۰,۰۰۰",
    priceYearly: "۳۷,۸۰۰,۰۰۰",
    priceYearlyMonthlyEquivalent: "۳,۱۵۰,۰۰۰",
    priceDiscount: "۲۵٪",
    description: "برای شروع هوشمندانه در بازارهای مالی و تحلیل‌های روزانه و هفتگی",
    accentColor: "#ffffff",
    accentTextColor: "text-white",
    borderColor: "border-white/30",
    glowColor: "shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    btnBgColor: "bg-white hover:bg-slate-150 text-neutral-950",
    btnTextColor: "text-neutral-950"
  },
  {
    id: ProductTier.PRO,
    name: "PRO",
    badge: "حرفــه‌ای",
    priceMonthly: "۵,۴۰۰,۰۰۰",
    priceYearly: "۴۲,۱۲۰,۰۰۰",
    priceYearlyMonthlyEquivalent: "۳,۵۱۰,۰۰۰",
    priceDiscount: "۳۵٪",
    description: "بهترین انتخاب برای معامله‌گران فعال، تحلیل چارت دقیقه‌ای و سیگنال‌های جهت‌دار",
    accentColor: "#bef264", // Pistachio Green
    accentTextColor: "text-[#bef264]",
    borderColor: "border-[#bef264]/30",
    glowColor: "shadow-[0_0_25px_rgba(190,242,100,0.25)]",
    btnBgColor: "bg-[#bef264] hover:bg-[#a3e635] text-neutral-950",
    btnTextColor: "text-neutral-950",
    recommeded: true
  },
  {
    id: ProductTier.ULTRA,
    name: "ULTRA",
    badge: "فوق‌پیشرفته",
    priceMonthly: "۹,۷۰۰,۰۰۰",
    priceYearly: "۶۴,۰۲۰,۰۰۰",
    priceYearlyMonthlyEquivalent: "۵,۳۳۵,۰۰۰",
    priceDiscount: "۴۵٪",
    description: "نهایت قدرت پردازش، تحلیل همزمان تایم‌فریم‌ها، خروجی بدون کپی‌رایت و ابزار اختصاصی",
    accentColor: "#f43f5e", // Magenta
    accentTextColor: "text-[#f43f5e]",
    borderColor: "border-[#f43f5e]/30",
    glowColor: "shadow-[0_0_30px_rgba(244,63,94,0.3)]",
    btnBgColor: "bg-[#f43f5e] hover:bg-[#e11d48] text-white",
    btnTextColor: "text-white"
  }
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  // --- Markets Category ---
  {
    id: "m_crypto",
    title: "تحلیل ارز دیجیتال",
    subtitle: "پوشش کامل بازار",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_forex",
    title: "تحلیل بازار فارکس",
    subtitle: "پردازش جفت‌ارزهای اصلی",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_us_stocks",
    title: "سهام بورس آمریکا",
    subtitle: "رصد سهام جهانی",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "m_iran_stocks",
    title: "بورس ایران",
    subtitle: "نمادهای فعال بازار",
    category: "markets",
    categoryLabel: "پوشش بازارهای مالی و دارایی‌ها",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Timeframes Category ---
  {
    id: "t_minute",
    title: "چارت دقیقه‌ای",
    subtitle: "اسکالپ فوق سریع",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true,
    isSpecial: true
  },
  {
    id: "t_hourly",
    title: "تحلیل ساعتی",
    subtitle: "معاملات روزانه دقیق",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "t_daily",
    title: "تحلیل روزانه",
    subtitle: "تعیین حمایت مقاومت",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "t_weekly",
    title: "تحلیل هفتگی",
    subtitle: "روند میان‌مدت بلندمدت",
    category: "timeframes",
    categoryLabel: "تایم‌فریم‌های فرکانس معاملاتی",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Biases Category ---
  {
    id: "b_technical_patterns",
    title: "الگوهای تکنیکال",
    subtitle: "شناسایی کلاسیک نمودار",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_price_action",
    title: "پرایس اکشن",
    subtitle: "رفتارشناسی قیمت نمودار",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_elliott_wave",
    title: "الیوت ویو",
    subtitle: "شمارش امواج کلاسیک",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_neowave",
    title: "نئو ویو",
    subtitle: "ساختار پیچیده امواج",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_wyckoff",
    title: "وایکوف",
    subtitle: "تشخیص فاز انباشت",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_rtm",
    title: "تحلیل RTM",
    subtitle: "عرضه تقاضا پیشرفته",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_ict",
    title: "تحلیل ICT",
    subtitle: "شکار اردر بلاک",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_smart_money",
    title: "پول هوشمند",
    subtitle: "جریان نقدینگی نهادی",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_summary",
    title: "ارائه جمع‌بندی",
    subtitle: "جمع‌بندی نهایی هوشمند",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true,
    isSpecial: true
  },
  {
    id: "b_neutral",
    title: "سوگیری بی‌طرف",
    subtitle: "تشخیص نواحی رنج",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: true,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_bullish",
    title: "سوگیری صعودی",
    subtitle: "اهداف صعود قیمت",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },
  {
    id: "b_bearish",
    title: "سوگیری نزولی",
    subtitle: "اهداف ریزش قیمت",
    category: "biases",
    categoryLabel: "جهت‌گیری‌ها و سیگنال‌های استراتژیک",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true
  },

  // --- Outputs Category ---
  {
    id: "o_deep_analysis",
    title: "تحلیل عمیق",
    subtitle: "ارزیابی چندلایه بازار",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: true,
    [ProductTier.ULTRA]: true,
    isSpecial: true
  },
  {
    id: "o_text",
    title: "خروجی متنی",
    subtitle: "خلاصه کپی‌شدنی گزارش",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: false,
    [ProductTier.ULTRA]: true
  },
  {
    id: "o_dual_chart",
    title: "چارت همزمان",
    subtitle: "مقایسه چند تایم‌فریم",
    category: "outputs",
    categoryLabel: "مدیریت خروجی‌ها و ابزار مانیتورینگ",
    [ProductTier.STARTER]: false,
    [ProductTier.PRO]: false,
    [ProductTier.ULTRA]: true
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "بیشتر در چه بازارهای مالی فعالیت می‌کنید یا قصد فعالیت دارید؟",
    options: [
      {
        text: "بورس ایران یا ارز دیجیتال به صورت هولدر بلندمدتی",
        points: { [ProductTier.STARTER]: 3, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "کریپتو و فارکس به طور مرتب و برای نوسان‌گیری با اندیکاتور",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 3, [ProductTier.ULTRA]: 1 }
      },
      {
        text: "تمام مارکت‌ها به طور موازی و در سطوح حساس بازار با ابزارهای اختصاصی",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 4 }
      }
    ]
  },
  {
    id: 2,
    text: "آیا به تایم‌فریم‌های بسیار کوتاه (مانند ۱ الی ۱۵ دقیقه‌ای - اسکالپ) نیاز دارید؟",
    options: [
      {
        text: "خیر، بیشتر تحلیل‌های روزانه و هفتگی برای سرمایه‌گذاری من کافی است",
        points: { [ProductTier.STARTER]: 3, [ProductTier.PRO]: 0, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "بله، سرعت بالا و جهت‌یابی دقیق صعودی/نزولی برای تحلیل چارت دقیقه حیاتی است",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 3, [ProductTier.ULTRA]: 2 }
      },
      {
        text: "کاملاً؛ همچنین به تحلیل‌های لحظه‌ای همزمان روی دو تایم‌فریم مختلف نیاز دارم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 4 }
      }
    ]
  },
  {
    id: 3,
    text: "برای گزارش‌ها و خروجی‌های تحلیلی ربات چه رویکردی دارید؟",
    options: [
      {
        text: "فقط دیدن آنلاین تحلیل جهت تصمیم‌گیری شخصی برایم کافی است",
        points: { [ProductTier.STARTER]: 4, [ProductTier.PRO]: 1, [ProductTier.ULTRA]: 0 }
      },
      {
        text: "نیاز به تحلیل عمیق بازار دارم تا روندهای بزرگ و منطق معامله نهادی را درک کنم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 4, [ProductTier.ULTRA]: 1 }
      },
      {
        text: "می‌خواهم خروجی متن تمیز، فایل PDF بدون کپی‌رایت با برندینگ خودم ارائه دهم",
        points: { [ProductTier.STARTER]: 0, [ProductTier.PRO]: 0, [ProductTier.ULTRA]: 5 }
      }
    ]
  }
];
