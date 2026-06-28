/* Mock data for the Taurux prototype. Bilingual where it matters. */
let LANG = 'ar';
const L = (ar, en) => (LANG === 'ar' ? ar : en);

const DATA = {
  user: {
    firstName: 'فهد', firstNameEn: 'Fahad',
    fullName: 'فهد العتيبي', fullNameEn: 'Fahad Al-Otaibi',
    clientNumber: '10428',
    points: 2840,
    streak: 12,
    tier: { ar: 'ذهبي', en: 'Gold' },
  },
  sub: {
    pkg: { ar: 'باقة النخبة', en: 'Elite Plan' },
    daysRemaining: 47, totalDays: 90, used: 43,
    start: '2026-05-05', end: '2026-08-03',
    freezeDays: 8, status: 'active',
  },
  stats: { totalVisits: 186, monthVisits: 14, freezeDays: 8 },

  // bar chart — visits per weekday (Sat..Fri)
  week: [
    { d: { ar: 'سبت', en: 'Sa' }, v: 3 }, { d: { ar: 'أحد', en: 'Su' }, v: 1 },
    { d: { ar: 'اثن', en: 'Mo' }, v: 4 }, { d: { ar: 'ثلا', en: 'Tu' }, v: 2 },
    { d: { ar: 'أرب', en: 'We' }, v: 5 }, { d: { ar: 'خمي', en: 'Th' }, v: 3 },
    { d: { ar: 'جمع', en: 'Fr' }, v: 0 },
  ],

  classes: [
    { name: { ar: 'كروس فت', en: 'CrossFit' }, time: '6:00 م', trainer: { ar: 'كابتن سعد', en: 'Coach Saad' }, spots: 4, cap: 16, color: '#F97316', day: { ar: 'اليوم', en: 'Today' } },
    { name: { ar: 'يوغا', en: 'Yoga' }, time: '7:30 م', trainer: { ar: 'كابتن نورة', en: 'Coach Noura' }, spots: 9, cap: 20, color: '#8B5CF6', day: { ar: 'اليوم', en: 'Today' } },
    { name: { ar: 'ملاكمة', en: 'Boxing' }, time: '9:00 م', trainer: { ar: 'كابتن خالد', en: 'Coach Khalid' }, spots: 0, cap: 12, color: '#EF4444', day: { ar: 'اليوم', en: 'Today' } },
    { name: { ar: 'سبينينج', en: 'Spinning' }, time: '6:00 ص', trainer: { ar: 'كابتن سعد', en: 'Coach Saad' }, spots: 6, cap: 18, color: '#06B6D4', day: { ar: 'غداً', en: 'Tomorrow' } },
  ],

  // Weekly class schedule (الحصص)
  scheduleDays: [
    { dayAr: 'السبت', dayEn: 'Sat', date: '21', monthAr: 'يونيو', monthEn: 'Jun', items: [
      { time: '6:00', apAr: 'ص', apEn: 'AM', dur: 60, catAr: 'سبينينج', catEn: 'Spinning', nameAr: 'سبينينج الصباح', nameEn: 'Morning Spin', trAr: 'كابتن سعد', trEn: 'Coach Saad', emoji: '🚴', spots: 6, cap: 18, color: '#06B6D4' },
      { time: '6:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'كروس فت', catEn: 'CrossFit', nameAr: 'كروس فت', nameEn: 'CrossFit', trAr: 'كابتن خالد', trEn: 'Coach Khalid', emoji: '🔥', spots: 4, cap: 16, color: '#F97316' },
      { time: '7:30', apAr: 'م', apEn: 'PM', dur: 45, catAr: 'يوغا', catEn: 'Yoga', nameAr: 'يوغا مسائية', nameEn: 'Evening Yoga', trAr: 'كابتن نورة', trEn: 'Coach Noura', emoji: '🧘‍♀️', spots: 9, cap: 20, color: '#8B5CF6' },
      { time: '9:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'ملاكمة', catEn: 'Boxing', nameAr: 'ملاكمة', nameEn: 'Boxing', trAr: 'كابتن خالد', trEn: 'Coach Khalid', emoji: '🥊', spots: 0, cap: 12, color: '#EF4444' },
    ]},
    { dayAr: 'الأحد', dayEn: 'Sun', date: '22', monthAr: 'يونيو', monthEn: 'Jun', items: [
      { time: '7:00', apAr: 'ص', apEn: 'AM', dur: 45, catAr: 'هيت', catEn: 'HIIT', nameAr: 'حرق دهون HIIT', nameEn: 'Fat-burn HIIT', trAr: 'كابتن ريم', trEn: 'Coach Reem', emoji: '⚡', spots: 8, cap: 16, color: '#22C55E' },
      { time: '6:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'أثقال', catEn: 'Strength', nameAr: 'رفع أثقال', nameEn: 'Strength', trAr: 'كابتن سعد', trEn: 'Coach Saad', emoji: '🏋️', spots: 3, cap: 12, color: '#D4AF37' },
      { time: '8:00', apAr: 'م', apEn: 'PM', dur: 50, catAr: 'زومبا', catEn: 'Zumba', nameAr: 'زومبا', nameEn: 'Zumba', trAr: 'كابتن نورة', trEn: 'Coach Noura', emoji: '💃', spots: 12, cap: 25, color: '#EC4899' },
    ]},
    { dayAr: 'الإثنين', dayEn: 'Mon', date: '23', monthAr: 'يونيو', monthEn: 'Jun', items: [
      { time: '6:30', apAr: 'ص', apEn: 'AM', dur: 60, catAr: 'كروس فت', catEn: 'CrossFit', nameAr: 'كروس فت الفجر', nameEn: 'Dawn CrossFit', trAr: 'كابتن خالد', trEn: 'Coach Khalid', emoji: '🔥', spots: 5, cap: 16, color: '#F97316' },
      { time: '7:00', apAr: 'م', apEn: 'PM', dur: 45, catAr: 'يوغا', catEn: 'Yoga', nameAr: 'يوغا', nameEn: 'Yoga', trAr: 'كابتن نورة', trEn: 'Coach Noura', emoji: '🧘‍♀️', spots: 14, cap: 20, color: '#8B5CF6' },
    ]},
    { dayAr: 'الثلاثاء', dayEn: 'Tue', date: '24', monthAr: 'يونيو', monthEn: 'Jun', items: [
      { time: '6:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'سبينينج', catEn: 'Spinning', nameAr: 'سبينينج', nameEn: 'Spinning', trAr: 'كابتن سعد', trEn: 'Coach Saad', emoji: '🚴', spots: 7, cap: 18, color: '#06B6D4' },
      { time: '9:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'ملاكمة', catEn: 'Boxing', nameAr: 'ملاكمة', nameEn: 'Boxing', trAr: 'كابتن خالد', trEn: 'Coach Khalid', emoji: '🥊', spots: 6, cap: 12, color: '#EF4444' },
    ]},
    { dayAr: 'الأربعاء', dayEn: 'Wed', date: '25', monthAr: 'يونيو', monthEn: 'Jun', items: [
      { time: '7:00', apAr: 'ص', apEn: 'AM', dur: 45, catAr: 'هيت', catEn: 'HIIT', nameAr: 'حرق دهون', nameEn: 'HIIT', trAr: 'كابتن ريم', trEn: 'Coach Reem', emoji: '⚡', spots: 10, cap: 16, color: '#22C55E' },
      { time: '6:00', apAr: 'م', apEn: 'PM', dur: 60, catAr: 'كروس فت', catEn: 'CrossFit', nameAr: 'كروس فت', nameEn: 'CrossFit', trAr: 'كابتن خالد', trEn: 'Coach Khalid', emoji: '🔥', spots: 2, cap: 16, color: '#F97316' },
    ]},
  ],

  // Personal training packages (تدريب شخصي)
  ptPackages: [
    { sessions: 4, price: 600, old: 720, per: 150, popular: false, ar: 'باقة البداية', en: 'Starter' },
    { sessions: 8, price: 1100, old: 1440, per: 138, popular: true, ar: 'باقة النخبة', en: 'Elite' },
    { sessions: 12, price: 1500, old: 2160, per: 125, popular: false, ar: 'باقة الاحتراف', en: 'Pro' },
  ],

  // Store products (منتجات)
  products: [
    { emoji: '🥛', nameAr: 'بروتين واي 2كجم', nameEn: 'Whey Protein 2kg', catAr: 'مكملات', catEn: 'Supplements', price: 220, color: '#3B82F6' },
    { emoji: '💊', nameAr: 'كرياتين 300غ', nameEn: 'Creatine 300g', catAr: 'مكملات', catEn: 'Supplements', price: 90, color: '#8B5CF6' },
    { emoji: '⚡', nameAr: 'مشروب طاقة', nameEn: 'Energy Drink', catAr: 'مشروبات', catEn: 'Drinks', price: 15, color: '#F97316' },
    { emoji: '🥤', nameAr: 'شيكر تاوروكس', nameEn: 'Taurux Shaker', catAr: 'إكسسوارات', catEn: 'Gear', price: 45, color: '#06B6D4' },
    { emoji: '👕', nameAr: 'تيشيرت تمرين', nameEn: 'Training Tee', catAr: 'ملابس', catEn: 'Apparel', price: 120, color: '#22C55E' },
    { emoji: '🧤', nameAr: 'قفازات رفع', nameEn: 'Lifting Gloves', catAr: 'إكسسوارات', catEn: 'Gear', price: 75, color: '#EF4444' },
    { emoji: '🎽', nameAr: 'حزام رفع أثقال', nameEn: 'Lifting Belt', catAr: 'إكسسوارات', catEn: 'Gear', price: 160, color: '#D4AF37' },
    { emoji: '💧', nameAr: 'أحماض BCAA', nameEn: 'BCAA Aminos', catAr: 'مكملات', catEn: 'Supplements', price: 130, color: '#EC4899' },
  ],

  trainers: [
    { name: { ar: 'كابتن سعد', en: 'Coach Saad' }, spec: { ar: 'لياقة وتضخيم', en: 'Strength' }, rating: 4.9, emoji: '💪' },
    { name: { ar: 'كابتن نورة', en: 'Coach Noura' }, spec: { ar: 'يوغا ومرونة', en: 'Yoga' }, rating: 5.0, emoji: '🧘‍♀️' },
    { name: { ar: 'كابتن خالد', en: 'Coach Khalid' }, spec: { ar: 'ملاكمة', en: 'Boxing' }, rating: 4.8, emoji: '🥊' },
    { name: { ar: 'كابتن ريم', en: 'Coach Reem' }, spec: { ar: 'تنحيف', en: 'Weight loss' }, rating: 4.9, emoji: '🏃‍♀️' },
  ],

  // exclusive offers (shown at top of Store)
  offers: [
    { kind: 'flash', ar: 'عرض البداية', en: 'Starter Deal', subAr: 'أول شهر بنصف السعر', subEn: 'First month 50% off',
      disc: '−50%', img: 'gym4.jpg', sec: 8073 },
    { kind: 'bundle', ar: 'النخبة + تدريب', en: 'Elite + PT', subAr: 'باقة 3 أشهر + 4 حصص شخصية', subEn: '3-month plan + 4 PT sessions',
      disc: 'وفّر 600', discEn: 'Save 600', img: 'gym2.jpg', tagAr: 'الأكثر قيمة', tagEn: 'Best value' },
    { kind: 'refer', ar: 'ادعُ صديقاً', en: 'Refer & Earn', subAr: 'شهر مجاني لك ولصديقك', subEn: 'Free month for both',
      disc: 'مجاناً', discEn: 'Free', img: 'gym5.jpg', tagAr: 'حصري للأعضاء', tagEn: 'Members only' },
  ],

  packages: [
    { name: { ar: 'باقة النخبة', en: 'Elite' }, dur: { ar: '3 أشهر', en: '3 Months' }, months: 3,
      price: 1499, old: 1799, popular: true,
      perks: [
        { ar: 'دخول غير محدود لكل الفروع', en: 'Unlimited access · all branches' },
        { ar: 'حصص جماعية مجانية', en: 'Free group classes' },
        { ar: 'تجميد حتى 14 يوم', en: 'Freeze up to 14 days' },
      ] },
    { name: { ar: 'باقة سنوية', en: 'Annual' }, dur: { ar: '12 شهر', en: '12 Months' }, months: 12,
      price: 3999, old: 5400, popular: false,
      perks: [
        { ar: 'كل مزايا النخبة', en: 'Everything in Elite' },
        { ar: '4 حصص تدريب شخصي مجانية', en: '4 free PT sessions' },
        { ar: 'تجميد حتى 30 يوم + دعوة ضيف', en: 'Freeze 30 days + guest pass' },
      ], extra: { ar: '+ خصم 10% على المتجر', en: '+ 10% store discount' } },
    { name: { ar: 'الباقة الشهرية', en: 'Monthly' }, dur: { ar: 'شهر واحد', en: '1 Month' }, months: 1,
      price: 599, old: 0, popular: false,
      perks: [
        { ar: 'دخول غير محدود', en: 'Unlimited access' },
        { ar: 'مرونة بدون التزام طويل', en: 'No long commitment' },
      ] },
  ],

  invoices: [
    { t: { ar: 'باقة النخبة', en: 'Elite Plan' }, type: 'sub', amount: 1499, date: '5 مايو', method: 'Tamara', icon: 'crown', color: '#D4AF37' },
    { t: { ar: 'بروتين واي', en: 'Whey Protein' }, type: 'shop', amount: 220, date: '2 مايو', method: 'مدى', icon: 'bag', color: '#3B82F6' },
    { t: { ar: 'حصة تدريب شخصي', en: 'PT Session' }, type: 'pt', amount: 150, date: '28 أبريل', method: 'Apple Pay', icon: 'medal', color: '#22C55E' },
    { t: { ar: 'مشروب طاقة', en: 'Energy Drink' }, type: 'shop', amount: 15, date: '26 أبريل', method: 'كاش', icon: 'zap', color: '#8B5CF6' },
  ],

  visits: [
    { group: { ar: 'اليوم', en: 'Today' }, time: '5:42 م', out: '7:00 م', dur: 78, kcal: 520,
      method: { ar: 'بصمة', en: 'Fingerprint' }, mIcon: 'fingerprint', type: { ar: 'تمرين حر', en: 'Open gym' } },
    { group: { ar: 'أمس', en: 'Yesterday' }, time: '6:10 م', out: '7:14 م', dur: 64, kcal: 610,
      method: { ar: 'QR', en: 'QR' }, mIcon: 'qr', type: { ar: 'حصة كروس فت', en: 'CrossFit class' } },
    { group: { ar: 'هذا الأسبوع', en: 'This week' }, time: '7:02 ص', out: '7:54 ص', dur: 52, kcal: 430,
      method: { ar: 'بصمة', en: 'Fingerprint' }, mIcon: 'fingerprint', type: { ar: 'تمرين صباحي', en: 'Morning session' } },
    { group: { ar: 'هذا الأسبوع', en: 'This week' }, time: '8:20 م', out: '9:50 م', dur: 90, kcal: 720,
      method: { ar: 'QR', en: 'QR' }, mIcon: 'qr', type: { ar: 'تدريب شخصي', en: 'PT session' } },
  ],

  badges: [
    { t: { ar: 'أول حضور', en: 'First Check-in' }, ic: 'flame', got: true },
    { t: { ar: '50 زيارة', en: '50 Visits' }, ic: 'medal', got: true },
    { t: { ar: 'فجر النادي', en: 'Early Bird' }, ic: 'sun', got: true },
    { t: { ar: '100 زيارة', en: '100 Visits' }, ic: 'trophy', got: true },
    { t: { ar: 'أسبوع كامل', en: 'Perfect Week' }, ic: 'target', got: false },
    { t: { ar: 'بطل الشهر', en: 'Monthly Hero' }, ic: 'crown', got: false },
  ],

  challenges: [
    { t: { ar: 'تحدي 20 زيارة', en: '20 Visits Challenge' }, d: { ar: 'هذا الشهر', en: 'This month' }, cur: 14, goal: 20, reward: 500 },
    { t: { ar: 'تحدي الـ 5 صباحات', en: '5 Mornings' }, d: { ar: 'حضور قبل 8 ص', en: 'Before 8 AM' }, cur: 3, goal: 5, reward: 300 },
  ],

  leaderboard: [
    { name: { ar: 'تركي', en: 'Turki' }, pts: 4120, emoji: '🥇' },
    { name: { ar: 'عبدالله', en: 'Abdullah' }, pts: 3680, emoji: '🥈' },
    { name: { ar: 'فهد (أنت)', en: 'Fahad (You)' }, pts: 2840, emoji: '🥉', me: true },
    { name: { ar: 'ماجد', en: 'Majed' }, pts: 2510, emoji: '' },
    { name: { ar: 'سلطان', en: 'Sultan' }, pts: 2190, emoji: '' },
  ],

  rewards: [
    { t: { ar: 'خصم 50 ر.س', en: 'SAR 50 Off' }, d: { ar: 'على التجديد', en: 'On renewal' }, cost: 1000, ic: 'card' },
    { t: { ar: 'حصة تدريب مجانية', en: 'Free PT Session' }, d: { ar: 'مع أي مدرب', en: 'Any coach' }, cost: 2500, ic: 'medal' },
    { t: { ar: 'يوم مجاني', en: 'Free Day Pass' }, d: { ar: 'لصديق', en: 'For a friend' }, cost: 800, ic: 'gift' },
    { t: { ar: 'بروتين شيك', en: 'Protein Shake' }, d: { ar: 'من البار', en: 'From the bar' }, cost: 600, ic: 'droplet' },
  ],

  notifications: [
    { t: { ar: 'تهانينا! 🔥 وصلت لـ 12 يوم متتالي', en: 'Congrats! 12-day streak 🔥' }, d: { ar: 'قبل 5 د', en: '5m ago' }, ic: 'flame', color: '#F97316' },
    { t: { ar: 'حصة الكروس فت تبدأ بعد ساعة', en: 'CrossFit starts in 1 hour' }, d: { ar: 'قبل 30 د', en: '30m ago' }, ic: 'calendar', color: '#06B6D4' },
    { t: { ar: 'تم تأكيد دفعة Tamara بنجاح', en: 'Tamara payment confirmed' }, d: { ar: 'قبل ساعتين', en: '2h ago' }, ic: 'card', color: '#22C55E' },
    { t: { ar: 'عرض خاص: خصم 25% على الباقة السنوية', en: '25% off Annual Plan' }, d: { ar: 'أمس', en: 'Yesterday' }, ic: 'gift', color: '#D4AF37' },
  ],

  metrics: { weight: 78.4, weightChange: -2.6, bodyFat: 18.2, muscle: 41.5, bmi: 24.1 },
  weightSeries: [86, 84.5, 83, 82.2, 81, 80.1, 79, 78.4],

  workout: {
    plan: { ar: 'برنامج التضخيم - الأسبوع 3', en: 'Hypertrophy - Week 3' },
    today: { ar: 'دفع (صدر + كتف + ترايسبس)', en: 'Push (Chest/Shoulders/Triceps)' },
    exercises: [
      { n: { ar: 'بنش برس', en: 'Bench Press' }, sets: '4 × 8', kg: 80, done: true },
      { n: { ar: 'ضغط كتف', en: 'Shoulder Press' }, sets: '4 × 10', kg: 24, done: true },
      { n: { ar: 'تفتيح صدر', en: 'Chest Fly' }, sets: '3 × 12', kg: 16, done: false },
      { n: { ar: 'ترايسبس', en: 'Triceps Pushdown' }, sets: '3 × 15', kg: 30, done: false },
    ],
  },

  aiChat: [
    { who: 'ai', ar: 'أهلاً فهد! 👋 أنا مدربك الذكي. هدفك الحالي تضخيم العضلات. كيف أقدر أساعدك اليوم؟', en: 'Hi Fahad! 👋 I\'m your AI coach. Your goal is muscle gain. How can I help today?' },
    { who: 'me', ar: 'وش أفضل أكل قبل التمرين؟', en: 'What should I eat before my workout?' },
    { who: 'ai', ar: 'قبل التمرين بساعة تقريباً: مصدر كارب معقد + بروتين خفيف. مثال: شوفان + موزة + ملعقة زبدة فول سوداني، أو أرز + صدر دجاج. يعطيك طاقة ثابتة بدون ثقل. ودّي أرتب لك خطة وجبات كاملة؟ 💪', en: 'About 1h before: complex carbs + light protein. e.g. oats + banana + peanut butter, or rice + chicken. Want a full meal plan? 💪' },
  ],

  // ===== CLASS BOOKING — selected class detail (rich) =====
  // (filled at runtime by selectClass(); this is the fallback)
  classMeta: {
    levelAr: 'متوسط - متقدم', levelEn: 'Intermediate · Advanced',
    studioAr: 'قاعة A', studioEn: 'Studio A',
    reward: 80, // loyalty points for attending
    descAr: 'حصة عالية الكثافة تجمع بين رفع الأثقال والكارديو. مناسبة للمستوى المتوسط والمتقدم.',
    descEn: 'High-intensity session combining lifting and cardio. Intermediate to advanced.',
    bringAr: ['ماء', 'منشفة', 'حذاء رياضي'], bringEn: ['Water', 'Towel', 'Training shoes'],
    attendees: ['🧑','🧑','👩','🧑','👨','👩'],
    recurringAr: 'تتكرر كل سبت وإثنين وأربعاء', recurringEn: 'Repeats Sat · Mon · Wed',
  },

  // ===== MY BOOKINGS (client side) — upcoming + history =====
  myBookings: [
    { nameAr:'كروس فت', nameEn:'CrossFit', emoji:'🔥', color:'#F97316', dateAr:'اليوم · السبت 21 يونيو', dateEn:'Today · Sat 21 Jun', time:'6:00', ap:'م', apEn:'PM', dur:60, trAr:'كابتن خالد', trEn:'Coach Khalid', studioAr:'قاعة A', studioEn:'Studio A', status:'confirmed', code:'CF-2841', inMins:42 },
    { nameAr:'يوغا مسائية', nameEn:'Evening Yoga', emoji:'🧘‍♀️', color:'#8B5CF6', dateAr:'غداً · الأحد 22 يونيو', dateEn:'Tomorrow · Sun 22 Jun', time:'8:00', ap:'م', apEn:'PM', dur:45, trAr:'كابتن نورة', trEn:'Coach Noura', studioAr:'قاعة اليوغا', studioEn:'Yoga Studio', status:'waitlist', wpos:2, code:'YG-5520' },
    { nameAr:'ملاكمة', nameEn:'Boxing', emoji:'🥊', color:'#EF4444', dateAr:'الإثنين 16 يونيو', dateEn:'Mon 16 Jun', time:'9:00', ap:'م', apEn:'PM', dur:60, trAr:'كابتن خالد', trEn:'Coach Khalid', studioAr:'حلبة الملاكمة', studioEn:'Boxing Ring', status:'attended', kcal:540, code:'BX-1190' },
    { nameAr:'سبينينج', nameEn:'Spinning', emoji:'🚴', color:'#06B6D4', dateAr:'السبت 14 يونيو', dateEn:'Sat 14 Jun', time:'6:00', ap:'ص', apEn:'AM', dur:60, trAr:'كابتن سعد', trEn:'Coach Saad', studioAr:'قاعة السبينينج', studioEn:'Spin Studio', status:'attended', kcal:610, code:'SP-0934' },
    { nameAr:'يوغا', nameEn:'Yoga', emoji:'🧘‍♀️', color:'#8B5CF6', dateAr:'الخميس 12 يونيو', dateEn:'Thu 12 Jun', time:'7:00', ap:'م', apEn:'PM', dur:45, trAr:'كابتن نورة', trEn:'Coach Noura', studioAr:'قاعة اليوغا', studioEn:'Yoga Studio', status:'missed', code:'YG-0021' },
  ],

  // ===== COACH (الكابتن) ACCOUNT =====
  coach: {
    nameAr:'كابتن سعد', nameEn:'Coach Saad', emoji:'💪',
    specAr:'مدرب لياقة وتضخيم معتمد', specEn:'Certified Strength Coach',
    rating:4.9, reviews:128, clients:42, classesMonth:36, yrs:8,
    bioAr:'مدرب معتمد NASM بخبرة 8 سنوات في بناء العضلات والتغذية الرياضية. أؤمن أن الالتزام أهم من الكمال.',
    bioEn:'NASM-certified coach · 8 years in muscle building and sports nutrition.',
    specsAr:['تضخيم','قوة','تغذية','فقدان دهون'], specsEn:['Hypertrophy','Strength','Nutrition','Fat loss'],
    earnMonth: 9450, earnClasses: 36, earnPT: 24, payoutAr:'الدفعة القادمة 1 يوليو', payoutEn:'Next payout Jul 1',
  },
  // coach's classes today, with roster
  coachToday: [
    { time:'6:00', ap:'م', apEn:'PM', nameAr:'كروس فت', nameEn:'CrossFit', emoji:'🔥', color:'#F97316', studioAr:'قاعة A', studioEn:'Studio A', dur:60, cap:16, state:'next', inMins:42,
      roster:[
        {nameAr:'تركي العتيبي',nameEn:'Turki Al-Otaibi',emoji:'🧑',checked:false},
        {nameAr:'عبدالله الزهراني',nameEn:'Abdullah',emoji:'🧔',checked:false},
        {nameAr:'فهد العتيبي',nameEn:'Fahad',emoji:'🧑',checked:false},
        {nameAr:'ماجد القحطاني',nameEn:'Majed',emoji:'👨',checked:false},
        {nameAr:'سلطان',nameEn:'Sultan',emoji:'🧑',checked:false},
        {nameAr:'نواف',nameEn:'Nawaf',emoji:'🧔',checked:false},
        {nameAr:'ريان',nameEn:'Rayan',emoji:'👨',checked:false},
      ],
      waitlist:[ {nameAr:'بدر',nameEn:'Badr',emoji:'🧑'}, {nameAr:'يوسف',nameEn:'Yousef',emoji:'🧔'} ] },
    { time:'8:00', ap:'م', apEn:'PM', nameAr:'رفع أثقال', nameEn:'Strength', emoji:'🏋️', color:'#D4AF37', studioAr:'قاعة الأوزان', studioEn:'Weights Hall', dur:60, cap:12, state:'upcoming',
      roster:[
        {nameAr:'تركي العتيبي',nameEn:'Turki',emoji:'🧑',checked:false},
        {nameAr:'خالد',nameEn:'Khalid',emoji:'🧔',checked:false},
        {nameAr:'عمر',nameEn:'Omar',emoji:'👨',checked:false},
        {nameAr:'فيصل',nameEn:'Faisal',emoji:'🧑',checked:false},
      ], waitlist:[] },
    { time:'10:00', ap:'ص', apEn:'AM', nameAr:'تدريب شخصي · تركي', nameEn:'PT · Turki', emoji:'🎯', color:'#22C55E', studioAr:'منطقة PT', studioEn:'PT Zone', dur:45, cap:1, state:'done', pt:true,
      roster:[ {nameAr:'تركي العتيبي',nameEn:'Turki',emoji:'🧑',checked:true} ], waitlist:[] },
  ],
  // coach weekly schedule (count per day)
  coachWeek: [
    { dAr:'السبت', dEn:'Sat', date:'21', count:3, hoursAr:'6 ص - 8 م', today:true },
    { dAr:'الأحد', dEn:'Sun', date:'22', count:2, hoursAr:'6 م - 8 م' },
    { dAr:'الإثنين', dEn:'Mon', date:'23', count:4, hoursAr:'6 ص - 9 م' },
    { dAr:'الثلاثاء', dEn:'Tue', date:'24', count:2, hoursAr:'6 م - 9 م' },
    { dAr:'الأربعاء', dEn:'Wed', date:'25', count:3, hoursAr:'7 ص - 6 م' },
    { dAr:'الخميس', dEn:'Thu', date:'26', count:0, hoursAr:'راحة', off:true },
    { dAr:'الجمعة', dEn:'Fri', date:'27', count:0, hoursAr:'راحة', off:true },
  ],
  // coach PT clients
  coachClients: [
    { nameAr:'تركي العتيبي', nameEn:'Turki', emoji:'🧑', pkgAr:'باقة النخبة · 8 حصص', pkgEn:'Elite · 8 sessions', left:5, total:8, progress:62, lastAr:'آخر حصة: أمس' },
    { nameAr:'عبدالله الزهراني', nameEn:'Abdullah', emoji:'🧔', pkgAr:'باقة الاحتراف · 12 حصة', pkgEn:'Pro · 12 sessions', left:9, total:12, progress:25, lastAr:'آخر حصة: قبل 3 أيام' },
    { nameAr:'ماجد القحطاني', nameEn:'Majed', emoji:'👨', pkgAr:'باقة البداية · 4 حصص', pkgEn:'Starter · 4 sessions', left:1, total:4, progress:75, lastAr:'آخر حصة: اليوم', low:true },
    { nameAr:'نواف', nameEn:'Nawaf', emoji:'🧔', pkgAr:'باقة النخبة · 8 حصص', pkgEn:'Elite · 8 sessions', left:8, total:8, progress:0, lastAr:'لم تبدأ بعد', fresh:true },
  ],
  // coach reviews
  coachReviews: [
    { nameAr:'تركي', nameEn:'Turki', emoji:'🧑', st:5, ar:'مدرب محترف وملتزم، شفت نتيجة بعد شهر', en:'Pro and committed, saw results in a month' },
    { nameAr:'نواف', nameEn:'Nawaf', emoji:'🧔', st:5, ar:'أفضل كابتن في النادي بدون مبالغة', en:'Best coach hands down' },
    { nameAr:'ماجد', nameEn:'Majed', emoji:'👨', st:4, ar:'تمارين قوية ومتنوعة، أنصح فيه', en:'Strong varied workouts, recommend' },
  ],
};

// runtime: currently selected class for the detail screen
let selectedClass = null;
function selectClass(dayIdx, itemIdx) {
  const d = DATA.scheduleDays[dayIdx];
  selectedClass = d ? d.items[itemIdx] : null;
  go('classDetail');
}
