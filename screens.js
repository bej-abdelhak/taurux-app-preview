/* ============================================================
   SCREENS — each returns an HTML string for the .screen-host
   ============================================================ */

/* ---------- shared building blocks ---------- */
function greetHeader() {
  const u = DATA.user;
  return `
  <div class="greet">
    <div class="avatar-ring"><div class="avatar" style="width:46px;height:46px;display:grid;place-items:center;font-size:20px;background:var(--surface-2)">🦅</div></div>
    <div>
      <div class="greet-hi">${L('مساء الخير','Good evening')} ✨</div>
      <div class="greet-name">${L(u.firstName,u.firstNameEn)}</div>
    </div>
    <div class="greet-actions">
      <div class="greet-btn" onclick="go('aiCoach')">${svg('sparkles',20)}</div>
      <div class="greet-btn" onclick="go('notifications')">${svg('bell',20)}<span class="qa-dot">3</span></div>
    </div>
  </div>`;
}
function topbar(title, back) {
  return `<div class="topbar">
    <div class="topbar-btn" onclick="${back?`go('${back}')`:'history.back()'}">${svg('chevronRight',19)}</div>
    <div class="topbar-title">${title}</div>
  </div>`;
}
function ring(pct, size, inner, thick) {
  const t = thick || 9;
  return `<div class="ring" style="width:${size}px;height:${size}px;background:conic-gradient(var(--gold) ${pct}%, var(--surface-3) 0)">
    <div class="ring-inner" style="inset:${t}px">${inner}</div></div>`;
}
function barsChart(data, max) {
  const m = max || Math.max(...data.map(d=>d.v), 1);
  return `<div class="bars">${data.map(d=>{
    const h = Math.max(8, (d.v/m)*96);
    return `<div class="bar ${d.v===m?'on':''}" style="height:${h}px"><span class="bar-lbl">${L(d.d.ar,d.d.en)}</span></div>`;
  }).join('')}</div>`;
}
function secHead(title, link, onclick) {
  return `<div class="sec-head"><div class="sec-title">${title}</div>${link?`<div class="sec-link" onclick="${onclick||''}">${link} ${svg('chevronLeft',14)}</div>`:''}</div>`;
}

/* ============================================================ HOME */
function scrHome() {
  const u = DATA.user, s = DATA.sub, st = DATA.stats;
  const pct = Math.round((s.used/s.totalDays)*100);
  return `
  ${greetHeader()}
  <div class="px mt16">

    <!-- hero banner: real gym photos + Ken Burns slideshow -->
    <div class="hero-banner reveal">
      <div class="hero-stack">
        <img class="hero-slide" style="animation-delay:0s" src="assets/gym/gym2.jpg" alt="">
        <img class="hero-slide" style="animation-delay:5s" src="assets/gym/gym3.jpg" alt="">
        <img class="hero-slide" style="animation-delay:10s" src="assets/gym/gym4.jpg" alt="">
        <img class="hero-slide" style="animation-delay:15s" src="assets/gym/gym5.jpg" alt="">
      </div>
      <div class="hero-dots"><i></i><i></i><i></i><i></i></div>
      <div class="hero-body">
        <div class="hero-kicker">${svg('flame',13)} ${L('تمرين اليوم','TODAY')}</div>
        <div class="hero-h">${L('جاهز لتمرين الصدر والكتف؟','Ready for Push day?')}</div>
        <div class="hero-cta" onclick="go('workout')">${L('ابدأ التمرين','Start workout')} ${svg('chevronLeft',15)}</div>
      </div>
    </div>

    <!-- premium membership card -->
    <div class="member-card premium mt16">
      <div class="mc-grid"></div>
      <div class="mc-hdr">
        <div class="mc-brand">TAURUX</div>
        <div class="mc-tier">${svg('crown',12)} ${L(u.tier.ar,u.tier.en)} ${L('عضو','MEMBER')}</div>
      </div>
      <div class="mc-chiprow">
        <div class="mc-emv"></div>
        <div class="mc-nfc">${svg('nfc',22)}</div>
        <div style="margin-inline-start:auto;text-align:end">
          <div class="mc-cap">${L('الحالة','STATUS')}</div>
          <div style="display:flex;gap:5px;align-items:center;justify-content:flex-end;margin-top:3px">
            <span style="width:7px;height:7px;border-radius:50%;background:#22C55E;box-shadow:0 0 8px #22C55E"></span>
            <span style="font-size:11px;font-weight:800;color:#22C55E">${L('نشط','ACTIVE')}</span>
          </div>
        </div>
      </div>
      <div class="mc-pkgname">${L(s.pkg.ar,s.pkg.en)}</div>
      <div class="mc-no">#${u.clientNumber}</div>
      <div class="mc-ftr">
        <div>
          <div class="mc-cap">${L('صالحة حتى','VALID THRU')}</div>
          <div class="mc-thru">08 / 26</div>
        </div>
        <div class="mc-daysbox">
          <span class="mc-count num" data-count="${s.daysRemaining}">${s.daysRemaining}</span>
          <span class="mc-dayslbl">${L('يوم متبقٍ','DAYS LEFT')}</span>
        </div>
      </div>
      <div class="mc-prog" style="position:relative;z-index:2;margin-top:14px"><i style="width:${pct}%"></i></div>
    </div>

    <!-- streak + points strip -->
    <div class="row gap10 mt16">
      <div class="card pad" style="flex:1;display:flex;align-items:center;gap:12px" onclick="go('achievements')">
        <div style="position:relative">${ring(80,56,`<span style="font-size:20px">🔥</span>`,7)}</div>
        <div><div class="num" style="font-weight:800;font-size:20px"><span data-count="${u.streak}">${u.streak}</span> ${L('يوم','d')}</div>
        <div class="muted" style="font-size:11px">${L('سلسلة حضور','Streak')}</div></div>
      </div>
      <div class="card pad" style="flex:1;display:flex;align-items:center;gap:12px" onclick="go('rewards')">
        <div class="soft-ico" style="width:46px;height:46px">${svg('sparkles',22)}</div>
        <div><div class="num gold" style="font-weight:800;font-size:20px"><span data-count="${u.points}">${u.points.toLocaleString()}</span></div>
        <div class="muted" style="font-size:11px">${L('نقطة','points')}</div></div>
      </div>
    </div>

    <!-- quick actions -->
    ${secHead(L('وصول سريع','Quick actions'))}
    <div class="qa-grid">
      ${qa('scan', L('دخول','Check-in'), 'wallet')}
      ${qa('calendar', L('الحصص','Classes'), 'schedule')}
      ${qa('snowflake', L('تجميد','Freeze'), 'manageSub')}
      ${qa('dumbbell', L('تماريني','Workout'), 'workout')}
      ${qa('trendingUp', L('تقدمي','Progress'), 'progress')}
      ${qa('trophy', L('تحديات','Challenges'), 'challenges')}
      ${qa('gift', L('ادعُ صديق','Refer'), 'referral')}
      ${qa('sparkles', L('مدرب AI','AI Coach'), 'aiCoach')}
    </div>

    <!-- gym reels (real gym photos as video thumbnails) -->
    ${secHead(L('فيديوهات النادي','Gym Reels'), L('الكل','All'), "toast(L('مكتبة الفيديو','Video library'))")}
    <div class="reel-row reveal">
      ${[
        {img:'gym3.jpg', ar:'تمرين الصدر الكامل', en:'Full Chest Workout', dur:'0:45', v:'12.3k'},
        {img:'gym4.jpg', ar:'سكوات بأداء صحيح', en:'Perfect Squat Form', dur:'1:10', v:'8.7k'},
        {img:'gym5.jpg', ar:'كارديو لحرق الدهون', en:'Fat-burn Cardio', dur:'0:30', v:'21k'},
        {img:'gym2.jpg', ar:'إحماء قبل التمرين', en:'Warm-up Routine', dur:'0:55', v:'5.2k'},
      ].map(r=>`
        <div class="reel" onclick="toast(L('جارٍ تشغيل الفيديو ▶','Playing video ▶'))">
          <img src="assets/gym/${r.img}" alt="">
          <span class="reel-dur">${r.dur}</span>
          <div class="reel-play">${svg('play',18)}</div>
          <div class="reel-meta"><div class="reel-title">${L(r.ar,r.en)}</div>
          <div class="reel-views">${svg('play',10)} ${r.v} ${L('مشاهدة','views')}</div></div>
        </div>`).join('')}
    </div>

    <!-- stats -->
    ${secHead(L('نشاطك','Your activity'), L('الكل','All'), "go('activity')")}
    <div class="stat-grid">
      ${stat(st.totalVisits, L('إجمالي الزيارات','Total visits'), 'activity', '#3B82F6')}
      ${stat(st.monthVisits, L('هذا الشهر','This month'), 'flame', '#22C55E')}
      ${stat(st.freezeDays, L('أيام التجميد','Freeze days'), 'snowflake', '#06B6D4')}
    </div>
    <div class="card pad mt12">
      <div class="between"><div style="font-size:13px;font-weight:700">${L('زياراتك هذا الأسبوع','This week')}</div>
      <div class="pill gold">${svg('trendingUp',13)} +18%</div></div>
      <div class="mt24" style="margin-bottom:20px">${barsChart(DATA.week)}</div>
    </div>

    <!-- AI coach banner -->
    <div class="hero mt16" onclick="go('aiCoach')" style="cursor:pointer">
      <div class="row gap12">
        <div class="hero-emoji">🤖</div>
        <div style="flex:1">
          <div style="font-weight:800;font-size:15px">${L('مدربك الذكي جاهز','Your AI coach is ready')}</div>
          <div class="dim" style="font-size:12px;margin-top:3px">${L('اسأل عن التغذية، التمارين، أو خطة مخصصة','Ask about nutrition, workouts or a custom plan')}</div>
        </div>
        ${svg('chevronLeft',20)}
      </div>
    </div>

    <!-- today classes -->
    ${secHead(L('حصص اليوم','Today\'s classes'), L('الجدول','Schedule'), "go('schedule')")}
    <div class="chip-row" style="gap:12px">
      ${DATA.classes.slice(0,3).map(c=>classCard(c)).join('')}
    </div>

    <!-- promo (onboard image) -->
    <div class="promo reveal mt16" onclick="go('store')">
      <img src="assets/onboard/4.webp" alt="">
      <div class="promo-body">
        <div class="hero-kicker">${svg('gift',13)} ${L('عرض خاص','LIMITED OFFER')}</div>
        <div style="font-weight:900;font-size:16px;margin-top:6px;line-height:1.35">${L('خصم 25% على الباقة السنوية','25% off the Annual Plan')}</div>
        <div class="hero-cta" style="margin-top:10px">${L('اشترك الآن','Subscribe')} ${svg('chevronLeft',15)}</div>
      </div>
    </div>

    <!-- branch -->
    <div class="card pad mt16 row gap12">
      <div class="soft-ico">${svg('mapPin',20)}</div>
      <div style="flex:1"><div style="font-weight:700;font-size:14px">${L('فرع الملز','Malaz Branch')}</div>
      <div class="muted" style="font-size:11.5px">${L('الرياض · يفتح حتى 12 منتصف الليل','Riyadh · Open till 12 AM')}</div></div>
      <div class="topbar-btn" onclick="toast(L('فتح الخريطة','Opening map'))">${svg('arrowUpRight',18)}</div>
    </div>
  </div>`;
}
function qa(icon, label, target, arg) {
  return `<div class="qa" onclick="go('${target}'${arg!=null?','+arg:''})">
    <div class="qa-ic">${svg(icon,23)}</div><div class="qa-lbl">${label}</div></div>`;
}
function stat(v, l, ic, color) {
  return `<div class="stat"><div class="ic" style="background:${color}22;color:${color}">${svg(ic,16)}</div>
    <div class="v num" data-count="${v}">${v}</div><div class="l">${l}</div></div>`;
}
function classCard(c) {
  return `<div class="class-card" onclick="go('classDetail')"><div class="bar-l" style="background:${c.color}"></div>
    <div class="between"><div class="pill" style="font-size:10.5px;padding:3px 8px">${c.time}</div>
    ${c.spots===0?'<span class="pill red" style="font-size:10px;padding:3px 8px">'+L('مكتمل','Full')+'</span>':'<span class="pill green" style="font-size:10px;padding:3px 8px">'+c.spots+' '+L('مقعد','left')+'</span>'}</div>
    <div style="font-weight:800;font-size:15px;margin-top:10px">${L(c.name.ar,c.name.en)}</div>
    <div class="muted" style="font-size:11.5px;margin-top:3px">${L(c.trainer.ar,c.trainer.en)} · ${L(c.day.ar,c.day.en)}</div></div>`;
}

