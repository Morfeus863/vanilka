/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ Anti árabes está activo para evitar spam\n\nHasta la próxima`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('7908' || '7908')) {
    global.db.data.users[m.sender].banned = true
    m.reply(`✳️ Анти-арабы активны, чтобы предотвратить спам\н \ ндо следующего раза`)
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
       
   
}}
export default handler
