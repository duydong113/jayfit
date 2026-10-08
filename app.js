/* ============================================================
   FORGE — App lịch tập tại nhà (bodyweight → dây → tạ đơn)
   ============================================================ */

'use strict';

/* ---------- CƠ SỞ DỮ LIỆU BÀI TẬP ---------- */
const EX = {
  /* — Đẩy / Ngực-Vai-Tay sau (bodyweight) — */
  incline_pushup:{name:'Chống đẩy nghiêng',group:'Ngực',equip:'none',sets:3,reps:'12',rest:60,
    cues:['Tay chống lên ghế/bậc cao 40–60cm','Giữ thân thẳng từ đầu tới gót chân','Hạ ngực chậm 2 giây rồi đẩy lên']},
  pushup:{name:'Chống đẩy',group:'Ngực',equip:'none',sets:4,reps:'12',rest:60,
    cues:['Tay rộng hơn vai một chút','Siết core, không võng lưng','Ngực gần chạm sàn mỗi rep']},
  diamond_pushup:{name:'Chống đẩy kim cương',group:'Ngực · Tay sau',equip:'none',sets:3,reps:'10',rest:60,
    cues:['Hai tay chụm thành hình kim cương dưới ngực','Ép khuỷu tay sát thân người','Ăn vào ngực trong & tay sau']},
  pike_pushup:{name:'Chống đẩy vai (Pike)',group:'Vai',equip:'none',sets:3,reps:'10',rest:60,
    cues:['Đẩy hông lên cao thành chữ V ngược','Hạ đỉnh đầu về phía sàn','Đẩy mạnh qua vai để lên']},
  dips:{name:'Dips với ghế',group:'Tay sau',equip:'none',sets:3,reps:'12',rest:60,
    cues:['Tay chống mép ghế phía sau lưng','Hạ người tới khi khuỷu gập ~90°','Đẩy lên, siết tay sau ở đỉnh']},

  /* — Kéo / Lưng (bodyweight) — */
  towel_row:{name:'Kéo khăn qua cửa',group:'Lưng',equip:'none',sets:3,reps:'12',rest:60,
    cues:['Vắt khăn tắm qua khe cửa đã chốt chắc','Ngả người ra sau, tay duỗi thẳng','Kéo ngực về phía tay, siết lưng 1 giây']},
  ytw:{name:'Y–T–W nằm sấp',group:'Lưng trên',equip:'none',sets:3,reps:'8 mỗi chữ',rest:45,
    cues:['Nằm sấp, trán chạm sàn','Lần lượt nâng tay theo hình Y, T, W','Siết bả vai mỗi lần nâng']},
  superman:{name:'Superman',group:'Lưng dưới',equip:'none',sets:3,reps:'15',rest:45,
    cues:['Nằm sấp, tay chân duỗi thẳng','Nâng đồng thời tay và chân khỏi sàn','Giữ 1–2 giây trên đỉnh']},
  snow_angel:{name:'Thiên thần ngược',group:'Lưng trên',equip:'none',sets:3,reps:'12',rest:45,
    cues:['Nằm sấp, tay duỗi qua đầu','Quét tay sang ngang như bơi bướm ngược','Giữ ngực ép sát sàn']},

  /* — Chân (bodyweight) — */
  squat:{name:'Squat',group:'Đùi',equip:'none',sets:4,reps:'15',rest:60,
    cues:['Chân rộng bằng vai, mũi chân hơi chếch','Đẩy hông ra sau như ngồi ghế','Đùi song song sàn, gối không chụm']},
  lunge:{name:'Lunge bước tới',group:'Đùi · Mông',equip:'none',sets:3,reps:'12 mỗi chân',rest:60,
    cues:['Bước dài một chân tới trước','Hạ tới khi gối sau gần chạm sàn','Giữ thân thẳng, dồn lực gót chân trước']},
  bulgarian:{name:'Bulgarian split squat',group:'Đùi · Mông',equip:'none',sets:3,reps:'10 mỗi chân',rest:75,
    cues:['Mu bàn chân sau đặt lên ghế','Hạ tới khi đùi trước song song sàn','Đẩy qua gót chân trước để đứng lên']},
  glute_bridge:{name:'Glute bridge',group:'Mông',equip:'none',sets:3,reps:'15',rest:45,
    cues:['Nằm ngửa, gối gập, bàn chân đạp sàn','Nâng hông cao, siết mông 2 giây','Hạ chậm, không ưỡn lưng']},
  single_glute:{name:'Glute bridge 1 chân',group:'Mông',equip:'none',sets:3,reps:'10 mỗi chân',rest:60,
    cues:['Tư thế như glute bridge, duỗi 1 chân','Nâng hông chỉ bằng 1 chân trụ','Giữ hông cân, không lệch']},
  calf_raise:{name:'Nhón bắp chân',group:'Bắp chân',equip:'none',sets:3,reps:'20',rest:45,
    cues:['Đứng thẳng, nhón cao hết cỡ','Giữ 1 giây trên đỉnh','Hạ chậm có kiểm soát']},
  single_calf:{name:'Nhón bắp chân 1 chân',group:'Bắp chân',equip:'none',sets:3,reps:'15 mỗi chân',rest:45,
    cues:['Đứng 1 chân, tay vịn tường giữ thăng bằng','Nhón cao, siết bắp chân']},
  wall_sit:{name:'Wall sit',group:'Đùi',equip:'none',sets:3,reps:'45 giây',rest:60,
    cues:['Lưng áp sát tường, trượt xuống','Đùi song song sàn, gối vuông góc','Thở đều, siết đùi']},

  /* — Bụng / Core (bodyweight) — */
  plank:{name:'Plank',group:'Bụng',equip:'none',sets:3,reps:'45 giây',rest:45,
    cues:['Chống khuỷu tay, thân thẳng như tấm ván','Siết bụng & mông, không võng lưng','Thở đều suốt thời gian giữ']},
  side_plank:{name:'Side plank',group:'Bụng xiên',equip:'none',sets:3,reps:'30 giây mỗi bên',rest:45,
    cues:['Chống 1 khuỷu tay, thân nghiêng','Nâng hông thành đường thẳng','Đổi bên sau mỗi set']},
  dead_bug:{name:'Dead bug',group:'Bụng',equip:'none',sets:3,reps:'10 mỗi bên',rest:45,
    cues:['Nằm ngửa, tay chân giơ lên trời','Hạ đối diện tay–chân, lưng ép sàn','Về chậm, đổi bên']},
  bicycle:{name:'Bicycle crunch',group:'Bụng',equip:'none',sets:3,reps:'20',rest:45,
    cues:['Nằm ngửa, tay sau đầu','Khuỷu chạm gối đối diện, xoay thân','Đạp chậm, siết bụng mỗi rep']},
  leg_raise:{name:'Nâng chân',group:'Bụng dưới',equip:'none',sets:3,reps:'12',rest:45,
    cues:['Nằm ngửa, tay ép sàn','Nâng chân thẳng tới vuông góc','Hạ chậm, lưng không cong']},
  mountain:{name:'Mountain climber',group:'Bụng',equip:'none',sets:3,reps:'30 giây',rest:45,
    cues:['Tư thế plank cao','Kéo gối về ngực luân phiên, nhanh','Giữ hông thấp, core siết']},
  hollow:{name:'Hollow hold',group:'Bụng',equip:'none',sets:3,reps:'30 giây',rest:45,
    cues:['Nằm ngửa, nâng vai & chân khỏi sàn','Thân cong như quả chuối','Ép lưng dưới xuống sàn']},
  russian_twist:{name:'Russian twist',group:'Bụng xiên',equip:'none',sets:3,reps:'20',rest:45,
    cues:['Ngồi, gập gối, nhấc gót khỏi sàn','Xoay thân sang 2 bên','Siết bụng xiên mỗi lần chạm']},

  /* — Cardio / HIIT (bodyweight) — */
  jumping_jack:{name:'Jumping jack',group:'Cardio',equip:'none',sets:4,reps:'40 giây',rest:30,
    cues:['Bật nhảy dang tay chân','Nhịp nhanh, thở đều','Tiếp đất nhẹ bằng mũi chân']},
  high_knees:{name:'Chạy nâng cao đùi',group:'Cardio',equip:'none',sets:4,reps:'30 giây',rest:30,
    cues:['Chạy tại chỗ, nâng đùi ngang hông','Đánh tay mạnh theo nhịp','Core siết, thân thẳng']},
  burpee:{name:'Burpee',group:'Cardio',equip:'none',sets:4,reps:'30 giây',rest:45,
    cues:['Ngồi xổm → bật chân ra plank → chống đẩy → bật nhảy','Làm liên tục hết cỡ trong 30 giây','Giữ nhịp thở']},
  skater:{name:'Skater jump',group:'Cardio',equip:'none',sets:4,reps:'30 giây',rest:30,
    cues:['Nhảy ngang sang 2 bên như trượt băng','Chân sau chạm nhẹ phía sau','Hạ thấp trọng tâm']},

  /* — DÂY KHÁNG LỰC — */
  band_press:{name:'Đẩy ngực với dây',group:'Ngực',equip:'band',sets:4,reps:'12',rest:60,
    cues:['Vòng dây sau lưng, giữ 2 đầu ở ngực','Đẩy tay tới trước như đẩy tạ','Về chậm, giữ căng dây']},
  band_shoulder_press:{name:'Đẩy vai với dây',group:'Vai',equip:'band',sets:3,reps:'12',rest:60,
    cues:['Đứng lên giữa dây, tay cầm ở vai','Đẩy thẳng lên qua đầu','Hạ chậm về vị trí vai']},
  band_pushdown:{name:'Kéo dây tay sau',group:'Tay sau',equip:'band',sets:3,reps:'12',rest:45,
    cues:['Cố định dây cao ngang đầu','Ép khuỷu sát thân, duỗi tay xuống','Siết tay sau ở cuối']},
  band_row:{name:'Kéo dây (Row)',group:'Lưng',equip:'band',sets:4,reps:'12',rest:60,
    cues:['Cố định dây trước mặt ngang ngực','Kéo khuỷu về sau, siết bả vai','Thả chậm có kiểm soát']},
  band_pullapart:{name:'Kéo dây ngang',group:'Lưng trên',equip:'band',sets:3,reps:'15',rest:45,
    cues:['Tay duỗi thẳng trước ngực, cầm dây','Kéo dây dang ngang, siết bả vai','Về chậm']},
  band_curl:{name:'Cuốn dây tay trước',group:'Tay trước',equip:'band',sets:3,reps:'12',rest:45,
    cues:['Đứng lên giữa dây, khuỷu ép sát thân','Cuốn tay lên ngang vai','Hạ chậm']},
  band_squat:{name:'Squat với dây',group:'Đùi',equip:'band',sets:4,reps:'15',rest:60,
    cues:['Đứng lên dây, dây vắt qua vai','Squat sâu như bình thường','Dây tạo lực cản khi đứng lên']},
  band_deadlift:{name:'Deadlift với dây',group:'Mông · Đùi sau',equip:'band',sets:3,reps:'12',rest:60,
    cues:['Đứng lên giữa dây, gập hông cầm dây','Đứng thẳng, siết mông ở đỉnh','Lưng luôn thẳng']},
  band_pallof:{name:'Pallof press',group:'Bụng',equip:'band',sets:3,reps:'10 mỗi bên',rest:45,
    cues:['Cố định dây ngang hông, đứng nghiêng','Đẩy tay ra trước, chống xoay','Giữ thân vững suốt set']},

  /* — TẠ ĐƠN — */
  db_floor_press:{name:'Đẩy ngực tạ đơn',group:'Ngực',equip:'db',sets:4,reps:'10',rest:75,
    cues:['Nằm ngửa, tạ ở 2 tay ngang ngực','Đẩy tạ lên, 2 tạ gần nhau ở đỉnh','Hạ chậm tới khi bắp tay chạm sàn']},
  db_press:{name:'Đẩy vai tạ đơn',group:'Vai',equip:'db',sets:3,reps:'10',rest:60,
    cues:['Ngồi/đứng, tạ ở ngang vai','Đẩy thẳng lên qua đầu','Hạ chậm về vai']},
  db_overhead_tri:{name:'Tay sau qua đầu',group:'Tay sau',equip:'db',sets:3,reps:'12',rest:45,
    cues:['Cầm 1 tạ bằng 2 tay qua đầu','Gập khuỷu hạ tạ sau gáy','Duỗi tay, siết tay sau']},
  db_row:{name:'Kéo tạ 1 tay',group:'Lưng',equip:'db',sets:4,reps:'10 mỗi bên',rest:60,
    cues:['1 gối + 1 tay chống ghế, lưng thẳng','Kéo tạ về hông, siết lưng','Hạ chậm']},
  db_curl:{name:'Cuốn tạ tay trước',group:'Tay trước',equip:'db',sets:3,reps:'12',rest:45,
    cues:['Đứng thẳng, tạ 2 tay','Cuốn lên, khuỷu cố định','Hạ chậm hết biên độ']},
  db_goblet:{name:'Goblet squat',group:'Đùi',equip:'db',sets:4,reps:'12',rest:75,
    cues:['Ôm tạ trước ngực','Squat sâu, khuỷu chạm đùi trong','Đứng lên siết mông']},
  db_rdl:{name:'Romanian deadlift',group:'Mông · Đùi sau',equip:'db',sets:3,reps:'12',rest:60,
    cues:['Tạ 2 tay trước đùi, gối hơi gập','Gập hông đẩy mông ra sau','Kéo lên bằng mông & đùi sau']},
  db_lunge:{name:'Lunge với tạ',group:'Đùi · Mông',equip:'db',sets:3,reps:'10 mỗi chân',rest:75,
    cues:['Tạ 2 tay, bước dài tới trước','Hạ tới gối sau gần chạm sàn','Đẩy qua gót chân trước']},
  db_russian:{name:'Russian twist với tạ',group:'Bụng xiên',equip:'db',sets:3,reps:'20',rest:45,
    cues:['Ôm tạ trước ngực, nhấc gót','Xoay thân 2 bên có kiểm soát']},
  db_farmer:{name:'Farmer carry',group:'Toàn thân',equip:'db',sets:3,reps:'40 giây',rest:45,
    cues:['Xách tạ nặng 2 tay','Đi thẳng, vai ép xuống','Siết core suốt quãng đi']},
};

