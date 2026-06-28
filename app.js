/* ============================================================
   APP — router, bottom nav, theme/lang toggles, screen index
   ============================================================ */

// screen registry: key -> { fn, title, navTab, nav(bool), group }
const SCREENS = {
  onboarding:  { fn: scrOnboarding,  title: 'الترحيب|Onboarding',          nav: false, group: 'flow', cap: 'شاشة الترحيب' },
  login:       { fn: scrLogin,       title: 'تسجيل الدخول|Login',           nav: false, group: 'flow', cap: 'الدخول (OTP + بصمة)' },
  home:        { fn: scrHome,        title: 'الرئيسية|Home',                nav: true, navTab: 'home',    group: 'main', cap: 'الرئيسية — التصميم الجديد' },
  activity:    { fn: scrActivity,    title: 'نشاطي|Activity',               nav: true, navTab: 'activity',group: 'main', cap: 'نشاطي — زيارات/فواتير/اشتراكات' },
  store:       { fn: scrStore,       title: 'المتجر|Store',                 nav: true, navTab: 'store',   group: 'main', cap: 'المتجر — باقات / تدريب شخصي / منتجات' },
  schedule:    { fn: scrSchedule,    title: 'الحصص|Classes',                nav: false, group: 'main', cap: 'الحصص — الجدول الأسبوعي', badge: 'جديد' },
  profile:     { fn: scrProfile,     title: 'حسابي|Profile',                nav: true, navTab: 'profile', group: 'main', cap: 'حسابي' },
  rewards:     { fn: scrRewards,     title: 'النقاط والمكافآت|Rewards',     nav: false, group: 'engage', cap: 'النقاط والمكافآت', badge: 'جديد' },
  achievements:{ fn: scrAchievements,title: 'الإنجازات والسلسلة|Achievements',nav: false, group: 'engage', cap: 'الإنجازات + سلسلة الحضور', badge: 'جديد' },
  challenges:  { fn: scrChallenges,  title: 'التحديات والمتصدرون|Challenges',nav: false, group: 'engage', cap: 'التحديات + لوحة المتصدرين', badge: 'جديد' },
  referral:    { fn: scrReferral,    title: 'ادعُ صديقاً|Referral',         nav: false, group: 'engage', cap: 'برنامج الإحالة', badge: 'جديد' },
  progress:    { fn: scrProgress,    title: 'تقدّمي|Progress',              nav: false, group: 'fit', cap: 'تتبّع الجسم + صور التقدم', badge: 'جديد' },
  workout:     { fn: scrWorkout,     title: 'تماريني|Workout',              nav: false, group: 'fit', cap: 'سجل التمارين + الخطة', badge: 'جديد' },
  aiCoach:     { fn: scrAiCoach,     title: 'المدرب الذكي|AI Coach',        nav: false, group: 'fit', cap: 'مدرب الذكاء الاصطناعي', badge: 'AI' },
  classDetail: { fn: scrClassDetail, title: 'تفاصيل الحصة|Class',           nav: false, group: 'sub', cap: 'تفاصيل الحصة + الحجز' },
  bookConfirm: { fn: scrBookConfirm, title: 'تأكيد الحجز|Confirm',          nav: false, group: 'sub', cap: 'تأكيد حجز الحصة', badge: 'جديد' },
  bookSuccess: { fn: scrBookSuccess, title: 'تم الحجز|Booked',             nav: false, group: 'sub', cap: 'تأكيد + بطاقة الدخول', badge: 'جديد' },
  myBookings:  { fn: scrMyBookings,  title: 'حجوزاتي|My Bookings',          nav: false, group: 'sub', cap: 'الحجوزات القادمة + السابقة', badge: 'جديد' },
  trainer:     { fn: scrTrainer,     title: 'ملف المدرب|Trainer',           nav: false, group: 'sub', cap: 'ملف المدرب + التقييمات' },
  coachHome:   { fn: scrCoachHome,   title: 'لوحة الكابتن|Coach Home',       nav: true, navTab: 'coachHome', coach: true, group: 'coach', cap: 'حساب الكابتن — اليوم', badge: 'جديد' },
  coachSchedule:{fn: scrCoachSchedule,title: 'جدول الكابتن|Coach Schedule',  nav: true, navTab: 'coachSchedule', coach: true, group: 'coach', cap: 'جدول الكابتن الأسبوعي', badge: 'جديد' },
  coachRoster: { fn: scrCoachRoster, title: 'قائمة الحضور|Roster',          nav: false, coach: true, group: 'coach', cap: 'تحضير المتدربين', badge: 'جديد' },
  coachClients:{ fn: scrCoachClients,title: 'متدربيني|Coach Clients',        nav: true, navTab: 'coachClients', coach: true, group: 'coach', cap: 'متدربو الكابتن', badge: 'جديد' },
  coachProfile:{ fn: scrCoachProfile,title: 'ملف الكابتن|Coach Profile',     nav: true, navTab: 'coachProfile', coach: true, group: 'coach', cap: 'ملف + أرباح الكابتن', badge: 'جديد' },
  checkout:    { fn: scrCheckout,    title: 'الدفع|Checkout',               nav: false, group: 'sub', cap: 'إتمام الدفع' },
  manageSub:   { fn: scrManageSub,   title: 'إدارة الاشتراك|Manage',        nav: false, group: 'sub', cap: 'تجميد/تجديد/ترقية', badge: 'جديد' },
  wallet:      { fn: scrWallet,      title: 'بطاقة الدخول|Pass',            nav: false, group: 'sub', cap: 'بطاقة الدخول + المحفظة' },
  notifications:{fn: scrNotifications,title: 'الإشعارات|Notifications',      nav: false, group: 'sub', cap: 'الإشعارات' },
};