/* ============================================================ ACTIVITY */
let activityTab = 0;
function scrActivity() {
  const st = DATA.stats;
  return `
  ${topbar(L('نشاطي','My Activity'), 'home')}
  <div class="px mt8">
    <!-- monthly summary hero -->
    <div class="act-hero reveal">
      <div class="between">
        <div>
          <div class="muted" style="font-size:12px">${L('زياراتك هذا الشهر','Visits this month')}</div>
          <div class="row gap8" style="align-items:flex-end;margin-top:5px">
            <span class="act-big">${st.monthVisits}</span>
            <span class="muted" style="padding-bottom:5px;font-size:12px">${L('من 20 هدفك','of 20 goal')}</span>
          </div>
          <span class="pill green" style="margin-top:11px">${svg('trendingUp',13)} ${L('+18% عن الشهر الماضي','+18% vs last month')}</span>
        </div>
        ${ring(70, 80, `<div class="num" style="font-weight:900;font-size:17px">70%</div><div class="muted" style="font-size:9px">${L('الهدف','goal')}</div>`, 7)}
      </div>
      <div style="margin-top:22px;margin-bottom:22px">${barsChart(DATA.week)}</div>
    </div>

    <!-- mini stats -->
    <div class="stat-grid mt14">
      ${stat(st.totalVisits, L('إجمالي الزيارات','Total visits'), 'activity', '#3B82F6')}
      ${stat(71, L('متوسط الجلسة','Avg (min)'), 'clock', '#22C55E')}
      ${stat(DATA.user.streak, L('سلسلة الأيام','Day streak'), 'flame', '#F97316')}
    </div>

    <div class="tabs mt16">
      ${['زيارات|Visits','فواتير|Invoices','اشتراكات|Subs'].map((x,i)=>{const[a,e]=x.split('|');return `<div class="tab ${activityTab===i?'on':''}" onclick="activityTab=${i};render()">${L(a,e)}</div>`}).join('')}
    </div>
    <div class="mt8">${activityTab===0?actVisits():activityTab===1?actInvoices():actSubs()}</div>
  </div>`;
}
function actVisits() {
  let html = ''; let last = null;
  DATA.visits.forEach(v => {
    const g = L(v.group.ar, v.group.en);
    if (g !== last) { html += `<div class="tl-group">${g}</div>`; last = g; }
    const color = v.mIcon === 'qr' ? '#3B82F6' : '#D4AF37';
    html += `
    <div class="vcard" onclick="toast(L('تفاصيل الزيارة','Visit details'))">
      <span class="vcard-rail" style="background:${color}"></span>
      <div class="vcard-ic" style="background:${color}22;color:${color}">${svg(v.mIcon,20)}</div>
      <div class="vcard-main">
        <div class="vcard-title">${L(v.type.ar,v.type.en)}</div>
        <div class="vcard-sub">${svg('clock',12)} ${v.time} – ${v.out}</div>
        <div class="vcard-tags">
          <span class="vtag">${svg(v.mIcon,11)} ${L(v.method.ar,v.method.en)}</span>
          <span class="vtag kcal">${svg('flame',11)} ${v.kcal} ${L('سعرة','kcal')}</span>
        </div>
      </div>
      <div class="vcard-dur"><div class="num">${v.dur}</div><div class="unit">${L('دقيقة','min')}</div></div>
    </div>`;
  });
  return html;
}
function actInvoices() {
  return `
    <div class="act-spent">
      <div><div class="muted" style="font-size:12px">${L('أنفقت هذا الشهر','Spent this month')}</div>
      <div class="num gold" style="font-weight:900;font-size:23px;margin-top:3px">1,885 <span style="font-size:12px">${L('ر.س','SAR')}</span></div></div>
      <div class="soft-ico" style="width:46px;height:46px">${svg('wallet',22)}</div>
    </div>
    <div class="chip-row" style="margin-bottom:12px">${['الكل|All','اشتراكات|Subs','متجر|Shop','تدريب|PT'].map((x,i)=>{const[a,e]=x.split('|');return `<div class="chip ${i===0?'on gold':''}">${L(a,e)}</div>`}).join('')}</div>`+
  DATA.invoices.map(v=>`
    <div class="card pad mt8 row gap12" onclick="toast(L('تفاصيل الفاتورة','Invoice detail'))">
      <div class="soft-ico" style="background:${v.color}22;color:${v.color}">${svg(v.icon,20)}</div>
      <div style="flex:1"><div style="font-weight:700;font-size:14px">${L(v.t.ar,v.t.en)}</div>
      <div class="muted" style="font-size:11.5px">${v.date} · ${v.method}</div></div>
      <div class="num" style="font-weight:800">${v.amount} <span style="font-size:11px" class="gold">${L('ر.س','SAR')}</span></div>
    </div>`).join('');
}
function actSubs() {
  const s = DATA.sub;
  return `
    <div class="card pad" style="border-color:var(--gold-line)">
      <div class="between"><span class="pill gold">${svg('crown',13)} ${L('نشط','Active')}</span>
      <span class="num muted" style="font-size:12px">#10428-A</span></div>
      <div style="font-weight:800;font-size:18px;margin-top:12px">${L(s.pkg.ar,s.pkg.en)}</div>
      <div class="row gap8 mt8" style="font-size:12px" class="dim">
        <span class="dim">${s.start}</span><span class="muted">←</span><span class="dim">${s.end}</span>
      </div>
      <div class="hr"></div>
      <div class="between"><span class="muted" style="font-size:12px">${L('المدفوع','Paid')}</span><span class="num" style="font-weight:700">1,499 ${L('ر.س','SAR')}</span></div>
      <div class="between mt8"><span class="muted" style="font-size:12px">${L('أيام التجميد','Freeze days')}</span><span class="num gold" style="font-weight:700">${s.freezeDays}</span></div>
      <button class="btn btn-ghost btn-sm mt16" style="width:100%" onclick="go('manageSub')">${L('إدارة الاشتراك','Manage subscription')}</button>
    </div>
    <div class="card pad mt12" style="opacity:.65">
      <div class="between"><span class="pill">${L('منتهٍ','Expired')}</span><span class="num muted" style="font-size:12px">#10428</span></div>
      <div style="font-weight:800;font-size:16px;margin-top:10px">${L('باقة شهرية','Monthly Plan')}</div>
      <div class="muted" style="font-size:12px;margin-top:4px">5 فبراير ← 5 مايو</div>
    </div>`;
}