/* Thứ tự tiến bộ: từ dễ → khó. App tự chọn bài khó nhất theo dụng cụ bạn có */
const PROG = {
  chest:    ['incline_pushup','pushup','band_press','db_floor_press'],
  shoulder: ['pike_pushup','band_shoulder_press','db_press'],
  triceps:  ['dips','band_pushdown','db_overhead_tri'],
  row:      ['towel_row','band_row','db_row'],
  upperback:['ytw','band_pullapart'],
  biceps:   ['band_curl','db_curl'],
  squat:    ['squat','band_squat','db_goblet'],
  hinge:    ['glute_bridge','band_deadlift','db_rdl'],
  lunge:    ['lunge','bulgarian','db_lunge'],
  calf:     ['calf_raise','single_calf'],
};
const CORE_NONE = ['plank','dead_bug','bicycle','mountain','leg_raise','russian_twist','hollow','side_plank'];
const COND_NONE = ['jumping_jack','high_knees','burpee','skater'];
const DAY_NAMES = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'];

/* ---------- STATE ---------- */
const LS_KEY = 'forge_v1';
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

let state = loadState() || {
  profile:{name:'', height:178, weight:65.5},
  settings:{days:6, equip:[]},   // equip: [] | ['band'] | ['db'] | ['band','db']
  log:{},                        // 'YYYY-MM-DD' -> {done:true}
  weights:[],                    // [{d:'YYYY-MM-DD', w:65.5}]
  onboarded:false,
};
let PLAN = [];

