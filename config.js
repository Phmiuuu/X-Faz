/**Penjelasan: Untuk menggunakan script ini, kamu akan perlu mengganti nomor owner dan wm terlebih dahulu. Kamu juga harus memiliki api key dari kedua website ini https://api.botcahx.live dan https://api.betabotz.org. Setelah memiliki api key, kamu bisa menggantinya dengan menyalin key tersebut dari profilmu dan paste di variabel global.btc. Contohnya, global.btc = 'xzRhejka'. Setelah itu, kamu bisa melanjutkan dengan mengubah nomor owner dan wm.
**/


global.owner = ['6289687537657', '62895623530099']  
global.mods = ['6289687537657'] 
global.prems = ['6289687537657']
global.nameowner = 'X-Faz'
global.numberowner = '6289687537657' 
global.mail = 'support@tioprm.my.id' 
global.dana = '6289687537657'
global.pulsa = '6289687537657'
global.gopay = '6289687537657'
global.namebot = 'X-Faz Md'
global.gc = 'https://chat.whatsapp.com/DPqSp9P0roHH3bHEoTnLhM'
global.instagram = 'https://instagram.com/basrenggood'
global.wm = '© X-Faz'
global.watermark = wm
global.wm2 = '⫹⫺ X-Faz'
global.wm3 = '© X-Faz'
global.wm4 = '© BotWa'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'


global.btc = 'TtCP9gSq' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'YOUR_APIKEY_HERE' //Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = { 
  tio: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'TtCP9gSq' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