/* ============================================================ STORE (tabs: Plans / PT / Products) */
let storeTab = 0;
function scrStore() {
  return `
  ${topbar(L('المتجر','Store'), 'home')}
  <div class="px mt8">
    <div class="tabs">
      <div class="tab ${storeTab===0?'on':''}" onclick="storeTab=0;render()">${L('الباقات','Plans')}</div>
      <div class="tab ${storeTab===1?'on':''}" onclick="storeTab=1;render()">${L('تدريب شخصي','PT')}</div>
      <div class="tab ${storeTab===2?'on':''}" onclick="storeTab=2;render()">${L('منتجات','Shop')}</div>
    </div>
    <div class="mt8">${storeTab===0?storePlans():storeTab===1?storePT():storeProducts()}</div>
  </div>`;
}

function storePlans() {
  return `
    <div class="sec-head" style="margin:18px 0 12px">
      <div class="sec-title">🔥 ${L('عروض حصرية','Exclusive offers')}</div>
      <div class="sec-link" onclick="toast(L('كل العروض','All offers'))">${L('تنتهي قريباً','Ending soon')} ${svg('chevronLeft',14)}</div>
    </div>
    <div class="offer-row reveal">${DATA.offers.map(o=>offerCard(o)).join('')}</div>
    <div class="promo-field mt16">
      <div class="soft-ico">${svg('gift',16)}</div>
      <input placeholder="${L('عندك كود خصم؟','Got a promo code?')}" />
      <button class="btn btn-gold btn-sm" onclick="toast(L('جارٍ التحقق من الكود...','Checking code...'))">${L('تطبيق','Apply')}</button>
    </div>
    <div class="sec-head" style="margin:26px 0 12px"><div class="sec-title">${L('اختر باقتك','Choose your plan')}</div>
    <div class="sec-link" onclick="toast(L('مقارنة الباقات','Compare plans'))">${L('قارن','Compare')}</div></div>
    <div class="chip-row">${['الكل|All','شهور|Months','سنوي|Annual','أيام|Days'].map((x,i)=>{const[a,e]=x.split('|');return `<div class="chip ${i===0?'on gold':''}">${L(a,e)}</div>`}).join('')}</div>
    <div class="mt16" style="display:flex;flex-direction:column;gap:14px">${DATA.packages.map(p=>pkgCard(p)).join('')}</div>
    <div class="muted" style="text-align:center;font-size:11px;margin-top:16px">${svg('shield',12)} ${L('جميع الأسعار شاملة ضريبة القيمة المضافة 15%','All prices include 15% VAT')}</div>`;
}

function storePT() {
  return `
    <div class="hero mt16" style="text-align:center;padding:22px">
      <div style="font-size:34px">🏋️</div>
      <div style="font-weight:900;font-size:18px;margin-top:6px">${L('درّب مع نخبة المدربين','Train with elite coaches')}</div>
      <div class="dim" style="font-size:12.5px;margin-top:5px">${L('برنامج مخصّص لهدفك مع متابعة أسبوعية','A plan built for your goal + weekly follow-up')}</div>
    </div>
    ${secHead(L('اختر مدرّبك','Pick your coach'))}
    <div class="reel-row" style="gap:11px">
      ${DATA.trainers.map(t=>`
        <div class="pt-trainer" onclick="go('trainer')">
          <div class="av">${t.emoji}</div>
          <div class="nm">${L(t.name.ar,t.name.en)}</div>
          <div class="sp">${L(t.spec.ar,t.spec.en)}</div>
          <div class="rt"><span class="pill gold" style="font-size:10px;padding:3px 8px">${svg('star',11)} ${t.rating}</span></div>
        </div>`).join('')}
    </div>
    ${secHead(L('باقات التدريب','PT packages'))}
    <div style="display:flex;flex-direction:column;gap:12px">${DATA.ptPackages.map(p=>ptCard(p)).join('')}</div>
    <div class="muted" style="text-align:center;font-size:11px;margin-top:16px">${svg('shield',12)} ${L('الجلسات صالحة 3 أشهر · شاملة الضريبة','Sessions valid 3 months · incl. VAT')}</div>`;
}
function ptCard(p) {
  const save = p.old - p.price;
  return `
  <div class="pt-pkg ${p.popular?'feat':''}" onclick="go('checkout')">
    ${p.popular?`<div class="between" style="margin-bottom:12px"><span class="pill gold">${svg('crown',13)} ${L('الأكثر طلباً','Most popular')}</span><span class="pill green">${svg('zap',12)} ${L('وفّر','Save')} ${save}</span></div>`:''}
    <div class="row gap14">
      <div class="pt-sessions"><div class="n">${p.sessions}</div><div class="l">${L('حصص','SESSIONS')}</div></div>
      <div style="flex:1">
        <div style="font-weight:800;font-size:16px">${L(p.ar,p.en)}</div>
        <div class="muted" style="font-size:11.5px;margin-top:2px">≈ ${p.per} ${L('ر.س/حصة','SAR/session')}</div>
      </div>
      <div style="text-align:end">
        <div class="muted num" style="font-size:12px;text-decoration:line-through">${p.old}</div>
        <div class="num" style="font-weight:900;font-size:21px">${p.price} <span class="gold" style="font-size:11px">${L('ر.س','SAR')}</span></div>
      </div>
    </div>
    <button class="btn ${p.popular?'btn-gold':'btn-ghost'} mt16">${L('احجز الآن','Book now')} ${svg('chevronLeft',16)}</button>
  </div>`;
}

function storeProducts() {
  return `
    <div class="chip-row mt16">${['الكل|All','مكملات|Supplements','مشروبات|Drinks','ملابس|Apparel','إكسسوارات|Gear'].map((x,i)=>{const[a,e]=x.split('|');return `<div class="chip ${i===0?'on gold':''}">${L(a,e)}</div>`}).join('')}</div>
    <div class="prod-grid mt16">
      ${DATA.products.map(p=>`
        <div class="prod-card" onclick="go('checkout')">
          <div class="prod-emoji" style="background:${p.color}1f">${p.emoji}</div>
          <div class="prod-cat">${L(p.catAr,p.catEn)}</div>
          <div class="prod-name">${L(p.nameAr,p.nameEn)}</div>
          <div class="prod-foot">
            <div class="prod-price">${p.price} <span class="gold">${L('ر.س','SAR')}</span></div>
            <button class="prod-add" onclick="event.stopPropagation();toast(L('أُضيف للسلة 🛒','Added to cart 🛒'))">${svg('plus',17)}</button>
          </div>
        </div>`).join('')}
    </div>
    <div style="height:10px"></div>`;
}