function loadState(){ try{ return JSON.parse(localStorage.getItem(LS_KEY)); }catch(e){ return null; } }
function save(){ localStorage.setItem(LS_KEY, JSON.stringify(state)); }
function owned(eq){ return eq==='none' || state.settings.equip.includes(eq); }
function todayISO(d=new Date()){
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function todayIdx(){ return (new Date().getDay()+6)%7; } // Thứ 2 = 0

/* ---------- BỘ TẠO LỊCH TẬP ---------- */
function avail(key){ return PROG[key].filter(id => owned(EX[id].equip)); }
function best(key){ const a = avail(key); return a[a.length-1]; }
function top2(key){ const a = avail(key); return a.slice(-2); }

function corePick(v, n){
  const pool = [...CORE_NONE];
  if(owned('band')) pool.push('band_pallof');
  if(owned('db'))   pool.push('db_russian');
  const out = [];
  for(let i=0;i<n;i++) out.push(pool[(v*2+i)%pool.length]);
  return out;
}
function condPick(v, n){
  const pool = [...COND_NONE];
  if(owned('db')) pool.push('db_farmer');
  const out = [];
  for(let i=0;i<n;i++) out.push(pool[(v+i)%pool.length]);
  return out;
}

function sessPush(v){
  return {type:'push', title:'Đẩy', sub:'Ngực · Vai · Tay sau',
    exercises:[...top2('chest'), best('shoulder'), best('triceps'), ...corePick(v,2)]};
}
function sessPull(v){
  const bi = best('biceps');
  return {type:'pull', title:'Kéo', sub:'Lưng · Tay trước',
    exercises:[best('row'), best('upperback'), 'superman', bi||'snow_angel', ...corePick(v,2)]};
}
function sessLegs(v){
  return {type:'legs', title:'Chân', sub:'Đùi · Mông · Bắp chân',
    exercises:[best('squat'), best('hinge'), best('lunge'), best('calf'), 'wall_sit', ...corePick(v,1)]};
}
function sessEngine(v){
  return {type:'engine', title:'HIIT + Bụng', sub:'Đốt mỡ · Săn chắc',
    exercises:[...condPick(v,4), ...corePick(v,2)]};
}
function sessFull(v){
  return {type:'full', title:'Toàn thân', sub:'Kết hợp tất cả nhóm cơ',
    exercises:[best('chest'), best('row'), best('squat'), condPick(v,1)[0], ...corePick(v,2)]};
}
function sessRest(){
  return {type:'rest', title:'Nghỉ ngơi', sub:'Phục hồi · Giãn cơ nhẹ', exercises:[],
    recovery:['Đi bộ nhẹ 20–30 phút','Giãn cơ toàn thân 10 phút','Ngủ đủ 7–8 tiếng','Uống đủ nước']};
}

function buildPlan(){
  const d = state.settings.days;
  if(d===6){
    PLAN = [sessPush(0), sessPull(0), sessLegs(0), sessPush(1), sessPull(1), sessLegs(1), sessRest()];
  }else{
    PLAN = [sessPush(0), sessLegs(0), sessPull(0), sessEngine(0), sessFull(0), sessRest(), sessRest()];
  }
}
function countNewExercises(newEquip){
  buildPlan();
  const s = new Set();
  PLAN.forEach(d => d.exercises.forEach(id => { if(EX[id].equip===newEquip) s.add(id); }));
  return s.size;
}

/* ---------- TIỆN ÍCH RENDER ---------- */
function equipBadge(eq){
  if(eq==='band') return '<span class="ex-badge band">DÂY</span>';
  if(eq==='db')   return '<span class="ex-badge db">TẠ</span>';
  return '';
}
function exRow(id, interactive, done){
  const e = EX[id];
  return `<div class="ex ${done?'done':''}" data-ex="${id}">
    ${interactive?`<div class="ex-check">✓</div>`:''}
    <div class="ex-body">
      <div class="ex-name">${e.name}</div>
      <div class="ex-detail">${e.sets} × ${e.reps} · nghỉ ${e.rest}s</div>
    </div>
    ${equipBadge(e.equip)}
    ${interactive?`<button class="ex-timer" data-timer="${e.rest}" title="Bấm giờ nghỉ">⏱</button>`:''}
  </div>`;
}
function sessionHTML(sess, interactive, dateISO){
  const log = dateISO && state.log[dateISO];
  const doneSet = new Set(log && log.exercises ? log.exercises : []);
  if(sess.type==='rest'){
    return `<div class="card rest">
      <div class="session-title">😴 ${sess.title}</div>
      <div class="session-sub">${sess.sub}</div>
      <ul class="nutri">${sess.recovery.map(r=>`<li><span class="tick">✓</span><span>${r}</span></li>`).join('')}</ul>
    </div>`;
  }
  const totalMin = Math.round(sess.exercises.length*4);
  return `<div class="card">
      <div class="session-title">${sess.title}</div>
      <div class="session-sub">${sess.sub}</div>
      <div class="session-meta">
        <span class="pill">${sess.exercises.length} bài tập</span>
        <span class="pill">~${totalMin} phút</span>
        <span class="pill hot">Core mỗi buổi</span>
      </div>
    </div>
    ${sess.exercises.map(id=>exRow(id, interactive, doneSet.has(id))).join('')}`;
}
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove('show'), 2600);
}
function streak(){
  let s=0; const d=new Date();
  if(!state.log[todayISO(d)]?.done) d.setDate(d.getDate()-1);
  while(state.log[todayISO(d)]?.done){ s++; d.setDate(d.getDate()-1); }
  return s;
}
function totalSessions(){ return Object.values(state.log).filter(l=>l.done).length; }

