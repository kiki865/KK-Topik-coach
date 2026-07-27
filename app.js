const audio=t=>`<button class="sound" onclick="event.stopPropagation();speak('${t.replace(/'/g,"\\'")}')">🔊 發音</button>`;
const V=(ko,zh,pos,note,ex,exZh,parts,grammar)=>({ko,zh,pos,note,ex,exZh,parts,grammar});
const vocabBank=[
V('회사','公司','名詞','指公司、企業或工作的組織。','회사에 가요.','去公司。',[['회사','公司'],['에','目的地助詞'],['가요','가다（去）的禮貌形']],'名詞＋에＋移動動詞，表示前往某個地點。'),
V('회의','會議','名詞','指工作上的會議或討論會。','회의가 있어요.','有會議。',[['회의','會議'],['가','主格助詞'],['있어요','有、存在']],'名詞＋이／가＋있어요，表示有某件事或某個東西。'),
V('자료','資料','名詞','指文件、數據、簡報或參考內容。','자료를 봐요.','看資料。',[['자료','資料'],['를','受詞助詞'],['봐요','보다（看）的禮貌形']],'名詞＋을／를＋動詞，表示動作作用的對象。'),
V('준비하다','準備','動詞','表示事先整理、安排或備妥。','회의를 준비해요.','準備會議。',[['회의','會議'],['를','受詞助詞'],['준비해요','준비하다 的禮貌形']],'하다 類動詞在日常禮貌形通常變成 해요。'),
V('확인하다','確認','動詞','查看並確認內容、狀態或安排。','자료를 확인해요.','確認資料。',[['자료','資料'],['를','受詞助詞'],['확인해요','確認']],'名詞＋을／를＋확인하다；正式完成式可說 확인했습니다。'),
V('보내다','傳送／寄送','動詞','可用於傳訊息、寄文件或寄電子郵件。','메시지를 보내요.','傳送訊息。',[['메시지','訊息'],['를','受詞助詞'],['보내요','傳送']],'보내다 接 어요 後成為 보내요。'),
V('오늘','今天','時間詞','表示今天，通常可直接放在句首。','오늘 만나요.','今天見面。',[['오늘','今天'],['만나요','見面']],'時間詞可直接修飾整句，不一定需要加助詞。'),
V('내일','明天','時間詞','表示明天，常用於工作安排。','내일 뵙겠습니다.','明天見。',[['내일','明天'],['뵙겠습니다','正式謙讓語：明天見']],'뵙다 是「見面」的謙讓語；-겠습니다 表正式意志。'),
V('먼저','先、首先','副詞','表示在其他事情之前先做。','먼저 가세요.','請先走。',[['먼저','先'],['가세요','請走']],'副詞放在動詞前；-세요 表示禮貌請求。'),
V('감사합니다','謝謝','正式敬語','正式且常用的道謝方式。','정말 감사합니다.','真的謝謝您。',[['정말','真的'],['감사합니다','謝謝']],'감사하다＋ㅂ니다 形成正式敬語 감사합니다。'),
V('일정','行程／日程','名詞','指工作、會議或活動的時間安排。','일정을 확인해요.','確認行程。',[['일정','行程'],['을','受詞助詞'],['확인해요','確認']],'有收音的名詞後使用 을。'),
V('시간','時間','名詞','表示時間或時段。','시간이 필요해요.','需要時間。',[['시간','時間'],['이','主格助詞'],['필요해요','需要']],'名詞＋이／가＋필요해요，表示需要某物。'),
V('문제','問題','名詞','指問題、困難或需要處理的事項。','문제가 있어요.','有問題。',[['문제','問題'],['가','主格助詞'],['있어요','有']],'問題作主體時使用 이／가。'),
V('방법','方法','名詞','指做事情的方法或方式。','방법을 찾아요.','尋找方法。',[['방법','方法'],['을','受詞助詞'],['찾아요','尋找']],'名詞＋을／를＋찾다，表示尋找某物。'),
V('계획','計畫','名詞','指未來的工作或行動安排。','계획을 세워요.','制定計畫。',[['계획','計畫'],['을','受詞助詞'],['세워요','制定、建立']],'계획을 세우다 是「制定計畫」的固定搭配。'),
V('보고서','報告','名詞','指書面報告或分析文件。','보고서를 작성해요.','撰寫報告。',[['보고서','報告'],['를','受詞助詞'],['작성해요','撰寫']],'작성하다 是正式的「撰寫」，하다 變成 해요。'),
V('공유하다','分享','動詞','表示把資料或資訊提供給別人。','자료를 공유해요.','分享資料。',[['자료','資料'],['를','受詞助詞'],['공유해요','分享']],'공유하다 的禮貌形是 공유해요。'),
V('설명하다','說明','動詞','表示解釋內容、原因或方法。','내용을 설명해요.','說明內容。',[['내용','內容'],['을','受詞助詞'],['설명해요','說明']],'名詞＋을／를＋설명하다。'),
V('연락하다','聯絡','動詞','表示以電話、訊息或郵件聯繫。','나중에 연락해요.','稍後聯絡。',[['나중에','稍後'],['연락해요','聯絡']],'時間副詞＋動詞；연락하다 變成 연락해요。'),
V('도와주다','幫忙','動詞','表示替別人提供協助。','제가 도와드릴게요.','我來幫您。',[['제가','我（主格）'],['도와드릴게요','我會幫您']],'도와드리다 是對上級的謙讓說法；-ㄹ게요 表意願。'),
V('시작하다','開始','動詞','表示開始工作、活動或會議。','회의를 시작해요.','開始會議。',[['회의','會議'],['를','受詞助詞'],['시작해요','開始']],'시작하다 的禮貌形是 시작해요。'),
V('끝나다','結束','動詞','表示事情自然結束。','회의가 끝났어요.','會議結束了。',[['회의','會議'],['가','主格助詞'],['끝났어요','結束了']],'끝나다 是自動詞，主體用 이／가；過去式為 끝났어요。'),
V('기다리다','等待','動詞','表示等候某人或某事。','잠깐 기다려 주세요.','請稍等一下。',[['잠깐','一下'],['기다려 주세요','請等待']],'動詞＋아／어 주세요，表示禮貌請求。'),
V('필요하다','需要','形容詞','表示某物是必要的。','도움이 필요해요.','需要幫助。',[['도움','幫助'],['이','主格助詞'],['필요해요','需要']],'在韓文中「需要」常用 名詞＋이／가＋필요하다。'),
V('가능하다','可以／可能','形容詞','表示某件事情可以做到。','오늘 가능합니다.','今天可以。',[['오늘','今天'],['가능합니다','可以，正式形']],'가능하다＋ㅂ니다 形成正式說法 가능합니다。'),
V('중요하다','重要','形容詞','表示具有重要性。','이 내용이 중요해요.','這個內容很重要。',[['이 내용','這個內容'],['이','主格助詞'],['중요해요','重要']],'形容詞也可作句尾；중요하다 變成 중요해요。'),
V('빠르다','快','形容詞','表示速度快或時間早。','진행이 빨라요.','進度很快。',[['진행','進度'],['이','主格助詞'],['빨라요','快']],'빠르다 是 르 不規則，禮貌形為 빨라요。'),
V('늦다','晚／遲到','形容詞','表示時間晚或動作遲。','조금 늦었어요.','有點晚了。',[['조금','有點'],['늦었어요','晚了']],'늦다 的過去式為 늦었어요。'),
V('다시','再次','副詞','表示重新做一次。','다시 확인해 주세요.','請再次確認。',[['다시','再次'],['확인해 주세요','請確認']],'副詞＋動詞；-아／어 주세요 表禮貌請求。'),
V('함께','一起','副詞','表示和別人共同做某事。','함께 준비해요.','一起準備。',[['함께','一起'],['준비해요','準備']],'함께 放在動詞前表示共同進行。'),
V('결과','結果','名詞','指工作、檢查或討論後得到的結果。','결과를 알려 주세요.','請告訴我結果。',[['결과','結果'],['를','受詞助詞'],['알려 주세요','請告知']],'알리다＋어 주세요 形成 알려 주세요。'),
V('의견','意見','名詞','指個人的想法或建議。','의견을 말씀해 주세요.','請告訴我您的意見。',[['의견','意見'],['을','受詞助詞'],['말씀해 주세요','請說明']],'말씀하다 是 말하다 的尊敬說法。'),
V('변경하다','變更','動詞','表示修改時間、內容或安排。','일정을 변경해요.','變更行程。',[['일정','行程'],['을','受詞助詞'],['변경해요','變更']],'변경하다 的禮貌形是 변경해요。'),
V('참석하다','參加／出席','動詞','表示出席會議或活動。','회의에 참석해요.','參加會議。',[['회의','會議'],['에','地點／活動助詞'],['참석해요','出席']],'참석하다 常與 에 搭配。'),
V('완료하다','完成','動詞','表示工作或程序已做完。','업무를 완료했어요.','已完成工作。',[['업무','工作'],['를','受詞助詞'],['완료했어요','完成了']],'완료하다 的過去式為 완료했어요。'),
V('수정하다','修改','動詞','表示修正文件、內容或錯誤。','내용을 수정해요.','修改內容。',[['내용','內容'],['을','受詞助詞'],['수정해요','修改']],'수정하다 的禮貌形是 수정해요。'),
V('질문','問題／提問','名詞','指想詢問的問題。','질문이 있어요.','我有問題。',[['질문','問題'],['이','主格助詞'],['있어요','有']],'名詞＋이／가＋있어요，表示有某事。'),
V('답변','回答','名詞','指對問題的回覆。','답변을 기다려요.','等待回答。',[['답변','回答'],['을','受詞助詞'],['기다려요','等待']],'名詞＋을／를＋기다리다。'),
V('목표','目標','名詞','指希望達成的成果。','목표를 정해요.','設定目標。',[['목표','目標'],['를','受詞助詞'],['정해요','決定、設定']],'정하다 的禮貌形為 정해요。'),
V('성과','成果','名詞','指工作或計畫產生的成效。','성과를 공유해요.','分享成果。',[['성과','成果'],['를','受詞助詞'],['공유해요','分享']],'名詞＋을／를＋공유하다。')
];
const today=()=>new Date().toLocaleDateString('sv-SE');
const dayNumber=()=>Math.floor(new Date(`${today()}T00:00:00`).getTime()/86400000);
const learnedWordsKey='kkTopikLearnedWords',vocabGoal=200,historyKey='kkTopikDailyVocabHistory';
const getLearnedWords=()=>JSON.parse(localStorage.getItem(learnedWordsKey)||'[]');
const getHistory=()=>JSON.parse(localStorage.getItem(historyKey)||'{}');
function resetTodayOnce(){const flag='kkTopikDailyReset_20260727_v2';if(localStorage.getItem(flag))return;const d=JSON.parse(localStorage.getItem('kkTopikDaily')||'{}');if(d.date===today())localStorage.setItem('kkTopikDaily',JSON.stringify({date:today(),completed:[]}));const dates=JSON.parse(localStorage.getItem('kkTopikChallengeDays')||'[]').filter(x=>x!==today());localStorage.setItem('kkTopikChallengeDays',JSON.stringify(dates));const history=getHistory();delete history[today()];localStorage.setItem(historyKey,JSON.stringify(history));localStorage.setItem(flag,'done')}
resetTodayOnce();
function chooseDailyVocab(){const history=getHistory();if(history[today()])return history[today()].map(k=>vocabBank.find(v=>v.ko===k)).filter(Boolean);const learned=getLearnedWords();let available=vocabBank.filter(v=>!learned.includes(v.ko));if(available.length<10)available=vocabBank;const start=(dayNumber()*10)%available.length;const selected=Array.from({length:Math.min(10,available.length)},(_,i)=>available[(start+i)%available.length]);history[today()]=selected.map(v=>v.ko);localStorage.setItem(historyKey,JSON.stringify(history));return selected}
const dailyVocab=chooseDailyVocab();
function chooseReview(){const history=getHistory();const priorDates=Object.keys(history).filter(d=>d<today()).sort().reverse();const words=priorDates.flatMap(d=>history[d]).filter((v,i,a)=>a.indexOf(v)===i).slice(0,5);const chosen=words.map(k=>vocabBank.find(v=>v.ko===k)).filter(Boolean);return chosen.length===5?chosen:dailyVocab.slice(0,5)}
const review=chooseReview();
const choices=vocabBank.map(v=>v.zh);
const makeChoices=(correct,i)=>{const pool=[correct,choices[(i*7+dayNumber())%choices.length],choices[(i*11+dayNumber()+5)%choices.length],choices[(i*13+dayNumber()+9)%choices.length]].filter((v,p,a)=>a.indexOf(v)===p);for(const c of choices)if(pool.length<3&&!pool.includes(c))pool.push(c);return pool.slice(0,3).sort(()=>Math.random()-.5)};
const puzzlePool=[
{t:'請選出「我去公司」的正確排列。',a:['저는 회사에 가요.','회사에 저는 가요.','가요 저는 회사에.'],c:0,e:'韓文常見順序是：主詞＋地點＋動詞。'},
{t:'請選出「我確認資料」的正確排列。',a:['자료를 저는 확인해요.','저는 자료를 확인해요.','확인해요 자료를 저는.'],c:1,e:'動詞通常放在句子的最後。'},
{t:'請選出「明天有會議」的正確排列。',a:['내일 회의가 있어요.','회의가 내일 있어요.','있어요 내일 회의가.'],c:0,e:'時間詞通常放在句首，動詞放在最後。'},
{t:'請選出「請稍等一下」的正確排列。',a:['기다려 잠깐 주세요.','잠깐 기다려 주세요.','주세요 잠깐 기다려.'],c:1,e:'잠깐 放在動詞前，-아／어 주세요 表示禮貌請求。'},
{t:'請選出「我會稍後聯絡」的正確排列。',a:['나중에 연락드리겠습니다.','연락드리겠습니다 나중에.','나중에 드리겠습니다 연락.'],c:0,e:'時間詞＋動詞，正式承諾用 -겠습니다。'},
{t:'請選出「請再次確認」的正確排列。',a:['확인해 다시 주세요.','다시 확인해 주세요.','주세요 확인해 다시.'],c:1,e:'副詞 다시 放在動詞前。'},
{t:'請選出「我正在撰寫報告」的正確排列。',a:['보고서를 작성하고 있습니다.','작성하고 보고서를 있습니다.','있습니다 보고서를 작성하고.'],c:0,e:'-고 있습니다 表示正在進行。'},
{t:'請選出「請分享結果」的正確排列。',a:['결과를 공유해 주세요.','공유해 결과를 주세요.','주세요 결과를 공유해.'],c:0,e:'受詞＋動詞＋주세요 是常見請求句型。'},
{t:'請選出「會議已經結束」的正確排列。',a:['회의가 이미 끝났어요.','이미 끝났어요 회의가.','끝났어요 회의가 이미.'],c:0,e:'主詞＋副詞＋動詞是自然順序。'},
{t:'請選出「我會修改內容」的正確排列。',a:['내용을 수정하겠습니다.','수정하겠습니다 내용을.','내용을 하겠습니다 수정.'],c:0,e:'受詞放在動詞前，-겠습니다 表示正式意志。'}
];
const puzzleStart=(dayNumber()*2)%puzzlePool.length;
const dailyPuzzles=[puzzlePool[puzzleStart],puzzlePool[(puzzleStart+1)%puzzlePool.length]].map(x=>({...x,type:'quiz',speakOptions:true}));
const sets={
'今日新字':dailyVocab.map(v=>({type:'learn',v})),
'單字複習':review.map(v=>({type:'learn',v})),
'看字選意思':dailyVocab.slice(0,5).map((v,i)=>{const a=makeChoices(v.zh,i);return{type:'quiz',t:`<strong style="font-size:1.4rem">${v.ko}</strong> ${audio(v.ko)}<br>這個單字是什麼意思？`,a,c:a.indexOf(v.zh),e:`${v.ko}＝${v.zh}。${v.ex}＝${v.exZh}`,key:v.ko}}),
'聽音選意思':dailyVocab.slice(5,10).map((v,i)=>{const a=makeChoices(v.zh,i+5);return{type:'quiz',t:`先按發音，再選中文意思。<br><br>${audio(v.ko)}`,a,c:a.indexOf(v.zh),e:`你聽到的是「${v.ko}」，意思是「${v.zh}」。`,key:v.ko}}),
'句子拼圖':dailyPuzzles
};
let active=[],index=0,mode='',answered=false;
const dailyNames=['今日新字','單字複習','看字選意思','聽音選意思','句子拼圖'];
const getDaily=()=>{const s=JSON.parse(localStorage.getItem('kkTopikDaily')||'{}');return s.date===today()?s:{date:today(),completed:[]}};
const getWrong=()=>JSON.parse(localStorage.getItem('kkTopikWrongBeginner')||'{}');
const saveWrong=w=>localStorage.setItem('kkTopikWrongBeginner',JSON.stringify(w));
function saveLearnedWord(word){const learned=getLearnedWords();if(!learned.includes(word)){learned.push(word);localStorage.setItem(learnedWordsKey,JSON.stringify(learned))}updateVocabProgress()}
function updateVocabProgress(){const count=getLearnedWords().length,percent=Math.min(100,count/vocabGoal*100),text=document.getElementById('vocabProgressText'),fill=document.getElementById('vocabProgressFill'),bar=document.getElementById('vocabProgressBar'),note=document.getElementById('vocabMilestone');if(text)text.textContent=`已學 ${count} / ${vocabGoal} 字`;if(fill)fill.style.width=`${percent}%`;if(bar)bar.setAttribute('aria-valuenow',String(count));if(note)note.textContent=count>=vocabGoal?'第一階段完成！你已累積 200 個基礎單字。':`第一階段目標：200 個基礎單字，還差 ${Math.max(0,vocabGoal-count)} 字。`}
function speak(text){if(!('speechSynthesis'in window)){alert('此瀏覽器不支援語音播放。');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ko-KR';u.rate=.78;speechSynthesis.speak(u)}
function start(name){mode=name;active=name==='錯字再練'?buildWrong():sets[name];index=0;answered=false;const s=document.getElementById('session');s.classList.add('open');document.getElementById('sessionTitle').textContent=name;document.getElementById('sessionHint').textContent=name==='錯字再練'?'答對三次後會從錯字清單移除。':'今天的內容已依日期更新；慢慢看、可以重複播放。';s.scrollIntoView({behavior:'smooth',block:'start'});render()}
function buildWrong(){return Object.values(getWrong()).map(x=>x.q)}
function render(){const item=active[index];if(!item){finish();return}answered=false;document.getElementById('counter').textContent=`${index+1} / ${active.length}`;document.getElementById('bar').style.width=`${index/active.length*100}%`;document.getElementById('result').textContent='';document.getElementById('explanation').classList.remove('show');document.getElementById('nextRow').innerHTML='';if(item.type==='learn'){const v=item.v;document.getElementById('question').innerHTML=`<article class="word-learning-card"><div class="word-learning-title"><strong>${v.ko}</strong>${audio(v.ko)}</div><div class="word-meaning"><b>中文：</b>${v.zh}　<span>詞性：${v.pos}</span></div><div class="grammar-section"><b>單字解釋</b><p>${v.note}</p></div><div class="grammar-section"><b>例句</b><p><strong>${v.ex}</strong> ${audio(v.ex)}<br>${v.exZh}</p></div><div class="grammar-section"><b>例句拆解</b><ul>${v.parts.map(([ko,zh])=>`<li><strong>${ko}</strong>：${zh}</li>`).join('')}</ul></div><div class="grammar-section usage"><b>文法結構</b><p>${v.grammar}</p></div></article>`;document.getElementById('answers').innerHTML='';document.getElementById('nextRow').innerHTML='<button onclick="next()">我記住了，下一個</button>';return}document.getElementById('question').innerHTML=item.t;document.getElementById('answers').innerHTML=item.a.map((v,i)=>item.speakOptions?`<div class="answer-with-sound"><button class="answer-choice" onclick="answer(${i})">${v}</button>${audio(v)}</div>`:`<button onclick="answer(${i})">${v}</button>`).join('')}
function answer(choice){if(answered)return;answered=true;const item=active[index],ok=choice===item.c,buttons=[...document.querySelectorAll('#answers .answer-choice, #answers>button')];buttons.forEach((b,i)=>{b.disabled=true;if(i===item.c)b.classList.add('correct');if(i===choice&&!ok)b.classList.add('wrong')});recordWrong(item,ok);document.getElementById('result').textContent=ok?'答對了。':'沒關係，再看一次正確答案。';const ex=document.getElementById('explanation');ex.innerHTML='<strong>說明：</strong>'+item.e;ex.classList.add('show');document.getElementById('nextRow').innerHTML='<button onclick="next()">下一題</button>';updateCounts()}
function recordWrong(item,ok){if(!item.key)return;const w=getWrong();if(!ok)w[item.key]={q:item,right:0};else if(w[item.key]){w[item.key].right++;if(w[item.key].right>=3)delete w[item.key]}saveWrong(w)}
function next(){const item=active[index];if(item?.type==='learn')saveLearnedWord(item.v.ko);index++;render()}
const challengeStorageKey='kkTopikChallengeDays',challengeStart=new Date(2026,6,26);
const getChallengeDates=()=>JSON.parse(localStorage.getItem(challengeStorageKey)||'[]');
const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function markTodayChallengeComplete(){const dates=getChallengeDates(),key=today();if(!dates.includes(key)){dates.push(key);localStorage.setItem(challengeStorageKey,JSON.stringify(dates))}}
function finish(){if(dailyNames.includes(mode)){const d=getDaily();if(!d.completed.includes(mode)){d.completed.push(mode);localStorage.setItem('kkTopikDaily',JSON.stringify(d))}if(dailyNames.every(name=>d.completed.includes(name)))markTodayChallengeComplete()}document.getElementById('bar').style.width='100%';document.getElementById('counter').textContent=`${active.length} / ${active.length}`;document.getElementById('question').innerHTML='<div class="finish"><strong>本關完成！</strong><br>完成全部 5 個每日關卡後，月曆會自動打勾。</div>';document.getElementById('answers').innerHTML='';document.getElementById('result').textContent='';document.getElementById('explanation').classList.remove('show');document.getElementById('nextRow').innerHTML='<button onclick="document.getElementById(\'session\').classList.remove(\'open\')">回到關卡列表</button>';updateCounts();renderChallengeCalendar()}
function updateCounts(){const d=getDaily();dailyNames.forEach(n=>document.getElementById('card-'+n)?.classList.toggle('complete',d.completed.includes(n)));document.getElementById('todayProgress').textContent=`今日完成 ${d.completed.length} / ${dailyNames.length} 項`;document.getElementById('wrongCount').textContent=`目前 ${Object.keys(getWrong()).length} 題`;updateVocabProgress()}
let calendarView=new Date();calendarView=new Date(calendarView.getFullYear(),calendarView.getMonth(),1);
function renderChallengeCalendar(){const y=calendarView.getFullYear(),m=calendarView.getMonth(),first=new Date(y,m,1).getDay(),count=new Date(y,m+1,0).getDate(),dates=getChallengeDates();document.getElementById('calendarMonth').textContent=`${y} 年 ${m+1} 月`;document.getElementById('calendarStatus').textContent='每日新題；完成 5 關後自動打勾';let h='<div class="calendar-weekdays"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div class="calendar-days">'+'<span></span>'.repeat(first);for(let day=1;day<=count;day++){const d=new Date(y,m,day),key=dateKey(d),available=d>=challengeStart,done=dates.includes(key);h+=available?`<div class="calendar-day${done?' challenge':''}" aria-label="${key}${done?' 已完成':' 尚未完成'}">${day}<span class="check${done?'':' empty'}">${done?'✓':''}</span></div>`:`<div class="calendar-day">${day}</div>`}document.getElementById('dynamicCalendar').innerHTML=h+'</div>'}
document.getElementById('previousMonth').onclick=()=>{calendarView.setMonth(calendarView.getMonth()-1);renderChallengeCalendar()};document.getElementById('nextMonth').onclick=()=>{calendarView.setMonth(calendarView.getMonth()+1);renderChallengeCalendar()};
const topics=[
{topic:'工作確認',intro:'今天練習確認工作與禮貌請託。',lines:[{ko:'업무 내용을 확인했습니다.',zh:'我已確認工作內容。',parts:[['업무 내용','工作內容'],['을','受詞助詞'],['확인했습니다','已確認，正式過去式']],grammar:'名詞＋을／를＋動詞；확인했습니다 表示確認已完成。',use:'查看任務或文件後向總經理回覆。'},{ko:'추가로 확인할 사항이 있을까요?',zh:'還有需要另外確認的事項嗎？',parts:[['추가로','另外'],['확인할 사항','要確認的事項'],['있을까요','是否有呢']],grammar:'動詞＋ㄹ／을 名詞表示「要做的……」；-을까요 是禮貌詢問。',use:'希望確認是否還有其他任務時使用。'}]},
{topic:'進度報告',intro:'今天練習簡短而正式地回報進度。',lines:[{ko:'현재 계획대로 진행 중입니다.',zh:'目前正按照計畫進行。',parts:[['현재','目前'],['계획대로','按照計畫'],['진행 중입니다','正在進行']],grammar:'名詞＋대로 表示按照；名詞＋중이다 表示正在進行。',use:'回報專案進度正常時使用。'},{ko:'완료되면 바로 공유드리겠습니다.',zh:'完成後我會立即與您分享。',parts:[['완료되면','完成的話／完成後'],['바로','立即'],['공유드리겠습니다','會與您分享']],grammar:'-면 表示條件或時間；-겠습니다 表正式承諾。',use:'承諾完成後立即回報時使用。'}]},
{topic:'會議安排',intro:'今天練習確認會議時間與出席。',lines:[{ko:'내일 회의 일정을 확인했습니다.',zh:'我已確認明天的會議行程。',parts:[['내일','明天'],['회의 일정','會議行程'],['을','受詞助詞'],['확인했습니다','已確認']],grammar:'時間詞＋受詞＋動詞，是自然的工作回覆。',use:'收到會議邀請後確認時間。'},{ko:'정시에 참석하겠습니다.',zh:'我會準時出席。',parts:[['정시에','準時'],['참석하겠습니다','會出席']],grammar:'-겠습니다 表示正式意志。',use:'向總經理確認會準時參加。'}]},
{topic:'資料提交',intro:'今天練習提交文件與請求確認。',lines:[{ko:'요청하신 자료를 보내드립니다.',zh:'我將您要求的資料寄給您。',parts:[['요청하신','您要求的'],['자료를','資料'],['보내드립니다','恭敬地傳送']],grammar:'-시- 是尊敬語；드리다 是謙讓表達。',use:'寄送總經理要求的資料時使用。'},{ko:'확인 부탁드립니다.',zh:'麻煩您確認。',parts:[['확인','確認'],['부탁드립니다','麻煩您']],grammar:'名詞＋부탁드립니다 是正式請託句型。',use:'附檔或提交報告後使用。'}]},
{topic:'問題回報',intro:'今天練習說明問題與處理方式。',lines:[{ko:'현재 한 가지 문제가 있습니다.',zh:'目前有一個問題。',parts:[['현재','目前'],['한 가지','一項'],['문제가 있습니다','有問題']],grammar:'名詞＋이／가＋있습니다 是正式的「有……」。',use:'需要向總經理回報風險時使用。'},{ko:'해결 방법을 확인하고 있습니다.',zh:'我正在確認解決方法。',parts:[['해결 방법','解決方法'],['을','受詞助詞'],['확인하고 있습니다','正在確認']],grammar:'-고 있습니다 表示動作正在進行。',use:'說明已開始處理問題。'}]},
{topic:'請求意見',intro:'今天練習禮貌地請總經理提供意見。',lines:[{ko:'이 방향에 대해 의견을 부탁드립니다.',zh:'想請您對這個方向提供意見。',parts:[['이 방향에 대해','關於這個方向'],['의견을','意見'],['부탁드립니다','敬請提供']],grammar:'名詞＋에 대해 表示「關於……」。',use:'提案需要總經理判斷時使用。'},{ko:'수정이 필요하면 말씀해 주세요.',zh:'需要修改的話，請告訴我。',parts:[['수정이 필요하면','若需要修改'],['말씀해 주세요','請告訴我']],grammar:'-면 表示如果；말씀하다 是尊敬語。',use:'提交草案後請對方指示。'}]},
{topic:'行程變更',intro:'今天練習通知行程調整。',lines:[{ko:'회의 시간이 변경되었습니다.',zh:'會議時間已變更。',parts:[['회의 시간','會議時間'],['이','主格助詞'],['변경되었습니다','已被變更']],grammar:'-되다 可形成被動或狀態變化。',use:'正式通知時間異動。'},{ko:'새로운 일정을 다시 공유드리겠습니다.',zh:'我會再次分享新的行程。',parts:[['새로운 일정','新行程'],['을','受詞助詞'],['다시','再次'],['공유드리겠습니다','會與您分享']],grammar:'副詞 다시 放在動詞前；-겠습니다 表承諾。',use:'預告稍後補送更新資訊。'}]},
{topic:'工作完成',intro:'今天練習正式回報完成。',lines:[{ko:'요청하신 업무를 완료했습니다.',zh:'您要求的工作已完成。',parts:[['요청하신','您要求的'],['업무를','工作'],['완료했습니다','已完成']],grammar:'動詞＋시＋ㄴ 修飾名詞，表示尊敬主體做過的動作。',use:'完成總經理交辦事項後使用。'},{ko:'결과를 함께 첨부드립니다.',zh:'我一併附上結果。',parts:[['결과를','結果'],['함께','一併'],['첨부드립니다','恭敬地附上']],grammar:'첨부드리다 是對上級使用的謙讓表達。',use:'回報完成並附上成果。'}]}
];
function renderManager(){const t=topics[dayNumber()%topics.length];document.getElementById('dailyTopic').textContent='今日主題：'+t.topic;document.getElementById('dailyManagerIntro').textContent=t.intro+'（每天自動更新）';document.getElementById('dailyPhraseList').innerHTML=t.lines.map(line=>`<article class="phrase grammar-card"><div class="manager-sentence"><strong>${line.ko}</strong>${audio(line.ko)}</div><div class="sentence-zh"><b>中文：</b>${line.zh}</div><div class="grammar-section"><b>單字拆解</b><ul>${line.parts.map(([ko,zh])=>`<li><strong>${ko}</strong>：${zh}</li>`).join('')}</ul></div><div class="grammar-section"><b>文法結構</b><p>${line.grammar}</p></div><div class="grammar-section usage"><b>使用情境</b><p>${line.use}</p></div></article>`).join('');document.getElementById('dailyMessageDraft').value=t.lines.map(x=>x.ko).join('\n')}
async function copyDailyDraft(){const d=document.getElementById('dailyMessageDraft');try{await navigator.clipboard.writeText(d.value);document.getElementById('dailyCopyNotice').textContent='已複製，可直接貼到訊息中。'}catch{d.select();document.execCommand('copy')}}
renderChallengeCalendar();renderManager();updateCounts();