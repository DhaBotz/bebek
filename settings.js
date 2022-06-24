/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	vio: 'https://api.violetics.pw',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '406AA12F08BC', // Kalau habis beli sendiri
    'https://api.violetics.pw': '38a1-8489-bbd1',
}

// Other
global.owner = ['6282287486762','6282288783972']
global.premium = ['6282287486762','6282288783972']
global.ownernomer = '6282287486762'
global.ownername = ['YUDHA PERDANA','DhaBotz']
global.botname = 'DHABOTZ MULTI DEVICE'
global.footer = 'YUDHA PERDANA'
global.ig = 'https://instagram.com/yudha_perdana809'
global.email = 'dhabotz809@gmail.com'
global.region = 'INDONESIA'
global.sc = 'https://youtube.com/channel/dhabotz'
global.myweb = 'https://github.com/dhabotz'
global.packname = 'DHABOTZ'
global.author = 'MULTI DEVICE'
global.sessionName = 'Dhabotz'
global.lolkey = 'Atakbotz'
global.leykey = 'IkyOgiwara'
global.dapkey = 'TEtD80QEUh'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    premium: 'Maaf Kak Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./image/chika.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
