let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*Э!! МОГ БЫ ТЕБЯ УДАЛИТЬ ЗА ССЫЛКУ 😎, НО ТАК КАК ТЫ АДМИН ПОКА ПРОЩАЮ!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИССЫЛКА 」*\n*АСТАЛАВИСТА,ДЕТКА 👋, ${await this.getName(m.sender)} ССЫЛКИ ЗАПРЕЩЕНЫ!!!ЗА НАРУШЕНИЕ ПРАВИЛ ГРУППЫ ТЫ БОЛЬШЕ ТУТ НЕ ПОЯВИШЬСЯ...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФОРМАЦИЯ❗] ЧТО БЫ Я УДАЛИЛ ЗА ССЫЛКУ ДАВАЙ МНЕ АДМИНКУ*'}`, author, ['DESACTIVAR ANTILINKS', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗INFO❗] EL PROPIETARIO DEL BOT NO TIENE HABILITADO LAS RESTRICCIONES (#_enable restrict_) CONTACTE CON EL PARA QUE LO HABILITE*')
}
return !0
}