const GROUPS = [
  { key: 'flow',   label: 'البداية|Onboarding' },
  { key: 'main',   label: 'الشاشات الرئيسية|Main' },
  { key: 'engage', label: 'التفاعل والتحفيز|Engagement' },
  { key: 'fit',    label: 'اللياقة|Fitness' },
  { key: 'coach',  label: 'حساب الكابتن|Coach account' },
  { key: 'sub',    label: 'الشاشات الفرعية|Sub-pages' },
];

const NAV_ITEMS = [
  { key: 'home', icon: 'home', label: 'الرئيسية|Home' },
  { key: 'activity', icon: 'activity', label: 'نشاطي|Activity' },
  { key: 'store', icon: 'bag', label: 'المتجر|Store' },
  { key: 'profile', icon: 'user', label: 'حسابي|Profile' },
];

const COACH_NAV_ITEMS = [
  { key: 'coachHome', icon: 'home', label: 'اليوم|Today' },
  { key: 'coachSchedule', icon: 'calendar', label: 'جدولي|Schedule' },
  { key: 'coachClients', icon: 'users', label: 'متدربيني|Clients' },
  { key: 'coachProfile', icon: 'user', label: 'ملفي|Profile' },
];

let current = 'home';
const ORDER = Object.keys(SCREENS);

/* ---- navigation ---- */
function go(key, tabArg) {
  if (!SCREENS[key]) return;
  current = key;
  if (key === 'store' && tabArg != null) { /* could switch store tab */ }
  if (key === 'activity') activityTab = (tabArg != null ? tabArg : 0);
  if (location.hash.slice(1) !== key) { try { history.replaceState(null, '', '#' + key); } catch(e){} }
  render();
  document.querySelector('.screen-host').scrollTop = 0;
}

function render() {
  const sc = SCREENS[current];
  const host = document.getElementById('screenHost');
  host.innerHTML = `<div class="screen ${sc.nav ? '' : 'no-nav'}">${sc.fn()}</div>`;

  // bottom nav
  const navHost = document.getElementById('navHost');
  navHost.innerHTML = sc.nav ? bottomNav(sc.navTab, sc.coach) : '';

  // caption
  document.getElementById('stageCaption').textContent = sc.cap || '';

  // active index item
  document.querySelectorAll('.idx-item').forEach(el => {
    el.classList.toggle('active', el.dataset.key === current);
  });

  paintIcons(host);
  paintIcons(navHost);
  animateScreen();
}

/* ---- scroll-reveal + count-up animations ---- */
function animateScreen() {
  const host = document.getElementById('screenHost');
  const items = host.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { root: host, threshold: 0.1 });
    items.forEach(el => io.observe(el));
    setTimeout(() => items.forEach(el => el.classList.add('in')), 1300); // safety reveal
  } else {
    items.forEach(el => el.classList.add('in'));
  }
  tickCountdowns(false); // format immediately (no decrement) on render
  host.querySelectorAll('[data-count]').forEach(el => {
    const to = parseFloat(el.dataset.count); if (isNaN(to)) return;
    const dec = el.dataset.count.indexOf('.') >= 0 ? 1 : 0;
    const dur = 950, t0 = performance.now();
    (function tick(now) {
      const p = Math.min(1, (now - t0) / dur);
      const val = to * (1 - Math.pow(1 - p, 3));
      el.textContent = dec ? val.toFixed(1) : Math.round(val).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = dec ? to.toFixed(1) : Math.round(to).toLocaleString();
    })(t0);
  });
}

function bottomNav(activeTab, coach) {
  const items = coach ? COACH_NAV_ITEMS : NAV_ITEMS;
  const fab = coach ? "rosterIdx=0;go('coachRoster')" : "go('wallet')";
  const half = (its) => its.map(it => `
    <div class="bnav-item ${it.key===activeTab?'on':''}" onclick="go('${it.key}')">
      <span data-icon="${it.icon}"></span>
      <span class="bnav-lbl">${L(...it.label.split('|'))}</span>
    </div>`).join('');
  return `
  <div class="bnav">
    <div class="bnav-glass"></div>
    <div class="bnav-items">
      <div class="bnav-side">${half(items.slice(0,2))}</div>
      <div class="bnav-gap"></div>
      <div class="bnav-side">${half(items.slice(2))}</div>
    </div>
    <div class="bnav-fab" onclick="${fab}">${svg('scan',26)}</div>
  </div>`;
}

