exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `⚜ ${BotName} ⚜
  
HALO *${id.split("@s.whatsapp.net")[0]}*
"
APA KABAR? SEMOGA BAIK-BAIK SAJA!
Sebelum menggunakan bot ini ada baiknya kalian melihat menu *!info* dan *!donasi* 😁

💵TOLONG BANTU DONASI AGAR BOT INI BISA TERUS BERJALAN💵
💵GUNAKAN COMMAND !donasi untuk berdonasi💵

INFO BOT! :
🔱  *AUTHOR*: Stepen
🔱  *GITHUB*: https://github.com/StepenGans/bot-epek
👾  *YOUTUBE*: ${youtube}
👾  *WHATSAPP* : 089516294632

__________________________________________

INFO LAIN! :

BOT INI MENGGUNAKAN SOURCE CODE YANG SAYA BUAT DAN SAYA MODIFIKASI DENGAN PENAMBAHAN, PENGURANGAN, DAN PERUBAHAN BEBERAPA FITUR.
BOT INI DIBUAT MENGGUNAKAN NODE.JS

THANKS TO: 
-ALLAH SWT
-MUHAMMAD SAW
-AYAH & IBU


bot aktif selama : ${kapanbotaktif}

`
}
