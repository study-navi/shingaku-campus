const admissionGuide='https://www.pref.aichi.jp/soshiki/kotogakko/0000027366.html';
const profiles={
 '大府':{site:'https://obu-h2.aichi-c.ed.jp/cms/',access:'JR大府駅から徒歩圏。普通科と生活文化科は同じ校舎です。',route:'https://www.city.obu.aichi.jp/shisetsu/kosodate/1005135.html',study:{'普通科':'大学・短大・専門学校など、卒業後の選択肢を広く持ちたい人に。卒業生の進路状況を学校が公開しています。','生活文化科':'普通教科と並行して、調理・被服製作・保育・福祉を学びます。学科の実習内容を見学会で確認できます。'},exam:{'普通科':'一般選抜はⅢ方式。評定得点＋当日点×1.5。','生活文化科':'一般選抜はⅠ方式。特色選抜は面接とプレゼンテーション。'},links:[['卒業生の進路','https://obu-h2.aichi-c.ed.jp/cms/info/career.html'],['推薦・特色選抜','https://obu-h2.aichi-c.ed.jp/cms/exam/recommend.html']]},
 '大府東':{site:'https://obuhigashi-h.aichi-c.ed.jp/',access:'JR大府駅からふれあいバスで約20分。「大府東高校北」で下車。名鉄前後駅からもバスがあります。',route:'https://obuhigashi-h.aichi-c.ed.jp/access.html',study:'個別学習支援ALPSと探究のEAST time。探究では地域・大学・企業と連携します。',exam:'一般選抜はⅠ方式。特色選抜は面接と基礎学力検査。',links:[['スクールポリシー','https://obuhigashi-h.aichi-c.ed.jp/pdf/outline/schoolpolicy.pdf'],['校則・制服の着用ルール','https://obuhigashi-h.aichi-c.ed.jp/current2.html']]},
 '桃陵':{site:'https://toryo-h.com/',access:'JR大府駅東口から北へ徒歩約10分。',route:'https://toryo-h.com/access',study:{'衛生看護科':'本科3年と専攻科2年で看護を学びます。5年間修了後に看護師国家試験の受験資格を得られます。','ヒューマンケア科':'家庭科を中心に、人の生活を支える知識や技術を学びます。保育・福祉・介護・医療など、関心に合わせて卒業後の進路を考えます。'},exam:{'衛生看護科':'一般選抜はⅠ方式。専攻科を含む5年間の進路を考えて出願します。','ヒューマンケア科':'一般選抜はⅠ方式。特色選抜は面接と400字の作文。'},links:[['学科・学校生活','https://toryo-h.com/']]},
 '半田東':{site:'https://handahigashi-h.aichi-c.ed.jp/',access:'JR亀崎駅から徒歩約20分・自転車約6分。名鉄知多半田駅からはバス「生見町」下車、徒歩約3分。',route:'https://www.chitamaru.jp/art/9965/index.html',study:'普通コースは進路に合わせて科目を選択。教育コースは教員や教育分野に関心がある人向けで、体験実習や卒業研究があります。',exam:'2027年春の募集は200人。一般選抜はⅤ方式。特色選抜は面接とプレゼンテーション。',links:[['学校行事・教育コース通信・募集要項','https://handahigashi-h.aichi-c.ed.jp/'],['募集枠・選抜方式','https://www.koukou-db.com/aichi/schools/D123210000857/']]},
 '阿久比':{site:'https://agui-h.aichi-c.ed.jp/',access:'名鉄河和線の阿久比駅から徒歩約15分。',route:'https://agui-h.aichi-c.ed.jp/info/access.html',study:'普通科に国際コミュニケーションコースがあります。英語によるコミュニケーションや国際交流に関心がある人は、コースの活動を確認できます。',exam:'一般選抜はⅤ方式。尾張1・2群共通Bなので、尾張1群Aの半田東と組み合わせを検討できます。',links:[['国際コミュニケーションコース','https://agui-h.aichi-c.ed.jp/kokusai/']]},
 '半田':{site:'https://handa-h.jp/',access:'名鉄河和線・住吉町駅から西へ徒歩約8分。',route:'https://handa-h.jp/access.html',study:'大学進学を視野に入れ、課題研究を通じて調べた内容をまとめて発表する学びがあります。',exam:'一般選抜はⅤ方式。尾張1群B。',links:[['半田市の入試一覧','https://www.koukou-db.com/aichi/area/23205/']]},
 '東海南':{site:'https://tokai-minami.jp/',access:'名鉄河和線・南加木屋駅から徒歩約7分。',route:'https://tokai-minami.jp/',exam:'一般選抜はⅤ方式。大府普通科に近い学力帯で、各校の当日点の配点を比べられます。'},
 '横須賀':{site:'https://yokosuka-h.aichi-c.ed.jp/cms/',exam:'一般選抜はⅤ方式。尾張2群B。',links:[['学校案内・年間行事','https://yokosuka-h.aichi-c.ed.jp/cms/info.html']]},
 '東浦':{site:'https://higashiura-h.aichi-c.ed.jp/cms/',access:'JR武豊線の東浦駅方面。大府側と亀崎側の両方から経路を調べられます。',exam:'一般選抜はⅠ方式。尾張1・2群共通B。'},
 '豊明':{site:'https://www.toyoake-hs.jp/cms/',exam:'一般選抜はⅠ方式。特色選抜は面接と基礎学力検査。'},
 '鳴海':{site:'https://narumi-h.aichi-c.ed.jp/cms/',exam:'一般選抜はⅢ方式。尾張1群B。'},
 '東海樟風':{site:'https://tokai-ch.aichi-c.ed.jp/contents/introduce/main.html',study:'総合情報科でICTを学びます。普通科と迷っている場合は、情報の専門科目の割合を学校案内で確認できます。'},
 '半田商業':{access:'最寄りは名鉄知多半田駅・JR半田駅方面。',route:'https://www.city.handa.lg.jp/kosodate/kyoiku/1002150/1002151.html',study:'地域ビジネス科は会計やマーケティング、ITビジネス科はソフトウェアや情報通信。表の偏差値・内申は2学科の集計です。'},
 '半田工科':{site:'https://handa-kogyo.jp/',access:'名鉄住吉町駅から徒歩約15分。名鉄知多半田駅から約25分、JR半田駅から約30分。',route:'https://www.chitamaru.jp/art/9965/index.html',study:'2つの学科群で募集。1年次は専門分野の基礎を学び、2年次に各学科へ分かれます。',exam:'一般選抜はⅣ方式。受検時に希望する学科群を確認してください。'},
 '半田農業':{site:'https://handanogyo-h.aichi-c.ed.jp/cms/',access:'名鉄住吉町駅から徒歩約10分、JR半田駅から約25分。',route:'https://www.chitamaru.jp/art/9965/index.html',study:'施設園芸科では栽培や植物培養。ほかに農業科学科、味噌や醤油などの製造を学ぶ食品科学科、食物・被服などの生活科学科があります。',exam:'掲載値は施設園芸科。学科ごとに募集人数や志願状況が異なります。'},
 '武豊':{exam:'一般選抜はⅠ方式。尾張1・2群共通B。'},
 '刈谷':{site:'https://kariya-h.aichi-c.ed.jp/cms/',exam:'一般選抜はⅤ方式。三河A。大府市在住の場合は調整区域の特例を確認できます。'},
 '刈谷北':{site:'https://kariyakita-h.aichi-c.ed.jp/cms/',exam:'一般選抜はⅤ方式。大府市在住者は普通科も調整区域の特例で受検できます。',study:{'普通科':'普通科と国際探究科があります。英語や国際交流を重視する場合は国際探究科のカリキュラムも比較できます。','国際探究科':'外国人講師による授業、海外交流、企業・自治体・大学と協力する探究活動があります。'}},
 '知立東':{site:'https://chiryu-higashi-h.aichi-c.ed.jp/',exam:'一般選抜はⅤ方式。三河B。大府市在住の場合は調整区域の特例を確認できます。'},
 '星城':{site:'https://www.seijoh.ed.jp/',study:'仰星は難関大学、特進は大学進学、明徳は進学から就職まで幅広い進路に対応。2027年度からアスリート特進の募集は停止します。',exam:'出願区分とコースによって手続きが異なります。推薦を考える場合は中学校に確認してください。',links:[['コース・募集要項','https://www.seijoh.ed.jp/prospective/']]},
 '大同大学大同':{site:'https://www.daido-h.ed.jp/',access:'名鉄常滑線・大同町駅方面。',study:'普通科は特進エクセレント・進学選抜・進学文理。工業科は機械科と電子情報デザイン科。大同大学への進学支援があります。',exam:'普通科・工業科で募集内容を確認できます。推薦の内申目安は中学校に確認してください。'},
 '日本福祉大学付属':{site:'https://www.n-fukushi.ac.jp/koukou/',study:'文理、グローバル英語、総合進学、スポーツの4コース。高校と大学の連携や地域課題を扱う探究があります。',exam:'一般・推薦・特色の各区分を募集要項で確認できます。推薦の内申目安は中学校に確認してください。'}
};

