const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://panel.naxybot.me" // Isi Domain Lu
global.apikey = 'ptla_5LdxgRnCAaIZ48OiZdJ9IIkVMBjeVwqeXDz2md6tKg9' // Isi Apikey Plta Lu
global.capikey = 'ptlc_aOvPhJwBLRqvcw07deyKfZ4HjJQOR0ZhWTk2ws3BpNy' // Isi Apikey Pltc Lu
global.creAtor = "62882005687229@s.whatsapp.net"
global.owner = ['6281226416919']
global.ownerNumber = ["62882005687229@s.whatsapp.net"]
global.nomerOwner = "62882005687229"
global.namabotnya = 'NAXYBOT-PANEL'
global.namaownernya = 'Naxy'
global.packname = '© NAXYBOT||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0882-0056-87229\nYT : Naxy'
global.sessionName = 'session'
global.email = 'popobudak@gmail.com'
global.group = 'https://chat.whatsapp.com/Hovh302Vq0U2Psxr5KdifC'
global.youtube = '-'
global.website = 'https://panel.naxybot.me'
global.github = 'https://github.com/'
global.nomorowner = 'https://wa.me/6281226416919'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./zassxdjs/image/thumb.jpg')
global.imagekir = fs.readFileSync('./zassxdjs/image/zassxd.jpg')
global.videokir = fs.readFileSync('./zassxdjs/image/zassxd.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})