/* ============================================================ SCHEDULE (الحصص) */
let scheduleDay = 0;
function scrSchedule() {
  const days = DATA.scheduleDays;
  const day = days[scheduleDay] || days[0];
  return `
  ${topbar(L('الحصص','Classes'), 'home')}
  <div class="px mt8">
    <div class="dim" style="font-size:13px">${L('اختر اليوم واحجز مكانك في الحصة','Pick a day and book your spot')}</div>
    <div class="day-row mt16">
      ${days.map((d,i)=>`
        <div class="day-pill ${i===scheduleDay?'on':''}" onclick="scheduleDay=${i};render()">
          <div class="day-wk">${L(d.dayAr,d.dayEn)}</div>
          <div class="day-dt">${d.date}</div>
        </div>`).join('')}
    </div>
    <div class="chip-row mt16">${['الكل|All','كروس فت|CrossFit','يوغا|Yoga','أثقال|Strength','ملاكمة|Boxing'].map((x,i)=>{const[a,e]=x.split('|');return `<div class="chip ${i===0?'on gold':''}">${L(a,e)}</div>`}).join('')}</div>
    <div class="between mt20">
      <div class="sec-title">${L(day.dayAr,day.dayEn)} · ${day.date} ${L(day.monthAr,day.monthEn)}</div>
      <span class="num muted" style="font-size:12px">${day.items.length} ${L('حصص','classes')}</span>
    </div>
    <div class="mt12">${day.items.map(c=>schedCard(c)).join('')}</div>
  </div>`;
}
function schedCard(c) {
  const full = c.spots === 0;
  const low = c.spots > 0 && c.spots <= 3;
  return `
  <div class="sched-card ${full?'full':''}" onclick="${full?"toast(L('انضممت لقائمة الانتظار','Added to waitlist'))":"go('classDetail')"}">
    <div class="sched-time">
      <div class="sched-h">${c.time}</div>
      <div class="sched-ap">${L(c.apAr,c.apEn)}</div>
      <div class="sched-dur">${c.dur} ${L('د','min')}</div>
    </div>
    <div class="sched-rail" style="background:${c.color}"></div>
    <div class="sched-body">
      <span class="sched-cat" style="color:${c.color};background:${c.color}1f">${c.emoji} ${L(c.catAr,c.catEn)}</span>
      <div class="sched-name">${L(c.nameAr,c.nameEn)}</div>
      <div class="sched-tr"><div class="sched-av">🧑‍🏫</div><span>${L(c.trAr,c.trEn)}</span></div>
      <div class="sched-foot">
        ${full
          ? `<span class="pill red" style="font-size:10.5px;padding:3px 9px">${L('مكتمل','Full')}</span>`
          : `<span class="sched-spots"><span class="sdot" style="background:${low?'#F97316':'#22C55E'}"></span>${c.spots} ${L('مقاعد متبقية','spots left')}</span>`}
        ${full
          ? `<span class="sched-wait">${L('قائمة الانتظار','Waitlist')} ${svg('chevronLeft',12)}</span>`
          : `<span class="sched-book">${L('احجز','Book')} ${svg('chevronLeft',13)}</span>`}
      </div>
    </div>
  </div>`;
}

function offerCard(o) {
  const onClick = o.kind === 'refer' ? "go('referral')" : "go('checkout')";
  const corner = o.kind === 'flash'
    ? `<span class="offer-flash">${svg('clock',12)} <span class="countdown" data-sec="${o.sec}">--:--:--</span></span>`
    : `<span class="offer-tag">${L(o.tagAr,o.tagEn)}</span>`;
  return `
  <div class="offer" onclick="${onClick}">
    <img src="assets/gym/${o.img}" alt="">
    <span class="offer-badge">${L(o.disc, o.discEn || o.disc)}</span>
    ${corner}
    <div class="offer-body">
      <div class="offer-title">${L(o.ar,o.en)}</div>
      <div class="offer-sub">${L(o.subAr,o.subEn)}</div>
      <div class="offer-cta">${L('احصل عليه','Get it')} ${svg('chevronLeft',14)}</div>
    </div>
  </div>`;
}

function pkgCard(p) {
  const save = p.old ? p.old - p.price : 0;
  const perMonth = p.months > 1 ? Math.round(p.price / p.months) : 0;
  const perks = p.perks.map(pk =>
    `<div class="perk"><span class="pk-ic">${svg('check',13)}</span>${L(pk.ar,pk.en)}</div>`).join('')
    + (p.extra ? `<div class="perk extra"><span class="pk-ic">${svg('zap',13)}</span>${L(p.extra.ar,p.extra.en)}</div>` : '');
  const topRow = (p.popular || save) ? `
    <div class="between" style="margin-bottom:14px">
      ${p.popular ? `<span class="pill gold">${svg('crown',13)} ${L('الأكثر طلباً','Most popular')}</span>` : '<span></span>'}
      ${save ? `<span class="pill green">${svg('zap',12)} ${L('وفّر','Save')} ${save} ${L('ر.س','SAR')}</span>` : '<span></span>'}
    </div>` : '';
  return `
  <div class="pkg ${p.popular ? 'feat' : ''}" onclick="go('checkout')">
    ${topRow}
    <div class="pkg-head">
      <div><div class="pkg-name">${L(p.name.ar,p.name.en)}</div><div class="pkg-dur">${L(p.dur.ar,p.dur.en)}</div></div>
      <div class="pkg-price">
        ${p.old ? `<div class="pkg-old">${p.old}</div>` : ''}
        <div class="pkg-now">${p.price} <span class="gold">${L('ر.س','SAR')}</span></div>
        ${perMonth ? `<div class="pkg-pm">≈ ${perMonth} ${L('ر.س/شهر','SAR/mo')}</div>` : ''}
      </div>
    </div>
    <div class="pkg-perks">${perks}</div>
    <div class="pay-mini mt16">
      <span>${L('مدى','mada')}</span><span>VISA</span><span>Mastercard</span><span>Apple Pay</span><span>Tamara</span><span>Tabby</span>
    </div>
    <button class="btn ${p.popular ? 'btn-gold' : 'btn-ghost'} mt16">${L('اشترك الآن','Subscribe now')} ${svg('chevronLeft',16)}</button>
  </div>`;
}

/* ============================================================ CHECKOUT (sub-page) */
function scrCheckout() {
  return `
  ${topbar(L('إتمام الاشتراك','Checkout'), 'store')}
  <div class="px mt8 no-nav-pad">
    <div class="member-card" style="padding:18px">
      <div class="mc-row"><div class="mc-name">${L('باقة','Plan')}</div><div class="mc-pkg" style="font-size:20px">${L('باقة النخبة','Elite Plan')}</div>
      <div style="opacity:.7;font-size:12px;margin-top:4px">${L('3 أشهر · تبدأ اليوم','3 Months · starts today')}</div></div>
    </div>

    <div class="card pad mt16">
      <div class="tile" style="padding:8px 0"><div class="soft-ico">${svg('calendar',18)}</div>
      <div class="tile-main"><div class="tile-title">${L('تاريخ البداية','Start date')}</div><div class="tile-sub">${L('اليوم، 21 يونيو','Today, Jun 21')}</div></div>
      ${svg('chevronLeft',18)}</div>
      <div class="hr"></div>
      <div class="tile" style="padding:8px 0"><div class="soft-ico">${svg('gift',18)}</div>
      <div class="tile-main"><div class="tile-title">${L('كود الخصم','Promo code')}</div><div class="tile-sub gold">WELCOME25 ${L('مطبّق','applied')} ✓</div></div>
      <span class="pill green">−25%</span></div>
    </div>

    ${secHead(L('طريقة الدفع','Payment method'))}
    ${payOpt('card', L('بطاقة','Card'), L('مدى · فيزا · Apple Pay','mada · VISA · Apple Pay'), true)}
    ${payOpt('wallet', 'Tamara', L('قسّمها على 4 دفعات','Split in 4 · interest-free'), false)}
    ${payOpt('wallet', 'Tabby', L('ادفع لاحقاً','Pay later · 4×'), false)}

    <div class="card pad mt16">
      <div class="between"><span class="muted" style="font-size:13px">${L('سعر الباقة','Plan price')}</span><span class="num">1,799</span></div>
      <div class="between mt8"><span class="muted" style="font-size:13px">${L('خصم WELCOME25','WELCOME25')}</span><span class="num" style="color:var(--green)">−450</span></div>
      <div class="between mt8"><span class="muted" style="font-size:13px">${L('ضريبة (15%)','VAT (15%)')}</span><span class="num">202</span></div>
      <div class="hr"></div>
      <div class="between"><span style="font-weight:800">${L('الإجمالي','Total')}</span><span class="num gold" style="font-weight:800;font-size:20px">1,499 ${L('ر.س','SAR')}</span></div>
    </div>
    <button class="btn btn-gold mt16" onclick="toast(L('جارٍ فتح بوابة الدفع...','Opening payment...'))">${svg('lock',17)} ${L('ادفع بأمان','Pay securely')} · 1,499 ${L('ر.س','SAR')}</button>
    <div class="muted" style="text-align:center;font-size:11px;margin-top:10px">${svg('shield',12)} ${L('دفع مشفّر وآمن 100%','100% encrypted & secure')}</div>
  </div>`;
}
function payOpt(ic, t, sub, on) {
  return `<div class="card pad mt8 row gap12" style="${on?'border-color:var(--gold-line);background:var(--gold-soft)':''}" onclick="toast('${t}')">
    <div class="soft-ico">${svg(ic,18)}</div>
    <div style="flex:1"><div style="font-weight:700;font-size:14px">${t}</div><div class="muted" style="font-size:11.5px">${sub}</div></div>
    <div style="width:22px;height:22px;border-radius:50%;border:2px solid ${on?'var(--gold)':'var(--line-2)'};display:grid;place-items:center">${on?'<div style="width:11px;height:11px;border-radius:50%;background:var(--gold)"></div>':''}</div>
  </div>`;
}

