/**
   * Created By LoRD.
   * Contact Me on wa.me/94701040812
   * Follow https://github.com/tharindu13
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = '«𝒍𝒐𝒓𝒅.𝒐𝒇𝒄»🇮'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/ClQqwfJkoM86Sqg35xtVsR'
global.linkig = 'https://www.instagram.com/reel/Ccx79E0A8Rt/?igshid=YmMyMTA2M2Y='
global.linkyt = 'https://youtu.be/RnpyRe_7jZA'
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://raselcomel.github.io'
global.web1 = 'https://anu.rasell.repl.co'
global.linkgh = 'https://github.com/tharindu13'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'Lord-official'
// Other
global.watermark = '«THARINDU'
global.owner = ['94753240198']
global.premium = ['94701040812']
global.packname = 'tharindu'
global.author = 'THARINDU'
global.sessionName = 'lord'
global.prefa = ['','!','.','🐦',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
