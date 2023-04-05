let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*сообщение:* ${pesan}`
let teks = `*<ВКЛЮЧЕНИЕ ОТКЛЮЧЕНИЕ ФУНКЦИЙ/>*

  включить *приветствие*_
  выключить *приветствие*_
  включить *18+*_
  выключить *18+*_
  включить *антиссылка*_
  выключить *антиссылка*_
  включить *антиссылка2*_
  выключить *антиссылка2*_
  включить *обнаружение*_
  выключить *обнаружение*_
  включитьe *голосовые*_
  выключить *голосовые*_
  включить *автостикер*_
  выключить *автостикер*_
  включить *антираз*_
  выключить *антираз*_
  включить *антимат*_
  выключить *антимат*_
  включить *antitraba*_
  выключить *antitraba*_
  включить *антиараб*_
  выключить *антиараб*_

*<СООБЩЕНИЕ СОЗДАТЕЛЮ/>*

 ඬ⃟🔰 сообщениесоздателю *<ваш текст>*_

*<ЗАГРУЗИТЬ С САЙТОВ/>*


  facebook *<enlace / link / url>*_
  instagram *<enlace / link / url>*_
  mediafire *<enlace / link / url>*_
  instagram *<enlace / link / url>*_
  gitclone *<enlace / link / url>*_
  stickerpack *<enlace / link / url>*_
  gdrive *<enlace / link / url>*_
  tiktok *<enlace / link / url>*_
  xnxxdl *<enlace / link / url>*_
  xvideosdl *<enlace / link / url>*_
  ytmp3 *<enlace / link / url>*_
  ytmp4 *<enlace / link / url>*_
  ytmp3doc *<enlace / link / url>*_
  ytmp4doc *<enlace / link / url>*_
  play.1 *<texto / enlace / link / url>*_
  play.2 *<texto / enlace / link / url>*_
  песня *<артист и название песни>*_
  playdoc *<texto>*_
  playlist *<texto>*_
  playlist2 *<texto>*_
  spotify *<texto>*_
  ringtone *<texto>*_
  soundcloud *<texto>*_
  imagen *<texto>*_
  pinteret *<texto>*_
  wallpaper *<texto>*_
  wallpaper2 *<texto>*_
  pptiktok *<nombre de usuario>*_
  igstalk *<nombre de usuario>*_
  igstory *<nombre de usuario>*_
  tiktokstalk *<nombre de usuario>*_

*<МЕНЮ ДЛЯ ГРУПП/>* 

  добавить *<numero>*_
  снести *<@номер>*_
  внимание
  группу *<открыть / закрыть>*_
  датьадмина *<@номер>*_
  снятьадмина *<@номер>*_
  _админы *<ваше сообщение админам>*
  инфогруппы
  ссылкагруппы_
  изменитьназвание *<новое название группы>*_
  изменитьописание *<новое описание группы>*_
  setwelcome *<texto>*_
  setbye *<texto>*_
  hidetag *<texto>*_
  fantasmas_
  destraba_


*<CONVERTIDORES/>*

  togifaud *<responde a un video>*_
  toimg *<responde a un sticker>*_
  tomp3 *<responde a un video / nota de voz>*_
  toptt *<responde a un video / audio>*_
  tovideo *<responde a un sticker>*_
  tourl *<responde a un video / imagen / audio>*_
  tts es *<texto>*_

*<EFECTOS Y LOGOS/>*

  logos *<efecto> <texto>*_
  logocorazon *<texto>*_
  logochristmas *<texto>*_
  simpcard *<@tag>*_
  hornycard *<@tag>*_
  lolice *<@tag>*_
  ytcomment *<texto>*_
  phmaker *<opcion><responder a imagen>*_
  itssostupid_
  pixelar_
  blur_




*<COMANDOS +18/>*

  pack_
  pack2_
  pack3_
  videoxxx_
  tiktokxxx_
  tetas_
  booty_
  ecchi_
  furro_
  imagenlesbians_
  panties_
  pene_
  porno_
  porno2_
  randomxxx_
  pechos_
  yaoi_
  yaoi2_
  yuri_
  yuri2_
  trapito_
  hentai_
  nsfwloli_
  nsfworgy_
  nsfwfoot_
  nsfwass_
  nsfwbdsm_
  nsfwcum_
  nsfwero_
  nsfwfemdom_
  nsfwglass_