Object.assign(profiles,{
 '緑':{site:'https://nagoya.fureai-cloud.jp/midori-h/',access:'名古屋市緑区。共和からは自宅の位置に合わせて市バスや鉄道の経路を確認できます。',exam:'一般選抜はⅢ方式。尾張1群A。'},
 '名古屋南':{site:'https://nagoyaminami-h.aichi-c.ed.jp/www2/',access:'JR笠寺駅から徒歩6分。名鉄大江駅から徒歩12分、本笠寺駅から徒歩15分。',route:'https://nagoyaminami-h.aichi-c.ed.jp/www2/access.html',exam:'一般選抜はⅤ方式。尾張2群A。',links:[['部活動・校則・学校生活','https://nagoyaminami-h.aichi-c.ed.jp/www2/life.html']]},
 '桜台':{site:'https://nagoya.fureai-cloud.jp/sakuradai-h/',study:{'普通科':'普通科とファッション文化科があります。普通科の授業や進路は学校案内で確認できます。','ファッション文化科':'ファッションデザインや服飾手芸など、服飾を中心とした専門科目を学びます。'},exam:{'普通科':'一般選抜はⅤ方式。尾張2群B。','ファッション文化科':'一般選抜はⅠ方式。専門学科B。'},links:[['学校案内','https://nagoya.fureai-cloud.jp/_view/sakuradai-h/attach/get2/770/0']]},
 '名古屋工科':{site:'https://nagoya-te.aichi-c.ed.jp/cms/',access:'名鉄本星崎駅から徒歩約2分。',route:'https://nagoya-te.aichi-c.ed.jp/infomation/introduction/access.html',exam:'一般選抜はⅠ方式。数値は工業系全学科の集計です。'},
 '名古屋大谷':{site:'https://nagoyaotani.owari.ac.jp/',access:'名古屋市瑞穂区。名鉄や地下鉄を使う経路を地図で確認できます。',study:'普通科には特別進学・特別選抜・福祉・医療進学・文理進学のコースがあり、商業科もあります。',links:[['2027年度募集要項','https://nagoyaotani.owari.ac.jp/book_youkou/pageindices/index11.html']]},
 '名古屋たちばな':{site:'https://tachibana-hs.ed.jp/',access:'名古屋市中区・東別院駅方面。',study:'普通科のほか、電気・電子・機械の技術を学べます。工業系の検定や資格の案内もあります。'}
});