/* ---------- VIEW: HÔM NAY ---------- */
function renderToday(){
  const i = todayIdx(), sess = PLAN[i], iso = todayISO();
  const done = state.log[iso]?.done;
  const dstr = new Date().toLocaleDateString('vi-VN',{weekday:'long', day:'numeric', month:'numeric'});
  const name = state.profile.name ? `, ${state.profile.name}` : '';
  const protein = Math.round(state.profile.weight*2.1);

  $('#view-today').innerHTML = `
    <div class="view-head">
      <div><h1>Chào buổi tập${name} 💪</h1><div class="date-line">${dstr} · ${DAY_NAMES[i]}</div></div>
    </div>
    ${sessionHTML(sess, !done, iso)}
    ${sess.type!=='rest' ? (done
      ? `<div class="card"><p class="muted" style="text-align:center">✅ Hoàn thành! Nghỉ ngơi và nạp protein nhé.</p></div>`
      : `<button class="btn accent full" id="finishBtn">Hoàn thành buổi tập</button>`) : ''}
    <div class="card">
      <h3>Dinh dưỡng cho mục tiêu săn chắc</h3>
      <ul class="nutri">
        <li><span class="tick">✓</span><span><b>~${protein}g đạm/ngày</b> (2–2.2g × cân nặng) — ưu tiên thịt, trứng, cá, đậu</span></li>
        <li><span class="tick">✓</span><span>Ăn quanh mức duy trì, thâm hụt nhẹ ~200 kcal nếu muốn siết mỡ</span></li>
        <li><span class="tick">✓</span><span>Uống 2.5–3 lít nước mỗi ngày</span></li>
        <li><span class="tick">✓</span><span>Ngủ 7–8 tiếng — cơ bắp phát triển khi ngủ</span></li>
      </ul>
    </div>
    <div class="card">
      <h3>Nguyên tắc tiến bộ</h3>
      <p class="muted">Mỗi 2 tuần: <b style="color:#fff">+2 reps</b> hoặc <b style="color:#fff">+1 set</b> mỗi bài.
      Khi mua thêm <b style="color:#fff">dây kháng lực / tạ đơn</b>, vào Cài đặt → bật lên, lịch sẽ tự nâng cấp bài tập nặng hơn.</p>
    </div>`;

  $('#finishBtn')?.addEventListener('click', ()=>{
    state.log[iso] = {done:true, exercises:[...sess.exercises]};
    save(); renderAll();
    toast('Tuyệt vời! Đã ghi nhận buổi tập 🎉');
  });
}