*<EFECTOS DE AUDIOS/>*
*RESPONDE A UN AUDIO O NOTA DE VOZ*

 bass_
 blown_
 deep_
 earrape_
 fast_
 fat_
 nightcore_
 reverse_
 robot_
 slow_
 smooth_
 tupai_


*<BUSCADORES/>*

  stickersearch *<texto>*_
  xnxxsearch *<texto>*_
  animeinfo *<texto>*_
  google *<texto>*_
  letra *<texto>*_
  wikipedia *<texto>*_
  ytsearch *<texto>*_
  apkdone *<texto>*_
  apkgoogle *<texto>*_
  apkmody *<texto>*_
  apkshub *<texto>*_
  happymod *<texto>*_
  hostapk *<texto>*_
  revdl *<texto>*_
  toraccino *<texto>*_
  uapkpro *<texto>*_

*<AUDIOS/>* 
*- ESCRIBE LAS SIGUIENTES PALABRAS O FRASES SIN NINGUN PREFIJO (#, /, *, .)* 
_(uso sin prefijo)_

  _Quien es tu sempai botsito 7w7_
  _Te diagnostico con gay_
  _A nadie le importa_
  _Fiesta del admin_
  _Fiesta del administrador_ 
  _Vivan los novios_
  _Feliz cumpleaños_
  _Noche de paz_
  _Buenos dias_
  _Buenos tardes_
  _Buenos noches_
  _Audio hentai_
  _Chica lgante_
  _Feliz navidad_
  _Vete a la vrg_
  _Pasa pack Bot_
  _Atencion grupo_
  _Marica quien_
  _Murio el grupo_
  _Oh me vengo_
  _tio que rico_
  _Viernes_
  _Baneado_
  _Sexo_
  _Hola_
  _Un pato_
  _Nyanpasu_
  _Te amo_
  _Yamete_
  _Bañate_
  _Es puto_
  _La biblia_
  _Onichan_
  _Mierda de Bot_
  _Siuuu_
  _Epico_
  _Shitpost_
  _Rawr_
  _UwU_
  _:c_
  _a_

*<STICKERS/>*

  стикер *<отметить изображение или видео>*_
  стикер *<ссылка на изображение>*_
  с *<отметить изображение или видео>*_
  с *<ссылка на изображение>*_
  sfull *<responder a imagen o video>*_
  emojimix *<emoji 1>&<emoji 2>*_
  scircle *<responder a imagen>*_
  sremovebg *<responder a imagen>*_
  semoji *<tipo> <emoji>*_
  attp3 *<texto>*_
  pat *<@tag>*_
  slap *<@tag>*_
  kiss *<@tag>*_
  dado_
  wm *<packname> <author>*_
  stickermarker *<efecto> <responder a imagen>*_
  stickerfilter *<efecto> <responder a imagen>*_

*<OWNER Y MODERADORES/>*

  > *<funcion>*
  => *<funcion>*
  $ *<funcion>*
  cajafuerte_
  blocklist_
  enable *restrict*_
  disable *restrict*_
  enable *autoread*_
  disable *autoread*_
  enable *public*_
  disable *public*_
  enable *pconly*_
  disable *pconly*_
  enable *gconly*_
  disable *gconly*_
  enable *anticall*_
  disable *anticall*_
  enable *antiprivado*_
  disable *antiprivado*_
  msg *<texto>*_
  banchat_
  unbanchat_
  banuser *<@tag>*_
  unbanuser *<@tag>*_
  banuser *<@tag>*_
  bc *<texto>*_
  bcchats *<texto>*_
  bcgc *<texto>*_
  cleartpm_
  restart_
  обновить_
  traba1_ 
  addprem *<@tag>*_
  delprem *<@tag>*_
  listprem_\n\n❏ ${oi}\n\n❏ *Участники:*\n`
 {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*└* ★꧁༺JoKeR༻꧂ ★\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(менюшка|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
