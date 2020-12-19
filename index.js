const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
const oh = require("./lib/oh.js");
const ho = require("./lib/ho.js");
const hi = require("./lib/hi.js");
const ti = require("./lib/ti.js");
const di = require("./lib/di.js");
const ownerNumber = ["6281910263857@c.us",]
/////////////////
const BotName = 'Z-pLerx Bot'; 
const kapanbotaktif = 'KETIKA HANYA DIAKTIFKAN'; 
const instagram = 'https://instagram.com/extoffice_/';
const youtube = 'https://www.youtube.com/c/StevenTs-EDX';
const telegram = 'Gak Punya';
//const grupch1 = 'belum ada grup'; 
//const grupch2 = 'belum ada grup' ; 
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange, 
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp-`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated-`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log('StevenTs')
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by StevenTs`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
 let videoMessage = m.message.videoMessage;
  console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);
   

//chat
if (text == 'assalamualaikum')
{
conn.sendMessage(id, oh.oh(id, BotName) ,MessageType.text);
}
if (text == 'Assalamualaikum')
{
conn.sendMessage(id, oh.oh(id, BotName) ,MessageType.text);
}
if (text == 'ASSALAMUALAIKUM')
{
conn.sendMessage(id, oh.oh(id, BotName) ,MessageType.text);
}
if (text == 'Hai')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'P')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'p')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'Halo')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'HAI')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'HALO')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'halo')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'hai')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'Bro')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'BRO')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'bro')
{
conn.sendMessage(id, ho.ho(id, BotName) ,MessageType.text);
}
if (text == 'test')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}
if (text == 'Test')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}
if (text == 'TEST')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}
if (text == 'bot')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}
if (text == 'Bot')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}
if (text == 'BOT')
{
conn.sendMessage(id, hi.hi(id, BotName) ,MessageType.text);
}

// Fitur
if(text.includes("_cek")){
var num = text.replace(/_cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`nomor hp ${gg} ${exists ? " tersedia " : " tidak tersedia"} di whatsapp`, MessageType.text)
}
	
if (text.includes("_nulis")){
  const pp = text.replace(/_nulis /, "")
let o = `Tunggu Sebentar...... `;
conn.sendMessage(id, o, MessageType.text);
axios.get(`https://bangandre.herokuapp.com/nulis?teks=${pp}`).then ((res) => {
  var z = JSON.parse(JSON.stringify(res.data.result));
        imageToBase64(z) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(id, buf, MessageType.image, {quoted: m,caption:'Nih Gan Hasilnya:)'})
                      }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    
    if (text.includes("_meme")){
axios.get(`https://st4rz.herokuapp.com/api/1cak`).then((res) => {
let anjayani = `Judul : ${res.data.judul} Nih Gan Link Nya Kalo Mau Hd : ${res.data.url} `;
conn.sendMessage(id, anjayani, MessageType.text);
  var z = JSON.parse(JSON.stringify(res.data.image));
        imageToBase64(z) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(id, buf, MessageType.image)
                      }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    
	
if (text.includes("_ytmp3")){
const teks = text.replace(/_ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("_yt")){
const teks = text.replace(/_yt /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
    let hasil = `Video telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("_fb")){
const teks = text.replace(/_fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil- silahkan klik link di bawah untuk mendownload hasilnya-\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
	

if (text.includes("_twt")){
const teks = text.replace(/_twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil- silahkan klik link di bawah untuk mendownload hasilnya-\n👇👇👇👇👇👇👇👇👇\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("_tiktok")) {
const tictoc = text.replace(/_tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
     let titoe = `Berhasil--- Silahkan klik link dibawah ini untuk mendownload hasilnya- \n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}
if (text.includes("_wiki")){
const wow = text.replace(/_wiki /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${wow}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("_sholat")){
  const teks = text.replace(/_sholat /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then ((res) =>{
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\n👉Imsyak : ${res.data.Imsyak}\n👉Subuh : ${res.data.Subuh} WIB\n👉Dzuhur : ${res.data.Dzuhur}WIB\n👉Ashar : ${res.data.Ashar} WIB\n👉Maghrib : ${res.data.Maghrib}\n👉Isya : ${res.data.Isya} WIB\n👉Tengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text == '_epek'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}

else if (text == '_donasi'){ 
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, donasi.donasi(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}


else if (text == '_infoCreator'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
conn.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}
else if (text == '_ptl'){
conn.sendMessage(id, 'ulangi dengan  __ptl cewek/cowok_ *Misal: _pict cowok*' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '_sticker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file
    const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }

      if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '_stiker')
      {
         const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file
    const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            conn.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }
  
 if (messageType == 'videoMessage'){
 let captvid = videoMessage.caption.toLowerCase()
				if (captvid == '_gifstiker'){
		  const media = await conn.downloadAndSaveMediaMessage(m)
		  const rendom = `${Math.floor(Math.random() * 10000)}.webp`
		 const
         {
            exec
         } = require("child_process");
  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rendom}`, (error, stdout, stderr) => {
						let buffer = fs.readFileSync(rendom)
						conn.sendMessage(id, buffer, MessageType.sticker) 
					});
			   }
		  }
   
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()
	
      if (is == '_pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, pantun, MessageType.text)
            });
      }

   };
     
          if (text.includes("_covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id,`😭🤒DATA WABAH COVID-19 TERBARU DI INDONESIA😔😊\n\n😔Positif ==> ${positif} \n😊Sembuh ==> ${sembuh} \n😭Meninggal ==> ${meninggal}\n🤒Dirawat ==> ${dirawat}`, MessageType.text);
}

   if (text.includes("_quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            conn.sendMessage(
               id,
               `
      Quotes untuk 
*${id.split("@s.whatsapp.net")[0]}*
     _${kata}_
        
    
	*-${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes("_nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("_nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      conn.sendMessage(id,
            `
      Halo *${id.split("@s.whatsapp.net")[0]}*
      Arti dari namamu adalah
____________________________________
         Nama _*${nama}*_ ${h}
  ___________________________________
Terima Kasih Telah Menggunakan Bot Ini:)

`,
 MessageType.text);
  });
  }
  else if (text.includes("_pasangan ")) {
    const request = require('request');
    var gh = text.split("_pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      conn.sendMessage(id, `

************************************

 *Kecocokan berdasarkan nama*


 ${d}


************************************
    `, MessageType.text);
  });
  }
   if (text.includes("_ptl cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cewek cantik", "cewek korea", "cewek jepang","cewek manis","cewek tiktok",];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Hai Ganteng:)'})
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    

   if (text.includes("_ptl cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Hai Cantik:)'})
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("_waifu"))
   {
    var url = "https://tobz-api.herokuapp.com/api/waifu";
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.image));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
       let pepek = ` _Waifu Info_ 
       Nama : ${result.name}
       Desk : ${result.desc} 
       Diambil Dari : ${result.source} `;
       conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'pepek'})
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
        if (text.includes("_husbu"))
   {
    var items = ["anime boy", "anime ganteng cowok", "anime cowok", "anime cowo", "anime hd cowok", "gambar anime hd cowok"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Husbu'})
             
       
            }
        )
        
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
    
    if (text.includes("_loli"))
   {
    var items = ["anime girl loli", "anime  cewek cantik loli", "anime cewek loli", "anime aesthetic cewek loli", "anime hd cewek loli", "gambar anime hd cewek loli"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Onii Chan >////<'})
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    
        if (text.includes("_neko"))
   {
    var items = ["anime girl neko", "anime  cewek cantik neko", "anime cewek neko", "anime aesthetic cewek neko", "anime hd cewek neko", "gambar anime hd cewek neko"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Miao >///<'})
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    
            if (text.includes("_kocheng"))
   {
    var items = ["kucing imut","kucing lucu","kucing gemes",];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image, {quoted: m,caption:'Meow'})
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
 
            if (text.includes("_randomAnime"))
   {
    var items = ["anime girl neko", "anime  cewek cantik neko", "anime cewek neko", "anime aesthetic cewek neko", "anime hd cewek neko", "gambar anime hd cewek neko","anime girl loli", "anime  cewek cantik loli", "anime cewek loli", "anime aesthetic cewek loli", "anime hd cewek loli", "gambar anime hd cewek loli","anime boy", "anime ganteng cowok", "anime cowok", "anime aesthetic cowok ", "anime hd cowok", "gambar anime hd cowok","anime girl", "anime cantik", "anime cewek", "anime aesthetic cewek", "anime hd cewek", "gambar anime hd cewek","anime couple", "anime  cewek cowok", "anime cewek cowok couple", "anime aesthetic couple", "anime hd cewek cowok couple", "gambar anime hd cewek cowok couple"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
  
  
    if (text.includes("_randomanime"))
   {
    var items = ["anime girl neko", "anime  cewek cantik neko", "anime cewek neko", "anime aesthetic cewek neko", "anime hd cewek neko", "gambar anime hd cewek neko","anime girl loli", "anime  cewek cantik loli", "anime cewek loli", "anime aesthetic cewek loli", "anime hd cewek loli", "gambar anime hd cewek loli","anime boy", "anime ganteng cowok", "anime cowok", "anime aesthetic cowok ", "anime hd cowok", "gambar anime hd cowok","anime girl", "anime cantik", "anime cewek", "anime aesthetic cewek", "anime hd cewek", "gambar anime hd cewek","anime couple", "anime  cewek cowok", "anime cewek cowok couple", "anime aesthetic couple", "anime hd cewek cowok couple", "gambar anime hd cewek cowok couple"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    
if (text.includes("_lirik")){
	const teks = text.split("_lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	 	let hasil = `LIRIK DARI LAGU ${teks} ADALAH\n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
  if ( text == '_ptl cewek') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
           if ( text == '_ptl cowok') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
   if ( text == '_waifu') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
           if ( text == '_husbu') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
           if ( text == '_loli') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_animcouple') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
if ( text == '_rules') 
         conn.sendMessage(id, ti.ti(id, BotName) ,MessageType.text);
if ( text == '_how') 
         conn.sendMessage(id, di.di(id, BotName) ,MessageType.text);
 if ( text == '_neko') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_hentong') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_randomtrapnime') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_randomanime') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_kocheng') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_meme') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text); 
if ( text == '_nulis') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_nimequotes') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_img') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);
 if ( text == '_anime') 
         conn.sendMessage(id, 'Tunggu Sebentar..........',MessageType.text);

 else if (text.includes("_ttsid")) {
  var teks = text.split("_ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/#ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
 
gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED-`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  conn.sendMessage("Text kepanjangan bro-")
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};
}

 if (text.includes("_nimequotes"))
   {
    var items = ["anime quotes","anime quotes ngakak","anime quotes motivasi","anime quotes sedih","anime quotes sad",];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }

if (text.includes("_img"))
   {
    var anjay = text.replace(/_img /, "");
    var url = "https://api.fdci.se/rep.php?gambar=" + anjay;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
          conn.sendMessage(id, 'Tunggu Sebentar........' ,MessageType.text);
  conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
if (text.includes("_anime"))
   {
    var anjay = text.replace(/_anime /, "");
    var url = "https://api.fdci.se/rep.php?gambar=" + anjay;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }

         if (text.includes("_hentong")){
        var url = "https://api.computerfreaker.cf/v1/hentai"
        axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(res.data.url));
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
 
    if (text.includes("_animcouple"))
   {
    var items = ["anime couple", "anime  cewek cowok", "anime cewek cowok couple", "anime aesthetic couple", "anime hd cewek cowok couple", "gambar anime hd cewek cowok couple"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    
        if (text.includes("_randomTrapNime"))
   {
    var items = ["anime trap","anime trap cewek cantik","anime trap cewek","anime neko trap","anime cewek trap",];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    
    if (text.includes("_randomtrapnime"))
   {
    var items = ["anime trap","anime trap cewek cantik","anime trap cewek","anime neko trap","anime cewek trap",];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(
            id,
              buf,MessageType.image)
             
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }
    

    if (text.includes("_chord")){
    	const uwaw = text.replace(/_chord /, "");
    axios.get(`https://arugaz.herokuapp.com/api/chord?q=${uwaw}`).then ((res) =>
    { let papa = `${res.data.result} ${res.data.error}`;
   conn.sendMessage(id, papa, MessageType.text)
       })
 }
 
 if ( text == '_nsfw') 
         conn.sendMessage(id, 'Silahkan Masukan Password Untuk Melanjutkan',MessageType.text);
 if ( text == '_Nsfw') 
         conn.sendMessage(id, 'Silahkan Masukan Password Untuk Melanjutkan',MessageType.text);
  if ( text == '_coderahasia') 
         conn.sendMessage(id, 'Password Benar Nsfw Terbuka--',MessageType.text);
           if ( text == '_coderahasia') 
         conn.sendMessage(id, 'Berikut Command NSFW: *-hentong* *-sexneko*',MessageType.text);
        
if (text.includes("_alay")){
	const alay = text.split("_alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}

     if (text.includes("_apakah")) {
     const teks = text.replace(/_apakah /, "") ;
	var n = ["Ya","Tentu Saja"," Tidak","Gak","Iya","Gak Mungkin","Mungkin Saja","Tentu","Gak Tau","Tidak Tahu","Tidak Tau",];
        var nimek =  n[Math.floor(Math.random() * n.length)];
   let oh = `*Pertanyaan* : apakah ${teks} 
*Jawabanya* : ${nimek}`
  conn.sendMessage(id, oh, MessageType.text) ;
     }

if (text.includes("_kapankah")) {
     const teks = text.replace(/_kapankah /, "") ;
	var n = ["Minggu","Hari","Bulan","Tahun","Abad","Jam","Detik","Menit",];
  var o = ["1","2","3","4","5","6","7","8","9","10"]
      var nimek =  n[Math.floor(Math.random() * n.length)];
      var nimeki =  o[Math.floor(Math.random() * o.length)];
   let oh = `*Pertanyaan* : Kapankah ${teks} 
*Jawabanya* : ${nimeki}${nimek} Lagi`
  conn.sendMessage(id, oh, MessageType.text) ;
     }



else if (text == '_quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("_mute")){
conn.groupSettingChange (id, GroupSettingChange.messageSend, true).then ((res) => {
   conn.sendMessage(id, 'Group Ditutup Sesuai Perintah Admin', MessageType.text)
   }) 
}
if (text.includes("_unmute")){
conn.groupSettingChange (id, GroupSettingChange.messageSend, false).then ((res) => {
conn.sendMessage(id, 'Group Dibuka Sesuai Perintah Admin', MessageType.text)
  }) 
}
if (text.includes("_leave")){
conn.sendMessage(id, 'Sayonara:)', MessageType.text).then ((res) => {
conn.groupLeave (id)
	}) 
}
if (text.includes("_add")){
	const pake = text.replace(/-add /, "");
	let anjay =`[${pake}@s.whatsapp.net]`;
conn.groupAdd (id, anjay)
}

if (text.includes("_say")){
  const teks = text.replace(/_say /, "")
conn.sendMessage(id, teks, MessageType.text)
}
     

     
})
