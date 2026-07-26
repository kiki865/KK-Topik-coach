const audio=(t)=>`<button class="sound" onclick="event.stopPropagation();speak('${t.replace(/'/g,"\\'")}',this)">🔊 發音</button>`;
const q=(t,a,c,e)=>({t,a,c,e});
const sets={
'單字':[
q('「약속」的意思最接近哪一個？',['A. 約定／約會','B. 藥局','C. 休息','D. 課本'],0,'「약속」是約定、約會；「약국」才是藥局。'),
q('「회의」的意思是？',['A. 會議','B. 公司','C. 作業','D. 旅行'],0,'「회의」是會議；常見搭配為「회의가 있어요」（有會議）。'),
q('「준비하다」的意思是？',['A. 準備','B. 運動','C. 休息','D. 拍照'],0,'「준비하다」是準備，例如「회의를 준비하다」（準備會議）。'),
q('「늦다」的意思最接近？',['A. 遲到／晚','B. 早','C. 忙','D. 安靜'],0,'「늦다」是晚、遲到；「늦었어요」表示「遲到了」。'),
q('「근처」的意思是？',['A. 附近','B. 中間','C. 星期','D. 房間'],0,'「근처」表示附近，如「회사 근처」（公司附近）。'),
q('「먼저」的意思是？',['A. 先','B. 一起','C. 很','D. 總是'],0,'「먼저」是先，例如「먼저 가세요」（請先走）。'),
q('「아직」的意思是？',['A. 還、尚未','B. 已經','C. 馬上','D. 常常'],0,'「아직」指還沒完成或狀態仍持續。'),
q('「필요하다」的意思是？',['A. 需要','B. 喜歡','C. 知道','D. 等待'],0,'「필요하다」是需要，例如「시간이 필요해요」（需要時間）。'),
q('「보내다」的意思是？',['A. 寄送／傳送','B. 看見','C. 買','D. 教'],0,'「보내다」常用於傳訊息或寄送，例如「메시지를 보내다」。'),
q('「확인하다」的意思是？',['A. 確認','B. 選擇','C. 開始','D. 結束'],0,'「확인하다」是確認，職場中很常用。')],
'文法':[
q('請選出正確句子：「저는 회사___ 갑니다.」',['A. 를','B. 에','C. 은','D. 와'],1,'移動的目的地用「에」：회사에 가다（去公司）。'),
q('請選出正確句子：「커피___ 마셔요.」',['A. 를','B. 에','C. 에서','D. 하고'],0,'動作的受詞用「을／를」：커피를 마셔요（喝咖啡）。'),
q('「비가 와서 우산을 가져갔어요.」中「-아서／어서」表示？',['A. 因為…所以…','B. 如果…','C. 但是…','D. 一起…'],0,'「-아서／어서」連接原因與結果。'),
q('請選出正確句子：「어제 영화를 ___.」',['A. 봐요','B. 봤어요','C. 볼 거예요','D. 보고 싶어요'],1,'「어제」表示過去，因此使用過去式「봤어요」。'),
q('「회의가 끝난 후에 연락할게요.」最接近哪一個意思？',['A. 會議結束後會聯絡','B. 開會前會聯絡','C. 不想聯絡','D. 正在開會'],0,'「후에」是「之後」，「-ㄹ게요」是說話者的承諾或意志。')],
'聽力':[
q('請先聽句子，再選正確意思。',['A. 今天下雨','B. 今天很忙','C. 今天很冷','D. 今天要上班'],0,'「오늘은 비가 와요」中，비是雨，와요是來，因此表示下雨。'),
q('請先聽句子，再選正確意思。',['A. 我已寄出資料','B. 我正在找資料','C. 我沒有資料','D. 請給我資料'],0,'「자료를 보냈어요」表示「已經寄出／傳送資料」。'),
q('請先聽句子，再選正確意思。',['A. 請稍等一下','B. 請先回家','C. 請快一點','D. 請坐下'],0,'「잠깐만 기다려 주세요」是「請稍等一下」。'),
q('請先聽句子，再選正確意思。',['A. 明天上午有會議','B. 今天下午有會議','C. 明天沒有會議','D. 今天上午休息'],0,'「내일 오전에 회의가 있어요」：내일是明天，오전是上午。'),
q('請先聽句子，再選正確意思。',['A. 我想確認一下','B. 我想取消','C. 我想離開','D. 我想休息'],0,'「확인하고 싶어요」是「想確認」。')],
'閱讀':[
q('민수 씨는 어제 친구하고 영화를 봤어요.<br><br>민수 씨는 어제 무엇을 했어요?',['A. 친구하고 영화를 봤어요.','B. 친구하고 밥을 먹었어요.','C. 회사에 갔어요.','D. 집에서 공부했어요.'],0,'「어제」（昨天）、「친구하고」（和朋友）、「영화를 봤어요」（看電影）是關鍵。'),
q('유나 씨는 아침에 커피를 마시고 회사에 갔어요.<br><br>유나 씨는 어디에 갔어요?',['A. 회사에 갔어요.','B. 학교에 갔어요.','C. 식당에 갔어요.','D. 병원에 갔어요.'],0,'「회사에 갔어요」直接說明她去了公司。'),
q('내일은 토요일이에요. 저는 집에서 한국어를 공부할 거예요.<br><br>저는 내일 무엇을 할 거예요?',['A. 집에서 한국어를 공부할 거예요.','B. 친구를 만날 거예요.','C. 회사에 갈 거예요.','D. 영화를 볼 거예요.'],0,'「-ㄹ 거예요」表示未來計畫；句中清楚說要在家學韓文。')]
};
const vocabSounds=['약속','회의','준비하다','늦다','근처','먼저','아직','필요하다','보내다','확인하다'];
const grammarSounds=['저는 회사|갑니다.','커피|마셔요.','비가 와서 우산을 가져갔어요.','어제 영화를','회의가 끝난 후에 연락할게요.'];
const listeningSounds=['오늘은 비가 와요.','자료를 보냈어요.','잠깐만 기다려 주세요.','내일 오전에 회의가 있어요.','확인하고 싶어요.'];
sets['單字'].forEach((x,i)=>x.sound=vocabSounds[i]);
sets['文法'].forEach((x,i)=>x.sound=grammarSounds[i]);
sets['聽力'].forEach((x,i)=>{x.sound=listeningSounds[i];x.t='다음 문장을 듣고 알맞은 뜻을 고르세요.<br><br><strong>'+listeningSounds[i]+'</strong>'});
const exam=Object.values(sets).flat().slice(0,20);let active=[],index=0,mode='',answered=false;
const getWrong=()=>JSON.parse(localStorage.getItem('kkTopikWrong')||'{}');
const saveWrong=x=>localStorage.setItem('kkTopikWrong',JSON.stringify(x));
function markKorean(html){return html}
function koreanOnly(text){return(text.match(/[가-힣]+/g)||[]).join(' ')}
function speak(text){if(!('speechSynthesis'in window)){alert('此瀏覽器不支援語音播放。');return}speechSynthesis.cancel();const parts=text.split('|').filter(Boolean);let part=0;const play=()=>{const u=new SpeechSynthesisUtterance(parts[part]);u.lang='ko-KR';u.rate=.84;u.onend=()=>{part++;if(part<parts.length)setTimeout(play,400)};speechSynthesis.speak(u)};play()}
function koreanButton(text){const korean=koreanOnly(text);return korean?audio(korean):''}
function start(name){mode=name;active=name==='錯題'?buildWrong():name==='模擬考'?exam:sets[name];index=0;answered=false;const s=document.getElementById('session');s.classList.add('open');document.getElementById('sessionTitle').textContent=name+'練習';document.getElementById('sessionHint').textContent=name==='錯題'?'答對三次後會從錯題清單移除。':'答題後可看說明，再按下一題。';s.scrollIntoView({behavior:'smooth',block:'start'});render()}
function buildWrong(){const w=getWrong();return Object.values(sets).flat().filter(x=>w[x.t]&&w[x.t].right<3)}
function render(){const qx=active[index];if(!qx){finish();return}answered=false;document.getElementById('counter').textContent=(index+1)+' / '+active.length;document.getElementById('bar').style.width=(index/active.length*100)+'%';document.getElementById('question').innerHTML=markKorean(qx.t)+(qx.sound?audio(qx.sound):koreanButton(qx.t));document.getElementById('answers').innerHTML=qx.a.map((v,i)=>'<button onclick="answer('+i+')">'+markKorean(v)+koreanButton(v)+'</button>').join('');document.getElementById('result').textContent='';const ex=document.getElementById('explanation');ex.textContent='';ex.classList.remove('show');document.getElementById('nextRow').innerHTML=''}
function answer(choice){if(answered)return;answered=true;const qx=active[index],ok=choice===qx.c,buttons=[...document.querySelectorAll('#answers button')];buttons.forEach((b,i)=>{b.disabled=true;if(i===qx.c)b.classList.add('correct');if(i===choice&&!ok)b.classList.add('wrong')});recordWrong(qx,ok);document.getElementById('result').textContent=ok?'答對了。':'這題已加入錯題記憶。';const ex=document.getElementById('explanation');ex.innerHTML='<strong>說明：</strong>'+qx.e;ex.classList.add('show');document.getElementById('nextRow').innerHTML='<button onclick="next()">下一題</button>';updateCounts()}
function recordWrong(qx,ok){const w=getWrong(),key=qx.t;if(!ok){w[key]={q:qx,right:0}}else if(w[key]){w[key].right++;if(w[key].right>=3)delete w[key]}saveWrong(w)}
function next(){index++;render()}
const dailyNames=['單字','文法','聽力','閱讀'];
const today=()=>new Date().toLocaleDateString('sv-SE');
const getDaily=()=>{const saved=JSON.parse(localStorage.getItem('kkTopikDaily')||'{}');return saved.date===today()?saved:{date:today(),completed:[]}};
function updateDaily(){const daily=getDaily();dailyNames.forEach(name=>document.getElementById('card-'+name)?.classList.toggle('complete',daily.completed.includes(name)));document.getElementById('todayProgress').textContent='今日完成 '+daily.completed.length+' / '+dailyNames.length+' 項'}
function completeDaily(name){if(!dailyNames.includes(name))return;const daily=getDaily();if(!daily.completed.includes(name)){daily.completed.push(name);localStorage.setItem('kkTopikDaily',JSON.stringify(daily))}updateDaily()}
function finish(){if(dailyNames.includes(mode))completeDaily(mode);document.getElementById('bar').style.width='100%';document.getElementById('counter').textContent=active.length+' / '+active.length;document.getElementById('question').innerHTML='<div class="finish"><strong>本回合完成。</strong><br>可以選擇其他項目繼續練習，或回到錯題記憶複習。</div>';document.getElementById('answers').innerHTML='';document.getElementById('result').textContent='';document.getElementById('explanation').classList.remove('show');document.getElementById('nextRow').innerHTML='<button onclick="document.getElementById(\'session\').classList.remove(\'open\')">回到題目列表</button>';updateCounts()}
function updateCounts(){const wrong=Object.keys(getWrong()).length;document.getElementById('wrongCount').textContent='目前 '+wrong+' 題';updateDaily()}
function startExam(){if(new Date()>=new Date('2026-08-15T00:00:00'))start('模擬考')}
function setupExam(){const open=new Date()>=new Date('2026-08-15T00:00:00'),b=document.getElementById('examButton'),n=document.getElementById('examNote');b.disabled=!open;b.textContent=open?'開始模擬考':'8/15 開始';n.textContent=open?'現在可以開始測驗。':'2026/8/15 00:00 開放。'}
async function copyDraft(){const t=document.getElementById('messageDraft').value;try{await navigator.clipboard.writeText(t);document.getElementById('copyNotice').textContent='已複製，可直接貼到明天的訊息。'}catch{document.getElementById('messageDraft').select();document.execCommand('copy');document.getElementById('copyNotice').textContent='已選取訊息，請按 Ctrl+C 複製。'}}
const challengeStorageKey='kkTopikChallengeDays',challengeStart=new Date(2026,6,26),todayDate=new Date();let calendarView=new Date(todayDate.getFullYear(),todayDate.getMonth(),1);
function getChallengeDates(){const current=JSON.parse(localStorage.getItem(challengeStorageKey)||'[]');if(current.length)return current;const legacy=JSON.parse(localStorage.getItem('kkTopikJulyChallenges')||'[]');if(legacy.length){localStorage.setItem(challengeStorageKey,JSON.stringify(legacy));return legacy}return []}
function dateKey(date){return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0')}
function renderChallengeCalendar(){const year=calendarView.getFullYear(),month=calendarView.getMonth(),firstDay=new Date(year,month,1).getDay(),daysInMonth=new Date(year,month+1,0).getDate(),dates=getChallengeDates(),grid=document.getElementById('dynamicCalendar');document.getElementById('calendarMonth').textContent=year+' 年 '+(month+1)+' 月';document.getElementById('calendarStatus').textContent='挑戰從 2026/7/26 接續進行';let html='<div class="calendar-weekdays" aria-hidden="true"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div class="calendar-days">';html+='<span></span>'.repeat(firstDay);for(let day=1;day<=daysInMonth;day++){const date=new Date(year,month,day),key=dateKey(date),available=date>=challengeStart,done=dates.includes(key);html+=available?'<div class="calendar-day toggle'+(done?' challenge':'')+'" data-challenge-date="'+key+'" role="button" tabindex="0" aria-pressed="'+done+'">'+day+(done?' <span class="check" aria-label="已完成挑戰">✓</span>':' <span class="check empty" aria-label="尚未完成挑戰"></span>')+'</div>':'<div class="calendar-day">'+day+'</div>'}grid.innerHTML=html+'</div>'}
function toggleChallengeDay(day){const dates=getChallengeDates(),date=day.dataset.challengeDate,index=dates.indexOf(date);if(index>=0)dates.splice(index,1);else dates.push(date);localStorage.setItem(challengeStorageKey,JSON.stringify(dates));renderChallengeCalendar()}
document.getElementById('dynamicCalendar').addEventListener('click',event=>{const day=event.target.closest('[data-challenge-date]');if(day)toggleChallengeDay(day)});
document.getElementById('dynamicCalendar').addEventListener('keydown',event=>{const day=event.target.closest('[data-challenge-date]');if(day&&(event.key==='Enter'||event.key===' ')){event.preventDefault();toggleChallengeDay(day)}});
document.getElementById('previousMonth').addEventListener('click',()=>{calendarView.setMonth(calendarView.getMonth()-1);renderChallengeCalendar()});
document.getElementById('nextMonth').addEventListener('click',()=>{calendarView.setMonth(calendarView.getMonth()+1);renderChallengeCalendar()});
renderChallengeCalendar();
const vocabCount=document.querySelector('.grid .card:first-child .count');if(vocabCount)vocabCount.textContent='每日 10 個新字＋5 個複習字';
const dailyManagerTopics=[
{topic:'工作確認',intro:'簡短確認今天工作。',lines:[['업무를 확인했습니다.','已確認工作。'],['잘 부탁드립니다.','請多指教。']]},
{topic:'進度報告',intro:'簡短回報目前進度。',lines:[['진행 중입니다.','正在進行中。'],['곧 공유드리겠습니다.','稍後與您分享。']]},
{topic:'會議安排',intro:'確認明天的會議。',lines:[['회의를 확인했습니다.','已確認會議。'],['내일 뵙겠습니다.','明天見。']]},
{topic:'請求確認',intro:'禮貌請對方確認。',lines:[['확인 부탁드립니다.','麻煩確認。'],['감사합니다.','謝謝您。']]},
{topic:'時程管理',intro:'簡短回覆時程。',lines:[['오늘 준비하겠습니다.','今天會準備。'],['일정에 맞추겠습니다.','會配合時程。']]},
{topic:'客戶回覆',intro:'簡短回覆客戶處理狀態。',lines:[['문의 확인했습니다.','已確認詢問。'],['바로 답변드리겠습니다.','會立刻回覆。']]},
{topic:'團隊合作',intro:'簡短說明合作進度。',lines:[['함께 진행하겠습니다.','會一起進行。'],['자료를 공유하겠습니다.','會分享資料。']]}
];
function renderDailyManager(){const todayTopic=dailyManagerTopics[(new Date().getDate()-1)%dailyManagerTopics.length];document.getElementById('dailyTopic').textContent='今日主題：'+todayTopic.topic;document.getElementById('dailyManagerIntro').textContent=todayTopic.intro;document.getElementById('dailyPhraseList').innerHTML=todayTopic.lines.map(([ko,zh])=>'<div class="phrase"><strong>'+ko+'</strong><button class="sound" onclick="speak(\''+ko+'\')">🔊 發音</button><br>'+zh+'</div>').join('');document.getElementById('dailyMessageDraft').value=todayTopic.lines.map(([ko])=>ko).join('\n')}
async function copyDailyDraft(){const draft=document.getElementById('dailyMessageDraft');try{await navigator.clipboard.writeText(draft.value);document.getElementById('dailyCopyNotice').textContent='已複製，可直接貼到訊息中。'}catch{draft.select();document.execCommand('copy');document.getElementById('dailyCopyNotice').textContent='已選取訊息，請按 Ctrl+C 複製。'}}
renderDailyManager();setupExam();updateCounts();