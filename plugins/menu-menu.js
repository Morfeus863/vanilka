import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender    
let userm = `@${who.replace(/@.+/, '')}` 
        

let str = `
*Привет! ✨${userm}✨, Полное меню бота  ꧁༺JoKeR༻꧂*
*📅 Дата: ${week}, ${date}*
*📈 Время активности: ${uptime}*
*📊 Зарегестрированные пользователи: ${rtotalreg}*


*<ДОБАВИТЬ БОТА В ВАШУ ГРУППУ/>*

° ඬ⃟👽 _${usedPrefix}добавитьвгруппу *<ссылка на вашу группу>*_


*<ВКЛЮЧЕНИЕ ОТКЛЮЧЕНИЕ ФУНКЦИЙ/>*

° ඬ⃟☑️ _${usedPrefix}включить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}выключить *приветствие*_
° ඬ⃟☑️ _${usedPrefix}включить *длягруппы*_
° ඬ⃟☑️ _${usedPrefix}выключить *длягруппы*_
° ඬ⃟☑️ _${usedPrefix}включить *18+*_
° ඬ⃟☑️ _${usedPrefix}выключить *18+*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка*_
° ඬ⃟☑️ _${usedPrefix}включить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиссылка2*_
° ඬ⃟☑️ _${usedPrefix}включить *обнаружение*_
° ඬ⃟☑️ _${usedPrefix}выключить *обнаружение*_
° ඬ⃟☑️ _${usedPrefix}включитьe *голосовые*_
° ඬ⃟☑️ _${usedPrefix}выключить *голосовые*_
° ඬ⃟☑️ _${usedPrefix}включить *автостикер*_
° ඬ⃟☑️ _${usedPrefix}выключить *автостикер*_
° ඬ⃟☑️ _${usedPrefix}включить *антираз*_
° ඬ⃟☑️ _${usedPrefix}выключить *антираз*_
° ඬ⃟☑️ _${usedPrefix}включить *антимат*_
° ඬ⃟☑️ _${usedPrefix}выключить *антимат*_
° ඬ⃟☑️ _${usedPrefix}включить *antitraba*_
° ඬ⃟☑️ _${usedPrefix}выключить *antitraba*_
° ඬ⃟☑️ _${usedPrefix}включить *антиараб*_
° ඬ⃟☑️ _${usedPrefix}выключить *антиараб*_

*<СООБЩЕНИЕ СОЗДАТЕЛЮ/>*

° ඬ⃟🔰 _${usedPrefix}сообщениесоздателю *<ваш текст>*_

*<ЗАГРУЗИТЬ С САЙТОВ/>*


° ඬ⃟📥 _${usedPrefix}тикток *<ваша ссылка на видео>*_
° ඬ⃟📥 _${usedPrefix}песня *<texto>*_
° ඬ⃟📥 _${usedPrefix}spotify *<texto>*_
° ඬ⃟📥 _${usedPrefix}ringtone *<texto>*_
° ඬ⃟📥 _${usedPrefix}soundcloud *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper *<texto>*_
° ඬ⃟📥 _${usedPrefix}wallpaper2 *<texto>*_

*<МЕНЮ ДЛЯ ГРУПП/>* 

° ඬ⃟💎 _${usedPrefix}добавить *<numero>*_
° ඬ⃟💎 _${usedPrefix}снести *<@номер>*_
° ඬ⃟💎 _${usedPrefix}внимание
° ඬ⃟💎 _${usedPrefix}группу *<открыть / закрыть>*_
° ඬ⃟💎 _${usedPrefix}датьадмина *<@номер>*_
° ඬ⃟💎 _${usedPrefix}снятьадмина *<@номер>*_
° ඬ⃟💎 _админы *<ваше сообщение админам>*
° ඬ⃟💎 _${usedPrefix}инфогруппы
° ඬ⃟💎 _${usedPrefix}ссылкагруппы_
° ඬ⃟💎 _${usedPrefix}изменитьназвание *<новое название группы>*_
° ඬ⃟💎 _${usedPrefix}изменитьописание *<новое описание группы>*_
° ඬ⃟💎 _${usedPrefix}setwelcome *<texto>*_
° ඬ⃟💎 _${usedPrefix}setbye *<texto>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<texto>*_
° ඬ⃟💎 _${usedPrefix}призраки_
° ඬ⃟💎 _${usedPrefix}важно


*<Конвертация/>*

° ඬ⃟🧧 _${usedPrefix}togifaud *<responde a un video>*_
° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts es *<texto>*_

*<EFECTOS Y LOGOS/>*

° ඬ⃟🖍️ _${usedPrefix}logos *<efecto> <texto>*_
° ඬ⃟🖍️ _${usedPrefix}logocorazon *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}logochristmas *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}ytcomment *<texto>*_
° ඬ⃟🖍️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_


*<COMANDOS +18/>*

° ඬ⃟🔞 _${usedPrefix}pack_
° ඬ⃟🔞 _${usedPrefix}pack2_
° ඬ⃟🔞 _${usedPrefix}pack3_
° ඬ⃟🔞 _${usedPrefix}videoxxx_
° ඬ⃟🔞 _${usedPrefix}tiktokxxx_
° ඬ⃟🔞 _${usedPrefix}tetas_
° ඬ⃟🔞 _${usedPrefix}booty_
° ඬ⃟🔞 _${usedPrefix}ecchi_
° ඬ⃟🔞 _${usedPrefix}furro_
° ඬ⃟🔞 _${usedPrefix}imagenlesbians_
° ඬ⃟🔞 _${usedPrefix}panties_
° ඬ⃟🔞 _${usedPrefix}pene_
° ඬ⃟🔞 _${usedPrefix}porno_
° ඬ⃟🔞 _${usedPrefix}porno2_
° ඬ⃟🔞 _${usedPrefix}randomxxx_
° ඬ⃟🔞 _${usedPrefix}pechos_
° ඬ⃟🔞 _${usedPrefix}yaoi_
° ඬ⃟🔞 _${usedPrefix}yaoi2_
° ඬ⃟🔞 _${usedPrefix}yuri_
° ඬ⃟🔞 _${usedPrefix}yuri2_
° ඬ⃟🔞 _${usedPrefix}trapito_
° ඬ⃟🔞 _${usedPrefix}hentai_
° ඬ⃟🔞 _${usedPrefix}nsfwloli_
° ඬ⃟🔞 _${usedPrefix}nsfworgy_
° ඬ⃟🔞 _${usedPrefix}nsfwfoot_
° ඬ⃟🔞 _${usedPrefix}nsfwass_
° ඬ⃟🔞 _${usedPrefix}nsfwbdsm_
° ඬ⃟🔞 _${usedPrefix}nsfwcum_
° ඬ⃟🔞 _${usedPrefix}nsfwero_
° ඬ⃟🔞 _${usedPrefix}nsfwfemdom_
° ඬ⃟🔞 _${usedPrefix}nsfwglass_

*<EFECTOS DE AUDIOS/>*
*RESPONDE A UN AUDIO O NOTA DE VOZ*

° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_

*<BUSCADORES/>*


° ඬ⃟🔍 _${usedPrefix}apkmody *<texto>*_
° ඬ⃟🔍 _${usedPrefix}apkshub *<texto>*_
° ඬ⃟🔍 _${usedPrefix}happymod *<texto>*_
° ඬ⃟🔍 _${usedPrefix}hostapk *<texto>*_


*<AUDIOS/>* 
*- ESCRIBE LAS SIGUIENTES PALABRAS O FRASES SIN NINGUN PREFIJO (#, /, *, .)* 
_(uso sin prefijo)_

° ඬ⃟🔊 Болею
° ඬ⃟🔊 Время
° ඬ⃟🔊 Друг
° ඬ⃟🔊 Здравствуйте_
° ඬ⃟🔊 Как дела
° ඬ⃟🔊 Красавица
° ඬ⃟🔊 Миша
° ඬ⃟🔊 Музыка
° ඬ⃟🔊 Пельмени
° ඬ⃟🔊 Плов
° ඬ⃟🔊 Правила
° ඬ⃟🔊 Представьтесь
° ඬ⃟🔊 Привет
° ඬ⃟🔊 С днем рождения
° ඬ⃟🔊 Секс
° ඬ⃟🔊 Смешно
° ඬ⃟🔊 Спасибо
° ඬ⃟🔊 Спать
° ඬ⃟🔊 Спокойной ночи
° ඬ⃟🔊 Суп
° ඬ⃟🔊 Такси
° ඬ⃟🔊 Термобелье
° ඬ⃟🔊 Тост
° ඬ⃟🔊 Удалить
° ඬ⃟🔊 Частушки

*<HERRAMIENTAS/>*

° ඬ⃟🛠️ _${usedPrefix}afk *<motivo>*_
° ඬ⃟🛠️ _${usedPrefix}ocr *<responde a imagen>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ _${usedPrefix}whatmusic *<responde a un audio>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<texto>*_
° ඬ⃟🛠️ _${usedPrefix}nowa *<numero>*_



*<STICKERS/>*

° ඬ⃟👽 _${usedPrefix}стикер *<отметить изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}стикер *<ссылка на изображение>*_
° ඬ⃟👽 _${usedPrefix}с *<отметить изображение или видео>*_
° ඬ⃟👽 _${usedPrefix}с *<ссылка на изображение>*_
° ඬ⃟👽 _${usedPrefix}sfull *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}scircle *<responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}sremovebg *<responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp3 *<texto>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>*_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}dado_

*<OWNER Y MODERADORES/>*

° ඬ⃟👑 > *<funcion>*
° ඬ⃟👑 => *<funcion>*
° ඬ⃟👑 $ *<funcion>*
° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}blocklist_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}enable *anticall*_
° ඬ⃟👑 _${usedPrefix}disable *anticall*_
° ඬ⃟👑 _${usedPrefix}enable *antiprivado*_
° ඬ⃟👑 _${usedPrefix}disable *antiprivado*_
° ඬ⃟👑 _${usedPrefix}msg *<texto>*_
° ඬ⃟👑 _${usedPrefix}banchat_
° ඬ⃟👑 _${usedPrefix}unbanchat_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<texto>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<texto>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}обновить_
° ඬ⃟👑 _${usedPrefix}traba1_ 
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_
`.trim()
let mentionedJid = [who]
conn.sendButton(m.chat, str, wm, pp, 
/*conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.facebook.com/ANIMxSCANS', 'FACEBOOK', 'https://github.com/ReyEndymion/ANI_MX_SCANS-MD', 'GITHUB', */[
['🌹 ВЛАДЕЛЕЦ 🌹', '/владелец'],
['🐾 ИНФО О БОТЕ 🐾', '/информация']
], '', { contextInfo: { mentionedJid }})
/*await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})*/
} catch (e) {
conn.reply(m.chat, '*[❗INFO❗] EL MENU TIENE UN ERROR Y NO FUE POSIBLE ENVIARLO, REPORTELO AL PROPIETARIO DEL BOT*', m)
throw e
}}
handler.command = /^(меню|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
