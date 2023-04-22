let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command,  }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*сообщение:* ${pesan}`
let teks = `Привет! Полное меню бота  ꧁༺JoKeR༻꧂

*<ВКЛЮЧЕНИЕ ОТКЛЮЧЕНИЕ ФУНКЦИЙ/>*

° ඬ⃟☑️ включить *приветствие*_
° ඬ⃟☑️ выключить *приветствие*_
° ඬ⃟☑️ включить *18+*_
° ඬ⃟☑️ выключить *18+*_
° ඬ⃟☑️ включить *антиссылка*_
° ඬ⃟☑️ выключить *антиссылка*_
° ඬ⃟☑️ включить *антиссылка2*_
° ඬ⃟☑️ выключить *антиссылка2*_
° ඬ⃟☑️ включить *обнаружение*_
° ඬ⃟☑️ выключить *обнаружение*_
° ඬ⃟☑️ включитьe *голосовые*_
° ඬ⃟☑️ выключить *голосовые*_
° ඬ⃟☑️ включить *автостикер*_
° ඬ⃟☑️ выключить *автостикер*_
° ඬ⃟☑️ включить *антираз*_
° ඬ⃟☑️ выключить *антираз*_
° ඬ⃟☑️ включить *антимат*_
° ඬ⃟☑️ выключить *антимат*_
° ඬ⃟☑️ включить *antitraba*_
° ඬ⃟☑️ выключить *antitraba*_
° ඬ⃟☑️ включить *антиараб*_
° ඬ⃟☑️ выключить *антиараб*_

*<СООБЩЕНИЕ СОЗДАТЕЛЮ/>*

° ඬ⃟🔰 сообщениесоздателю *<ваш текст>*_

*<ЗАГРУЗИТЬ С САЙТОВ/>*

° ඬ⃟📥 tiktok *ссылка на видео*_
° ඬ⃟📥 песня *<артист и название песни>*_
° ඬ⃟📥 spotify *<текст>*_

*<МЕНЮ ДЛЯ ГРУПП/>* 

° ඬ⃟💎 добавить *<numero>*_
° ඬ⃟💎 снести *<@номер>*_
° ඬ⃟💎 внимание
° ඬ⃟💎 группу *<открыть / закрыть>*_
° ඬ⃟💎 датьадмина *<@номер>*_
° ඬ⃟💎 снятьадмина *<@номер>*_
° ඬ⃟💎 _админы *<ваше сообщение админам>*
° ඬ⃟💎 инфогруппы
° ඬ⃟💎 ссылкагруппы_
° ඬ⃟💎 изменитьназвание *<новое название группы>*_
° ඬ⃟💎 изменитьописание *<новое описание группы>*_
° ඬ⃟💎 hidetag *<texto>*_
° ඬ⃟💎 призраки_
° ඬ⃟💎 важно_


*<CONVERTIDORES/>*

° ඬ⃟🧧 togifaud *<responde a un video>*_
° ඬ⃟🧧 toimg *<responde a un sticker>*_
° ඬ⃟🧧 tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 toptt *<responde a un video / audio>*_
° ඬ⃟🧧 tovideo *<responde a un sticker>*_
° ඬ⃟🧧 tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 tts es *<texto>*_

*<EFECTOS Y LOGOS/>*

° ඬ⃟🖍️ logos *<efecto> <texto>*_
° ඬ⃟🖍️ logocorazon *<texto>*_
° ඬ⃟🖍️ logochristmas *<texto>*_
° ඬ⃟🖍️ simpcard *<@tag>*_
° ඬ⃟🖍️ hornycard *<@tag>*_
° ඬ⃟🖍️ lolice *<@tag>*_
° ඬ⃟🖍️ ytcomment *<texto>*_
° ඬ⃟🖍️ phmaker *<opcion><responder a imagen>*_
° ඬ⃟🖍️ itssostupid_
° ඬ⃟🖍️ pixelar_
° ඬ⃟🖍️ blur_

*<FRASES Y TEXTOS/>*

° ඬ⃟🥀 consejo_
° ඬ⃟🥀 fraseromantica_
° ඬ⃟🥀 historiaromantica_

*<RANDOM/>*