const uniformMedia={
 '大府':['https://www.chitamaru.jp/art/9965/index.html.img/04-%E5%A4%A7%E5%BA%9C%E9%AB%98%E6%A0%A1-01__550x.jpg','https://www.chitamaru.jp/art/9965/index.html','https://obu-h2.aichi-c.ed.jp/cms/wp-content/uploads/2025/06/seihuku.pdf'],
 '大府東':['https://www.chitamaru.jp/art/9965/index.html.img/05-%E5%A4%A7%E5%BA%9C%E6%9D%B1%E9%AB%98%E6%A0%A1-01__550x.jpg','https://www.chitamaru.jp/art/9965/index.html','https://obuhigashi-h.aichi-c.ed.jp/pdf/admission/pamphlet_2025.pdf'],
 '東海南':['https://www.chitamaru.jp/art/9965/index.html.img/%E6%9D%B1%E6%B5%B7%E5%8D%97%E9%AB%98%E6%A0%A1%E5%88%B6%E6%9C%8D__550x.jpg','https://www.chitamaru.jp/art/9965/index.html'],
 '横須賀':['https://www.chitamaru.jp/art/10197/index.html.img/0820%E2%80%97%E6%A8%AA%E9%A0%88%E8%B3%80%E9%AB%98%E6%A0%A1%E5%88%B6%E6%9C%8D__550x.jpg','https://www.chitamaru.jp/art/10197/'],
 '東浦':['https://higashiura-h.aichi-c.ed.jp/cms/wp-content/uploads/2025/05/a4cf4e6a597518c70eaceacd97ba90a5-3-332x1024.png'],
 '豊明':['https://kanko-gakuseifuku.co.jp/uniform_photo/_files/data_2024/3488_pic01.jpg'],
 '東海樟風':['https://www.chitamaru.jp/art/9965/index.html.img/03-240617-%E6%9D%B1%E6%B5%B7%E6%A8%9F%E9%A2%A8%E9%AB%98%E6%A0%A1%E5%88%B6%E6%9C%8D-01__550x.jpg','https://www.chitamaru.jp/art/9965/index.html'],
 '半田':['https://www.chitamaru.jp/art/9965/index.html.img/S__50184278__550x.jpg'],
 '半田商業':['https://www.chitamaru.jp/art/9965/index.html.img/14_%E5%8D%8A%E7%94%B0%E5%95%86%E6%A5%AD%E9%AB%98%E6%A0%A1-01__550x.jpg'],
 '半田工科':['https://www.chitamaru.jp/art/9965/index.html.img/%E5%8D%8A%E7%94%B0%E5%B7%A5%E7%A7%91%E9%AB%98%E6%A0%A1__550x.png','https://www.chitamaru.jp/art/9965/index.html'],
 '武豊':['https://www.chitamaru.jp/art/9965/index.html.img/16_%E6%AD%A6%E8%B1%8A%E9%AB%98%E6%A0%A1-01_%E6%AD%A6%E8%B1%8A%E9%AB%98%E6%A0%A1%E5%86%99%E7%9C%9F3%E4%BD%93__550x.jpg'],
 '刈谷':['https://www.e-hn.net/wp-content/uploads/2024/10/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A-1.jpg','https://www.e-hn.net/?p=21577'],
 '大同大学大同':['https://www.daido-h.ed.jp/images/outline/feature-02.jpg'],
 '日本福祉大学付属':['https://www.n-fukushi.ac.jp/koukou/life/uniform/img/seifuku.jpg'],
 '緑':['https://kanko-gakuseifuku.co.jp/uniform_photo/_files/data_2025/2121_pic01.jpeg'],
 '名古屋南':['https://nagoyaminami-h.aichi-c.ed.jp/www2/seifuku2.png'],
 '鳴海':[null,null,'https://www.ookuraya.jp/leaflet/r8J6zpMS/narumi.pdf'],
 '刈谷北':[null,null,'https://kariyakita-h.aichi-c.ed.jp/cms/wp-content/uploads/2025/03/acbecc93ce10ac29c9a205d5a64aab63-6.pdf'],
 '知立東':[null,null,'https://karariyakororiya.com/chiryuu-takahama-nukata-uniform/'],
 '桜台':[null,null,'https://nagoya.fureai-cloud.jp/_view/sakuradai-h/attach/get2/770/0#page=2'],
 '名古屋工科':[null,null,'https://nagoya-te.aichi-c.ed.jp/cms/wp-content/uploads/2026/03/4be8b6408c82e229d1734110a44d52e6.pdf'],
 '名古屋たちばな':['https://tachibana-hs.ed.jp/wp/wp-content/themes/wp_theme/img/school-life/uniform-all.jpg',null,'https://tachibana-hs.ed.jp/wp/wp-content/themes/wp_theme/pamphlet/asuth_2027pamphlet.pdf']
};