/* ============================================================ REWARDS / POINTS */
function scrRewards() {
  const u = DATA.user;
  return `
  ${topbar(L('نقاطي ومكافآتي','Points & Rewards'), 'home')}
  <div class="px mt8">
    <div class="hero" style="text-align:center;padding:26px">
      <div class="num" style="font-weight:900;font-size:46px;color:var(--gold-text);line-height:1">${u.points.toLocaleString()}</div>
      <div class="dim" style="font-weight:700;margin-top:4px">${svg('sparkles',14)} ${L('نقطة Taurux','Taurux Points')}</div>
      <div class="pill gold" style="margin-top:14px">${svg('crown',13)} ${L('عضو','Tier')}: ${L(u.tier.ar,u.tier.en)} · ${L('باقٍ 660 لـ بلاتيني','660 to Platinum')}</div>
      <div class="mc-prog" style="margin-top:14px;background:var(--surface-3)"><i style="width:72%"></i></div>
    </div>

    ${secHead(L('اكسب نقاط','Earn points'))}
    <div class="row gap10">
      ${earn('checkCircle', '+50', L('كل حضور','Per visit'))}
      ${earn('calendar', '+80', L('حصة جماعية','Group class'))}
      ${earn('users', '+500', L('دعوة صديق','Refer'))}
    </div>

    ${secHead(L('استبدل نقاطك','Redeem'), L('سجل','History'), "toast(L('سجل النقاط','Points history'))")}
    ${DATA.rewards.map(r=>`
      <div class="reward">
        <div class="soft-ico" style="width:46px;height:46px">${svg(r.ic,20)}</div>
        <div style="flex:1"><div style="font-weight:700;font-size:14.5px">${L(r.t.ar,r.t.en)}</div>
        <div class="muted" style="font-size:11.5px">${L(r.d.ar,r.d.en)}</div></div>
        <button class="btn btn-ghost btn-sm" onclick="toast(L('تم الاستبدال!','Redeemed!'))">
          <span class="reward-cost">${svg('sparkles',14)} ${r.cost}</span></button>
      </div>`).join('')}
  </div>`;
}
function earn(ic, pts, l) {
  return `<div class="card pad" style="flex:1;text-align:center">
    <div class="soft-ico" style="margin:0 auto 8px">${svg(ic,20)}</div>
    <div class="num gold" style="font-weight:800;font-size:17px">${pts}</div>
    <div class="muted" style="font-size:11px;margin-top:2px">${l}</div></div>`;
}

/* ============================================================ ACHIEVEMENTS / STREAK */
function scrAchievements() {
  const u = DATA.user;
  const days = ['س','ح','ن','ث','ر','خ','ج'];
  return `
  ${topbar(L('إنجازاتي','Achievements'), 'home')}
  <div class="px mt8">
    <div class="hero" style="text-align:center;padding:24px">
      <div style="font-size:54px">🔥</div>
      <div class="num" style="font-weight:900;font-size:32px;margin-top:4px">${u.streak} ${L('يوم','days')}</div>
      <div class="dim" style="font-weight:700">${L('سلسلة حضور متواصلة','Current streak')}</div>
      <div class="row gap6 mt16" style="justify-content:center">
        ${days.map((d,i)=>`<div style="display:flex;flex-direction:column;align-items:center;gap:5px">
          <div style="width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-size:13px;${i<5?'background:var(--gold);color:#111':'background:var(--surface-2);color:var(--text-mute)'}">${i<5?'✓':d}</div>
          <span style="font-size:9px" class="muted">${d}</span></div>`).join('')}
      </div>
      <div class="muted" style="font-size:11.5px;margin-top:14px">${L('لا تكسر السلسلة! احضر اليوم لإكمالها','Don\'t break the chain — check in today')}</div>
    </div>

    ${secHead(L('الشارات','Badges'), `${DATA.badges.filter(b=>b.got).length}/${DATA.badges.length}`)}
    <div class="badge-grid">
      ${DATA.badges.map(b=>`<div class="badge ${b.got?'':'locked'}">
        ${b.got?'':'<div style="position:absolute;top:10px;inset-inline-end:10px">'+svg('lock',13)+'</div>'}
        <div class="badge-ic">${svg(b.ic,26)}</div>
        <div class="badge-t">${L(b.t.ar,b.t.en)}</div>
        <div class="badge-d">${b.got?L('مكتمل','Earned'):L('مقفل','Locked')}</div></div>`).join('')}
    </div>

    ${secHead(L('المعالم القادمة','Next milestones'))}
    <div class="card pad">
      ${milestone(L('200 زيارة','200 Visits'), 186, 200)}
      <div class="hr"></div>
      ${milestone(L('30 يوم متتالي','30-day streak'), 12, 30)}
    </div>
  </div>`;
}
function milestone(t, cur, goal) {
  const pct = Math.round(cur/goal*100);
  return `<div><div class="between"><span style="font-weight:700;font-size:13.5px">${t}</span><span class="num muted" style="font-size:12px">${cur}/${goal}</span></div>
    <div class="mc-prog" style="margin-top:8px;background:var(--surface-3)"><i style="width:${pct}%"></i></div></div>`;
}

/* ============================================================ CHALLENGES + LEADERBOARD */
let chalTab = 0;
function scrChallenges() {
  return `
  ${topbar(L('التحديات','Challenges'), 'home')}
  <div class="px mt8">
    <div class="tabs">
      <div class="tab ${chalTab===0?'on':''}" onclick="chalTab=0;render()">${L('تحدياتي','My Challenges')}</div>
      <div class="tab ${chalTab===1?'on':''}" onclick="chalTab=1;render()">${L('المتصدرون','Leaderboard')}</div>
    </div>
    <div class="mt16">${chalTab===0?chalList():leaderboard()}</div>
  </div>`;
}
function chalList() {
  return DATA.challenges.map(c=>{
    const pct = Math.round(c.cur/c.goal*100);
    return `<div class="card pad mt12">
      <div class="between"><div><div style="font-weight:800;font-size:16px">${L(c.t.ar,c.t.en)}</div>
      <div class="muted" style="font-size:12px;margin-top:2px">${L(c.d.ar,c.d.en)}</div></div>
      <div class="soft-ico" style="width:44px;height:44px">${svg('target',22)}</div></div>
      <div class="mc-prog mt16" style="background:var(--surface-3)"><i style="width:${pct}%"></i></div>
      <div class="between mt8"><span class="num" style="font-weight:700;font-size:13px">${c.cur}/${c.goal}</span>
      <span class="pill gold">${svg('sparkles',13)} +${c.reward} ${L('نقطة','pts')}</span></div>
    </div>`;
  }).join('') + `
    <div class="card pad mt12" style="border-style:dashed;text-align:center;cursor:pointer" onclick="toast(L('استكشف التحديات','Explore challenges'))">
      <div class="soft-ico" style="margin:0 auto 10px">${svg('plus',22)}</div>
      <div style="font-weight:700;font-size:14px">${L('انضم لتحدٍ جديد','Join a new challenge')}</div>
      <div class="muted" style="font-size:12px;margin-top:2px">${L('5 تحديات متاحة هذا الشهر','5 challenges available')}</div>
    </div>`;
}
function leaderboard() {
  return `<div class="card pad" style="text-align:center;margin-bottom:16px">
      <div class="muted" style="font-size:12px">${L('ترتيبك هذا الشهر','Your rank this month')}</div>
      <div class="num gold" style="font-weight:900;font-size:40px">#3</div>
      <div class="dim" style="font-size:12px">${L('من 248 عضو نشط','of 248 active members')}</div>
    </div>` +
    DATA.leaderboard.map((r,i)=>`
    <div class="lb-row ${r.me?'me':''}">
      <div class="lb-rank ${i<3?'top':''}">${r.emoji||('#'+(i+1))}</div>
      <div class="avatar" style="width:38px;height:38px;display:grid;place-items:center;font-size:16px">${['🦁','🐯','🦅','🐺','🦊'][i]}</div>
      <div style="flex:1;font-weight:700;font-size:14px">${L(r.name.ar,r.name.en)}</div>
      <div class="num gold" style="font-weight:800;font-size:14px">${r.pts.toLocaleString()}</div>
    </div>`).join('');
}