/* ---------- VIEW: LỊCH TUẦN ---------- */
function renderWeek(){
  const ti = todayIdx();
  $('#view-week').innerHTML = `
    <div class="view-head"><div><h1>Lịch tuần</h1>
      <div class="date-line">${state.settings.days} buổi tập · ${7-state.settings.days} ngày nghỉ</div></div>
    </div>
    ${PLAN.map((s,i)=>`
      <button class="day-card ${i===ti?'today':''}" data-day="${i}">
        <div class="day-num"><b>${DAY_NAMES[i].replace('Thứ ','T').replace('Chủ nhật','CN')}</b></div>
        <div class="day-info"><div class="t">${s.type==='rest'?'😴':''} ${s.title}</div>
        <div class="s">${s.sub}${s.exercises.length?` · ${s.exercises.length} bài`:''}</div></div>
        <div class="day-check">${state.log[isoOf(i)]?.done?'✅':(i===ti?'👉':'')}</div>
      </button>`).join('')}
    <div id="dayDetail"></div>`;
  $$('#view-week .day-card').forEach(b=>b.addEventListener('click',()=>{
    const i = +b.dataset.day;
    $('#dayDetail').innerHTML = `<h3 style="margin:14px 0 10px">${DAY_NAMES[i]} — ${PLAN[i].title}</h3>`
      + sessionHTML(PLAN[i], false, null);
    $('#dayDetail').scrollIntoView({behavior:'smooth', block:'nearest'});
  }));
}
function isoOf(dayIdx){
  const d = new Date(); d.setDate(d.getDate() + (dayIdx - todayIdx()));
  return todayISO(d);
}

