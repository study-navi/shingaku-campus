const toryoUniformBase='https://toryo-h.com/wp/wp-content/uploads/2022/05/';
const seijohUniformBase='https://www.seijoh.ed.jp/wp-content/images/';
const tokaiUniformBase='https://www.chitamaru.jp/art/7805/index.html.img/';
const higashiuraUniformBase='https://higashiura-h.aichi-c.ed.jp/cms/wp-content/uploads/2025/05/';
const uniformCollections={
 '緑':[
  ['all','制服の着用例'],
  ['layers','夏服・合服の着用例 1','https://kanko-gakuseifuku.co.jp/uniform_photo/_files/data_2025/2437_pic01.jpeg','https://kanko-gakuseifuku.co.jp/uniform_photo/data_2025/466_index_detail.php'],
  ['layers','夏服・合服の着用例 2','https://kanko-gakuseifuku.co.jp/uniform_photo/_files/data_2025/2437_pic02.jpeg','https://kanko-gakuseifuku.co.jp/uniform_photo/data_2025/466_index_detail.php']
 ],
 '半田東':[
  ['winter','冬服・ブラウンのブレザー'],
  ['summer','夏服・紺のチェック柄','https://www.chitamaru.jp/art/9965/index.html.img/%E5%8D%8A%E7%94%B0%E6%9D%B1%E9%AB%98%E6%A0%A1_%E5%A4%8F%E6%9C%8D__550x.jpg']
 ],
 '星城':[
  ['winter','冬服',seijohUniformBase+'uniform-img1.webp'],
  ['summer','夏服',seijohUniformBase+'uniform-img2.webp'],
  ['layers','セーター',seijohUniformBase+'uniform-img4.webp'],
  ['layers','ベスト',seijohUniformBase+'uniform-img5.webp']
 ],
 '桃陵':[
  ['winter','本科・冬服（スカート）'],
  ['winter','本科・冬服（スラックス）',toryoUniformBase+encodeURIComponent('女子冬服スラックス.jpg')],
  ['layers','本科・冬服のベスト',toryoUniformBase+encodeURIComponent('冬服ベスト.jpg')],
  ['summer','本科・夏服（スカート）',toryoUniformBase+encodeURIComponent('夏服スカート.jpg')],
  ['summer','本科・男子夏服',toryoUniformBase+encodeURIComponent('男子夏服.jpg')]
 ],
 '東海南':[
  ['all','新制服の組み合わせ'],
  ['winter','青み緑のブレザー',tokaiUniformBase+'Still0709_00000__550x.jpg','https://www.chitamaru.jp/art/7805/index.html'],
  ['all','ベスト・ポロシャツなどの選択肢',tokaiUniformBase+'Still0709_00007__550x.jpg','https://www.chitamaru.jp/art/7805/index.html'],
  ['all','新制服の別カット',tokaiUniformBase+'Still0709_00006__550x.jpg','https://www.chitamaru.jp/art/7805/index.html']
 ],
 '東浦':[
  ['all','指定制服の着用例'],
  ['all','制服の着こなし例',higashiuraUniformBase+'bc1455beb3a951a74fbc1c64f129b9ca-2-534x1024.png'],
  ['all','制服の着こなし例',higashiuraUniformBase+'245ce4b0ac328a5628041a068e8a8307-2-416x1024.png'],
  ['all','制服の着こなし例',higashiuraUniformBase+'c849a0a3d4e8a7c5cca4ff183a1fbe30-1-580x1024.png']
 ],
 '刈谷':[['all','夏服・合服・冬服（左から）']],
 '名古屋たちばな':[
  ['all','制服の組み合わせ',null,'https://tachibana-hs.ed.jp/school-life'],
  ['all','制服の別スタイル','https://tachibana-hs.ed.jp/wp/wp-content/themes/wp_theme/img/school-life/uniform-all2.jpg','https://tachibana-hs.ed.jp/school-life']
 ],
 '大府':[['all','ブレザーと組み合わせ例']],
 '大府東':[['all','ブレザーと組み合わせ例']],
 '横須賀':[['all','2027年度から加わるブレザー']],
 '日本福祉大学付属':[['all','制服のコーディネート例']]
};

function seasonOrder(month){
 if(month>=6&&month<=9)return ['summer','all','layers','winter'];
 if(month===4||month===5||month===10)return ['layers','all','summer','winter'];
 return ['winter','all','layers','summer'];
}

function uniformPhotos(school,month){
 const items=uniformCollections[school.name]||(school.photo?[['all','制服の掲載画像']]:[]);
 return items.map(([season,label,url,source])=>({
  season,label,url:url||school.photo,source:source||school.photoSource||school.link
 })).filter(item=>item.url)
 .sort((first,second)=>seasonOrder(month).indexOf(first.season)-seasonOrder(month).indexOf(second.season));
}