/* ============================================================ REFERRAL */
function scrReferral() {
  return `
  ${topbar(L('ادعُ صديقاً','Refer a Friend'), 'home')}
  <div class="px mt8">
    <div class="hero" style="text-align:center;padding:28px">
      <div style="font-size:48px">🎁</div>
      <div style="font-weight:900;font-size:22px;margin-top:8px">${L('اكسب 500 نقطة','Earn 500 points')}</div>
      <div class="dim" style="font-size:13px;margin-top:6px;line-height:1.7">${L('لكل صديق يشترك عبر رابطك،','For every friend who joins,')}<br>${L('تحصل أنت و صديقك على 500 نقطة 🎉','you both get 500 points 🎉')}</div>
    </div>

    <div class="card pad mt16">
      <div class="muted" style="font-size:12px">${L('كود الدعوة الخاص بك','Your referral code')}</div>
      <div class="between mt8" style="background:var(--surface-2);border:1px dashed var(--gold-line);border-radius:14px;padding:14px 16px">
        <span class="num gold" style="font-weight:800;font-size:22px;letter-spacing:3px">FAHD500</span>
        <div class="topbar-btn" onclick="toast(L('تم نسخ الكود','Code copied'))">${svg('copy',18)}</div>
      </div>
      <button class="btn btn-gold mt16" onclick="toast(L('مشاركة الرابط...','Sharing...'))">${svg('share',17)} ${L('شارك الرابط','Share invite link')}</button>
    </div>

    <div class="row gap10 mt16">
      <div class="card pad" style="flex:1;text-align:center"><div class="num gold" style="font-weight:800;font-size:24px">4</div><div class="muted" style="font-size:11px">${L('دعوات ناجحة','Joined')}</div></div>
      <div class="card pad" style="flex:1;text-align:center"><div class="num" style="font-weight:800;font-size:24px">2,000</div><div class="muted" style="font-size:11px">${L('نقطة مكتسبة','Points earned')}</div></div>
    </div>

    ${secHead(L('أصدقاؤك','Your invites'))}
    ${[['ماجد','Majed','نشط','Active',true],['سلطان','Sultan','نشط','Active',true],['وليد','Waleed','قيد الانتظار','Pending',false]].map(([a,e,sa,se,ok])=>`
      <div class="card pad mt8 row gap12">
        <div class="avatar" style="width:40px;height:40px;display:grid;place-items:center;font-size:16px">${ok?'🟢':'🟡'}</div>
        <div style="flex:1"><div style="font-weight:700;font-size:14px">${L(a,e)}</div></div>
        <span class="pill ${ok?'green':''}">${L(sa,se)}</span>
      </div>`).join('')}
  </div>`;
}

/* ============================================================ CLASS DETAIL (sub) */
function scrClassDetail() {
  const c = DATA.classes[0];
  return `
  <div class="screen-hero" style="position:relative;height:230px;background:linear-gradient(160deg,#F97316,#9a3412);overflow:hidden">
    <div class="topbar" style="position:relative;z-index:3;padding-top:60px"><div class="topbar-btn" style="background:rgba(0,0,0,.3);border:none;color:#fff" onclick="go('schedule')">${svg('chevronRight',19)}</div>
    <div class="topbar-btn" onclick="toast(L('أضيف للمفضلة','Favorited'))" style="margin-inline-start:auto;background:rgba(0,0,0,.3);border:none;color:#fff">${svg('heart',18)}</div></div>
    <div style="position:absolute;bottom:22px;inset-inline-start:20px;color:#fff;z-index:3">
      <div style="font-size:44px">🔥</div>
      <div style="font-weight:900;font-size:26px">${L(c.name.ar,c.name.en)}</div>
    </div>
  </div>
  <div class="px mt16">
    <div class="row gap8 wrap">
      <span class="pill">${svg('clock',13)} ${c.time} · 60 ${L('د','min')}</span>
      <span class="pill">${svg('user',13)} ${L(c.trainer.ar,c.trainer.en)}</span>
      <span class="pill">${svg('mapPin',13)} ${L('قاعة A','Studio A')}</span>
    </div>
    <div class="card pad mt16">
      <div class="between"><span style="font-weight:700">${L('المقاعد المتاحة','Spots left')}</span><span class="num gold" style="font-weight:800">${c.spots}/${c.cap}</span></div>
      <div class="mc-prog mt12" style="background:var(--surface-3)"><i style="width:${(c.cap-c.spots)/c.cap*100}%"></i></div>
    </div>
    ${secHead(L('عن الحصة','About'))}
    <div class="dim" style="font-size:13.5px;line-height:1.8">${L('حصة كروس فت عالية الكثافة تجمع بين رفع الأثقال والكارديو. مناسبة للمستوى المتوسط والمتقدم. أحضر معك ماء ومنشفة.','High-intensity CrossFit combining lifting and cardio. Intermediate to advanced. Bring water and a towel.')}</div>
    <div class="card pad mt16 row gap12" onclick="go('trainer')">
      <div class="avatar-ring"><div class="avatar" style="width:48px;height:48px;display:grid;place-items:center;font-size:22px;background:var(--surface-2)">💪</div></div>
      <div style="flex:1"><div style="font-weight:700;font-size:14px">${L(c.trainer.ar,c.trainer.en)}</div>
      <div class="muted" style="font-size:11.5px">${svg('star',12)} 4.9 · ${L('عرض الملف','View profile')}</div></div>
      ${svg('chevronLeft',18)}
    </div>
    <div style="height:90px"></div>
  </div>
  <div style="position:absolute;left:16px;right:16px;bottom:16px"><button class="btn btn-gold" onclick="toast(L('تم حجز مقعدك! 🎉','Booked! 🎉'))">${svg('checkCircle',18)} ${L('احجز مقعدك','Book your spot')}</button></div>`;
}

/* ============================================================ TRAINER PROFILE (sub) */
function scrTrainer() {
  return `
  ${topbar(L('ملف المدرب','Coach Profile'), 'classDetail')}
  <div class="px mt8" style="text-align:center">
    <div class="avatar-ring" style="width:104px;height:104px;margin:8px auto 0;padding:3px"><div class="avatar" style="width:100%;height:100%;display:grid;place-items:center;font-size:46px;background:var(--surface-2)">💪</div></div>
    <div style="font-weight:800;font-size:20px;margin-top:12px">${L('كابتن سعد','Coach Saad')}</div>
    <div class="muted" style="font-size:13px">${L('مدرب لياقة وتضخيم معتمد','Certified Strength Coach')}</div>
    <div class="row gap8 mt12" style="justify-content:center">
      <span class="pill gold">${svg('star',13)} 4.9</span>
      <span class="pill">${svg('users',13)} 320 ${L('متدرب','clients')}</span>
      <span class="pill">${svg('award',13)} 8 ${L('سنوات','yrs')}</span>
    </div>
  </div>
  <div class="px mt20">
    ${secHead(L('التخصصات','Specialties'))}
    <div class="row gap8 wrap">
      ${['تضخيم|Hypertrophy','قوة|Strength','تغذية|Nutrition','فقدان دهون|Fat loss'].map(x=>{const[a,e]=x.split('|');return `<span class="pill">${L(a,e)}</span>`}).join('')}
    </div>
    ${secHead(L('التقييمات','Reviews'), '4.9 ★')}
    ${[['تركي','Turki','مدرب محترف وملتزم، شفت نتيجة بعد شهر','Pro and committed, saw results in a month',5],['نواف','Nawaf','أفضل كابتن في النادي بدون مبالغة','Best coach hands down',5]].map(([a,e,ra,re,st])=>`
      <div class="card pad mt8">
        <div class="between"><div class="row gap8"><div class="avatar" style="width:34px;height:34px;display:grid;place-items:center;background:var(--surface-2)">🧑</div><span style="font-weight:700;font-size:13.5px">${L(a,e)}</span></div>
        <span class="gold" style="font-size:12px">${'★'.repeat(st)}</span></div>
        <div class="dim" style="font-size:13px;margin-top:8px;line-height:1.6">${L(ra,re)}</div>
      </div>`).join('')}
    <button class="btn btn-gold mt16" onclick="go('store',1)">${svg('medal',17)} ${L('احجز تدريب شخصي','Book Personal Training')}</button>
  </div>`;
}

/* ============================================================ PROGRESS / BODY METRICS (sub) */
function scrProgress() {
  const m = DATA.metrics, s = DATA.weightSeries;
  const max = Math.max(...s), min = Math.min(...s);
  const pts = s.map((v,i)=>`${(i/(s.length-1))*100},${40-((v-min)/(max-min))*34-3}`).join(' ');
  return `
  ${topbar(L('تقدّمي','My Progress'), 'home')}
  <div class="px mt8">
    <div class="tabs">
      <div class="tab on">${L('القياسات','Metrics')}</div>
      <div class="tab" onclick="toast(L('صور التقدم','Progress photos'))">${L('الصور','Photos')}</div>
    </div>

    <div class="card pad mt16">
      <div class="between"><div><div class="muted" style="font-size:12px">${L('الوزن الحالي','Current weight')}</div>
      <div class="num" style="font-weight:800;font-size:28px">${m.weight} <span style="font-size:14px" class="muted">${L('كجم','kg')}</span></div></div>
      <span class="pill green">${svg('trendingUp',13)} ${m.weightChange} ${L('كجم','kg')}</span></div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" style="width:100%;height:90px;margin-top:14px;overflow:visible">
        <polyline points="${pts}" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="0,40 ${pts} 100,40" fill="url(#g)" opacity=".18" stroke="none"/>
        <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--gold)"/><stop offset="1" stop-color="transparent"/></linearGradient></defs>
      </svg>
      <div class="between muted" style="font-size:10px;margin-top:4px"><span>${L('8 أسابيع','8 wks ago')}</span><span>${L('الآن','now')}</span></div>
    </div>

    <div class="stat-grid mt16">
      ${metric(m.bodyFat+'%', L('دهون الجسم','Body fat'), 'droplet', '#06B6D4')}
      ${metric(m.muscle, L('عضل (كجم)','Muscle'), 'dumbbell', '#22C55E')}
      ${metric(m.bmi, L('مؤشر BMI','BMI'), 'activity', '#8B5CF6')}
    </div>

    ${secHead(L('صور التقدّم','Progress photos'), L('إضافة','Add'), "toast(L('فتح الكاميرا','Open camera'))")}
    <div class="photo-pair">
      <div class="photo"><div class="ph-icon">${svg('camera',30)}</div><div class="ph-tag">${L('قبل · مارس','Before · Mar')}</div></div>
      <div class="photo"><div class="ph-icon">${svg('camera',30)}</div><div class="ph-tag">${L('بعد · يونيو','After · Jun')}</div></div>
    </div>

    <button class="btn btn-ghost mt16" onclick="toast(L('تسجيل قياس جديد','Log measurement'))">${svg('plus',17)} ${L('تسجيل قياس جديد','Log new measurement')}</button>
  </div>`;
}
function metric(v, l, ic, color) {
  return `<div class="stat"><div class="ic" style="background:${color}22;color:${color}">${svg(ic,16)}</div>
    <div class="v num">${v}</div><div class="l">${l}</div></div>`;
}