const publicAdmissions='https://www.pref.aichi.jp/uploaded/attachment/633509.pdf';
const admissionDetails={
 '大府':['普通科／生活文化科',publicAdmissions],
 '桃陵':['衛生看護科／ヒューマンケア科',publicAdmissions],
 '半田東':['募集は普通科。普通コース・教育コースは校内のコースです。','https://handahigashi-h.aichi-c.ed.jp/admissions/'],
 '阿久比':['募集は普通科。国際コミュニケーションコースは普通科内のコースです。',publicAdmissions],
 '東海樟風':['総合情報科',publicAdmissions],
 '半田商業':['地域ビジネス科・ITビジネス科は、まとめて募集する学科です。',publicAdmissions],
 '半田工科':['ロボット工学科・機械科・電気科の学科群と、建築デザイン科・都市工学科の学科群で募集します。',publicAdmissions],
 '半田農業':['農業科学科／施設園芸科／食品科学科／生活科学科。掲載の偏差値・内申は施設園芸科の参考値です。',publicAdmissions],
 '刈谷北':['普通科／国際探究科',publicAdmissions],
 '桜台':['普通科／ファッション文化科',publicAdmissions],
 '名古屋工科':['工業科として一括募集。IT工学科、機械科、電気科、エネルギーシステム科、エネルギー化学科を設置。',publicAdmissions],
 '星城':['普通科の募集コースは仰星・特進・明徳。アスリート特進は令和9年度入学生から募集停止。','https://www.seijoh.ed.jp/prospective/'],
 '大同大学大同':['普通科は特進エクセレント・進学選抜・進学文理の3コース。工業は工業科として募集します。','https://www.daido-h.ed.jp/docs/bosyuyoukou2027.pdf'],
 '日本福祉大学付属':['普通科。校内のコースは文理・グローバル英語・総合進学・スポーツ。','https://www.n-fukushi.ac.jp/koukou/guide/index.html'],
 '名古屋大谷':['普通科は特別進学・特別選抜・福祉・医療進学・文理進学の4コース。商業科も募集。','https://nagoyaotani.owari.ac.jp/book_youkou/pageindices/index4.html'],
 '名古屋たちばな':['普通科／電気科／電子科／機械科','https://tachibana-hs.ed.jp/admissions']
};
const uniformDocuments={
 '桜台':'https://nagoya.fureai-cloud.jp/_view/sakuradai-h/attach/get2/770/0#page=2',
 '名古屋工科':'https://nagoya-te.aichi-c.ed.jp/cms/wp-content/uploads/2026/03/4be8b6408c82e229d1734110a44d52e6.pdf#page=1',
 '鳴海':'https://www.ookuraya.jp/leaflet/r8J6zpMS/narumi.pdf#page=1'
};
uniformMedia['名古屋大谷']=[
 'https://seifuku-ichiba.com/img/temp/1752244190/1752244240-1752244253.jpg',
 'https://seifuku-ichiba.com/auction.cgi?acc=disp&no=1752244190&t=1637067570',
 'https://nagoyaotani.owari.ac.jp/a_images/pdf/pamphlet_2023.pdf'
];
uniformMedia['鳴海'][0]='https://pbs.twimg.com/media/FnE8auiaYAMz-Br.jpg';
uniformMedia['鳴海'][1]='https://gakkoresearch.com/7740/';