/* ---------- VIEW: THƯ VIỆN ---------- */
let libFilter = 'Tất cả', libQuery = '';
function renderLibrary(){
  const groups = ['Tất cả','Ngực','Vai','Tay sau','Tay trước','Lưng','Lưng trên','Lưng dưới','Đùi','Mông','Bắp chân','Bụng','Bụng xiên','Bụng dưới','Cardio','Toàn thân'];
  const q = libQuery.toLowerCase();
  const list = Object.entries(EX).filter(([id,e]) =>
    (libFilter==='Tất cả' || e.group.includes(libFilter)) &&
    (!q || e.name.toLowerCase().includes(q) || e.group.toLowerCase().includes(q)));

  $('#view-library').innerHTML = `
    <div class="view-head"><div><h1>Bài tập</h1>
      <div class="date-line">${Object.keys(EX).length} bài · bodyweight + dây + tạ</div></div></div>
    <input class="search" id="libSearch" placeholder="Tìm bài tập..." value="${libQuery}">
    <div class="filters">${groups.map(g=>`<button class="chip ${g===libFilter?'on':''}" data-f="${g}">${g}</button>`).join('')}</div>
    ${list.map(([id,e])=>`
      <div class="ex" data-ex="${id}">
        <div class="ex-body"><div class="ex-name">${e.name}</div>
        <div class="ex-detail">${e.group} · ${e.sets} × ${e.reps}</div></div>
        ${equipBadge(e.equip)}
      </div>`).join('') || '<div class="empty">Không tìm thấy bài tập nào.</div>'}`;

  $('#libSearch').addEventListener('input', e=>{ libQuery = e.target.value;
    const v = $('#libSearch'); renderLibrary(); const nv = $('#libSearch'); nv.focus(); nv.setSelectionRange(v.value.length, v.value.length); });
  $$('#view-library .chip').forEach(c=>c.addEventListener('click',()=>{ libFilter=c.dataset.f; renderLibrary(); }));
}

/* ---------- VIEW: TIẾN TRÌNH ---------- */
function renderProgress(){
  const w = state.weights;
  const cur = w.length ? w[w.length-1].w : state.profile.weight;
  const hist = Object.keys(state.log).filter(k=>state.log[k].done).sort().reverse().slice(0,14);
  $('#view-progress').innerHTML = `
    <div class="view-head"><div><h1>Tiến trình</h1></div></div>
    <div class="stats">
      <div class="stat"><b class="hl">${totalSessions()}</b><span>buổi đã tập</span></div>
      <div class="stat"><b class="hl">${streak()}</b><span>ngày liên tiếp</span></div>
      <div class="stat"><b>${cur}kg</b><span>cân nặng</span></div>
    </div>
    <div class="card">
      <h3>Cân nặng</h3>
      <div class="row2" style="align-items:end">
        <label style="margin:0">Hôm nay (kg)<input type="number" id="wInput" step="0.5" value="${cur}"></label>
        <button class="btn primary" id="wAdd">Lưu</button>
      </div>
      <div style="margin-top:8px">${w.slice(-6).reverse().map(x=>
        `<div class="wrow"><span>${new Date(x.d+'T00:00').toLocaleDateString('vi-VN',{day:'numeric',month:'numeric'})}</span><b>${x.w} kg</b></div>`).join('') || '<p class="muted">Chưa có dữ liệu.</p>'}</div>
    </div>
    <div class="card">
      <h3>Lịch sử tập luyện</h3>
      ${hist.map(d=>`<div class="wrow"><span><span class="hist-dot"></span>${new Date(d+'T00:00').toLocaleDateString('vi-VN',{weekday:'short',day:'numeric',month:'numeric'})}</span><span class="tick">✓</span></div>`).join('') || '<p class="muted">Chưa có buổi tập nào. Bắt đầu hôm nay nhé!</p>'}
    </div>`;
  $('#wAdd').addEventListener('click', ()=>{
    const v = parseFloat($('#wInput').value);
    if(!v || v<30 || v>200){ toast('Cân nặng chưa hợp lệ'); return; }
    const iso = todayISO();
    const ex = w.findIndex(x=>x.d===iso);
    if(ex>=0) w[ex].w = v; else w.push({d:iso, w:v});
    state.profile.weight = v; save(); renderAll(); toast('Đã lưu cân nặng');
  });
}