° ඬ⃟👾 cristianoronaldo_
° ඬ⃟👾 messi_
° ඬ⃟👾 meme_
° ඬ⃟👾 itzy_
° ඬ⃟👾 blackpink_
° ඬ⃟👾 kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 lolivid_
° ඬ⃟👾 loli_
° ඬ⃟👾 navidad_
° ඬ⃟👾 ppcouple_
° ඬ⃟👾 wpmontaña_
° ඬ⃟👾 pubg_
° ඬ⃟👾 wpgaming_
° ඬ⃟👾 wpaesthetic_
° ඬ⃟👾 wpaesthetic2_
° ඬ⃟👾 wprandom_
° ඬ⃟👾 wallhp_
° ඬ⃟👾 wpvehiculo_
° ඬ⃟👾 wpmoto_
° ඬ⃟👾 coffee_
° ඬ⃟👾 pentol_
° ඬ⃟👾 caricatura_
° ඬ⃟👾 ciberespacio_
° ඬ⃟👾 technology_
° ඬ⃟👾 doraemon_
° ඬ⃟👾 hacker_
° ඬ⃟👾 planeta_
° ඬ⃟👾 randomprofile_
° ඬ⃟👾 neko_
° ඬ⃟👾 waifu_
° ඬ⃟👾 akira_
° ඬ⃟👾 akiyama_
° ඬ⃟👾 anna_
° ඬ⃟👾 asuna_
° ඬ⃟👾 ayuzawa_
° ඬ⃟👾 boruto_
° ඬ⃟👾 chiho_
° ඬ⃟👾 chitoge_
° ඬ⃟👾 deidara_
° ඬ⃟👾 erza_
° ඬ⃟👾 elaina_
° ඬ⃟👾 eba_
° ඬ⃟👾 emilia_
° ඬ⃟👾 hestia_
° ඬ⃟👾 hinata_
° ඬ⃟👾 inori_
° ඬ⃟👾 isuzu_
° ඬ⃟👾 itachi_
° ඬ⃟👾 itori_
° ඬ⃟👾 kaga_
° ඬ⃟👾 kagura_
° ඬ⃟👾 kaori_
° ඬ⃟👾 keneki_
° ඬ⃟👾 kotori_
° ඬ⃟👾 kurumi_
° ඬ⃟👾 madara_
° ඬ⃟👾 mikasa_
° ඬ⃟👾 miku_
° ඬ⃟👾 minato_
° ඬ⃟👾 naruto_
° ඬ⃟👾 nezuko_
° ඬ⃟👾 sagiri_
° ඬ⃟👾 sasuke_
° ඬ⃟👾 sakura_
° ඬ⃟👾 cosplay_

*<COMANDOS +18/>*

° ඬ⃟🔞 pack_
° ඬ⃟🔞 pack2_
° ඬ⃟🔞 pack3_
° ඬ⃟🔞 videoxxx_
° ඬ⃟🔞 tiktokxxx_
° ඬ⃟🔞 tetas_
° ඬ⃟🔞 booty_
° ඬ⃟🔞 ecchi_
° ඬ⃟🔞 furro_
° ඬ⃟🔞 imagenlesbians_
° ඬ⃟🔞 panties_
° ඬ⃟🔞 pene_
° ඬ⃟🔞 porno_
° ඬ⃟🔞 porno2_
° ඬ⃟🔞 randomxxx_
° ඬ⃟🔞 pechos_
° ඬ⃟🔞 yaoi_
° ඬ⃟🔞 yaoi2_
° ඬ⃟🔞 yuri_
° ඬ⃟🔞 yuri2_
° ඬ⃟🔞 trapito_
° ඬ⃟🔞 hentai_
° ඬ⃟🔞 nsfwloli_
° ඬ⃟🔞 nsfworgy_
° ඬ⃟🔞 nsfwfoot_
° ඬ⃟🔞 nsfwass_
° ඬ⃟🔞 nsfwbdsm_
° ඬ⃟🔞 nsfwcum_
° ඬ⃟🔞 nsfwero_
° ඬ⃟🔞 nsfwfemdom_
° ඬ⃟🔞 nsfwglass_

*<EFECTOS DE AUDIOS/>*
*RESPONDE A UN AUDIO O NOTA DE VOZ*

° ඬ⃟🎤 bass_
° ඬ⃟🎤 blown_
° ඬ⃟🎤 deep_
° ඬ⃟🎤 earrape_
° ඬ⃟🎤 fast_
° ඬ⃟🎤 fat_
° ඬ⃟🎤 nightcore_
° ඬ⃟🎤 reverse_
° ඬ⃟🎤 robot_
° ඬ⃟🎤 slow_
° ඬ⃟🎤 smooth_
° ඬ⃟🎤 tupai_

*<CHAT ANONIMO/>*

° ඬ⃟📳 start_
° ඬ⃟📳 next_
° ඬ⃟📳 leave_

*<BUSCADORES/>*

° ඬ⃟🔍 stickersearch *<texto>*_
° ඬ⃟🔍 xnxxsearch *<texto>*_
° ඬ⃟🔍 animeinfo *<texto>*_
° ඬ⃟🔍 google *<texto>*_
° ඬ⃟🔍 letra *<texto>*_
° ඬ⃟🔍 wikipedia *<texto>*_
° ඬ⃟🔍 ytsearch *<texto>*_
° ඬ⃟🔍 apkdone *<texto>*_
° ඬ⃟🔍 apkgoogle *<texto>*_
° ඬ⃟🔍 apkmody *<texto>*_
° ඬ⃟🔍 apkshub *<texto>*_
° ඬ⃟🔍 happymod *<texto>*_
° ඬ⃟🔍 hostapk *<texto>*_
° ඬ⃟🔍 revdl *<texto>*_
° ඬ⃟🔍 toraccino *<texto>*_
° ඬ⃟🔍 uapkpro *<texto>*_

