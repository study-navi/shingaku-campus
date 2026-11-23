const jsCareer=id=>'https://school.js88.com/scl_h/'+id+'?page=8';
const careerData={
 '大府':{
  '普通科':{total:236,university:208,junior:1,vocational:16,source:'https://obu-h2.aichi-c.ed.jp/cms/info/career.html'},
  '生活文化科':{total:69,university:17,junior:2,vocational:38,source:'https://obu-h2.aichi-c.ed.jp/cms/info/career.html'}
 },
 '大府東':{total:224,university:172,junior:3,vocational:35,source:jsCareer('22011000'),publishedBreakdown:true},
 '阿久比':{total:238,university:193,junior:7,vocational:29,otherStudy:1,source:'https://agui-h.aichi-c.ed.jp/pdf/apuramu.pdf'},
 '東海南':{total:310,university:278,junior:2,vocational:13,source:jsCareer('22010660'),publishedBreakdown:true},
 '緑':{total:353,university:287,junior:1,vocational:46,source:jsCareer('22010760'),publishedBreakdown:true},
 '豊明':{total:260,university:195,junior:2,vocational:48,source:jsCareer('22009770'),publishedBreakdown:true},
 '武豊':{total:76,university:26,junior:5,vocational:20,year:2025,source:jsCareer('22010130'),publishedBreakdown:true},
 '知立東':{total:346,university:321,junior:3,vocational:4,source:jsCareer('22011110'),publishedBreakdown:true},
 '桜台':{total:352,university:283,junior:1,vocational:28,scope:'学校全体・学科合算',source:jsCareer('22010690'),publishedBreakdown:true},
 '半田商業':{total:221,university:44,junior:1,vocational:48,scope:'学校全体・学科合算',source:jsCareer('22010100'),publishedBreakdown:true},
 '名古屋大谷':{total:583,university:328,junior:12,vocational:188,scope:'学校全体・学科合算',source:jsCareer('22011200'),publishedBreakdown:true},
 '名古屋たちばな':{total:222,university:60,junior:3,vocational:42,scope:'学校全体・学科合算',source:jsCareer('22011290'),publishedBreakdown:true}
};

const careerSources={
 '半田東':['https://handahigashi-h.aichi-c.ed.jp/admissions/','学校の受験生向けページに進路実績を掲載。'],
 '桃陵':['https://toryo-h.com/schoollife/future','学科別の進路先を公開。衛生看護科は5年一貫のため、大学進学率より専攻科修了後の進路が参考になります。'],
 '横須賀':[jsCareer('22010030'),'2026年3月卒業生の大学進学272人、短大1人、専修・各種学校6人。卒業者総数を確認できないため割合は掲載していません。'],
 '鳴海':[jsCareer('22009610'),'進学先の情報を掲載。卒業者総数と進学者数を揃えて確認できていません。'],
 '東浦':[jsCareer('22010110'),'進学先の情報を掲載。卒業者総数と進学者数を揃えて確認できていません。'],
 '東海樟風':['https://tokai-ch.aichi-c.ed.jp/contents/introduce/main.html','総合情報科からの進路は学校案内を参照。'],
 '半田':['https://handa-h.jp/course.html','大学合格者数を公開。合格者数には併願合格が含まれ得るため、進学率は掲載していません。'],
 '半田工科':['https://handa-kogyo.jp/sinro','進学・就職・公務員の学校資料を公開。学科群を選ぶときは進路先の内訳を確認できます。'],
 '半田農業':['https://handanogyo-h.aichi-c.ed.jp/cms/page-574.html','大学・専門学校や就職先を学校が公開。'],
 '刈谷':[jsCareer('22010170'),'大学の合格実績を掲載。'],
 '刈谷北':[jsCareer('22010180'),'大学の合格実績を掲載。普通科と国際探究科の進学率は確認できていません。'],
 '星城':['https://www.seijoh.ed.jp/future-path','コース別の進路の考え方は学校案内で確認できます。'],
 '大同大学大同':['https://www.daido-h.ed.jp/outline/feature.html','大同大学への進学支援を紹介。普通科・工業科別の進学率は確認できていません。'],
 '日本福祉大学付属':['https://www.n-fukushi.ac.jp/koukou/','付属推薦や、大学との連携、コースごとの進路を学校が紹介。'],
 '名古屋南':[jsCareer('22011050'),'大学の合格実績を掲載。'],
 '名古屋工科':['https://nagoya-te.aichi-c.ed.jp/cms/','工業系の学科や進路情報を学校が案内。']
};

