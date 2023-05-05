/* Creditos a https://github.com/FG98F */

let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('20' || '20')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('33' || '33')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('34' || '34')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('51' || '51')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('52' || '52')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('55' || '55')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('54' || '54')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('62' || '62')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('90' || '90')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('94' || '94')) {
global.db.data.users[m.sender].banned = true
m.reply(`✳️ ИНДУСАМ ЗДЕСЬ НЕ МЕСТО!!!\n\nВСЕГО ДОБРОГО`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}


}}
export default handler
