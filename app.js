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
V('함께','一起','副詞','表示和別人共同做某事。','함께 준비해요.','一起準備。',[['함께','一起'],['준비해요','準備']],'함께 放在動詞前表示共同進行。')
];
const learnedWordsKey='kkTopikLearnedWords',vocabGoal=200;
const getLearnedWords=()=>JSON.parse(localStorage.getItem(learnedWordsKey)||'[]');
const today=()=>new Date().toLocaleDateString('sv-SE');
const historyKey='kkTopikDailyVocabHistory';
const getHistory=()=>JSON.parse(localStorage.getItem(historyKey)||'{}');
function chooseDailyVocab(){const history=getHistory();if(history[today()])return history[today()].map(k=>vocabBank.find(v=>v.ko===k)).filter(Boolean);const learned=getLearnedWords();let selected=vocabBank.filter(v=>!learned.includes(v.ko)).slice(0,10);if(selected.length<10)selected=[...selected,...vocabBank.filter(v=>!selected.includes(v)).slice(0,10-selected.length)];history[today()]=selected.map(v=>v.ko);localStorage.setItem(historyKey,JSON.stringify(history));return selected}
const dailyVocab=chooseDailyVocab();
const learnedRecent=getLearnedWords().slice(-5).map(k=>vocabBank.find(v=>v.ko===k)).filter(Boolean);
const review=learnedRecent.length?learnedRecent:dailyVocab.slice(0,5);
const choices=vocabBank.map(v=>v.zh);
const makeChoices=(correct,i)=>[correct,choices[(i*3+7)%choices.length],choices[(i*5+11)%choices.length]].filter((v,p,a)=>a.indexOf(v)===p).slice(0,3).sort(()=>Math.random()-.5);
const sets={
'今日新字':dailyVocab.map(v=>({type:'learn',v})),
'單字複習':review.map(v=>({type:'learn',v})),
'看字選意思':dailyVocab.slice(0,5).map((v,i)=>{const a=makeChoices(v.zh,i);return{type:'quiz',t:`<strong style="font-size:1.4rem">${v.ko}</strong> ${audio(v.ko)}<br>這個單字是什麼意思？`,a,c:a.indexOf(v.zh),e:`${v.ko}＝${v.zh}。${v.ex}＝${v.exZh}`,key:v.ko}}),
'聽音選意思':dailyVocab.slice(5,10).map((v,i)=>{const a=makeChoices(v.zh,i+5);return{type:'quiz',t:`先按發音，再選中文意思。<br><br>${audio(v.ko)}`,a,c:a.indexOf(v.zh),e:`你聽到的是「${v.ko}」，意思是「${v.zh}」。`,key:v.ko}}),
'句子拼圖':[
{type:'quiz',t:'請選出「我去公司」的正確排列。',a:['저는 회사에 가요.','회사에 저는 가요.','가요 저는 회사에.'],c:0,e:'韓文常見順序是：主詞＋地點＋動詞。',speakOptions:true},
{type:'quiz',t:'請選出「我確認資料」的正確排列。',a:['자료를 저는 확인해요.','저는 자료를 확인해요.','확인해요 자료를 저는.'],c:1,e:'動詞通常放在句子的最後。',speakOptions:true}]
};
let active=[],index=0,mode='',answered=false;
const dailyNames=['今日新字','單字複習','看字選意思','聽音選意思','句子拼圖'];
const getDaily=()=>{const s=JSON.parse(localStorage.getItem('kkTopikDaily')||'{}');return s.date===today()?s:{date:today(),completed:[]}};
const getWrong=()=>JSON.parse(localStorage.getItem('kkTopikWrongBeginner')||'{}');
const saveWrong=w=>localStorage.setItem('kkTopikWrongBeginner',JSON.stringify(w));
function saveLearnedWord(word){const learned=getLearnedWords();if(!learned.includes(word)){learned.push(word);localStorage.setItem(learnedWordsKey,JSON.stringify(learned))}updateVocabProgress()}
function updateVocabProgress(){const count=getLearnedWords().length,percent=Math.min(100,count/vocabGoal*100),text=document.getElementById('vocabProgressText'),fill=document.getElementById('vocabProgressFill'),bar=document.getElementById('vocabProgressBar'),note=document.getElementById('vocabMilestone');if(text)text.textContent=`已學 ${count} / ${vocabGoal} 字`;if(fill)fill.style.width=`${percent}%`;if(bar)bar.setAttribute('aria-valuenow',String(count));if(note){if(count>=vocabGoal)note.textContent='第一階段完成！你已累積 200 個基礎單字。';else note.textContent=`第一階段目標：200 個基礎單字，還差 ${Math.max(0,vocabGoal-count)} 字。`}}
function speak(text){if(!('speechSynthesis'in window)){alert('此瀏覽器不支援語音播放。');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ko-KR';u.rate=.78;speechSynthesis.speak(u)}
function start(name){mode=name;active=name==='錯字再練'?buildWrong():sets[name];index=0;answered=false;const s=document.getElementById('session');s.classList.add('open');document.getElementById('sessionTitle').textContent=name;document.getElementById('sessionHint').textContent=name==='錯字再練'?'答對三次後會從錯字清單移除。':'慢慢看、可以重複播放，不用急。';s.scrollIntoView({behavior:'smooth',block:'start'});render()}
function buildWrong(){return Object.values(getWrong()).map(x=>x.q)}
function render(){const item=active[index];if(!item){finish();return}answered=false;document.getElementById('counter').textContent=`${index+1} / ${active.length}`;document.getElementById('bar').style.width=`${index/active.length*100}%`;document.getElementById('result').textContent='';document.getElementById('explanation').classList.remove('show');document.getElementById('nextRow').innerHTML='';if(item.type==='learn'){const v=item.v;document.getElementById('question').innerHTML=`<article class="word-learning-card"><div class="word-learning-title"><strong>${v.ko}</strong>${audio(v.ko)}</div><div class="word-meaning"><b>中文：</b>${v.zh}　<span>詞性：${v.pos}</span></div><div class="grammar-section"><b>單字解釋</b><p>${v.note}</p></div><div class="grammar-section"><b>例句</b><p><strong>${v.ex}</strong> ${audio(v.ex)}<br>${v.exZh}</p></div><div class="grammar-section"><b>例句拆解</b><ul>${v.parts.map(([ko,zh])=>`<li><strong>${ko}</strong>：${zh}</li>`).join('')}</ul></div><div class="grammar-section usage"><b>文法結構</b><p>${v.grammar}</p></div></article>`;document.getElementById('answers').innerHTML='';document.getElementById('nextRow').innerHTML='<button onclick="next()">我記住了，下一個</button>';return}document.getElementById('question').innerHTML=item.t;document.getElementById('answers').innerHTML=item.a.map((v,i)=>item.speakOptions?`<div class="answer-with-sound"><button class="answer-choice" onclick="answer(${i})">${v}</button>${audio(v)}</div>`:`<button onclick="answer(${i})">${v}</button>`).join('')}
function answer(choice){if(answered)return;answered=true;const item=active[index],ok=choice===item.c,buttons=[...document.querySelectorAll('#answers .answer-choice, #answers>button')];buttons.forEach((b,i)=>{b.disabled=true;if(i===item.c)b.classList.add('correct');if(i===choice&&!ok)b.classList.add('wrong')});recordWrong(item,ok);document.getElementById('result').textContent=ok?'答對了。':'沒關係，再看一次正確答案。';const ex=document.getElementById('explanation');ex.innerHTML='<strong>說明：</strong>'+item.e;ex.classList.add('show');document.getElementById('nextRow').innerHTML='<button onclick="next()">下一題</button>';updateCounts()}
function recordWrong(item,ok){if(!item.key)return;const w=getWrong();if(!ok)w[item.key]={q:item,right:0};else if(w[item.key]){w[item.key].right++;if(w[item.key].right>=3)delete w[item.key]}saveWrong(w)}
function next(){const item=active[index];if(item?.type==='learn')saveLearnedWord(item.v.ko);index++;render()}
const challengeStorageKey='kkTopikChallengeDays',challengeStart=new Date(2026,6,26);
const getChallengeDates=()=>JSON.parse(localStorage.getItem(challengeStorageKey)||'[]');
const dateKey=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function markTodayChallengeComplete(){const dates=getChallengeDates(),key=today();if(!dates.includes(key)){dates.push(key);localStorage.setItem(challengeStorageKey,JSON.stringify(dates))}}
function finish(){if(dailyNames.includes(mode)){const d=getDaily();if(!d.completed.includes(mode)){d.completed.push(mode);localStorage.setItem('kkTopikDaily',JSON.stringify(d))}if(dailyNames.every(name=>d.completed.includes(name)))markTodayChallengeComplete()}document.getElementById('bar').style.width='100%';document.getElementById('counter').textContent=`${active.length} / ${active.length}`;document.getElementById('question').innerHTML='<div class="finish"><strong>本關完成！</strong><br>今天只要穩定記住幾個字，就是很好的進步。</div>';document.getElementById('answers').innerHTML='';document.getElementById('result').textContent='';document.getElementById('explanation').classList.remove('show');document.getElementById('nextRow').innerHTML='<button onclick="document.getElementById(\'session\').classList.remove(\'open\')">回到關卡列表</button>';updateCounts();renderChallengeCalendar()}
function updateCounts(){const d=getDaily();dailyNames.forEach(n=>document.getElementById('card-'+n)?.classList.toggle('complete',d.completed.includes(n)));document.getElementById('todayProgress').textContent=`今日完成 ${d.completed.length} / ${dailyNames.length} 項`;document.getElementById('wrongCount').textContent=`目前 ${Object.keys(getWrong()).length} 題`;updateVocabProgress()}
let calendarView=new Date();calendarView=new Date(calendarView.getFullYear(),calendarView.getMonth(),1);
function renderChallengeCalendar(){const y=calendarView.getFullYear(),m=calendarView.getMonth(),first=new Date(y,m,1).getDay(),count=new Date(y,m+1,0).getDate(),dates=getChallengeDates();document.getElementById('calendarMonth').textContent=`${y} 年 ${m+1} 月`;document.getElementById('calendarStatus').textContent='完成 5 個核心關卡後自動打勾';let h='<div class="calendar-weekdays"><span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span></div><div class="calendar-days">'+'<span></span>'.repeat(first);for(let day=1;day<=count;day++){const d=new Date(y,m,day),key=dateKey(d),available=d>=challengeStart,done=dates.includes(key);h+=available?`<div class="calendar-day${done?' challenge':''}" aria-label="${key}${done?' 已完成':' 尚未完成'}">${day}<span class="check${done?'':' empty'}">${done?'✓':''}</span></div>`:`<div class="calendar-day">${day}</div>`}document.getElementById('dynamicCalendar').innerHTML=h+'</div>'}
document.getElementById('previousMonth').onclick=()=>{calendarView.setMonth(calendarView.getMonth()-1);renderChallengeCalendar()};document.getElementById('nextMonth').onclick=()=>{calendarView.setMonth(calendarView.getMonth()+1);renderChallengeCalendar()};
const topics=[
{topic:'工作確認',intro:'今天練習確認工作與禮貌請託。',lines:[{ko:'업무를 확인했습니다.',zh:'我已確認工作內容。',parts:[['업무','工作、業務'],['를','受詞助詞'],['확인했습니다','已確認，正式過去式']],grammar:'名詞＋를／을＋動詞；확인했습니다 表示已完成確認。',use:'用於查看任務或文件後回覆。'},{ko:'잘 부탁드립니다.',zh:'請多多指教／麻煩您了。',parts:[['잘','好好地'],['부탁','請託'],['드립니다','謙讓敬語']],grammar:'부탁드리다 是正式謙讓表達。',use:'開始合作或提出請求時使用。'}]},
{topic:'進度報告',intro:'今天練習簡短而正式地回報進度。',lines:[{ko:'진행 중입니다.',zh:'目前正在進行中。',parts:[['진행','進行'],['중','正在'],['입니다','正式敬語']],grammar:'名詞＋중이다 表示正在進行。',use:'回覆工作尚在處理時使用。'},{ko:'곧 공유드리겠습니다.',zh:'我稍後會與您分享。',parts:[['곧','稍後'],['공유','分享'],['드리겠습니다','正式承諾']],grammar:'-겠습니다 表示正式意志或承諾。',use:'稍後傳送資料時使用。'}]},
{topic:'會議安排',intro:'今天練習確認會議與正式道別。',lines:[{ko:'회의를 확인했습니다.',zh:'我已確認會議安排。',parts:[['회의','會議'],['를','受詞助詞'],['확인했습니다','已確認']],grammar:'受詞＋動詞的基本結構。',use:'收到會議通知後使用。'},{ko:'내일 뵙겠습니다.',zh:'明天見。',parts:[['내일','明天'],['뵙겠습니다','見面的謙讓語']],grammar:'뵙다 用於見上級或長輩。',use:'預計隔天與總經理見面時使用。'}]}
];
function renderManager(){const t=topics[(new Date().getDate()-1)%topics.length];document.getElementById('dailyTopic').textContent='今日主題：'+t.topic;document.getElementById('dailyManagerIntro').textContent=t.intro;document.getElementById('dailyPhraseList').innerHTML=t.lines.map(line=>`<article class="phrase grammar-card"><div class="manager-sentence"><strong>${line.ko}</strong>${audio(line.ko)}</div><div class="sentence-zh"><b>中文：</b>${line.zh}</div><div class="grammar-section"><b>單字拆解</b><ul>${line.parts.map(([ko,zh])=>`<li><strong>${ko}</strong>：${zh}</li>`).join('')}</ul></div><div class="grammar-section"><b>文法結構</b><p>${line.grammar}</p></div><div class="grammar-section usage"><b>使用情境</b><p>${line.use}</p></div></article>`).join('');document.getElementById('dailyMessageDraft').value=t.lines.map(x=>x.ko).join('\n')}
async function copyDailyDraft(){const d=document.getElementById('dailyMessageDraft');try{await navigator.clipboard.writeText(d.value);document.getElementById('dailyCopyNotice').textContent='已複製，可直接貼到訊息中。'}catch{d.select();document.execCommand('copy')}}
renderChallengeCalendar();renderManager();updateCounts();