/* ============================================================ WORKOUT LOG / PLAN (sub) */
function scrWorkout() {
  const w = DATA.workout;
  const done = w.exercises.filter(e=>e.done).length;
  return `
  ${topbar(L('تماريني','My Workout'), 'home')}
  <div class="px mt8">
    <div class="hero">
      <div class="between"><div><div class="muted" style="font-size:12px">${L('برنامجك','Your plan')}</div>
      <div style="font-weight:800;font-size:16px;margin-top:2px">${L(w.plan.ar,w.plan.en)}</div></div>
      <div class="soft-ico" style="width:44px;height:44px">${svg('dumbbell',22)}</div></div>
      <div class="pill gold mt16">${L('اليوم','Today')}: ${L(w.today.ar,w.today.en)}</div>
    </div>

    <div class="between mt20"><div class="sec-title">${L('تمارين اليوم','Today\'s exercises')}</div>
    <span class="num muted" style="font-size:13px">${done}/${w.exercises.length} ${L('مكتمل','done')}</span></div>

    ${w.exercises.map(e=>`
      <div class="card pad mt8 row gap12">
        <div style="width:26px;height:26px;border-radius:8px;border:2px solid ${e.done?'var(--green)':'var(--line-2)'};background:${e.done?'var(--green)':'transparent'};display:grid;place-items:center;flex-shrink:0">${e.done?svg('checkSmall',15):''}</div>
        <div style="flex:1"><div style="font-weight:700;font-size:14.5px;${e.done?'text-decoration:line-through;opacity:.55':''}">${L(e.n.ar,e.n.en)}</div>
        <div class="muted" style="font-size:11.5px">${e.sets} · ${e.kg} ${L('كجم','kg')}</div></div>
        <div class="topbar-btn" style="width:34px;height:34px" onclick="toast(L('تعديل','Edit'))">${svg('edit',15)}</div>
      </div>`).join('')}

    <button class="btn btn-gold mt16" onclick="toast(L('أحسنت! تم حفظ التمرين 💪','Workout saved 💪'))">${svg('check',18)} ${L('إنهاء التمرين','Finish workout')}</button>
    <button class="btn btn-ghost mt12" onclick="go('aiCoach')">${svg('sparkles',17)} ${L('اطلب برنامج من المدرب الذكي','Ask AI for a plan')}</button>
  </div>`;
}

/* ============================================================ AI COACH (sub, no nav) */
function scrAiCoach() {
  return `
  ${topbar(L('المدرب الذكي','AI Coach'), 'home')}
  <div class="px"><div class="card pad row gap12" style="border-color:var(--gold-line);background:var(--gold-soft)">
    <div class="hero-emoji">🤖</div><div style="flex:1"><div style="font-weight:800;font-size:14px">Taurux AI</div>
    <div class="muted" style="font-size:11.5px">${L('مدرّبك الشخصي · يعرف هدفك وخطتك','Your personal coach · knows your plan')}</div></div>
    <span class="dot-live"></span></div></div>
  <div class="chat-wrap" style="padding-bottom:90px">
    ${DATA.aiChat.map(m=>`<div class="msg ${m.who}">${L(m.ar,m.en)}</div>`).join('')}
    <div class="row gap8 wrap" style="margin-top:4px">
      ${['خطة وجبات','اقترح تمرين','كم سعرة أحتاج؟'].map((a,i)=>{const e=['Meal plan','Suggest workout','My calories?'][i];return `<div class="chip" onclick="toast(L('جارٍ التفكير...','Thinking...'))">${L(a,e)}</div>`}).join('')}
    </div>
  </div>
  <div class="chat-input">
    <input placeholder="${L('اكتب رسالتك...','Type a message...')}" />
    <button class="chat-send" onclick="toast(L('جارٍ الرد...','Replying...'))">${svg('send',19)}</button>
  </div>`;
}

/* ============================================================ WALLET / QR (sub, no nav) */
function scrWallet() {
  // simple deterministic QR-ish pattern
  let cells = '';
  const seed = [1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1];
  for (let i=0;i<121;i++){ cells += `<i class="${(i*7+ (i%5))%3===0?'':'off'}"></i>`; }
  return `
  ${topbar(L('بطاقة الدخول','Check-in Pass'), 'home')}
  <div class="px mt8" style="text-align:center">
    <div class="dim" style="font-size:13px;line-height:1.7">${L('امسح الكود على بوابة النادي للدخول','Scan at the gym gate to enter')}</div>

    <div class="member-card mt16" style="text-align:start">
      <div class="mc-row between"><div><div class="mc-name">${L('فهد العتيبي','Fahad Al-Otaibi')}</div>
      <div style="opacity:.7;font-size:12px">#10428 · ${L('باقة النخبة','Elite Plan')}</div></div>
      <span class="pill green" style="background:rgba(34,197,94,.2)">${L('نشط','Active')}</span></div>
      <div class="qr-box mt20"><div class="qr-grid">${cells}</div></div>
      <div style="text-align:center;color:#fff;opacity:.7;font-size:11px;margin-top:14px" class="num">TRX-10428-9F2A</div>
    </div>

    <div class="row gap10 mt16">
      <button class="btn btn-ghost" onclick="toast(L('إضافة لـ Apple Wallet','Add to Apple Wallet'))">${svg('apple',17)} Apple</button>
      <button class="btn btn-ghost" onclick="toast(L('إضافة لـ Google Wallet','Add to Google Wallet'))">${svg('google',17)} Google</button>
    </div>
    <div class="card pad mt16 row gap12" style="text-align:start">
      <div class="soft-ico">${svg('barcode',20)}</div>
      <div style="flex:1"><div style="font-weight:700;font-size:13.5px">${L('بصمة الإصبع مفعّلة','Fingerprint enabled')}</div>
      <div class="muted" style="font-size:11.5px">${L('تقدر تدخل بالبصمة من البوابة مباشرة','Enter via gate fingerprint directly')}</div></div>
      <span class="pill green">${L('مفعّل','On')}</span>
    </div>
  </div>`;
}

/* ============================================================ MANAGE SUBSCRIPTION (sub) */
function scrManageSub() {
  const s = DATA.sub;
  return `
  ${topbar(L('إدارة الاشتراك','Manage Subscription'), 'activity')}
  <div class="px mt8">
    <div class="member-card" style="padding:18px">
      <div class="mc-row between"><div><div class="mc-name">${L('باقتك','Your plan')}</div><div class="mc-pkg" style="font-size:19px">${L(s.pkg.ar,s.pkg.en)}</div></div>
      <div class="mc-count num" style="font-size:24px">${s.daysRemaining}<span style="font-size:12px;opacity:.7">${L('يوم','d')}</span></div></div>
    </div>

    ${secHead(L('خيارات','Options'))}
    ${manageRow('snowflake','#06B6D4', L('تجميد الاشتراك','Freeze subscription'), L('متبقٍ '+s.freezeDays+' أيام تجميد','8 freeze days left'), "openFreeze()")}
    ${manageRow('arrowUpRight','#22C55E', L('ترقية الباقة','Upgrade plan'), L('انتقل لباقة أعلى واحسب الفرق','Switch to a higher plan'), "go('store')")}
    ${manageRow('refresh','#D4AF37', L('تجديد مبكر','Renew early'), L('جدّد الآن واحصل على نقاط مضاعفة','Renew now, 2× points'), "go('checkout')")}
    ${manageRow('card','#8B5CF6', L('التجديد التلقائي','Auto-renew'), L('مفعّل · التالي 3 أغسطس','On · next Aug 3'), "toast(L('تم التغيير','Toggled'))")}

    <div class="card pad mt16" style="border-color:rgba(239,68,68,.25);background:rgba(239,68,68,.05)">
      <div class="row gap12"><div class="soft-ico" style="background:rgba(239,68,68,.14);color:var(--red)">${svg('info',18)}</div>
      <div style="flex:1"><div style="font-weight:700;font-size:13.5px;color:var(--red)">${L('إلغاء الاشتراك','Cancel subscription')}</div>
      <div class="muted" style="font-size:11.5px">${L('تواصل مع الدعم لإتمام الإلغاء','Contact support to cancel')}</div></div></div>
    </div>
  </div>

  <!-- freeze sheet -->
  <div id="freezeSheet" class="sheet-mask" style="display:none">
    <div class="sheet">
      <div class="sheet-grab"></div>
      <div style="text-align:center;font-size:40px">❄️</div>
      <div style="text-align:center;font-weight:800;font-size:18px;margin-top:6px">${L('تجميد الاشتراك','Freeze Subscription')}</div>
      <div class="muted" style="text-align:center;font-size:12.5px;margin-top:6px">${L('كم يوم تريد تجميد اشتراكك؟','How many days to freeze?')}</div>
      <div class="row gap10 mt20" style="justify-content:center">
        ${[3,7,14].map(d=>`<div class="chip ${d===7?'on gold':''}" style="padding:14px 22px;font-size:16px">${d} ${L('أيام','d')}</div>`).join('')}
      </div>
      <button class="btn btn-gold mt20" onclick="closeFreeze();toast(L('تم تجميد اشتراكك 7 أيام ❄️','Frozen for 7 days ❄️'))">${L('تأكيد التجميد','Confirm freeze')}</button>
      <button class="btn btn-ghost mt12" onclick="closeFreeze()">${L('إلغاء','Cancel')}</button>
    </div>
  </div>`;
}
function manageRow(ic, color, t, sub, onclick) {
  return `<div class="card pad mt8 row gap12" onclick="${onclick}">
    <div class="soft-ico" style="background:${color}22;color:${color}">${svg(ic,18)}</div>
    <div style="flex:1"><div style="font-weight:700;font-size:14px">${t}</div><div class="muted" style="font-size:11.5px">${sub}</div></div>
    ${svg('chevronLeft',18)}</div>`;
}