/* ---------- VIEW: CÀI ĐẶT ---------- */
function renderSettings(){
  const s = state.settings, p = state.profile;
  $('#view-settings').innerHTML = `
    <div class="view-head"><div><h1>Cài đặt</h1></div></div>
    <div class="card">
      <h3>Hồ sơ</h3>
      <label>Tên<input type="text" id="sName" value="${p.name||''}" placeholder="Tên của bạn"></label>
      <div class="row2">
        <label>Chiều cao (cm)<input type="number" id="sHeight" value="${p.height}"></label>
        <label>Cân nặng (kg)<input type="number" id="sWeight" step="0.5" value="${p.weight}"></label>
      </div>
    </div>
    <div class="card">
      <h3>🏋️ Nâng cấp dụng cụ</h3>
      <p class="muted" style="margin-bottom:10px">Mua thêm dụng cụ? Bật lên — lịch tập sẽ <b style="color:#fff">tự động nâng cấp</b> sang các bài nặng hơn.</p>
      <label class="equip-opt"><input type="checkbox" data-eq="band" ${s.equip.includes('band')?'checked':''}>
        <span>Dây kháng lực<span class="sub">Thêm bài đẩy ngực, row, curl với dây</span></span></label>
      <label class="equip-opt"><input type="checkbox" data-eq="db" ${s.equip.includes('db')?'checked':''}>
        <span>Tạ đơn<span class="sub">Thêm bài floor press, goblet squat, deadlift...</span></span></label>
      ${s.equip.length===0?'<p class="muted">Hiện tại: chỉ tập bodyweight 💪</p>':''}
    </div>
    <div class="card">
      <h3>Lịch tập</h3>
      <label>Số buổi / tuần
        <select id="sDays">
          <option value="6" ${s.days===6?'selected':''}>6 buổi + 1 ngày nghỉ (Chủ nhật)</option>
          <option value="5" ${s.days===5?'selected':''}>5 buổi + 2 ngày nghỉ</option>
        </select>
      </label>
    </div>
    <button class="btn primary full" id="sSave">Lưu thay đổi</button>
    <button class="btn ghost full danger" id="sReset" style="margin-top:8px">Xóa toàn bộ dữ liệu</button>
    <p class="muted" style="text-align:center;margin-top:16px">FORGE · Tập tại nhà · Đen trắng tối giản</p>`;

  $('#sSave').addEventListener('click', ()=>{
    const oldEquip = [...s.equip];
    p.name = $('#sName').value.trim();
    p.height = parseFloat($('#sHeight').value)||p.height;
    p.weight = parseFloat($('#sWeight').value)||p.weight;
    s.days = parseInt($('#sDays').value);
    s.equip = $$('#view-settings [data-eq]:checked').map(c=>c.dataset.eq);
    const added = s.equip.filter(e=>!oldEquip.includes(e));
    save(); buildPlan(); renderAll();
    if(added.length){
      const names = added.map(e=>e==='band'?'dây kháng lực':'tạ đơn').join(' + ');
      const n = added.reduce((t,e)=>t+countNewExercises(e),0);
      toast(`Đã nâng cấp lịch với ${names} · +${n} bài tập mới 🔥`);
    } else toast('Đã lưu cài đặt');
  });
  $('#sReset').addEventListener('click', ()=>{
    if(confirm('Xóa toàn bộ dữ liệu tập luyện?')){
      localStorage.removeItem(LS_KEY); location.reload();
    }
  });
}

/* ---------- MODAL BÀI TẬP ---------- */
function openExModal(id){
  const e = EX[id];
  $('#exModalBody').innerHTML = `
    <div class="ex-big">${e.name}</div>
    <div><span class="pill">${e.group}</span> ${equipBadge(e.equip)}</div>
    <div class="ex-scheme">${e.sets} hiệp × ${e.reps} · nghỉ ${e.rest}s</div>
    <h3>Cách thực hiện</h3>
    <ul class="cue-list">${e.cues.map(c=>`<li>${c}</li>`).join('')}</ul>
    <button class="btn primary full" id="exTimerBtn">⏱ Bấm giờ nghỉ (${e.rest}s)</button>`;
  $('#exModal').classList.add('show');
  $('#exTimerBtn').addEventListener('click', ()=>{ closeModals(); openTimer(e.rest); });
}
function closeModals(){ $$('.overlay').forEach(o=>o.classList.remove('show')); }