const fitNotes={
 '大府':{
  '普通科':['大府駅から通いやすく、大学などの進路を考えながら普通教科を学べる。','調理・服飾・保育の実習を多く取りたい場合は生活文化科のカリキュラムも確認。'],
  '生活文化科':['調理・服飾・保育など、興味のある分野を実習で試せる。','大学一般選抜を考える場合は、必要な受験科目をどこまで履修できるか確認。']
 },
 '大府東':['個別学習支援や、地域と連携する探究活動がある。','大府駅からはバス利用が想定されるので、始業時刻や部活後に合う便を確認。'],
 '桃陵':{
  '衛生看護科':['5年一貫で看護師を目指せる。大府駅から徒歩圏。','進路が看護に特化する。看護以外も考えている場合は、入学前に5年の学びと実習を確認。'],
  'ヒューマンケア科':['保育・介護・福祉などを高校から学べる。','看護師養成は衛生看護科。目指す資格に必要な進学先を確認。']
 },
 '半田東':['普通科の中に教育コースがあり、教員や教育分野への関心を実習や研究につなげられる。','亀崎駅から徒歩約20分。2027年春は募集が200人なので前年の内申だけで判断しない。'],
 '阿久比':['普通科で英語や国際交流に力を入れるコースがある。','阿久比駅から徒歩約15分。大府・共和からは乗り換えと徒歩を含めて確認。'],
 '半田':['課題研究と大学進学を重視した学校生活を送りたい人に合う。','入試難度が高め。進学実績は志望分野と現役・既卒の内訳を見て比較。'],
 '東海南':['南加木屋駅から徒歩約7分。大府普通科と近い学力帯の選択肢。','Ⅴ方式で当日点の比重が大きい。名鉄への乗り換えも含め通学を確認。'],
 '横須賀':['東海市方面で大学進学を考える普通科の候補。制服は2027年春からブレザーも選べる。','Ⅴ方式で当日点の比重が大きい。朝の交通手段や部活後の帰り道も確認。'],
 '東浦':['少人数制授業があり、基礎から普通科で学べる。','大学一般選抜を目指す場合は、希望する受験科目と学校の補習内容を確認。'],
 '豊明':['地域研究や地元の施設と関わるキャリア教育がある。','大府・共和からは鉄道以外の移動も含め、自宅からの所要時間を確認。'],
 '鳴海':['名古屋市緑区で大府東に近い学力帯の普通科候補。','共和からの経路は自宅の場所で変わる。朝のバスや自転車通学の条件を確認。'],
 '東海樟風':['高校からICTと情報の専門分野に取り組める。','専門科目の時間がある。情報以外への大学進学を考える場合は履修科目を確認。'],
 '半田商業':['簿記やITを学び、卒業時に進学・就職を選べる。','会計・ITで学科が分かれる。大学進学を考える場合は志望学部への進学例も確認。'],
 '半田工科':['実習を通して工業技術を学び、進学と就職を検討できる。','2年次に専門学科へ分かれるため、希望の学科への分かれ方を事前に確認。'],
 '半田農業':['栽培、植物培養、食品製造など関心に合わせて実習を選べる。','学科ごとに内容が異なる。掲載の内申・偏差値は施設園芸科のもの。'],
 '武豊':['普通科で、全日制・定時制・通信制を併設する環境に触れられる。','大府側からは通学距離が伸びる。公表進路データの卒業年にも注意。'],
 '刈谷':['大学進学と部活動を両立したい生徒の候補。','入試難度が高め。調整区域の出願条件と公立2校の組み合わせを確認。'],
 '刈谷北':['国際探究科では実践的な英語や海外交流に触れられる。','普通科と国際探究科で学びが違う。普通科を受ける場合は調整区域も確認。'],
 '知立東':['普通科で探究を重視しながら大学進学を考えられる。','大府からの出願条件と、自宅から知立方面への実際の乗り換えを確認。'],
 '星城':['仰星・特進・明徳から、大学進学や就職など希望に沿うコースを選べる。','コース間で学習内容・入試難度が異なる。私立の学費や交通費も合わせて確認。'],
 '大同大学大同':['普通科・工業科を選べ、大同大学への進学支援がある。','工業と普通科では履修科目が違う。付属大学以外を考える場合は進路実績も確認。'],
 '日本福祉大学付属':['付属推薦や大学との連携授業があり、英語・スポーツなど関心別のコースがある。','美浜町までの通学時間と、付属推薦の条件を確認。'],
 '緑':['名古屋市緑区で大学・専門学校の両方を考えられる普通科。','最寄り駅だけで決めず、自宅からのバスや徒歩の時間まで確認。'],
 '名古屋南':['JR笠寺駅から徒歩約6分。JR沿線から通いやすく、部活動も選べる。','Ⅴ方式の当日点を意識。通学時間は利用列車が笠寺に停車するかも確認。'],
 '桜台':{
  '普通科':['大学進学を考える普通科の候補。','入試難度が高め。掲載進学率はファッション文化科を含む学校全体。'],
  'ファッション文化科':['デザインや服飾手芸を高校から学べる。','専門科目が中心。掲載進学率は普通科と合算なので、学科別の進路は学校資料で確認。']
 },
 '名古屋工科':['本星崎駅から徒歩約2分。工業技術を実習で学べる。','学科ごとに扱う技術が異なる。選ぶ学科と卒業後の進路を合わせて確認。'],
 '名古屋大谷':['大学進学、福祉・医療、商業など幅広い選択肢がある。','学校全体の進学率からはコース別の進路は分からない。志望コースの実績と費用を確認。'],
 '名古屋たちばな':['普通科に加え、電気・電子・機械の技能や資格に取り組める。','学校全体の進学率は普通科と工業系の合算。大学志望なら普通科の進路内訳を確認。']
};

function outcomeFor(school){
 const schoolData=careerData[school.name];
 return schoolData?.total?schoolData:schoolData?.[school.course];
}
function fitFor(school){
 const schoolNotes=fitNotes[school.name];
 return Array.isArray(schoolNotes)?schoolNotes:schoolNotes[school.course];
}
function rateText(part,total){
 return (part/total*100).toFixed(1)+'%';
}
function outcomeRate(data){
 return rateText(data.university+data.junior+data.vocational+(data.otherStudy||0),data.total);
}