*<AUDIOS/>* 
*- ESCRIBE LAS SIGUIENTES PALABRAS O FRASES SIN NINGUN PREFIJO (#, /, *, .)* 
_(uso sin prefijo)_

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Epico_
° ඬ⃟🔊 _Shitpost_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_

*<HERRAMIENTAS/>*

° ඬ⃟🛠️ afk *<motivo>*_
° ඬ⃟🛠️ ocr *<responde a imagen>*_
° ඬ⃟🛠️ acortar *<enlace / link / url>*_
° ඬ⃟🛠️ calc *<operacion math>*_
° ඬ⃟🛠️ del *<respondre a mensaje del Bot>*_
° ඬ⃟🛠️ whatmusic *<responde a un audio>*_
° ඬ⃟🛠️ qrcode *<texto>*_
° ඬ⃟🛠️ readmore *<texto1| texto2>*_
° ඬ⃟🛠️ spamwa *<numero|texto|cantidad>*_
° ඬ⃟🛠️ styletext *<texto>*_
° ඬ⃟🛠️ traducir *<texto>*_
° ඬ⃟🛠️ nowa *<numero>*_

*<RPG - LIMITES - ECONOMIA/>*

° ඬ⃟💵 balance_
° ඬ⃟💵 claim_
° ඬ⃟💵 lb_
° ඬ⃟💵 levelup_
° ඬ⃟💵 myns_
° ඬ⃟💵 perfil_
° ඬ⃟💵 work_
° ඬ⃟💵 minar_
° ඬ⃟💵 buy_
° ඬ⃟💵 buyall_
° ඬ⃟💵 transfer *<tipo> <cantidad> <@tag>*_
° ඬ⃟💵 verificar_
° ඬ⃟💵 unreg *<numero de serie>*_

*<STICKERS/>*

° ඬ⃟👽 стикер *<отметить изображение или видео>*_
° ඬ⃟👽 стикер *<ссылка на изображение>*_
° ඬ⃟👽 с *<отметить изображение или видео>*_
° ඬ⃟👽 с *<ссылка на изображение>*_
° ඬ⃟👽 sfull *<responder a imagen o video>*_
° ඬ⃟👽 emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 scircle *<responder a imagen>*_
° ඬ⃟👽 sremovebg *<responder a imagen>*_
° ඬ⃟👽 semoji *<tipo> <emoji>*_
° ඬ⃟👽 attp3 *<texto>*_
° ඬ⃟👽 pat *<@tag>*_
° ඬ⃟👽 slap *<@tag>*_
° ඬ⃟👽 kiss *<@tag>*_
° ඬ⃟👽 dado_
° ඬ⃟👽 wm *<packname> <author>*_
° ඬ⃟👽 stickermarker *<efecto> <responder a imagen>*_
° ඬ⃟👽 stickerfilter *<efecto> <responder a imagen>*_

*<OWNER Y MODERADORES/>*

° ඬ⃟👑 > *<funcion>*
° ඬ⃟👑 => *<funcion>*
° ඬ⃟👑 $ *<funcion>*
° ඬ⃟👑 cajafuerte_
° ඬ⃟👑 blocklist_
° ඬ⃟👑 enable *restrict*_
° ඬ⃟👑 disable *restrict*_
° ඬ⃟👑 enable *autoread*_
° ඬ⃟👑 disable *autoread*_
° ඬ⃟👑 enable *public*_
° ඬ⃟👑 disable *public*_
° ඬ⃟👑 enable *pconly*_
° ඬ⃟👑 disable *pconly*_
° ඬ⃟👑 enable *gconly*_
° ඬ⃟👑 disable *gconly*_
° ඬ⃟👑 enable *anticall*_
° ඬ⃟👑 disable *anticall*_
° ඬ⃟👑 enable *antiprivado*_
° ඬ⃟👑 disable *antiprivado*_
° ඬ⃟👑 msg *<texto>*_
° ඬ⃟👑 banchat_
° ඬ⃟👑 unbanchat_
° ඬ⃟👑 banuser *<@tag>*_
° ඬ⃟👑 unbanuser *<@tag>*_
° ඬ⃟👑 banuser *<@tag>*_
° ඬ⃟👑 bc *<texto>*_
° ඬ⃟👑 bcchats *<texto>*_
° ඬ⃟👑 bcgc *<texto>*_
° ඬ⃟👑 cleartpm_
° ඬ⃟👑 restart_
° ඬ⃟👑 обновить_
° ඬ⃟👑 traba1_ 
° ඬ⃟👑 addprem *<@tag>*_
° ඬ⃟👑 delprem *<@tag>*_
° ඬ⃟👑 listprem_\n\n❏ ${oi}\n\n❏ *Участники:*\n`
 {
teks += `┣➥ @$\n`}
teks += `*└* ★꧁༺JoKeR༻꧂ ★\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(менюшка|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