/* ---- coach roster interactions ---- */
function toggleCheck(ci, ri) {
  const r = DATA.coachToday[ci].roster[ri];
  r.checked = !r.checked;
  render();
  toast(r.checked ? L('تم تسجيل الحضور','Checked in') : L('أُلغي الحضور','Unchecked'));
}
function markAll(ci) {
  DATA.coachToday[ci].roster.forEach(r => r.checked = true);
  render();
  toast(L('تم تحضير الجميع ✓','All marked present ✓'));
}

/* ---- screen index (left panel) ---- */
function buildIndex() {
  const root = document.getElementById('screenIndex');
  let html = '';
  GROUPS.forEach(g => {
    html += `<div class="idx-group">${L(...g.label.split('|'))}</div>`;
    ORDER.filter(k => SCREENS[k].group === g.key).forEach(k => {
      const s = SCREENS[k];
      const icon = s.navTab ? NAV_ITEMS.find(n=>n.key===s.navTab)?.icon : groupIcon(k);
      html += `<button class="idx-item" data-key="${k}" onclick="go('${k}')">
        <span class="ic"><span data-icon="${icon}"></span></span>
        <span>${L(...s.title.split('|'))}</span>
        ${s.badge ? `<span class="idx-badge">${s.badge==='جديد'?L('جديد','NEW'):s.badge}</span>` : ''}
      </button>`;
    });
  });
  root.innerHTML = html;
  paintIcons(root);
}
function groupIcon(k) {
  const m = { schedule:'calendar', onboarding:'sparkles', login:'lock', rewards:'sparkles', achievements:'flame',
    challenges:'trophy', referral:'gift', progress:'trendingUp', workout:'dumbbell', aiCoach:'sparkles',
    classDetail:'calendar', bookConfirm:'checkCircle', bookSuccess:'ticket', myBookings:'ticket',
    trainer:'medal', checkout:'card', manageSub:'settings', wallet:'wallet', notifications:'bell',
    coachHome:'home', coachSchedule:'calendar', coachRoster:'userCheck', coachClients:'users', coachProfile:'user' };
  return m[k] || 'home';
}

/* ---- toggles ---- */
function toggleTheme() {
  const b = document.body;
  const dark = b.classList.toggle('theme-dark');
  b.classList.toggle('theme-light', !dark);
  document.getElementById('themeLbl').textContent = dark ? L('ليلي','Dark') : L('نهاري','Light');
  document.querySelector('#themeToggle .seg-ico').dataset.painted = '';
  document.querySelector('#themeToggle .seg-ico').dataset.icon = dark ? 'moon' : 'sun';
  paintIcons(document.getElementById('themeToggle'));
}
function toggleLang() {
  LANG = LANG === 'ar' ? 'en' : 'ar';
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langLbl').textContent = LANG === 'ar' ? 'عربي' : 'EN';
  buildIndex();
  render();
}

/* ---- freeze sheet ---- */
function openFreeze() { const s = document.getElementById('freezeSheet'); if (s) s.style.display = 'flex'; }
function closeFreeze() { const s = document.getElementById('freezeSheet'); if (s) s.style.display = 'none'; }

/* ---- live countdown timers (offer flash deals) ---- */
const p2 = n => String(n).padStart(2, '0');
function tickCountdowns(decrement) {
  document.querySelectorAll('.countdown').forEach(el => {
    let s = parseInt(el.dataset.sec || '0', 10);
    if (decrement && s > 0) { s--; el.dataset.sec = s; }
    el.textContent = `${p2(Math.floor(s / 3600))}:${p2(Math.floor((s % 3600) / 60))}:${p2(s % 60)}`;
  });
}

/* ---- toast ---- */
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1900);
}

/* ---- stage prev/next ---- */
function step(dir) {
  let i = ORDER.indexOf(current);
  i = (i + dir + ORDER.length) % ORDER.length;
  go(ORDER[i]);
}

/* ---- boot ---- */
window.addEventListener('DOMContentLoaded', () => {
  paintIcons(document);
  buildIndex();
  const h = location.hash.slice(1);
  if (SCREENS[h]) current = h;
  render();
  window.addEventListener('hashchange', () => {
    const k = location.hash.slice(1);
    if (SCREENS[k] && k !== current) go(k);
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('langToggle').addEventListener('click', toggleLang);
  document.getElementById('navPrev').addEventListener('click', () => step(1));
  document.getElementById('navNext').addEventListener('click', () => step(-1));
  document.getElementById('themeLbl').textContent = L('ليلي','Dark');
  setInterval(() => tickCountdowns(true), 1000); // live offer countdowns
});
