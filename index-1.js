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
const tambahan = require("./lib/tambahan.js")
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
const neko = require("./lib/nekopoi.js");
const ownerNumber = ["6281910263857@c.us",]
/////////////////
const BotName = 'Stepen Bot'; 
const kapanbotaktif = 'KETIKA HANYA DIAKTIFKAN'; 
const instagram = 'https://www.instagram.com/extoffice_/';
const youtube = 'https://www.youtube.com/c/StevenTs-EDX';
const telegram = 'Gaada';
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
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp!`);
});

conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log('StepenDong:v')
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by Zxbin`)
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
   
// Groups

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await conn.groupCreate (nama, str)
console.log ("Grup telah dibuat dengan id: " + group.gid)
conn.sendMessage(group.gid, "Halo semua!!!", MessageType.extendedText) // say hello to everyone on the group

}
//chat
if (text == 'halo')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'hai')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'assalamualaikum')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'bro')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'p')
{
conn.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'test')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HALO')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Halo')
{
conn.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Hai')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'Assalamualaikum')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'Bro')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'P')
{
conn.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'Test')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HAI')
{
conn.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'ASSALAMUALAIKUM')
{
conn.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'BRO')
{
conn.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'TEST')
{
  conn.sendMessage(id, tambahan.test, MessageType.text);
}
// Fitur
if(text.includes("cek")){
var num = text.replace(/cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn

const exists = await conn.isOnWhatsApp (gg)
console.log(exists);
conn.sendMessage(id ,`nomor hp ${gg} ${exists ? " tersedia " : " tidak tersedia"} di whatsapp`, MessageType.text)
}


if (text.includes("nulis")){
  const teks = text.replace(/nulis /, "")
axios.get(`https://mhankbarbar.herokuapp.com/nulis?text=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Silahkan download hasil dibawah ini agar hasilnya lebih bagus! 👌\n\n${res.data.result}`;
 conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("yt")){
const teks = text.replace(/yt /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
    let hasil = `Video telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("fb")){
const teks = text.replace(/fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.title}\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
	

if (text.includes("twt")){
const teks = text.replace(/twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\n👇👇👇👇👇👇👇👇👇\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("tiktok")) {
const tictoc = text.replace(/tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
     let titoe = `Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \n👇👇👇👇👇👇👇👇👇\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
conn.sendMessage(id, titoe, MessageType.text);
})
}
if (text.includes("wiki")){
const wow = text.replace(/wiki /, "")
axios.get(`https://arugaz.herokuapp.com/api/wiki?q=${wow}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("sholat")){
  const teks = text.replace(/sholat /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then ((res) =>{
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\n👉Imsyak : ${res.data.Imsyak}\n👉Subuh : ${res.data.Subuh} WIB\n👉Dzuhur : ${res.data.Dzuhur}WIB\n👉Ashar : ${res.data.Ashar} WIB\n👉Maghrib : ${res.data.Maghrib}\n👉Isya : ${res.data.Isya} WIB\n👉Tengah malam : ${res.data.Dhuha} WIB`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}

if (text == 'epek'){
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

else if (text == 'donasi'){ 
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
else if (text == 'info'){
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
else if (text == 'ptl'){
conn.sendMessage(id, 'ulangi dengan  _ptl cewek/cowok_ *Misal: !pict cowok*' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == 'sticker')
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
      if (caption == 'stiker')
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

      if (messageType == 'videoMessage')
   {
      let caption = videoMessage.caption.toLocaleLowerCase()
      const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == 'stikergif')
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
   
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()
	
      if (is == 'pantun')
      {

         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/pantun.txt')
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
     
          if (text.includes("covid"))
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

   if (text.includes("quotes"))
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
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes("nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
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

  ***********************************
         Nama _*${nama}*_ ${h}
  ___________________________________
Terima Kasih Telah Menggunakan Bot Ini:)

`,
 MessageType.text);
  });
  }
  else if (text.includes("pasangan ")) {
    const request = require('request');
    var gh = text.split("pasangan ")[1];
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
   if (text.includes("ptl cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cewek cantik", "cewek korea", "cewek jepang","cewek manis","cewek tiktok","cewek rusia","hijab rusia",];
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
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }
    
    if (text.includes("doi"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang","cewek manis","cewek tiktok",];
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
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("ptl cowok"))
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

if (text.includes("waifu"))
   {
    var items = ["anime girl", "anime cantik", "anime cewek", "anime aesthetic cewek", "anime hd cewek", "gambar anime hd cewek"];
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
        if (text.includes("husbu"))
   {
    var items = ["anime boy", "anime ganteng cowok", "anime cowok", "anime aesthetic cowok ", "anime hd cowok", "gambar anime hd cowok"];
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
    
    if (text.includes("loli"))
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
    
        if (text.includes("neko"))
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
    
            if (text.includes("randomNekoNime"))
   {
    var items = ["anime girl neko", "anime  cewek cantik neko", "anime cewek neko", "anime aesthetic cewek neko", "anime hd cewek neko", "gambar anime hd cewek neko",];
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
    
    if (text.includes("randomnekonime"))
   {
    var items = ["anime girl neko", "anime  cewek cantik neko", "anime cewek neko", "anime aesthetic cewek neko", "anime hd cewek neko", "gambar anime hd cewek neko",];
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
    
            if (text.includes("randomAnime"))
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
    
    if (text.includes("randomanime"))
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
    
 if (text == 'doi')
{
conn.sendMessage(id, tambahan.sayang ,MessageType.text);
}

if (text.includes("lirik")){
	const teks = text.split("lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	 	let hasil = `LIRIK DARI LAGU ${teks} ADALAH\n\n\n ${res.data.result.lirik}`
	conn.sendMessage(id, hasil, MessageType.text)
	})
}
  if ( text == 'ptl cewek') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
           if ( text == 'ptl cowok') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
   if ( text == 'waifu') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
           if ( text == 'husbu') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
           if ( text == 'loli') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'animcouple') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'neko') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'hentong') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'randomtrapnime') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'randomanime') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'randomnekonime') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'neko') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text); 
if ( text == 'nulis') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'nimequotes') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'img') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);
 if ( text == 'anime') 
         conn.sendMessage(id, 'Bentar ya..........',MessageType.text);

 else if (text.includes("ttsid")) {
  var teks = text.split("ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/#ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
 
gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED!`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  conn.sendMessage("Gausah banyak� cok!")
}else{

const buffer = fs.readFileSync(filepath)
	conn.sendMessage(id , buffer , MessageType.audio);

};
}

 if (text.includes("nimequotes"))
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

if (text.includes("img"))
   {
    var anjay = text.replace(/img /, "");
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
if (text.includes("anime"))
   {
    var anjay = text.replace(/anime /, "");
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

         if (text.includes("hentong")){
        var web = "https://api.computerfreaker.cf/v1/hentai"
        axios.get(web)
      .then((url) => {
        var n = JSON.parse(JSON.stringify(result.data));
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
  
  if (text.includes("hentong")){
    	axios.get(`https://api.computerfreaker.cf/v1/hentai`).then ((res) =>
    { let hasil = `Nih Gan Hentong Nya Kalo Mau HD : ${res.data.url} `
    conn.sendMessage(id, hasil,MessageType.text)
    })
 }
 
 if (text.includes("yuri")){
    	axios.get(`https://api.computerfreaker.cf/v1/yuri`).then ((res) =>
    { let hasil = `Nih Gan Anime Yuri Nya Kalo Mau HD : ${res.data.url} `
    conn.sendMessage(id, hasil,MessageType.text)
    })
 }
 
   if (text.includes("sexneko")){
    	axios.get(`https://api.computerfreaker.cf/v1/nsfwneko`).then ((res) =>
    { let hasil = `Nih Gan Hentong Neko Nya Kalo Mau HD : ${res.data.url} `
    conn.sendMessage(id, hasil,MessageType.text)
    })
 }
 
    if (text.includes("sexneko")){
        var web = "https://api.computerfreaker.cf/v1/nsfwneko"
        
        axios.get(web)
      .then((url) => {
        var n = JSON.parse(JSON.stringify(result.data));
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
    
    if (text.includes("animcouple"))
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
    
        if (text.includes("randomTrapNime"))
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
    
    if (text.includes("randomtrapnime"))
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
    
      if (text.includes("meme"))
   {
    var items = ["meme","meme indo","meme wibu","meme dark","meme dark joke","meme kocak"];
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

    if (text.includes("chord")){
    	const uwaw = text.replace(/chord /, "");
    axios.get(`https://arugaz.herokuapp.com/api/chord?q=${uwaw}`).then ((res) =>
    { let papa = `${res.data.result} ${res.data.error}`;
   conn.sendMessage(id, papa, MessageType.text)
       })
 }
 
 if ( text == 'nsfw') 
         conn.sendMessage(id, 'Silahkan Masukan Password Untuk Melanjutkan',MessageType.text);
 if ( text == 'Nsfw') 
         conn.sendMessage(id, 'Silahkan Masukan Password Untuk Melanjutkan',MessageType.text);
  if ( text == 'coderahasia') 
         conn.sendMessage(id, 'Password Benar Nsfw Terbuka!!',MessageType.text);
           if ( text == '!coderahasia') 
         conn.sendMessage(id, 'Berikut Command NSFW: *hentong* *sexneko*',MessageType.text);
        
if (text.includes("alay")){
	const alay = text.split("!alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		conn.sendMessage(id, hasil, MessageType.text)
	})
}


else if (text == 'quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("say")){
  const teks = text.replace(/say /, "")
conn.sendMessage(id, teks, MessageType.text)
}
     

     
})