/* ---------- TIMER ---------- */
let timerInt=null, timerSec=60;
function fmt(s){ return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
function openTimer(sec){
  timerSec = sec; updateTimerUI();
  $('#timerModal').classList.add('show');
  $('#timerToggle').textContent = 'Bắt đầu';
  clearInterval(timerInt); timerInt=null;
}
function updateTimerUI(){
  const d = $('#timerDisplay');
  d.textContent = fmt(timerSec);
  d.classList.toggle('low', timerSec<=10);
}
function beep(){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    [0,0.25,0.5].forEach((t,i)=>{
      const o=ctx.createOscillator(), g=ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = i===2?880:660; o.type='sine';
      g.gain.setValueAtTime(0.001, ctx.currentTime+t);
      g.gain.exponentialRampToValueAtTime(0.5, ctx.currentTime+t+0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+t+0.2);
      o.start(ctx.currentTime+t); o.stop(ctx.currentTime+t+0.25);
    });
  }catch(e){}
}

/* ---------- ĐIỀU HƯỚNG & SỰ KIỆN ---------- */
function renderAll(){
  $('#streakPill').textContent = `${streak()} ngày 🔥`;
  renderToday(); renderWeek(); renderLibrary(); renderProgress(); renderSettings();
}
function switchView(v){
  $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.view===v));
  $$('.view').forEach(x=>x.classList.toggle('active', x.id==='view-'+v));
  window.scrollTo({top:0});
}

document.addEventListener('DOMContentLoaded', ()=>{
  buildPlan();

  if(!state.onboarded){
    const m = $('#onboardModal'); m.style.display='flex'; m.classList.add('show');
    $('#obStart').addEventListener('click', ()=>{
      state.profile.name = $('#obName').value.trim();
      state.profile.height = parseFloat($('#obHeight').value)||178;
      state.profile.weight = parseFloat($('#obWeight').value)||65.5;
      state.settings.days = parseInt($('#obDays').value);
      const eq = $('#obEquip').value;
      state.settings.equip = eq ? eq.split(',') : [];
      state.onboarded = true;
      save(); buildPlan(); renderAll();
      m.classList.remove('show'); m.style.display='none';
      toast(`Chào ${state.profile.name||'bạn'}! Lịch tập đã sẵn sàng 💪`);
    });
  }

  renderAll();

  /* tabs */
  $$('.tab').forEach(t=>t.addEventListener('click',()=>switchView(t.dataset.view)));

  /* delegate: mở modal bài tập / check / timer */
  document.addEventListener('click', e=>{
    const tm = e.target.closest('[data-timer]');
    if(tm){ e.stopPropagation(); openTimer(parseInt(tm.dataset.timer)); return; }
    const ex = e.target.closest('.ex[data-ex]');
    if(!ex) return;
    const id = ex.dataset.ex;
    if(e.target.closest('.ex-check')){
      const iso = todayISO(), sess = PLAN[todayIdx()];
      const cur = state.log[iso]?.exercises || [];
      const has = cur.includes(id);
      state.log[iso] = state.log[iso]||{exercises:[]};
      state.log[iso].exercises = has ? cur.filter(x=>x!==id) : [...cur, id];
      save(); renderToday();
      return;
    }
    openExModal(id);
  });

  $('#exModalClose').addEventListener('click', closeModals);
  $('#exModal').addEventListener('click', e=>{ if(e.target.id==='exModal') closeModals(); });
  $('#timerClose').addEventListener('click', ()=>{ clearInterval(timerInt); timerInt=null; closeModals(); });
  $('#timerModal').addEventListener('click', e=>{ if(e.target.id==='timerModal'){ clearInterval(timerInt); timerInt=null; closeModals(); } });

  $$('#timerModal .chip').forEach(c=>c.addEventListener('click',()=>{
    clearInterval(timerInt); timerInt=null; $('#timerToggle').textContent='Bắt đầu';
    timerSec = parseInt(c.dataset.t); updateTimerUI();
  }));
  $('#timerMinus').addEventListener('click',()=>{ timerSec=Math.max(5,timerSec-10); updateTimerUI(); });
  $('#timerPlus').addEventListener('click',()=>{ timerSec+=10; updateTimerUI(); });
  $('#timerToggle').addEventListener('click', function(){
    if(timerInt){ clearInterval(timerInt); timerInt=null; this.textContent='Tiếp tục'; return; }
    this.textContent='Tạm dừng';
    timerInt = setInterval(()=>{
      timerSec--;
      if(timerSec<=0){ clearInterval(timerInt); timerInt=null; beep();
        $('#timerToggle').textContent='Bắt đầu'; toast('Hết giờ nghỉ — chiến tiếp! 💪'); }
      updateTimerUI();
    },1000);
  });

  document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ clearInterval(timerInt); timerInt=null; closeModals(); } });
});