/* ============================================================ NOTIFICATIONS (sub) */
function scrNotifications() {
  return `
  ${topbar(L('الإشعارات','Notifications'), 'home')}
  <div class="px mt8">
    <div class="between"><span class="muted" style="font-size:12px">${L('4 إشعارات جديدة','4 new')}</span>
    <span class="sec-link" onclick="toast(L('تم مسح الكل','Cleared all'))">${L('مسح الكل','Clear all')}</span></div>
    <div class="mt12">
    ${DATA.notifications.map(n=>`
      <div class="card pad mt8 row gap12">
        <div class="soft-ico" style="background:${n.color}22;color:${n.color}">${svg(n.ic,18)}</div>
        <div style="flex:1"><div style="font-weight:600;font-size:13.5px;line-height:1.5">${L(n.t.ar,n.t.en)}</div>
        <div class="muted" style="font-size:11px;margin-top:3px">${L(n.d.ar,n.d.en)}</div></div>
      </div>`).join('')}
    </div>
  </div>`;
}

/* ============================================================ PROFILE */
function scrProfile() {
  const u = DATA.user;
  return `
  ${topbar(L('حسابي','My Account'), 'home')}
  <div class="px mt8" style="text-align:center">
    <div class="avatar-ring" style="width:92px;height:92px;margin:8px auto 0;padding:3px"><div class="avatar" style="width:100%;height:100%;display:grid;place-items:center;font-size:42px;background:var(--surface-2)">🦅</div></div>
    <div style="font-weight:800;font-size:19px;margin-top:12px">${L(u.fullName,u.fullNameEn)}</div>
    <div class="muted num" style="font-size:13px">#${u.clientNumber} · ${L('عضو منذ 2024','Member since 2024')}</div>
    <div class="row gap8 mt12" style="justify-content:center">
      <span class="pill gold">${svg('crown',13)} ${L(u.tier.ar,u.tier.en)}</span>
      <span class="pill">${svg('flame',13)} ${u.streak} ${L('يوم','d')}</span>
      <span class="pill">${svg('sparkles',13)} ${u.points.toLocaleString()}</span>
    </div>
  </div>
  <div class="px mt20">
    ${secHead(L('الحساب','Account'))}
    <div class="card" style="padding:4px 16px">
      ${profRow('user', L('المعلومات الشخصية','Personal info'))}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('wallet', L('بطاقة الدخول','Check-in pass'), "go('wallet')")}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('card', L('طرق الدفع','Payment methods'))}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('lock', L('الأمان وكلمة المرور','Security & password'))}
    </div>

    ${secHead(L('التطبيق','App'))}
    <div class="card" style="padding:4px 16px">
      ${profRow('moon', L('المظهر','Appearance'), "document.getElementById('themeToggle').click()")}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('globe', L('اللغة','Language'), "document.getElementById('langToggle').click()")}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('bell', L('إعدادات الإشعارات','Notification settings'))}
      <div class="hr" style="margin:4px 0"></div>
      ${profRow('message', L('الدعم والمساعدة','Help & support'))}
    </div>

    <div class="card pad mt16 row gap12" style="cursor:pointer" onclick="toast(L('تسجيل الخروج','Log out'))">
      <div class="soft-ico" style="background:rgba(239,68,68,.14);color:var(--red)">${svg('logout',18)}</div>
      <div style="flex:1;font-weight:700;color:var(--red);font-size:14px">${L('تسجيل الخروج','Log out')}</div>
    </div>
    <div class="muted" style="text-align:center;font-size:11px;margin-top:16px">Taurux Gym · v2.0.0</div>
  </div>`;
}
function profRow(ic, label, onclick) {
  return `<div class="tile" style="cursor:pointer" onclick="${onclick||"toast('"+label+"')"}">
    <div class="soft-ico" style="width:38px;height:38px">${svg(ic,17)}</div>
    <div class="tile-main"><div class="tile-title" style="font-size:14px">${label}</div></div>
    ${svg('chevronLeft',17)}</div>`;
}

/* ============================================================ LOGIN (bonus, no nav) */
function scrLogin() {
  return `
  <div class="px" style="flex:1;display:flex;flex-direction:column;justify-content:center;text-align:center;padding-bottom:40px">
    <div class="panel-logo" style="width:74px;height:74px;border-radius:22px;margin:0 auto;font-size:38px">T</div>
    <div style="font-weight:900;font-size:26px;margin-top:20px">${L('أهلاً بك في Taurux','Welcome to Taurux')}</div>
    <div class="dim" style="font-size:14px;margin-top:8px">${L('سجّل دخولك للمتابعة','Sign in to continue')}</div>

    <div style="text-align:start;margin-top:32px">
      <div class="muted" style="font-size:12px;margin-bottom:8px">${L('رقم الجوال','Phone number')}</div>
      <div class="card pad row gap10" style="padding:15px 16px">
        ${svg('phone',18)}<span class="num" style="color:var(--text-mute)">+966</span>
        <span class="num" style="font-weight:600">5X XXX XXXX</span>
      </div>
    </div>
    <button class="btn btn-gold mt20" onclick="toast(L('إرسال رمز التحقق','Sending OTP'))">${L('إرسال رمز التحقق','Send code')} ${svg('chevronLeft',17)}</button>
    <div class="row gap10 mt16" style="align-items:center"><div class="hr" style="flex:1;margin:0"></div><span class="muted" style="font-size:11px">${L('أو','OR')}</span><div class="hr" style="flex:1;margin:0"></div></div>
    <button class="btn btn-ghost mt16" onclick="go('home')">${svg('barcode',17)} ${L('الدخول بالبصمة','Sign in with biometrics')}</button>
    <div class="muted" style="font-size:12px;margin-top:24px">${L('بالمتابعة فأنت توافق على','By continuing you agree to the')} <span class="gold">${L('الشروط','Terms')}</span></div>
  </div>`;
}

/* ============================================================ ONBOARDING (bonus, no nav) */
function scrOnboarding() {
  return `
  <div style="flex:1;position:relative;display:flex;flex-direction:column;margin:-54px -0 0;
    background:linear-gradient(180deg,#0c0c0c,#000)">
    <div style="height:64px"></div>
    <div style="flex:1;display:grid;place-items:center;font-size:120px">🏋️</div>
    <div class="px" style="padding-bottom:40px;text-align:center;color:#fff">
      <div class="row gap6 mt8" style="justify-content:center;margin-bottom:24px">
        <div style="width:24px;height:6px;border-radius:6px;background:var(--gold)"></div>
        <div style="width:6px;height:6px;border-radius:6px;background:rgba(255,255,255,.25)"></div>
      </div>
      <div style="font-weight:900;font-size:28px">${L('ناديك، بقوانينك','Your gym, your rules')}</div>
      <div style="opacity:.7;font-size:14px;margin-top:12px;line-height:1.8">${L('اشترك، احجز حصصك، تابع تقدّمك، واكسب نقاط — كله من مكان واحد.','Subscribe, book classes, track progress and earn points — all in one place.')}</div>
      <button class="btn btn-gold mt24" onclick="go('login')">${L('ابدأ الآن','Get started')}</button>
    </div>
  </div>`;
}
