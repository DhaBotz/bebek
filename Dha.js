require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const ya = '```'
const ye = '*'
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

const _sewa = require('./lib/sewa')
const { porno, } = require('./lib/ApiOrScrap')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        
//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)   
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   
   
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

// Language
const  { ind } = require(`./language`)
lang = ind // Language

module.exports = Dha = async (Dha, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Dha.decodeJid(Dha.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const isPrem = prem.includes(m.sender)
        const groupMetadata = m.isGroup ? await Dha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	   
	     
        // Public & Self
        if (!Dha.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            Dha.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await Dha.setStatus(`${Dha.user.name} | Runtime : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	

		    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        replyNya(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return replyNya(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await Dha.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return replyNya(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return replyNya(`Ehh maaf kamu admin`)
        if (isCreator) return replyNya(`Ehh maaf kamu owner bot ku`)
        Dha.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Dha.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Dha.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Dha.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            Dha.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replyNya(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await Dha.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, Dha.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else replyNya('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // replyNya(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    replyNya({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Dha.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Dha.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    Dha.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Dha.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Dha.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) Dha.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Dha.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Dha.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replyNya(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) Dha.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replyNya(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) Dha.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Dha.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replyNya(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replyNya(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
async function replyTemplate(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `WA OWNER`, url : `https://wa.me/6282287486762` } },
	             		{ quickReplyButton: { displayText: `BACK`, id : 'storemenu'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: Dha.user.name, 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }

async function replyOwnerr(teks) {
                       const buttonsDefault = [
	             		{ quickReplyButton: { displayText: `MENU`, id : 'command'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "By Yudha Perdana", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }
async function reply(teks) {
                       const buttonsDefault = [
	             		{ quickReplyButton: { displayText: `MENU`, id : 'command'}}
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "By Yudha Perdana", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }                
async function replyNye(teks) {
                       const buttonsDefault = []                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© BOT WHATSAPP 2022", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }
                

async function replyNya(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `https://wa.me/6282287486762` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© YUDHA PERDANA", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }

async function replyPremium(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `MyOwner`, url : `https://wa.me/6282287486762` } },
	             		{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "Bot By Yudha Perdana", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }	    	    

 //NGETIK DULU
	Dha.sendPresenceUpdate('composing', m.chat)
	
if (m.isGroup && isAutoSticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Dha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Dha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}                
                
        switch(command) {
case 'Assalamualaikum': case 'assalamualaikum':{
reply(`Waalaikumsalam Kak *${pushname}*`)
}
break
case 'p': case 'P':{
reply(`Budayakan Ucap Salam Kak ${pushname} Jangan Pa Pe Pa Pe`)
}        
break
case'terimakasih':
reply(`Sama Sama Kak ${pushname}`)
break
case 'bang': case'kak': case'bot': case'halo':case'sv':case'save':case'hi':case'hello':case'helo':
reply(`${pushname}\nAda yang bisa Bot Bantu Tekan Tombol Di bawah Kak`)
break
        case 'inventori': case 'profile':{
if (q.includes('--help')) return replyNya(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await Dha.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, thumb, [{"urlButton": {"displayText": "Follow Ig Owner","url": `https://instagram.com/yudha_perdana809`}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    replyNya(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    replyNya(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return replyNya(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return replyNya('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Dha.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  replyNya(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return replyNya(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return replyNya('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return replyNya(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return replyNya('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return replyNya(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return replyNya('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return replyNya(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return replyNya('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { replyNya("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  replyNya(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return replyNya('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return replyNya('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return replyNya('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return replyNya('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return replyNya('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return replyNya('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return replyNya('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return replyNya('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return replyNya('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyNya(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyNya(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { replyNya("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return replyNya(examkosong) 
 if (!isCekDarah < 1) return replyNya('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return replyNya('Darah kamu sudah penuh')
 if (isPotion < 1) return replyNya('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 replyNya('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return replyNya(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return replyNya('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     Dha.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  replyNya(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replyNya(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            replyNya('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await Dha.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Dha.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            replyNya('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Dha.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            replyNya(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            replyNya('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replyNya(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return replyNya(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return replyNya(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await Dha.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Dha.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    Dha.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    Dha.chatModify({ mute: null }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    Dha.chatModify({  archive: true }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    Dha.chatModify({ archive: false }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'read') {
                    Dha.chatModify({ markRead: true }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    Dha.chatModify({ markRead: false }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    Dha.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                if ('family100'+m.chat in _family100) {
                    replyNya('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await Dha.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case 'dare':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
              const dare =[
'Ucapin selamat tidur ke orang yang kamu benci',
'Makan satu gigitan kulit pisang.',
'Peragakan salah satu orang di antara kita sampai ada yang bisa menebak siapa orang yang diperagakan.',
'Katakan ‘meong’ di setiap akhir kalimat sampai giliranmu yang selanjutnya.',
'Tirukan seorang selebriti sampai ada yang bisa menebak.',
'Bertingkahlah seperti ayam sampai giliranmu yang selanjutnya.',
'Biarkan satu orang menggambar tato di wajahmu.',
'Lakukan rap gaya bebas selama 3 menit.',
'Biarkan orang lain membuat status menggunakan akun sosial mediamu.',
'Berikan ponselmu kepada salah satu di antara kita dan biarkan orang tersebut mengirim satu pesan kepada siapapun yang dia mau.',
'Tutup mata, lalu raba muka salah satu di antara kita, sampai kamu bisa menebak siapa orang itu!',
'Ungkapkan perasaan kamu buat gebetanmu!',
'Push up 20 kali.',
'Kayang selama satu menit.',
'Plank selama satu menit.',
'Biarkan salah satu di antara kita merias wajah kamu pakai make up.',
'Baca dengan lantang pesan yang terakhir kali kamu kirim ke gebetanmu.',
'Ulangi setiap perkataan orang yang ada di sampingmu sampai giliranmu yang selanjutnya.',
'Tunjukkan gerakan joget dangdut terbaikmu.',
'Telepon seorang teman, dan katakan selamat ulang tahun sambil menyanyikan lagu.',
'Bilang i love you ke crush.',
'Cium salah satu teman terdekat mu.',
'Bertingkah kaya monyet di ora ng terdekat',
]
              const Dhadare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Dha.sendMessage(from, { image: buffer, caption: '*Kamu Memilih Tantangan*\n\n'+ Dhadare }, {quoted:m})
              break
                            break
       case 'truth':
       if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
              const truth =[
'Acara TV apa yang paling kamu benci? Beri tahu alasannya!',
'Kapan terakhir kali kamu berbohong?',
'Kapan terakhir kali kamu menangis?',
'Kapan terakhir kali kamu kentut?',
'Apa ketakutan terbesarmu?',
'apa fantasi terbesar atau terhanehmu?',
'Apa hal yang membuatmu senang orangtuamu tidak mengetahuinya?',
'pernahkah kamu selingkuh?',
'Apa hal terburuk yang pernah kamu lakukan?',
'Apa rahasia yang tidak pernah kamu ceritakan kepada siapapun?',
'Apakah kamu punya bakat terpendam?',
'Siapa selebriti yang pertama kali bikin kamu naksir?',
'Apa pendapatmu tentang perselingkuhan?',
'Apa pengalaman intim terburuk yang pernah kamu alami?',
'Apakah kamu pernah melanggar hukum?',
'Apa hal paling memalukan yang pernah kamu lakukan? Kapan?',
'Apa hal yang paling membuatmu merasa insecure?',
'Kesalahan terburuk apa yang pernah kamu lakukan?',
'apa hal paling menjijikkan yang pernah kamu lakukan?',
'Siapa orang yang paling ingin kamu cium di antara kita?',
'Hal terburuk apa yang pernah dilakukan orang terhadapmu?',
'Apa kebiasaan terburukmu?',
'Hal terburuk apa yang pernah kamu katakan/lakukan terhadap orang lain?',
'Apa penyesalan terburukmu?',
'Kenapa kamu putus dengan mantan yang sebelumnya?',
'Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?',
'Apa rahasia yang kamu sembunyikan dari orangtuamu?',
'Siapa orang yang diam-diam kamu sukai?',
'Siapa orang terakhir yang kamu kepoin di media sosial?',
'Kalau ada jin yang memberikanmu tiga permohonan, apa yang kamu inginkan?',
'Siapa orang di antara kita yang menurutmu bisa lolos dari kiamat zombie dan siapa yang akan mati duluan? Beri tahu alasannya!',
'Apa tontonan favoritmu saat masih kecil?',
'Siapa orang yang paling sering kamu chat?',
'Apa kebohongan terbesar yang pernah kamu katakan kepada orangtuamu?',
'Apa mimpi paling aneh yang pernah kamu alami?',
'Kapan terakhir kali kamu ngompol?',
'Menurutmu, hewan apa yang terlihat paling mirip denganmu?',
'Di antara kita, siapa orang yang paling kamu suka dalam konteks romantis?',
'Di antara kita, siapa orang yang menurutmu paling baik dan paling buruk sifatnya?',
'Siapa mantan terindahmu?',
'Siapa orang yang ingin kamu jadikan istri/suami?',
'Apakah kamu pernah melakukan ghosting?',
]
              const Dhatruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Dha.sendMessage(from, { image: buffer, caption: '*Kamu Memilih Kebenaran*\n\n'+ Dhatruth }, {quoted:m})
              break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await Dha.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    Dha.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Dha.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Dha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Dha.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Dha.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    Dha.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    Dha.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, Dha.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                Dha.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    replyNya("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, jawab, Dha.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, jawab, Dha.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':
				if (!q) return replyNya(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
Dha.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return replyNya(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
Dha.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return replyNya(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const hm = gimana[Math.floor(Math.random() * gimana.length)]
Dha.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${hm}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return replyNya(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
Dha.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case'pakboycek':
case'pakgirlcek':
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return replyNya(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
Dha.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return replyNya(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Dha.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return replyNya(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
Dha.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return replyNya(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
Dha.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             replyNya(awikwok)
              break
case 'cekmati':
              if (!q) return replyNya(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              replyNya(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'randomnama':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
                    replyNya(anu.result)
                    break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                Dha.sendMessage(m.chat, reactionMessage)
            }
            break  
case 'reactme': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

if (!q) return replyNya(`Masuk emojinya contoh reactme 😪`)
reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: from, fromMe: false, id: quoted.id }
                    }
                }
                Dha.sendMessage(from, reactionMessage)
            }
            break            
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replyNya(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Dha.groupAcceptInvite(result).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await Dha.groupLeave(m.chat).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replyNya(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
	 if (!text) throw ('Tag Orangnya⁩')
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'add': {
	if (!text) throw ('Masukan nomor nya dengan awalan 628⁩')
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'promote': {
	if (!text) throw ('Tag Orangnya⁩')
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'demote': {
if (!text) throw ('Tag Orangnya⁩')
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.updateBlockStatus(users, 'block').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.updateBlockStatus(users, 'unblock').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Dha.groupUpdateSubject(m.chat, text).then((res) => replyNya(mess.success)).catch((err) => replyNya(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Dha.groupUpdateDescription(m.chat, text).then((res) => replyNya(mess.success)).catch((err) => replyNya(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                await Dha.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                replyNya(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                await Dha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                replyNya(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                Dha.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            Dha.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                replyNya(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            replyNya(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: Dha.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            Dha.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: Dha.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            Dha.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: Dha.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            Dha.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${Dha.user.id}
`
Dha.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            replyNya('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
case 'autosticker':
if (!m.isGroup) return replyNya(mess.group)
if (!isAdmins && !isCreator) return replyNya(mess.admin)
if (!isBotAdmins) return replyNya(mess.botAdmin)
					if (args[0] === '1') {
					if (isAutoSticker) return replyNya('Sudah Aktif Sebelumnya')
					autosticker.push(from)
					fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Aktifkan !`)
					} else if (args[0] === '0') {
					autosticker.splice(from, 1)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyNya(`Autosticker Berhasil Di Nonaktifkan !`)
					} else {
let buttons = [
{ buttonId: 'autosticker 1', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'autosticker 0', buttonText: { displayText: 'Off' }, type: 1 }
]
await Dha.sendButtonText(m.chat, buttons, `Mode Autosticker`, Dha.user.name, m)
}
					break
case 'dadu':
case 'patrick':
case 'amongus':
case 'gawrgura':
case 'bucinstick':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/${command}?apikey=${lolkey}`)
Dha.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Dha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'animestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Dha.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await Dha.groupSettingUpdate(m.chat, 'announcement').then((res) => replyNya(`Sukses Menutup Group`)).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await Dha.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyNya(`Sukses Membuka Group`)).catch((err) => replyNya(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `Mode Group`, Dha.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await Dha.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyNya(`Sukses Membuka Edit Info Group`)).catch((err) => replyNya(jsonformat(err)))
             } else if (args[0] === 'close'){
                await Dha.groupSettingUpdate(m.chat, 'locked').then((res) => replyNya(`Sukses Menutup Edit Info Group`)).catch((err) => replyNya(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `Mode Edit Info`, Dha.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return replyNya(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                replyNya(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return replyNya(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                replyNya(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `Mode Antilink`, Dha.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return replyNya(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                replyNya(`${Dha.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return replyNya(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                replyNya(`${Dha.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `Mute Bot`, Dha.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await Dha.groupInviteCode(m.chat)
                Dha.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await Dha.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await Dha.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                Dha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'creategc': {
if (!isCreator) return replyNya(mess.owner)
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await Dha.groupCreate(args.join(" "), [])
let response = await Dha.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
https://chat.whatsapp.com/${response}
       `
Dha.sendMessage(m.chat, { text:teks, mentions: await Dha.parseMention(teks)}, {quoted:m})
} catch {
replyNya("Succes")
}
}
break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await Dha.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `${text}`
                      Dha.send5ButImg(i, txt, Dha.user.name, global.thumb, btn)
                    }
                replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: 'donasi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `${text}`
                      Dha.send5ButImg(yoi, txt, Dha.user.name, global.thumb, btn)
		}
		replyNya('Sukses Broadcast')
            }
            break
case 'bcimg': case 'bcvidio': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let getGroups = await Dha.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyNya(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [
                            {
                                quickReplyButton: {
                                    displayText: 'COMMAND',
                                    id: 'menu'
                                }
                            }]
                    let media = await Dha.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    Dha.sendMessage(i, { sticker: { url: media } }, { quoted: m })
                    } else if (/image/.test(mime)) {
                    let junn = `${text ? '\n\n' + text : ''}`
                    Dha.send5ButImg(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `${text ? '\n\n' + text : ''}`
                    Dha.send5Vid(i, junn, `${global.footer}`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    Dha.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
                    } else {
                    replyNya(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                replyNya(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'infochat': {
                if (!m.quoted) replyNya('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                Dha.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return replyNya('Reply Pesannya!!')
		let wokwol = await Dha.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return replyNya('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 Dha.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await Dha.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 Dha.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    Dha.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
//=======================
 case 'trap':case 'blowjob':
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit					replyNya(mess.wait)
					axios.get(`https://api.waifu.pics/nsfw/${command}`)
					.then(({data}) => {
						Dha.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'cry':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'handhold':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limitreplyNya(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Dha.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'attp':
case 'ttp':
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} Hai`)
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
Dha.sendMessage(m.chat, { sticker: gehdhe }, { quoted: m })
break

            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Dha.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Dha.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limitif (!text) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
replyNya(mess.wait)
mee = await Dha.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await Dha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            replyNya(eb)
        }
        break
            case 'dbinary': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            replyNya(db)
        }
        break
case 'emojimix2': {
if (!text) return replyNya(`Contoh : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await Dha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await Dha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyNya(mess.wait)
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    Dha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyNya(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Dha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            replyNya(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Dha.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            replyNya(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Dha.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Dha.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            replyNya(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Dha.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyNya(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await Dha.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

	        case 'tourl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                replyNya(mess.wait)		        
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyNya(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyNya(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await Dha.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replyNya(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    Dha.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Dha.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *Title* : ${g.title}\n`
                teks += `⭔ *Description* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                replyNya(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
                Dha.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                Dha.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
                Dha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return replyNya('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
                Dha.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                Dha.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return replyNya('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return replyNya('File Melebihi Batas '+util.format(media))
                Dha.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                replyNya(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Dha.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
case 'translate':

if (args.length < 1) return replyNya(`Text Nya Mana Kak?\nContoh\n${prefix + command} Who am I`)
replyNya(mess.wait)
tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=id&kata=${q}`)
Infoo = tes.info
Detek = tes.translate
replyNya(`👷Translate : ${Detek}\n🔎Hasil : ${Infoo}`)
break
case 'nekopoisearch':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
              if (args.length == 0) return replyNya(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              replyNya(mess.wait)
              pqsh = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
              fekfw = pqsh.result
              ini_txt = ""
              for (var x of fekfw) {
              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              replyNya(ini_txt)
              break
case 'nekopoi':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
              if (args.length == 0) return replyNya(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
replyNya(mess.wait)
              geof = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${lolkey}&url=${ini_url}`)
              skdl = geof.result
              ini_txt = `\`\`\`🐥 Title : ${skdl.anime}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Porducers : ${skdl.producers}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Duration : ${skdl.duration}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Size : ${skdl.size}\`\`\`\n`
              ini_txt += `\`\`\`🐥 Sinopsis : ${skdl.sinopsis}\`\`\`\n`
              link = skdl.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              buff = await getBuffer(skdl.thumb)
let message = await prepareWAMessageMedia({ image: buff }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ini_txt,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}             
         break
case 'lk21':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                    if (args.length == 0) return replyNya(`Example: ${prefix + command} Transformer`)
                    replyNya(mess.wait)
                    query = args.join(" ")
                    fejfw = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    fejfwd = fejfw.result
                    ini_txt = `Title : ${fejfwd.title}\n`
                    ini_txt += `Link : ${fejfwd.link}\n`
                    ini_txt += `Genre : ${fejfwd.genre}\n`
                    ini_txt += `Views : ${fejfwd.views}\n`
                    ini_txt += `Duration : ${fejfwd.duration}\n`
                    ini_txt += `Tahun : ${fejfwd.tahun}\n`
                    ini_txt += `Rating : ${fejfwd.rating}\n`
                    ini_txt += `Desc : ${fejfwd.desc}\n`
                    ini_txt += `Actors : ${fejfwd.actors.join(", ")}\n`
                    ini_txt += `Location : ${fejfwd.location}\n`
                    ini_txt += `Date Release : ${fejfwd.date_release}\n`
                    ini_txt += `Language : ${fejfwd.language}\n`
                    ini_txt += `Link Download : ${fejfwd.link_dl}`
                    eahdw = await getBuffer(fejfwd.thumbnail)
                    await Dha.sendMessage(m.chat, { image: eahdw, caption: ini_txt }, { quoted: m})                  
                    break
case 'darkjokes':{
replyNya(mess.wait)
nyenye = fs.readFileSync('./lib/darkjokes.js');
jsonData = JSON.parse(nyenye);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: hasil }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'meme':{
replyNya(mess.wait)
nyaa = fs.readFileSync('./lib/meme.js');
                 jsonData = JSON.parse(nyaa);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 memeall = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: memeall }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hsdxd':{
replyNya(mess.wait)
kntlll = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(kntlll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: highschooldxd }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'sao':{
replyNya(mess.wait)
kntll = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(kntll);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: swordartonline }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'lovelive':{
replyNya(mess.wait)
kntl = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(kntl);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
let message = await prepareWAMessageMedia({ image: lovelive }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: `Gelap Bos:v`,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'megumin':
case 'shinobu':
case'neko':
					replyNya(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					Dha.sendImage(m.chat, data.url, mess.success, m)
					})
					break
	    case 'ppcouple': {
                replyNya(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Dha.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Dha.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case '3d-effect': case '1917-style': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dluxury': case '3dlove': case '3dgolden': case '3dgradient': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3dscifi': case '3dtext-effect': case '3dunderwater': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'azzenka-league-of-kings':  case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effect':  case 'circuit': case 'dark-gold-metal': case 'color-fireworks': case 'cool-metal': case 'decorated-cookie': case 'deluxe-gold': case 'dinamo': case 'deluxe-silver': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'firework':  case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-effect2': case 'galaxy-effect': case 'galaxy-angel': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-fox': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'graffiti-color': case 'graffiti-text3': case 'graffiti-text5': case 'graffiti-text8': case 'graffiti-text4': case 'heart-birthday': case 'hanzo-overwatch': case 'greenhorror': case 'halloween-fire': case 'green-brush': case 'hero3-crossfire': case 'heart-cups': case 'holographic': case 'light-text':  case 'lend-text': case 'ledtext': case 'layeredtext': case 'lol-caitlyn': case 'lol-ahri': case 'logo-galaxy': case 'lol-fizz': case 'lol-ezreal-and-shen': case 'lol-fiora': case 'lol-draven': case 'lol-jinx': case 'lol-kalista': case 'lol-khazix': case 'lol-kogmaw': case 'lol-leesin': case 'lol-lux': case 'lol-master-yi': case 'lol-miss-fortune': case 'lol-nidalee': case 'lol-quinn': case 'lol-sona': case 'lol-riven': case 'lol-talon': case 'lol-thresh': case 'lol-vayne': case 'machines-effect': case 'lol-yasuo': case 'lol-zed': case 'lol-wukong': case 'magic-text': case 'mei-overwatch': case 'matrix-text': case 'magmatext': case 'metal-lion-2': case 'metal-headshot': case 'metal-avenger': case 'metal-real-madrid': case 'metal-star': case 'metal-superman': case 'metal-text-effect': case 'metallic-letter': case 'metalic': case 'metal-wolf-2': case 'mganga-league-of-kings': case 'miniontext': case 'modern-gold-3': case 'modern-gold-4': case 'modern-gold-5-pro': case 'modern-gold-green': case 'modern-gold-purple': case 'modern-gold-red': case 'modern-gold-sliver': case 'modern-goldred': case 'neon': case 'neon-2': case 'neon-brightblue': case 'neon-effects': case 'neon-light-galaxy': case 'neon-satin': case 'neondevil': case 'neonlight': case 'neontext-light': case 'paper-cut': case 'paperart': case 'rainbow-effect': case 'reaper-overwatch': case 'red-birthdaycake': case 'redhot-metal': case 'resht-league-of-kings': case 'science': case 'sfg-crossfire': case 'sketch': case 'wetglass': case 'watercolor': case 'water-effect': case 'water-3d': case 'violet-league-of-kings': case 'snowtext': case 'soldier-overwatch': case 'sunlight-shadow': case 'transformer': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'textnya?\n ${command} yudha anjay'
                replyNya(mess.wait)
                Dha.sendMessage(m.chat, { image: { url: api('vio', '/api/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira Botz`)
replyNya(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//

case 'ktpmaker':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
replyNya(mess.wait)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    Dha.sendMessage(m.chat, { image: ini_buffer, caption: `*KTP MAKER*` }, { quoted: m})
                    break
case 'tiktokmaker':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
replyNya(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Contoh: ${prefix + command} teks1 teks2`)
replyNya(mess.wait)
txt1 = args[0]
txt2 = args[1]
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/282287486762'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'cogan':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/DhaBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'hentai':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/DhaBotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'chiisaihentai':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya (mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix+command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'art':
case 'bts':
case 'exo':
case 'elf':
case 'shota':
case 'sagiri':
case 'megumin':
case 'wallnime':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: hasil }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/Dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/282287486762'
}
},
{"quickReplyButton": {"displayText": "Next","id": `${prefix + command}`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'SsWeb': case 'ssweb': case 'Ssweb': case 'ScreenshotWeb': case 'screenshotweb':{
                 if (!text) throw `Ejemplo: *${prefix + command} https://github.com/Dhabotz*`
                 replyNya(mess.wait)
                 Dha.sendMessage(m.chat, {image: {url: "https://api.akuari.my.id/other/ssweb?link="+text}})
            }
            break
case 'wallpaperislami':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperinori':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapercyber':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'foxgirl': {
                replyNya(mess.wait)
            let buttons = [
                    {buttonId: `foxgirl`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=foxGirl&apikey=hardianto' },
                    caption: ` Random foxgirl`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'gato': case 'cat': {
                replyNya(mess.wait)
            let buttons = [
                    {buttonId: `gato`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://hardianto.xyz/api/anime/random?sfw=meow&apikey=hardianto' },
                    caption: ` Random gato`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'wallpaperteknologi':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperanime':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapergamer':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpaperprogamer':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapermeme':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallpapermountain':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'runtime': {
const templateMessage = {
text: '*AKTIF*',footer: `${runtime(process.uptime())}`,
templateButtons: [
{
index: 1, 
urlButton: {
displayText: 'Creator', 
url: `https://wa.me/6282287486762`
}
},
],
}
const sendm = Dha.sendMessage(from, templateMessage)
}
break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'faktaunik': 
case 'katabijak': 
case 'pantun': 
case 'bucin': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
kohg = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: kohg.result,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            case 'quotesanime': case 'quoteanime': {            
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                  let anu = await fetchJson(api('zenz', '/randomtext/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
             if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                   if (!text) throw `Example : ${prefix + command} text`
                replyNya(mess.wait)
                Dha.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
          if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                      if (!text) throw 'No Query Text'
                replyNya(mess.wait)
                Dha.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'igcertificate': case 'ytcertificate': {
              if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                  if (!text) throw 'No Query Text'
                replyNya(mess.wait)
                Dha.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
replyNya(mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'nulis':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} teks`)
replyNya(mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.dapuhy.xyz/api/maker/nulis?text=${ini_txt}&apikey=${dapkey}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} Akira`)
replyNya(mess.wait)
ini_txt = args.join(" ")
imagenya = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
pll = `Nih Kak シ︎`
let message = await prepareWAMessageMedia({ image: imagenya }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: pll,
hydratedFooterText: Dha.user.name,
hydratedButtons: [{
urlButton: {
displayText: 'MyGithub',
url: 'https://github.com/dhabotz'
}
},
{"quickReplyButton": {"displayText": "Back To Menu","id": `${prefix}menu`}}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
case 'namapeople':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
kohc = await fetchJson(`https://api.lolhuman.xyz/api/random/people?apikey=${lolkey}`)
kohx = kohc.result
ini_txt = `Nama : ${kohx.name.title} ${kohx.name.first} ${kohx.name.last}\n`
ini_txt += `Gender : ${kohx.gender}\n`
ini_txt += `Location Number : ${kohx.location.street.number}\n`
ini_txt += `Location Name : ${kohx.location.street.name}\n`
ini_txt += `Location City : ${kohx.location.city}\n`
ini_txt += `Location State : ${kohx.location.state}\n`
ini_txt += `Location Country : ${kohx.location.country}\n`
ini_txt += `Location PostCode : ${kohx.location.postcode}\n`
ini_txt += `Location Latitude : ${kohx.location.coordinates.latitude}\n`
ini_txt += `Location Longitude : ${kohx.location.coordinates.longitude}\n`
ini_txt += `Location Timeone : ${kohx.location.timezone.offset}\n`
ini_txt += `Deskripsi : ${kohx.location.timezone.description}\n`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return replyNya(anu.message)
                Dha.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break

//=============== Sound =============

case 'sound1':case 'sound2':
case 'sound3':case 'sound4':case 'sound5':case 'sound6':
case 'sound7':case 'sound8':case 'sound9':case 'sound10':
case 'sound11':case 'sound12':case 'sound13':case 'sound14':
case 'sound15':case 'sound16':case 'sound17':case 'sound18':
case 'sound19':case 'sound20':case 'sound21':case 'sound22':
case 'sound23':case 'sound24':case 'sound25':case 'sound26':
case 'sound27':case 'sound28':case 'sound29':case 'sound30':
case 'sound31':case 'sound32':case 'sound33':case 'sound34':
case 'sound35':case 'sound36':case 'sound37':case 'sound38':
case 'sound39':case 'sound40':case 'sound41':case 'sound42':
case 'sound43':case 'sound44':case 'sound45':case 'sound46':
case 'sound47':case 'sound48':case 'sound49':case 'sound50':
case 'sound51':case 'sound52':case 'sound53':case 'sound54':
case 'sound55':case 'sound56':case 'sound57':case 'sound58':
case 'sound59':case 'sound60':case 'sound61':case 'sound62':
case 'sound63':case 'sound64':case 'sound65':case 'sound66':
case 'sound67':case 'sound68':case 'sound69':case 'sound70':
case 'sound71':case 'sound72':case 'sound73':case 'sound74':
inicdd = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
Dha.sendMessage(m.chat, {audio: inicdd, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break

//================== Stalking=============
case 'tiktokstalk':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} namatt`)
replyNya(mess.wait)
ttk = args.join(" ")
csksyb = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
csksyl = csksyb.result
txt = `Username : ${csksyl.username}\n`
txt += `Nickname : ${csksyl.nickname}\n`
txt += `Bio : ${csksyl.bio}\n`
txt += `Followers : ${csksyl.followers}\n`
txt += `Following : ${csksyl.followings}\n`
txt += `Likes : ${csksyl.likes}\n`
txt += `Vidio : ${csksyl.video}\n`
buffer = await getBuffer(csksyl.user_picture)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: Dha.user.name,
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'githubstalk':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} namagh`)
replyNya(mess.wait)
ghk = args.join(" ")
csksdke = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
csksdah = csksdke.result
txt = `Full : ${csksdah.name}\n`
txt += `Followers : ${csksdah.followers}\n`
txt += `Following : ${csksdah.following}\n`
txt += `Publick : ${csksdah.public_repos}\n`
txt += `Public Gits : ${csksdah.public_gists}\n`
txt += `User : ${csksdah.user}\n`
txt += `Compi : ${csksdah.company}\n`
txt += `Lokasi : ${csksdah.location}\n`
txt += `Email : ${csksdah.email}\n`
txt += `Bio : ${csksdah.bio}\n`
buffer = await getBuffer(csksdah.avatar)
let message = await prepareWAMessageMedia({ image: buffer }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: Dha.user.name,
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'igstalk':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!q) return replyNya(`Example: ${prefix + command} namaig`)
replyNya(mess.wait)
deshd = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${q}?apikey=${lolkey}`)
deshxs = deshd.result
txt = `Link : https://www.instagram.com/${deshxs.username}\n`
txt += `Full : ${deshxs.fullname}\n`
txt += `Post : ${deshxs.posts}\n`
txt += `Followers : ${deshxs.followers}\n`
txt += `Following : ${deshxs.following}\n`
txt += `Bio : ${deshxs.bio}\n`
qwe = await getBuffer(deshxs.photo_profile)
let message = await prepareWAMessageMedia({ image: qwe }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: txt,
hydratedFooterText: Dha.user.name,
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya('Limit Harian Anda Telah Habis')
                if (!text) return replyNya(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
		    } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return replyNya (anu.result.message)
                    Dha.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return replyNya(anu.result.message)
                    replyNya(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    replyNya(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                let anu = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${text}`)
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
                Dha.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
break
case 'tiktok': case 'tiktoknowm': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (!text) throw 'Masukkan Query Link!'
replyNya(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${text}`)
let message = await prepareWAMessageMedia({ video : { url: anu.result.link } }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Download From ${text}`,
hydratedFooterText: `Klik Button Di Bawah`,
hydratedButtons: [{ urlButton: { displayText: 'Source Video', url: `${text}` } },
{ quickReplyButton: { displayText: '⇄   ◃◃   ⅠⅠ   ▹▹   ↻', id: `${prefix}tiktokaudio ${text}` } }]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
	        case 'instagram': case 'ig': case 'igdl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Url!'
                replyNya(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) Dha.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    Dha.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		/** Backup misal yg atas ga keluar video **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                replyNya(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                Dha.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await Dha.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                Dha.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'No Query Title'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await Dha.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                Dha.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
                Dha.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                Dha.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
                if (!text) throw 'Masukkan Query Link!'
                replyNya(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                Dha.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
case 'mediafire':{

if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
oh = `Example : ${prefix + command} link`
if (!text) throw oh
replyNya(mess.wait)
kfeh = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${text}`)
mnya = await getBuffer(kfeh.result.link)
Dha.sendMessage(m.chat, {document: mnya, mimetype: 'application/zip', fileName: `${kfeh.result.filename}.zip`}, {quoted:m}).catch ((err) => replyNya (oh))
}
break
            case 'umma': case 'ummadl': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: Dha.user.name,
			buttons,
			headerType: 4
		    }
		    Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        Dha.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Dha.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
// REST AREA
// BATAS AREA
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		Dha.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => replyNya(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		replyNya(mess.wait)
		Dha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replyNya(mess.wait)
		Dha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replyNya(mess.wait)
		Dha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replyNya(mess.wait)
		Dha.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		replyNya(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		replyNya(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		replyNya(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		replyNya(txt)
		Dha.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		replyNya(txt)
		}
		break
case 'asmaulhusna': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1}
]
let buttonMessage = {
text: ini_txt,
footerText: 'Pencet Button Untuk Next',
buttons: buttons,
headerType: 2
}
Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'kisahnabi':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
replyNya(ini_txt)
break
case 'jadwalsholat':	
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
if (args.length == 0) return replyNya(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
replyNya(ini_txt)
break
case 'listsurah':
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limitget_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
replyNya(ini_txt)
break
/// HEEEEEEEEEEEEE
/// APAAAN SIH
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replyNya(mess.wait)
                let media = await Dha.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replyNya(err)
                let buff = fs.readFileSync(ran)
                Dha.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replyNya(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                replyNya(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replyNya(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                replyNya(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Dha.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replyNya('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
replyNya(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                Dha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replyNya(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replyNya(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		replyNya(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return replyNya('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                Dha.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Dha.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, Dha.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return replyNya('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                replyNya('Ok')
                let other = room.other(m.sender)
                if (other) await Dha.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return replyNya('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, Dha.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Dha.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Dha.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Dha.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Dha.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Dha.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return replyNya('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await Dha.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Dha.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Dha.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await Dha.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, Dha.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await Dha.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, Dha.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                Dha.public = true
                replyNya('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                Dha.public = false
                replyNya('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replyNya(respon)
            }
            break
            case 'speedtest': {
            replyNya('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) replyNya(stdout)
        if (stderr.trim()) replyNya(stderr)
            }
            }
            break
            case 'owner': {
                Dha.sendContact(m.chat, global.owner, m)
            }
            break
case 'creator': {
let vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `N:YUDHA PERDANA`
+ `FN:YUDHA PERDANA\n`
+ `ORG:YUDHA PERDANA\n`
+ `TEL;type=CELL;type=VOICE;waid=6282287486762:6282287486762\n`
+ `item1.X-ABLabel:♕ Creator\n`
+ `item4.X-ABLabel:⚐︎ Indonesia\n`
+ `item5.X-ABLabel:⚔ DhaBotz\n`
+ `END:VCARD`
let kir = await Dha.sendMessage(m.chat, { contacts: { displayName: `YUDHA PERDANA`, contacts: [{ vcard }] } }, { quoted: m })
await replyOwnerr(`Itu Creator Bot Ini`)
}
break
//////////////BATASS
/////////////BATAS
case 'asupan': case 'asupan2':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/random`)
let btn = [
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      Dha.send5Vid(m.chat, `Nih Kak`, Dha.user.name, hasilnya, btn)
                      }
                      break
case 'asupan3':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
Dha.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `Nih Asupan Nya` }, { quoted: m })
}
break
case 'ukhty':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/ukhty`)
let btn = [
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      Dha.send5Vid(m.chat, `Nih Kak`, Dha.user.name, hasilnya, btn)
                      }
                      break

case 'santuy':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/santuy`)
let btn = [
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      Dha.send5Vid(m.chat, `Nih Kak`, Dha.user.name, hasilnya, btn)
                      }
break
case 'bocil':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasilnya = await getBuffer(`https://api.zacros.my.id/asupan/loli`)
let btn = [
                            {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `${prefix+command}`
                                }  
                            }]
                      Dha.send5Vid(m.chat, `Nih Kak`, Dha.user.name, hasilnya, btn)
                      }
break

case 'bokep':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(`Dosa tanggung sendiri`)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
Dha.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break

case 'storyanime':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit
replyNya(mess.wait)
hasiltod = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=${lolkey}`)
Dha.sendMessage(m.chat, { video: { url: hasiltod.result }, mimetype: 'video/mp4', fileName: `storyanime.mp4`, caption: `Nih Story Animenya` }, { quoted: m })
}
break
case 'cecan':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/cecan' },
                    caption: `☕ Random cecan`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-jep':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-jep`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/japan' },
                    caption: `☕ Random Cecan Jepang`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-indo':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-indo`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/indonesia' },
                    caption: `☕ Random Cecan Indonesia`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-mal':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-mal`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/malaysia' },
                    caption: `☕ Random Cecan Malaysia`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-tha':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-tha`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/thailand' },
                    caption: `☕ Random Cecan Thailand`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-vie':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-vie`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/vietnam' },
                    caption: `☕ Random Cecan Vietnam`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-chi':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-chi`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/china' },
                    caption: `☕ Random Cecan China`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cecan-kor':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return replyNya(mess.endLimit) //
		            db.data.users[m.sender].limit -= 1 // -1 limit

            let buttons = [
                    {buttonId: `cecan-kor`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://api.zacros.my.id/asupan/korea' },
                    caption: `☕ Random Cecan Korea`,
                    footer: Dha.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
///// BATASS
///// BATASS
case 'listpremium':
case 'listprem':
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
teks = '*List Premium*\n\n'
for (let Dha of prem) {
teks += `- ${Dha}\n`
}
teks += `\n*Total : ${prem.length}*`
Dha.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyNya(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.isGroup) return replyNya(mess.group)
if (!m.key.fromMe && !isCreator) return replyNya(mess.owner)
yarz = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(yarz)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replyNya(`Nomor ${yarz} Telah Di Hapus Premium!`)
break
case 'donate': 
case 'buypremium':
case 'donasi':
case 'bayar':
case 'sewabot':{
const ov = ['5', '10', '15' ,'20', '25','30','35','40','45','50']
const tenr = ov[Math.floor(Math.random() * ov.length)]
donte = `_Mau ${command} Scan Di Atas Kak_
_Minimal ${tenr}.000 Untuk ${command}_
_Jika Sudah Membayar Silahkan Hubungi Dan Kirim Bukti Pembayaran Ke Owner_
_Selamat Menggaca Semoga Hoki_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donte,
hydratedFooterText: Dha.user.name,
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case'ulasan':{
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*KRITIK/SARAN From:* wa.me/${m.sender.split("@")[0]}
Message: ${text}` })
replyNya(`SARAN ANDA SANGAT BERGUNA BAGI OWNER KAMI UNTUK PERKEMBANGAN BOT INI JADI TOLONG BERIKAN SARAN YG BAIK DAN BERGUNA\nTERIMAKASIH~`)
                    }
                    break 
                    
case'wtf':{
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Cancel Order From:*\nwa.me/${m.sender.split("@")[0]}\nBarang Pesanan\n N.Barang: ${txt1}\nJumlah: ${txt2}\nHarga: ${txt3}` })
replyTemplate(`ORDERAN SUDAH DI BATALKAN LAIN KALI ORDER JANGAN MAIN MAIN`)
                    }
                    break                     
///__&&&& batas area
case 'topuppulsa':{
if (args.length == 0) return  replyNya(`${prefix + command} nohp jumlahpulsa harga\nContoh: ${prefix + command} 82287486762 5.000 7.000`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${txt1}?apikey=${lolkey}`)
donten = `NO.HP : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topupnelpon':{
  txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
  txt4 = args[3]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${txt1}?apikey=${lolkey}`)
donten = `NO.HP : ${txt1}\nJumlah : ${txt2}\nWaktu : ${txt3}\nHarga : ${txt4}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topuplistrik':{
if (args.length == 0) return  replyNya(`${prefix + command} Id listrik tegangan harga\nContoh: ${prefix + command} 181801003458 20.000 22.000`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${txt1}?apikey=${lolkey}`)
donten = `ID PLN : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topupff':{
if (args.length == 0) return  replyNya(`${prefix + command} Idgame jumlahdm\nContoh: ${prefix + command} 1345834683 70 10.000`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${txt1}?apikey=${lolkey}`)
donten = `ID FF : ${txt1}\nUsername : ${anu.result}\nJumlah : ${txt2}\nHarga : ${txt3}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topupdomino':{
if (args.length == 0) return  replyNya(`${prefix + command} Idgame jumlahcip\nContoh: ${prefix + command} 291756557 1b`)
txt1 = args[0]
  txt2 = args[1]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/higghdomino/${txt1}?apikey=${lolkey}`)
donten = `ID DOMINO : ${txt1}\nUsername : ${anu.result}\nJumlah : ${txt2}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topuppubg':{
if (args.length == 0) return  replyNya(`${prefix + command} Idgame jumlahuc\nContoh: ${prefix + command} 5119961143 50`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/pubg/${txt1}?apikey=${lolkey}`)
donten = `ID PUBG : ${txt1}\nUsername : ${anu.result}\nJumlah : ${txt2}\nHarga : ${txt3}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
case 'topupml':{
if (args.length == 0) return  replyNya(`${prefix + command} Idgame/idnegara jumlahdm\nContoh: ${prefix + command} 84830127/2169 50 10.000`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(mess.wait)				
let anu = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${q}?apikey=${lolkey}`)
donten = `ID ML : ${txt1}\nUsername : ${anu.result}\nJumlah : ${txt2}\nHarga : ${txt3}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/yudha.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: donten,
hydratedFooterText: 'Silahkan Scan Barcode Diatas Masukan Nominal Sesuai Harga',
hydratedButtons: [
{
urlButton: {
displayText: 'MyOwner',
url: 'https://wa.me/6282287486762'
}
},{
                                quickReplyButton: {
                                    displayText: 'SUDAH TF',
                                    id: 'wtk'
                                }
                            },
{
                                quickReplyButton: {
                                    displayText: 'CANCEL',
                                    id: 'wtf'
                                }
                            } ]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
Dha.sendMessage(`6282287486762@s.whatsapp.net`, {text: `*Orderan From:* wa.me/${m.sender.split("@")[0]}\n\n Nomor : ${txt1}\nJumlah : ${txt2}\nHarga : ${txt3}` })
}
break
//======={{{{{{{{{
case 'menu':{
let timestamp = speed()
let latensi = speed() - timestamp
await Dha.send5ButGif(from, `──────[ ${ya}Info User${ya} ]
➥ ${ya}Nama User${ya} : ${pushname}
➥ ${ya}Nomor User${ya} : ${m.sender.split("@")[0]}
➥ ${ya}User Premium${ya} : ${isPrem ? 'I͎y͎a͎' : 'T͎i͎d͎a͎k͎'}
➥ ${ya}User Bot${ya} : ${Object.keys(global.db.data.users).length} User
➥ ${ya}Active${ya} : ${runtime(process.uptime())}
➥ ${ya}Library${ya} : Baileys Multi Device
➥ ${ya}Wib${ya} : ${wib}
➥ ${ya}Wit${ya} : ${wit}
➥ ${ya}Wita${ya} : ${wita}`,`I’m From Indonesia 🇲🇨`, [
{"urlButton": {"displayText": "YOUTUBE","url": `https://youtube.com/dhabotz`}},
{"quickReplyButton": {"displayText": "LIST STORE","id": 'storemenu'}},
{"quickReplyButton": {"displayText": "LIST MENU","id": 'command'}},
{"quickReplyButton": {"displayText": "CREATOR","id": 'creator'}}] )
}
break
case 'allmenu':
var Yy = 0
await Dha.send5ButImg(from, `┌──[ ${ye}INFORMASI MENU${ye} ]
│ ${ya} ${Yy+=1} speedtest${ya}
│ ${ya} ${Yy+=1} ping${ya}
│ ${ya} ${Yy+=1} owner${ya}
│ ${ya} ${Yy+=1} menu${ya}
│ ${ya} ${Yy+=1} delete${ya}
│ ${ya} ${Yy+=1} infochat${ya}
│ ${ya} ${Yy+=1} quoted${ya}
│ ${ya} ${Yy+=1} listpc${ya}
│ ${ya} ${Yy+=1} listgc${ya}
│ ${ya} ${Yy+=1} listonline${ya}
│ ${ya} ${Yy+=1} reactme${ya}
└───────
┌──[ ${ye}OWNER MENU${ye} ]
│ ${ya}${Yy+=1} $ Evalator${ya}
│ ${ya}${Yy+=1} > Executor${ya}
│ ${ya}${Yy+=1} ${prefix}sewa add waktu${ya}
│ ${ya}${Yy+=1} ${prefix}sewa del${ya}
│ ${ya}${Yy+=1} ${prefix}listsewa${ya}
│ ${ya}${Yy+=1} ${prefix}ceksewa${ya}
│ ${ya}${Yy+=1} ${prefix}join${ya}
│ ${ya}${Yy+=1} ${prefix}public${ya}
│ ${ya}${Yy+=1} ${prefix}self${ya}
│ ${ya}${Yy+=1} ${prefix}leave${ya}
│ ${ya}${Yy+=1} ${prefix}addprem${ya}
│ ${ya}${Yy+=1} ${prefix}delprem${ya}
│ ${ya}${Yy+=1} ${prefix}block${ya}
│ ${ya}${Yy+=1} ${prefix}unblock${ya}
│ ${ya}${Yy+=1} ${prefix}bcall${ya}
│ ${ya}${Yy+=1} ${prefix}bcgc${ya}
└──────
┌──[ ${ye}OTHER MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}owner${ya}
│ ${ya}${Yy+=1} ${prefix}credits${ya}
│ ${ya}${Yy+=1} ${prefix}groupdha${ya}
│ ${ya}${Yy+=1} ${prefix}rules${ya}
│ ${ya}${Yy+=1} ${prefix}donasi${ya}
│ ${ya}${Yy+=1} ${prefix}sewabot${ya}
└──────
┌──[ ${ye}CONVERST MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}toimg${ya}
│ ${ya}${Yy+=1} ${prefix}tovideo${ya}
│ ${ya}${Yy+=1} ${prefix}tovn${ya}
│ ${ya}${Yy+=1} ${prefix}tomp3${ya}
│ ${ya}${Yy+=1} ${prefix}ssweb${ya}
│ ${ya}${Yy+=1} ${prefix}removebg${ya}
│ ${ya}${Yy+=1} ${prefix}togif${ya}
│ ${ya}${Yy+=1} ${prefix}tourl${ya}
│ ${ya}${Yy+=1} ${prefix}toaudio${ya}
│ ${ya}${Yy+=1} ${prefix}ebinary${ya}
│ ${ya}${Yy+=1} ${prefix}dbinary${ya}
│ ${ya}${Yy+=1} ${prefix}styletext${ya}
│ ${ya}${Yy+=1} ${prefix}bass${ya}
│ ${ya}${Yy+=1} ${prefix}blown${ya}
│ ${ya}${Yy+=1} ${prefix}deep${ya}
│ ${ya}${Yy+=1} ${prefix}earrape${ya}
│ ${ya}${Yy+=1} ${prefix}fast${ya}
│ ${ya}${Yy+=1} ${prefix}fat${ya}
│ ${ya}${Yy+=1} ${prefix}nightcore${ya}
│ ${ya}${Yy+=1} ${prefix}reverse${ya}
│ ${ya}${Yy+=1} ${prefix}slow${ya}
│ ${ya}${Yy+=1} ${prefix}robot${ya}
│ ${ya}${Yy+=1} ${prefix}tupai${ya}
└──────
┌──[ ${ye}PRIMBON MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}nomorhoki${ya}
│ ${ya}${Yy+=1} ${prefix}artimimpi${ya}
│ ${ya}${Yy+=1} ${prefix}artinama${ya}
│ ${ya}${Yy+=1} ${prefix}ramaljodoh${ya}
│ ${ya}${Yy+=1} ${prefix}ramaljodohbali${ya}
│ ${ya}${Yy+=1} ${prefix}suamiistri${ya}
│ ${ya}${Yy+=1} ${prefix}ramalcinta${ya}
│ ${ya}${Yy+=1} ${prefix}cocoknama${ya}
│ ${ya}${Yy+=1} ${prefix}pasangan${ya}
│ ${ya}${Yy+=1} ${prefix}jadiannikah${ya}
│ ${ya}${Yy+=1} ${prefix}sifatusaha${ya}
│ ${ya}${Yy+=1} ${prefix}rezeki${ya}
│ ${ya}${Yy+=1} ${prefix}pekerjaan${ya}
│ ${ya}${Yy+=1} ${prefix}nasib${ya}
│ ${ya}${Yy+=1} ${prefix}penyakit${ya}
│ ${ya}${Yy+=1} ${prefix}tarot${ya}
│ ${ya}${Yy+=1} ${prefix}fengshui${ya}
│ ${ya}${Yy+=1} ${prefix}haribaik${ya}
│ ${ya}${Yy+=1} ${prefix}harisangar${ya}
│ ${ya}${Yy+=1} ${prefix}harisial${ya}
│ ${ya}${Yy+=1} ${prefix}nagahari${ya}
│ ${ya}${Yy+=1} ${prefix}arahrezeki${ya}
│ ${ya}${Yy+=1} ${prefix}peruntungan${ya}
│ ${ya}${Yy+=1} ${prefix}weton${ya}
│ ${ya}${Yy+=1} ${prefix}karakter${ya}
│ ${ya}${Yy+=1} ${prefix}keberuntungan${ya}
│ ${ya}${Yy+=1} ${prefix}memancing${ya}
│ ${ya}${Yy+=1} ${prefix}masasubur${ya}
│ ${ya}${Yy+=1} ${prefix}zodiak${ya}
│ ${ya}${Yy+=1} ${prefix}shio${ya}
└───────
┌──[ ${ye}TEKS MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}lirik${ya}
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}namapeople${ya}
│ ${ya}${Yy+=1} ${prefix}cerpen${ya}
│ ${ya}${Yy+=1} ${prefix}ceritahoror${ya}
│ ${ya}${Yy+=1} ${prefix}faktaunik${ya}
│ ${ya}${Yy+=1} ${prefix}katabijak${ya}
│ ${ya}${Yy+=1} ${prefix}pantun${ya}
│ ${ya}${Yy+=1} ${prefix}bucin${ya}
│ ${ya}${Yy+=1} ${prefix}quoteanime${ya}
│ ${ya}${Yy+=1} ${prefix}motivasi${ya}
│ ${ya}${Yy+=1} ${prefix}dilanquote${ya}
│ ${ya}${Yy+=1} ${prefix}bucinquote${ya}
│ ${ya}${Yy+=1} ${prefix}katasenja${ya}
│ ${ya}${Yy+=1} ${prefix}puisi${ya}
│ ${ya}${Yy+=1} ${prefix}randomnama${ya}
│ ${ya}${Yy+=1} ${prefix}halah${ya}
│ ${ya}${Yy+=1} ${prefix}hilih${ya}
│ ${ya}${Yy+=1} ${prefix}huluh${ya}
│ ${ya}${Yy+=1} ${prefix}heleh${ya}
│ ${ya}${Yy+=1} ${prefix}holoh${ya}
└──────
┌──[ ${ye}STICKER MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}sticker${ya}
│ ${ya}${Yy+=1} ${prefix}attp${ya}
│ ${ya}${Yy+=1} ${prefix}ttp${ya}
│ ${ya}${Yy+=1} ${prefix}cry${ya}
│ ${ya}${Yy+=1} ${prefix}kill${ya}
│ ${ya}${Yy+=1} ${prefix}hug${ya}
│ ${ya}${Yy+=1} ${prefix}pat${ya}
│ ${ya}${Yy+=1} ${prefix}lick${ya}
│ ${ya}${Yy+=1} ${prefix}kiss${ya}
│ ${ya}${Yy+=1} ${prefix}bite${ya}
│ ${ya}${Yy+=1} ${prefix}yeet${ya}
│ ${ya}${Yy+=1} ${prefix}bully${ya}
│ ${ya}${Yy+=1} ${prefix}bonk${ya}
│ ${ya}${Yy+=1} ${prefix}wink${ya}
│ ${ya}${Yy+=1} ${prefix}poke${ya}
│ ${ya}${Yy+=1} ${prefix}nom${ya}
│ ${ya}${Yy+=1} ${prefix}slap${ya}
│ ${ya}${Yy+=1} ${prefix}smile${ya}
│ ${ya}${Yy+=1} ${prefix}wave${ya}
│ ${ya}${Yy+=1} ${prefix}awoo${ya}
│ ${ya}${Yy+=1} ${prefix}blush${ya}
│ ${ya}${Yy+=1} ${prefix}smug${ya}
│ ${ya}${Yy+=1} ${prefix}glomp${ya}
│ ${ya}${Yy+=1} ${prefix}happy${ya}
│ ${ya}${Yy+=1} ${prefix}dance${ya}
│ ${ya}${Yy+=1} ${prefix}cringe${ya}
│ ${ya}${Yy+=1} ${prefix}cuddle${ya}
│ ${ya}${Yy+=1} ${prefix}highfive${ya}
│ ${ya}${Yy+=1} ${prefix}handhold${ya}
│ ${ya}${Yy+=1} ${prefix}dadu${ya}
│ ${ya}${Yy+=1} ${prefix}patrick${ya}
│ ${ya}${Yy+=1} ${prefix}amongus${ya}
│ ${ya}${Yy+=1} ${prefix}gawrgura${ya}
│ ${ya}${Yy+=1} ${prefix}doge${ya}
│ ${ya}${Yy+=1} ${prefix}shinobu${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya} 
│ ${ya}${Yy+=1} ${prefix}animestick${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix2${ya}
│ ${ya}${Yy+=1} ${prefix}emoji${ya}
│ ${ya}${Yy+=1} ${prefix}bucinstick${ya}
└──────
┌──[ ${ye}RANDOM ANIME${ye} ]
│ ${ya}${Yy+=1} ${prefix}anime${ya}
│ ${ya}${Yy+=1} ${prefix}nhentai${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoisearch${ya}
│ ${ya}${Yy+=1} ${prefix}nekopoi${ya}
│ ${ya}${Yy+=1} ${prefix}elf${ya}
│ ${ya}${Yy+=1} ${prefix}neko${ya}
│ ${ya}${Yy+=1} ${prefix}shota${ya}
│ ${ya}${Yy+=1} ${prefix}sagiri${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}trap${ya}
│ ${ya}${Yy+=1} ${prefix}blowjob${ya}
│ ${ya}${Yy+=1} ${prefix}yaoi${ya}
│ ${ya}${Yy+=1} ${prefix}ecchi${ya}
│ ${ya}${Yy+=1} ${prefix}lk21${ya}
│ ${ya}${Yy+=1} ${prefix}foxgirl${ya}
│ ${ya}${Yy+=1} ${prefix}manga${ya}
│ ${ya}${Yy+=1} ${prefix}gimage${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest2${ya}
│ ${ya}${Yy+=1} ${prefix}chiisaihentai${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}hololewd${ya}
│ ${ya}${Yy+=1} ${prefix}sideoppai${ya}
│ ${ya}${Yy+=1} ${prefix}animefeets${ya}
│ ${ya}${Yy+=1} ${prefix}animebooty${ya}
│ ${ya}${Yy+=1} ${prefix}animethighss${ya}
│ ${ya}${Yy+=1} ${prefix}hentaiparadise${ya}
│ ${ya}${Yy+=1} ${prefix}animearmpits${ya}
│ ${ya}${Yy+=1} ${prefix}hentaifemdom${ya}
│ ${ya}${Yy+=1} ${prefix}lewdanimegirls${ya}
│ ${ya}${Yy+=1} ${prefix}biganimetiddies${ya}
└──────
┌──[ ${ye}GROUP MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}linkgroup${ya}
│ ${ya}${Yy+=1} ${prefix}antilink <on/off>${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker <1/0>${ya}
│ ${ya}${Yy+=1} ${prefix}group <open/close>${ya}
│ ${ya}${Yy+=1} ${prefix}add 628××××${ya}
│ ${ya}${Yy+=1} ${prefix}kick @tag${ya}
│ ${ya}${Yy+=1} ${prefix}tagall <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}hidetag <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}promote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}demote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}setname <name>${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}ephemeral [option]${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc [image]${ya}
│ ${ya}${Yy+=1} ${prefix}setname [text]${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc [text]${ya}
│ ${ya}${Yy+=1} ${prefix}editinfo [option]${ya}
│ ${ya}${Yy+=1} ${prefix}mute [on/off]${ya}
│ ${ya}${Yy+=1} ${prefix}vote [text]${ya}
│ ${ya}${Yy+=1} ${prefix}devote${ya}
│ ${ya}${Yy+=1} ${prefix}upvote${ya}
│ ${ya}${Yy+=1} ${prefix}cekvote${ya}
│ ${ya}${Yy+=1} ${prefix}hapusvote${ya}
└──────
┌──[ ${ye}GAME MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}goblokcek${ya} 
│ ${ya}${Yy+=1} ${prefix}jelekcek${ya} 
│ ${ya}${Yy+=1} ${prefix}gaycek${ya}
│ ${ya}${Yy+=1} ${prefix}lesbicek${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}baikcek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}anjingcek${ya}
│ ${ya}${Yy+=1} ${prefix}haramcek${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
│ ${ya}${Yy+=1} ${prefix}bapercek${ya}
│ ${ya}${Yy+=1} ${prefix}fakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}alimcek${ya}
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}fakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}kerencek${ya}
│ ${ya}${Yy+=1} ${prefix}wibucek${ya}
│ ${ya}${Yy+=1} ${prefix}pasarkascek${ya}
│ ${ya}${Yy+=1} ${prefix}jadian${ya}
│ ${ya}${Yy+=1} ${prefix}apakah${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}bisakah${ya}
│ ${ya}${Yy+=1} ${prefix}kuismath${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lagu${ya}
│ ${ya}${Yy+=1} ${prefix}tebak gambar${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kata${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kalimat${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lirik${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lontong${ya}
│ ${ya}${Yy+=1} ${prefix}berburu${ya}
│ ${ya}${Yy+=1} ${prefix}mancing${ya}
│ ${ya}${Yy+=1} ${prefix}menambang${ya}
│ ${ya}${Yy+=1} ${prefix}mining${ya}
│ ${ya}${Yy+=1} ${prefix}heal${ya}
│ ${ya}${Yy+=1} ${prefix}profile${ya}
│ ${ya}${Yy+=1} ${prefix}inventory${ya}
│ ${ya}${Yy+=1} ${prefix}leaderboard${ya}
│ ${ya}${Yy+=1} ${prefix}buy${ya}
│ ${ya}${Yy+=1} ${prefix}sell${ya}
└──────
┌──[ ${ye}DOWNLOAD MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}ytsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}play <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp4 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp3 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktoknowm <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokaudio <link>${ya}
│ ${ya}${Yy+=1} ${prefix}mediafire <link>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxsearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}xnxxvideo <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotify <link>${ya}
│ ${ya}${Yy+=1} ${prefix}spotifysearch <query>${ya}
│ ${ya}${Yy+=1} ${prefix}jooxplay <query>${ya}
│ ${ya}${Yy+=1} ${prefix}jooxplay <query>${ya}
│ ${ya}${Yy+=1} ${prefix}instagram <query>${ya}
│ ${ya}${Yy+=1} ${prefix}twitter <query>${ya}
│ ${ya}${Yy+=1} ${prefix}twittermp3 <query>${ya}
│ ${ya}${Yy+=1} ${prefix}facebook <query>${ya}
│ ${ya}${Yy+=1} ${prefix}umma <query>${ya}
│ ${ya}${Yy+=1} ${prefix}getvideo <query>${ya}
│ ${ya}${Yy+=1} ${prefix}getmusic <query>${ya}
│ ${ya}${Yy+=1} ${prefix}soundcloud <query>${ya}
│ ${ya}${Yy+=1} ${prefix}wikimedia <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ringtone <query>${ya}
└───────
┌──[ ${ye}STALKING MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}stalk <query>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokstalk <nama tiktok>${ya}
│ ${ya}${Yy+=1} ${prefix}githubstalk <nama github>${ya}
│ ${ya}${Yy+=1} ${prefix}igstalk <nama ig>${ya}
│ ${ya}${Yy+=1} ${prefix}ytstalk <nama yt>${ya}
└──────
┌──[ ${ye}ISLAM MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}asmaulhusna${ya}
│ ${ya}${Yy+=1} ${prefix}iqra${ya}
│ ${ya}${Yy+=1} ${prefix}hadist${ya}
│ ${ya}${Yy+=1} ${prefix}juzamma${ya}
│ ${ya}${Yy+=1} ${prefix}listsurah${ya}
│ ${ya}${Yy+=1} ${prefix}alquran${ya}
│ ${ya}${Yy+=1} ${prefix}jadwalsholat${ya}
│ ${ya}${Yy+=1} ${prefix}kisahnabi${ya}
│ ${ya}${Yy+=1} ${prefix}tafsirsurah${ya}
└──────
┌──[ ${ye}DATABASE MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}setcmd${ya}
│ ${ya}${Yy+=1} ${prefix}listcmd${ya}
│ ${ya}${Yy+=1} ${prefix}delcmd${ya}
│ ${ya}${Yy+=1} ${prefix}lockcmd${ya}
│ ${ya}${Yy+=1} ${prefix}addmsg${ya}
│ ${ya}${Yy+=1} ${prefix}listmsg${ya}
│ ${ya}${Yy+=1} ${prefix}getmsg${ya}
│ ${ya}${Yy+=1} ${prefix}delmsg${ya}
└───────
┌──[ ${ye}ANONYMOUS MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}anonymous${ya}
│ ${ya}${Yy+=1} ${prefix}start${ya}
│ ${ya}${Yy+=1} ${prefix}next${ya}
│ ${ya}${Yy+=1} ${prefix}keluar${ya}
│ ${ya}${Yy+=1} ${prefix}sendkontak${ya}
└───────
┌──[ ${ye}RANDOM SOUND${ye} ]
│ ${ya}${Yy+=1} ${prefix}sound1${ya}
│ ${ya}${Yy+=1} ${prefix}sound2${ya}
│ ${ya}${Yy+=1} ${prefix}sound3${ya}
│ ${ya}${Yy+=1} ${prefix}sound4${ya}
│ ${ya}${Yy+=1} ${prefix}sound5${ya}
│ ${ya}${Yy+=1} ${prefix}sound6${ya}
│ ${ya}${Yy+=1} ${prefix}sound7${ya}
│ ${ya}${Yy+=1} ${prefix}sound8${ya}
│ ${ya}${Yy+=1} ${prefix}sound9${ya}
│ ${ya}${Yy+=1} ${prefix}sound10${ya}
│ ${ya}${Yy+=1} ${prefix}sound11${ya}
│ ${ya}${Yy+=1} ${prefix}sound12${ya}
│ ${ya}${Yy+=1} ${prefix}sound13${ya}
│ ${ya}${Yy+=1} ${prefix}sound14${ya}
│ ${ya}${Yy+=1} ${prefix}sound15${ya}
│ ${ya}${Yy+=1} ${prefix}sound16${ya}
│ ${ya}${Yy+=1} ${prefix}sound17${ya}
│ ${ya}${Yy+=1} ${prefix}sound18${ya}
│ ${ya}${Yy+=1} ${prefix}sound19${ya}
│ ${ya}${Yy+=1} ${prefix}sound20${ya}
│ ${ya}${Yy+=1} ${prefix}sound21${ya}
│ ${ya}${Yy+=1} ${prefix}sound22${ya}
│ ${ya}${Yy+=1} ${prefix}sound23${ya}
│ ${ya}${Yy+=1} ${prefix}sound24${ya}
│ ${ya}${Yy+=1} ${prefix}sound25${ya}
│ ${ya}${Yy+=1} ${prefix}sound26${ya}
│ ${ya}${Yy+=1} ${prefix}sound27${ya}
│ ${ya}${Yy+=1} ${prefix}sound28${ya}
│ ${ya}${Yy+=1} ${prefix}sound29${ya}
│ ${ya}${Yy+=1} ${prefix}sound30${ya}
│ ${ya}${Yy+=1} ${prefix}sound31${ya}
│ ${ya}${Yy+=1} ${prefix}sound32${ya}
│ ${ya}${Yy+=1} ${prefix}sound33${ya}
│ ${ya}${Yy+=1} ${prefix}sound34${ya}
│ ${ya}${Yy+=1} ${prefix}sound35${ya}
│ ${ya}${Yy+=1} ${prefix}sound36${ya}
│ ${ya}${Yy+=1} ${prefix}sound37${ya}
│ ${ya}${Yy+=1} ${prefix}sound38${ya}
│ ${ya}${Yy+=1} ${prefix}sound39${ya}
│ ${ya}${Yy+=1} ${prefix}sound40${ya}
│ ${ya}${Yy+=1} ${prefix}sound41${ya}
│ ${ya}${Yy+=1} ${prefix}sound42${ya}
│ ${ya}${Yy+=1} ${prefix}sound43${ya}
│ ${ya}${Yy+=1} ${prefix}sound44${ya}
│ ${ya}${Yy+=1} ${prefix}sound45${ya}
│ ${ya}${Yy+=1} ${prefix}sound46${ya}
│ ${ya}${Yy+=1} ${prefix}sound47${ya}
│ ${ya}${Yy+=1} ${prefix}sound48${ya}
│ ${ya}${Yy+=1} ${prefix}sound49${ya}
│ ${ya}${Yy+=1} ${prefix}sound50${ya}
│ ${ya}${Yy+=1} ${prefix}sound51${ya}
│ ${ya}${Yy+=1} ${prefix}sound52${ya}
│ ${ya}${Yy+=1} ${prefix}sound53${ya}
│ ${ya}${Yy+=1} ${prefix}sound54${ya}
│ ${ya}${Yy+=1} ${prefix}sound55${ya}
│ ${ya}${Yy+=1} ${prefix}sound56${ya}
│ ${ya}${Yy+=1} ${prefix}sound57${ya}
│ ${ya}${Yy+=1} ${prefix}sound58${ya}
│ ${ya}${Yy+=1} ${prefix}sound59${ya}
│ ${ya}${Yy+=1} ${prefix}sound60${ya}
│ ${ya}${Yy+=1} ${prefix}sound61${ya}
│ ${ya}${Yy+=1} ${prefix}sound62${ya}
│ ${ya}${Yy+=1} ${prefix}sound63${ya}
│ ${ya}${Yy+=1} ${prefix}sound64${ya}
│ ${ya}${Yy+=1} ${prefix}sound65${ya}
│ ${ya}${Yy+=1} ${prefix}sound66${ya}
│ ${ya}${Yy+=1} ${prefix}sound67${ya}
│ ${ya}${Yy+=1} ${prefix}sound68${ya}
│ ${ya}${Yy+=1} ${prefix}sound69${ya}
│ ${ya}${Yy+=1} ${prefix}sound70${ya}
│ ${ya}${Yy+=1} ${prefix}sound71${ya}
│ ${ya}${Yy+=1} ${prefix}sound72${ya}
│ ${ya}${Yy+=1} ${prefix}sound73${ya}
│ ${ya}${Yy+=1} ${prefix}sound74${ya}
└──────
┌──[ ${ye}LOGO AND TEXT MENU${ye} ]
│ ${ya}${Yy+=1} 3d-effect${ya}
│ ${ya}${Yy+=1} 1917-style${ya}
│ ${ya}${Yy+=1} 3d-rubystone${ya}
│ ${ya}${Yy+=1} 3d-text-sub-zombie${ya}
│ ${ya}${Yy+=1} 3dengraved${ya}
│ ${ya}${Yy+=1} 3dluxury${ya}
│ ${ya}${Yy+=1} 3dlove${ya}
│ ${ya}${Yy+=1} 3dgolden${ya}
│ ${ya}${Yy+=1} 3dgradient${ya}
│ ${ya}${Yy+=1} 3dneonlight${ya}
│ ${ya}${Yy+=1} 3dpapercut${ya}
│ ${ya}${Yy+=1} 3drainbow${ya}
│ ${ya}${Yy+=1} 3drealistic${ya}
│ ${ya}${Yy+=1} 3dscifi${ya}
│ ${ya}${Yy+=1} 3dtext-effect${ya}
│ ${ya}${Yy+=1} 3dunderwater${ya}
│ ${ya}${Yy+=1} 3dwaterpipe${ya}
│ ${ya}${Yy+=1} alice-league-of-kings${ya}
│ ${ya}${Yy+=1} angel-wing-galaxy${ya}
│ ${ya}${Yy+=1} anubisarch-crossfire${ya}
│ ${ya}${Yy+=1} art-shader${ya}
│ ${ya}${Yy+=1} assassins-creed${ya}
│ ${ya}${Yy+=1} azzenka-league-of-kings${ya}
│ ${ya}${Yy+=1} birthday-cards${ya}
│ ${ya}${Yy+=1} birthday-greeting${ya}
│ ${ya}${Yy+=1} birthday-roses${ya}
│ ${ya}${Yy+=1} black-metal${ya}
│ ${ya}${Yy+=1} blood-frosted${ya}
│ ${ya}${Yy+=1} blood-text${ya}
│ ${ya}${Yy+=1} blue-effect${ya}
│ ${ya}${Yy+=1} blue-glitter${ya}
│ ${ya}${Yy+=1} brickwall${ya}
│ ${ya}${Yy+=1} brokentext${ya}
│ ${ya}${Yy+=1} bubble-effect${ya}
│ ${ya}${Yy+=1} bulb-effect${ya}
│ ${ya}${Yy+=1} circuitdark-gold-metal${ya}
│ ${ya}${Yy+=1} color-fireworks${ya}
│ ${ya}${Yy+=1} cool-metaldecorated-cookie${ya}
│ ${ya}${Yy+=1} deluxe-golddinamo${ya}
│ ${ya}${Yy+=1} deluxe-silver${ya}
│ ${ya}${Yy+=1} double-exposure${ya}
│ ${ya}${Yy+=1} dragon-fire${ya}
│ ${ya}${Yy+=1} eroded-metal${ya} 
│ ${ya}${Yy+=1} firework${ya}
│ ${ya}${Yy+=1} fox-crossfire${ya}
│ ${ya}${Yy+=1} fun-certify1${ya}
│ ${ya}${Yy+=1} fun-certify2${ya}
│ ${ya}${Yy+=1} futuristic${ya}
│ ${ya}${Yy+=1} galaxy-effect2${ya}
│ ${ya}${Yy+=1} galaxy-effect${ya}
│ ${ya}${Yy+=1} galaxy-angel${ya}
│ ${ya}${Yy+=1} galaxy-text${ya}
│ ${ya}${Yy+=1} galaxy-text-3${ya}
│ ${ya}${Yy+=1} gankk-league-of-kings${ya}
│ ${ya}${Yy+=1} genji-overwatch${ya}
│ ${ya}${Yy+=1} glossy${ya}
│ ${ya}${Yy+=1} glossy-bluemetal${ya}
│ ${ya}${Yy+=1} glossy-carbon${ya}
│ ${ya}${Yy+=1} glossy-chrome${ya}
│ ${ya}${Yy+=1} gold-avenger${ya}
│ ${ya}${Yy+=1} gold-barcar${ya}
│ ${ya}${Yy+=1} gold-batman${ya}
│ ${ya}${Yy+=1} gold-fox${ya}
│ ${ya}${Yy+=1} gold-bird2${ya}
│ ${ya}${Yy+=1} gold-eagle${ya}
│ ${ya}${Yy+=1} gold-effect${ya}
│ ${ya}${Yy+=1} gold-glitter${ya}
│ ${ya}${Yy+=1} gold-lion${ya}
│ ${ya}${Yy+=1} gold-lion2${ya}
│ ${ya}${Yy+=1} gold-star${ya}
│ ${ya}${Yy+=1} gold-tiger${ya}
│ ${ya}${Yy+=1} golden-letter${ya}
│ ${ya}${Yy+=1} gr-crossfire${ya}
│ ${ya}${Yy+=1} graffiti-color${ya}
│ ${ya}${Yy+=1} graffiti-text3${ya}
│ ${ya}${Yy+=1} graffiti-text5${ya}
│ ${ya}${Yy+=1} graffiti-text8${ya}
│ ${ya}${Yy+=1} graffiti-text4${ya}
│ ${ya}${Yy+=1} heart-birthday${ya}
│ ${ya}${Yy+=1} hanzo-overwatch${ya}
│ ${ya}${Yy+=1} greenhorror${ya}
│ ${ya}${Yy+=1} halloween-fire${ya}
│ ${ya}${Yy+=1} green-brush${ya}
│ ${ya}${Yy+=1} hero3-crossfire${ya}
│ ${ya}${Yy+=1} heart-cups${ya}
│ ${ya}${Yy+=1} holographic${ya}
│ ${ya}${Yy+=1} light-text${ya}
│ ${ya}${Yy+=1} lend-text${ya}
│ ${ya}${Yy+=1} ledtext${ya}
│ ${ya}${Yy+=1} layeredtext${ya}
│ ${ya}${Yy+=1} lol-caitlyn${ya}
│ ${ya}${Yy+=1} lol-ahri${ya}
│ ${ya}${Yy+=1} logo-galaxy${ya}
│ ${ya}${Yy+=1} lol-fizz${ya}
│ ${ya}${Yy+=1} lol-ezreal-and-shen${ya}
│ ${ya}${Yy+=1} lol-fiora${ya}
│ ${ya}${Yy+=1} lol-draven${ya}
│ ${ya}${Yy+=1} lol-jinx${ya}
│ ${ya}${Yy+=1} lol-kalista${ya}
│ ${ya}${Yy+=1} lol-khazix${ya}
│ ${ya}${Yy+=1} lol-kogmaw${ya}
│ ${ya}${Yy+=1} lol-leesin${ya}
│ ${ya}${Yy+=1} lol-lux${ya}
│ ${ya}${Yy+=1} lol-master-yi${ya}
│ ${ya}${Yy+=1} lol-miss-fortunelol-nidalee${ya}
│ ${ya}${Yy+=1} lol-quinn${ya}
│ ${ya}${Yy+=1} lol-sona${ya}
│ ${ya}${Yy+=1} lol-riven${ya}
│ ${ya}${Yy+=1} lol-talon${ya}
│ ${ya}${Yy+=1} lol-thresh${ya}
│ ${ya}${Yy+=1} lol-vayne${ya}
│ ${ya}${Yy+=1} machines-effect${ya}
│ ${ya}${Yy+=1} lol-yasuo${ya}
│ ${ya}${Yy+=1} lol-zed${ya}
│ ${ya}${Yy+=1} lol-wukong${ya}
│ ${ya}${Yy+=1} magic-text${ya}
│ ${ya}${Yy+=1} mei-overwatch${ya}
│ ${ya}${Yy+=1} matrix-text${ya}
│ ${ya}${Yy+=1} magmatext${ya}
│ ${ya}${Yy+=1} metal-lion-2${ya}
│ ${ya}${Yy+=1} metal-headshot${ya}
│ ${ya}${Yy+=1} metal-avenger${ya}
│ ${ya}${Yy+=1} metal-real-madrid${ya}
│ ${ya}${Yy+=1} metal-star${ya}
│ ${ya}${Yy+=1} metal-superman${ya}
│ ${ya}${Yy+=1} metal-text-effect${ya}
│ ${ya}${Yy+=1} metallic-letter${ya}
│ ${ya}${Yy+=1} metalic${ya}
│ ${ya}${Yy+=1} metal-wolf-2${ya}
│ ${ya}${Yy+=1} mganga-league-of-kings${ya}
│ ${ya}${Yy+=1} miniontext${ya}
│ ${ya}${Yy+=1} modern-gold-3${ya}
│ ${ya}${Yy+=1} modern-gold-4${ya}
│ ${ya}${Yy+=1} modern-gold-5-pro${ya}
│ ${ya}${Yy+=1} modern-gold-green${ya}
│ ${ya}${Yy+=1} modern-gold-purple${ya}
│ ${ya}${Yy+=1} modern-gold-red${ya}
│ ${ya}${Yy+=1} modern-gold-sliver${ya}
│ ${ya}${Yy+=1} modern-goldred${ya}
│ ${ya}${Yy+=1} neon${ya}
│ ${ya}${Yy+=1} neon-2${ya}
│ ${ya}${Yy+=1} neon-brightblue${ya}
│ ${ya}${Yy+=1} neon-effects${ya}
│ ${ya}${Yy+=1} neon-light-galaxy${ya}
│ ${ya}${Yy+=1} neon-satin${ya}
│ ${ya}${Yy+=1} neondevil${ya}
│ ${ya}${Yy+=1} neonlight${ya}
│ ${ya}${Yy+=1} neontext-light${ya}
│ ${ya}${Yy+=1} paper-cut${ya}
│ ${ya}${Yy+=1} paperart${ya}
│ ${ya}${Yy+=1} rainbow-effect${ya}
│ ${ya}${Yy+=1} reaper-overwatch${ya}
│ ${ya}${Yy+=1} red-birthdaycake${ya}
│ ${ya}${Yy+=1} redhot-metal${ya}
│ ${ya}${Yy+=1} resht-league-of-kings${ya}
│ ${ya}${Yy+=1} science${ya}
│ ${ya}${Yy+=1} sfg-crossfire${ya}
│ ${ya}${Yy+=1} sketch${ya}
│ ${ya}${Yy+=1} wetglass${ya}
│ ${ya}${Yy+=1} watercolor${ya}
│ ${ya}${Yy+=1} water-effect${ya}
│ ${ya}${Yy+=1} water-3d${ya}
│ ${ya}${Yy+=1} violet-league-of-kings${ya}
│ ${ya}${Yy+=1} snowtext${ya}
│ ${ya}${Yy+=1} soldier-overwatch${ya}
│ ${ya}${Yy+=1} sunlight-shadow${ya}
│ ${ya}${Yy+=1} transformer${ya}
│ ${ya}${Yy+=1} calkboard${ya}
│ ${ya}${Yy+=1} airline${ya}
│ ${ya}${Yy+=1} surfingboard${ya}
│ ${ya}${Yy+=1} watercolor${ya}
│ ${ya}${Yy+=1} neonwriting${ya}
│ ${ya}${Yy+=1} arrowsigns${ya}
│ ${ya}${Yy+=1} birthdaycake${ya}
│ ${ya}${Yy+=1} glassbauble${ya}
│ ${ya}${Yy+=1} footballplayer${ya}
│ ${ya}${Yy+=1} ${prefix}tololserti${ya}
│ ${ya}${Yy+=1} ${prefix}shadow${ya}
│ ${ya}${Yy+=1} ${prefix}cup${ya}
│ ${ya}${Yy+=1} ${prefix}cup1${ya}
│ ${ya}${Yy+=1} ${prefix}romance${ya}
│ ${ya}${Yy+=1} ${prefix}smoke${ya}
│ ${ya}${Yy+=1} ${prefix}burnpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lovemessage${ya}
│ ${ya}${Yy+=1} ${prefix}undergrass${ya}
│ ${ya}${Yy+=1} ${prefix}love${ya}
│ ${ya}${Yy+=1} ${prefix}coffe${ya}
│ ${ya}${Yy+=1} ${prefix}woodheart${ya}
│ ${ya}${Yy+=1} ${prefix}woodenboard${ya}
│ ${ya}${Yy+=1} ${prefix}summer3d${ya}
│ ${ya}${Yy+=1} ${prefix}wolfmetal${ya}
│ ${ya}${Yy+=1} ${prefix}nature3d${ya}
│ ${ya}${Yy+=1} ${prefix}underwater${ya}
│ ${ya}${Yy+=1} ${prefix}golderrose${ya}
│ ${ya}${Yy+=1} ${prefix}summernature${ya}
│ ${ya}${Yy+=1} ${prefix}letterleaves${ya}
│ ${ya}${Yy+=1} ${prefix}glowingneon${ya}
│ ${ya}${Yy+=1} ${prefix}fallleaves${ya}
│ ${ya}${Yy+=1} ${prefix}flamming${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}carvedwood${ya}
│ ${ya}${Yy+=1} ${prefix}tiktokmaker${ya}
│ ${ya}${Yy+=1} ${prefix}ktpmaker${ya}
│ ${ya}${Yy+=1} ${prefix}arcade8bit${ya}
│ ${ya}${Yy+=1} ${prefix}battlefield4${ya}
│ ${ya}${Yy+=1} ${prefix}pubg${ya}
│ ${ya}${Yy+=1} ${prefix}pornhub${ya}
│ ${ya}${Yy+=1} ${prefix}glitch${ya}
│ ${ya}${Yy+=1} ${prefix}avenger${ya}
│ ${ya}${Yy+=1} ${prefix}space${ya}
│ ${ya}${Yy+=1} ${prefix}ninjalogo${ya}
│ ${ya}${Yy+=1} ${prefix}marvelstudio${ya}
│ ${ya}${Yy+=1} ${prefix}lionlogo${ya}
│ ${ya}${Yy+=1} ${prefix}wolflogo${ya}
│ ${ya}${Yy+=1} ${prefix}steel3d${ya}
│ ${ya}${Yy+=1} ${prefix}wallgravity${ya}
│ ${ya}${Yy+=1} ${prefix}coolgravity${ya}
│ ${ya}${Yy+=1} ${prefix}wetglass${ya}
│ ${ya}${Yy+=1} ${prefix}multicolor3d${ya}
│ ${ya}${Yy+=1} ${prefix}watercolor${ya}
│ ${ya}${Yy+=1} ${prefix}luxurygold${ya}
│ ${ya}${Yy+=1} ${prefix}galaxywallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}lighttext${ya}
│ ${ya}${Yy+=1} ${prefix}beautifulflower${ya}
│ ${ya}${Yy+=1} ${prefix}puppycute${ya}
│ ${ya}${Yy+=1} ${prefix}royaltext${ya}
│ ${ya}${Yy+=1} ${prefix}heartshaped${ya}
│ ${ya}${Yy+=1} ${prefix}birthdaycake${ya}
│ ${ya}${Yy+=1} ${prefix}galaxystyle${ya}
│ ${ya}${Yy+=1} ${prefix}hologram3d${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}glossychrome${ya}
│ ${ya}${Yy+=1} ${prefix}greenbush${ya}
│ ${ya}${Yy+=1} ${prefix}metallogo${ya}
│ ${ya}${Yy+=1} ${prefix}noeltext${ya}
│ ${ya}${Yy+=1} ${prefix}glittergold${ya}
│ ${ya}${Yy+=1} ${prefix}textcake${ya}
│ ${ya}${Yy+=1} ${prefix}starsnight${ya}
│ ${ya}${Yy+=1} ${prefix}wooden3d${ya}
│ ${ya}${Yy+=1} ${prefix}textbyname${ya}
│ ${ya}${Yy+=1} ${prefix}writegalacy${ya}
│ ${ya}${Yy+=1} ${prefix}galaxybat${ya}
│ ${ya}${Yy+=1} ${prefix}snow3d${ya}
│ ${ya}${Yy+=1} ${prefix}birthdayday${ya}
│ ${ya}${Yy+=1} ${prefix}goldplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}silverplaybutton${ya}
│ ${ya}${Yy+=1} ${prefix}freefire${ya}
│ ${ya}${Yy+=1} ${prefix}blackpink${ya}
│ ${ya}${Yy+=1} ${prefix}neon${ya}
│ ${ya}${Yy+=1} ${prefix}greenneon${ya}
│ ${ya}${Yy+=1} ${prefix}advanceglow${ya}
│ ${ya}${Yy+=1} ${prefix}futureneon${ya}
│ ${ya}${Yy+=1} ${prefix}sandwriting${ya}
│ ${ya}${Yy+=1} ${prefix}sandsummer${ya}
│ ${ya}${Yy+=1} ${prefix}sandengraved${ya}
│ ${ya}${Yy+=1} ${prefix}metaldark${ya}
│ ${ya}${Yy+=1} ${prefix}neonlight${ya}
│ ${ya}${Yy+=1} ${prefix}holographic${ya}
│ ${ya}${Yy+=1} ${prefix}text1917${ya}
│ ${ya}${Yy+=1} ${prefix}minion${ya}
│ ${ya}${Yy+=1} ${prefix}deluxesilver${ya}
│ ${ya}${Yy+=1} ${prefix}newyearcard${ya}
│ ${ya}${Yy+=1} ${prefix}bloodfrosted${ya}
│ ${ya}${Yy+=1} ${prefix}halloween${ya}
│ ${ya}${Yy+=1} ${prefix}jokerlogo${ya}
│ ${ya}${Yy+=1} ${prefix}fireworksparkle${ya}
│ ${ya}${Yy+=1} ${prefix}natureleaves${ya}
│ ${ya}${Yy+=1} ${prefix}bokeh${ya}
│ ${ya}${Yy+=1} ${prefix}toxic${ya}
│ ${ya}${Yy+=1} ${prefix}strawberry${ya}
│ ${ya}${Yy+=1} ${prefix}box3d${ya}
│ ${ya}${Yy+=1} ${prefix}roadwarning${ya}
│ ${ya}${Yy+=1} ${prefix}breakwall${ya}
│ ${ya}${Yy+=1} ${prefix}icecold${ya}
│ ${ya}${Yy+=1} ${prefix}luxury${ya}
│ ${ya}${Yy+=1} ${prefix}cloud${ya}
│ ${ya}${Yy+=1} ${prefix}summersand${ya}
│ ${ya}${Yy+=1} ${prefix}horrorblood${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya}
│ ${ya}${Yy+=1} ${prefix}3dchristmas${ya}
│ ${ya}${Yy+=1} ${prefix}3ddeepsea${ya}
│ ${ya}${Yy+=1} ${prefix}americanflag${ya}
│ ${ya}${Yy+=1} ${prefix}3dscifi${ya}
│ ${ya}${Yy+=1} ${prefix}3drainbow${ya}
│ ${ya}${Yy+=1} ${prefix}3dwaterpipe${ya}
│ ${ya}${Yy+=1} ${prefix}halloweenskeleton${ya}
│ ${ya}${Yy+=1} ${prefix}sketch${ya}
│ ${ya}${Yy+=1} ${prefix}bluecircuit${ya}
│ ${ya}${Yy+=1} ${prefix}space${ya}
│ ${ya}${Yy+=1} ${prefix}metallic${ya}
│ ${ya}${Yy+=1} ${prefix}fiction${ya}
│ ${ya}${Yy+=1} ${prefix}greenhorror${ya}
│ ${ya}${Yy+=1} ${prefix}transformer${ya}
│ ${ya}${Yy+=1} ${prefix}berry${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya}
│ ${ya}${Yy+=1} ${prefix}magma${ya}
│ ${ya}${Yy+=1} ${prefix}3dcrackedstone${ya}
│ ${ya}${Yy+=1} ${prefix}3dneonlight${ya}
│ ${ya}${Yy+=1} ${prefix}impressiveglitch${ya}
│ ${ya}${Yy+=1} ${prefix}naturalleaves${ya}
│ ${ya}${Yy+=1} ${prefix}fireworksparkle${ya}
│ ${ya}${Yy+=1} ${prefix}matrix${ya}
│ ${ya}${Yy+=1} ${prefix}dropwater${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}foggywindow${ya}
│ ${ya}${Yy+=1} ${prefix}neondevils${ya}
│ ${ya}${Yy+=1} ${prefix}christmasholiday${ya}
│ ${ya}${Yy+=1} ${prefix}3dgradient${ya}
│ ${ya}${Yy+=1} ${prefix}gluetext${ya}
│ ${ya}${Yy+=1} ${prefix}shadow${ya}
│ ${ya}${Yy+=1} ${prefix}romantic${ya}
│ ${ya}${Yy+=1} ${prefix}smoke${ya}
│ ${ya}${Yy+=1} ${prefix}burnpapper${ya}
│ ${ya}${Yy+=1} ${prefix}naruto${ya}
│ ${ya}${Yy+=1} ${prefix}lovemsg${ya}
│ ${ya}${Yy+=1} ${prefix}grassmsg${ya}
│ ${ya}${Yy+=1} ${prefix}lovetext${ya}
│ ${ya}${Yy+=1} ${prefix}coffecup${ya}
│ ${ya}${Yy+=1} ${prefix}butterfly${ya}
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}
│ ${ya}${Yy+=1} ${prefix}retrolol${ya}
│ ${ya}${Yy+=1} ${prefix}ffcover${ya}
│ ${ya}${Yy+=1} ${prefix}crossfire${ya}
│ ${ya}${Yy+=1} ${prefix}galaxy${ya}
│ ${ya}${Yy+=1} ${prefix}glass${ya}
│ ${ya}${Yy+=1} ${prefix}neon${ya}
│ ${ya}${Yy+=1} ${prefix}beach${ya}
│ ${ya}${Yy+=1} ${prefix}igcertificate${ya}
│ ${ya}${Yy+=1} ${prefix}ytcertificate${ya}
└──────
┌──[ ${ye}RANDOM FOTO${ye} ]
│ ${ya}${Yy+=1} ${prefix}hentai${ya}
│ ${ya}${Yy+=1} ${prefix}ahegao${ya}
│ ${ya}${Yy+=1} ${prefix}ass${ya}
│ ${ya}${Yy+=1} ${prefix}bdsm${ya}
│ ${ya}${Yy+=1} ${prefix}cuckold${ya}
│ ${ya}${Yy+=1} ${prefix}cum${ya}
│ ${ya}${Yy+=1} ${prefix}ero${ya}
│ ${ya}${Yy+=1} ${prefix}femdom${ya}
│ ${ya}${Yy+=1} ${prefix}foot${ya}
│ ${ya}${Yy+=1} ${prefix}gangbang${ya}
│ ${ya}${Yy+=1} ${prefix}glasses${ya}
│ ${ya}${Yy+=1} ${prefix}jahy${ya}
│ ${ya}${Yy+=1} ${prefix}masturbation${ya}
│ ${ya}${Yy+=1} ${prefix}orgy${ya}
│ ${ya}${Yy+=1} ${prefix}panties${ya}
│ ${ya}${Yy+=1} ${prefix}pussy${ya}
│ ${ya}${Yy+=1} ${prefix}thighs${ya}
│ ${ya}${Yy+=1} ${prefix}yuri${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaper${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapermeme${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperprogamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapergamer${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperanime${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperteknologi${ya}
│ ${ya}${Yy+=1} ${prefix}wallpapercyber${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperinori${ya}
│ ${ya}${Yy+=1} ${prefix}wallpaperislami${ya}
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya}
│ ${ya}${Yy+=1} ${prefix}meme${ya}
│ ${ya}${Yy+=1} ${prefix}hsdxd${ya}
│ ${ya}${Yy+=1} ${prefix}sao${ya}
│ ${ya}${Yy+=1} ${prefix}lovelive${ya}
│ ${ya}${Yy+=1} ${prefix}pinterest${ya}
│ ${ya}${Yy+=1} ${prefix}ppcouple${ya}
│ ${ya}${Yy+=1} ${prefix}hijaber${ya}
│ ${ya}${Yy+=1} ${prefix}cecan${ya}
│ ${ya}${Yy+=1} ${prefix}cecan2${ya}
│ ${ya}${Yy+=1} ${prefix}cogan${ya}
│ ${ya}${Yy+=1} ${prefix}waifu${ya}
│ ${ya}${Yy+=1} ${prefix}loli${ya}
│ ${ya}${Yy+=1} ${prefix}shinobu${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}husbu${ya}
│ ${ya}${Yy+=1} ${prefix}milf${ya}
│ ${ya}${Yy+=1} ${prefix}cat${ya}
│ ${ya}${Yy+=1} ${prefix}foxgirl${ya}
│ ${ya}${Yy+=1} ${prefix}cosplay${ya}
│ ${ya}${Yy+=1} ${prefix}wallml${ya}
│ ${ya}${Yy+=1} ${prefix}art${ya}
│ ${ya}${Yy+=1} ${prefix}bts${ya}
│ ${ya}${Yy+=1} ${prefix}exo${ya}
│ ${ya}${Yy+=1} ${prefix}wallnime${ya}
└──────
┌──[ ${ye}RANDOM ASUPAN${ye} ]
│ ${ya}${Yy+=1} ${prefix}storyanime${ya}
│ ${ya}${Yy+=1} ${prefix}asupan${ya}
│ ${ya}${Yy+=1} ${prefix}asupan2${ya}
│ ${ya}${Yy+=1} ${prefix}asupan3${ya}
│ ${ya}${Yy+=1} ${prefix}bokep${ya}
│ ${ya}${Yy+=1} ${prefix}bocil${ya}
│ ${ya}${Yy+=1} ${prefix}santuy${ya}
│ ${ya}${Yy+=1} ${prefix}ukhty${ya}
│ ${ya}${Yy+=1} ${prefix}cecan${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-indo${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-jep${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-mal${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-tha${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-vie${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-chi${ya}
│ ${ya}${Yy+=1} ${prefix}cecan-kor${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'infomenu':

await Dha.send5ButImg(from, `┌──[ ${ye}INFORMASI MENU${ye} ]
│ ${ya} •speedtest${ya}
│ ${ya} •ping${ya}
│ ${ya} •owner${ya}
│ ${ya} •menu${ya}
│ ${ya} •delete${ya}
│ ${ya} •infochat${ya}
│ ${ya} •quoted${ya}
│ ${ya} •listpc${ya}
│ ${ya} •listgc${ya}
│ ${ya} •listonline${ya}
│ ${ya} •reactme${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'ownermenu':

await Dha.send5ButImg(from, `┌──[ ${ye}OWNER MENU${ye} ]
│ ${ya}• $ Evalator${ya}
│ ${ya}• > Executor${ya}
│ ${ya}• ${prefix}sewa add waktu${ya}
│ ${ya}• ${prefix}sewa del${ya}
│ ${ya}• ${prefix}listsewa${ya}
│ ${ya}• ${prefix}ceksewa${ya}
│ ${ya}• ${prefix}join${ya}
│ ${ya}• ${prefix}public${ya}
│ ${ya}• ${prefix}self${ya}
│ ${ya}• ${prefix}leave${ya}
│ ${ya}• ${prefix}addprem${ya}
│ ${ya}• ${prefix}delprem${ya}
│ ${ya}• ${prefix}block${ya}
│ ${ya}• ${prefix}unblock${ya}
│ ${ya}• ${prefix}bcall${ya}
│ ${ya}• ${prefix}bcgc${ya}
│ ${ya}• ${prefix}creategc${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'othermenu':

await Dha.send5ButImg(from, `┌──[ ${ye}OTHER MENU${ye} ]
│ ${ya}• ${prefix}owner${ya}
│ ${ya}• ${prefix}credits${ya}
│ ${ya}• ${prefix}groupdha${ya}
│ ${ya}• ${prefix}rules${ya}
│ ${ya}• ${prefix}donasi${ya}
│ ${ya}• ${prefix}sewabot${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'convertmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}CONVERST MENU${ye} ]
│ ${ya}• ${prefix}toimg${ya}
│ ${ya}• ${prefix}tovideo${ya}
│ ${ya}• ${prefix}tovn${ya}
│ ${ya}• ${prefix}tomp3${ya}
│ ${ya}• ${prefix}ssweb${ya}
│ ${ya}• ${prefix}removebg${ya}
│ ${ya}• ${prefix}togif${ya}
│ ${ya}• ${prefix}tourl${ya}
│ ${ya}• ${prefix}toaudio${ya}
│ ${ya}• ${prefix}ebinary${ya}
│ ${ya}• ${prefix}dbinary${ya}
│ ${ya}• ${prefix}styletext${ya}
│ ${ya}• ${prefix}bass${ya}
│ ${ya}• ${prefix}blown${ya}
│ ${ya}• ${prefix}deep${ya}
│ ${ya}• ${prefix}earrape${ya}
│ ${ya}• ${prefix}fast${ya}
│ ${ya}• ${prefix}fat${ya}
│ ${ya}• ${prefix}nightcore${ya}
│ ${ya}• ${prefix}reverse${ya}
│ ${ya}• ${prefix}slow${ya}
│ ${ya}• ${prefix}robot${ya}
│ ${ya}• ${prefix}tupai${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'primbonmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}PRIMBON MENU${ye} ]
│ ${ya}• ${prefix}nomorhoki${ya}
│ ${ya}• ${prefix}artimimpi${ya}
│ ${ya}• ${prefix}artinama${ya}
│ ${ya}• ${prefix}ramaljodoh${ya}
│ ${ya}• ${prefix}ramaljodohbali${ya}
│ ${ya}• ${prefix}suamiistri${ya}
│ ${ya}• ${prefix}ramalcinta${ya}
│ ${ya}• ${prefix}cocoknama${ya}
│ ${ya}• ${prefix}pasangan${ya}
│ ${ya}• ${prefix}jadiannikah${ya}
│ ${ya}• ${prefix}sifatusaha${ya}
│ ${ya}• ${prefix}rezeki${ya}
│ ${ya}• ${prefix}pekerjaan${ya}
│ ${ya}• ${prefix}nasib${ya}
│ ${ya}• ${prefix}penyakit${ya}
│ ${ya}• ${prefix}tarot${ya}
│ ${ya}• ${prefix}fengshui${ya}
│ ${ya}• ${prefix}haribaik${ya}
│ ${ya}• ${prefix}harisangar${ya}
│ ${ya}• ${prefix}harisial${ya}
│ ${ya}• ${prefix}nagahari${ya}
│ ${ya}• ${prefix}arahrezeki${ya}
│ ${ya}• ${prefix}peruntungan${ya}
│ ${ya}• ${prefix}weton${ya}
│ ${ya}• ${prefix}karakter${ya}
│ ${ya}• ${prefix}keberuntungan${ya}
│ ${ya}• ${prefix}memancing${ya}
│ ${ya}• ${prefix}masasubur${ya}
│ ${ya}• ${prefix}zodiak${ya}
│ ${ya}• ${prefix}shio${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'teksmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}TEKS MENU${ye} ]
│ ${ya}• ${prefix}lirik${ya}
│ ${ya}• ${prefix}translate${ya}
│ ${ya}• ${prefix}namapeople${ya}
│ ${ya}• ${prefix}cerpen${ya}
│ ${ya}• ${prefix}ceritahoror${ya}
│ ${ya}• ${prefix}faktaunik${ya}
│ ${ya}• ${prefix}katabijak${ya}
│ ${ya}• ${prefix}pantun${ya}
│ ${ya}• ${prefix}bucin${ya}
│ ${ya}• ${prefix}quoteanime${ya}
│ ${ya}• ${prefix}motivasi${ya}
│ ${ya}• ${prefix}dilanquote${ya}
│ ${ya}• ${prefix}bucinquote${ya}
│ ${ya}• ${prefix}katasenja${ya}
│ ${ya}• ${prefix}puisi${ya}
│ ${ya}• ${prefix}randomnama${ya}
│ ${ya}• ${prefix}halah${ya}
│ ${ya}• ${prefix}hilih${ya}
│ ${ya}• ${prefix}huluh${ya}
│ ${ya}• ${prefix}heleh${ya}
│ ${ya}• ${prefix}holoh${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'stickermenu':

await Dha.send5ButImg(from, `┌──[ ${ye}STICKER MENU${ye} ]
│ ${ya}• ${prefix}sticker${ya}
│ ${ya}• ${prefix}attp${ya}
│ ${ya}• ${prefix}ttp${ya}
│ ${ya}• ${prefix}cry${ya}
│ ${ya}• ${prefix}kill${ya}
│ ${ya}• ${prefix}hug${ya}
│ ${ya}• ${prefix}pat${ya}
│ ${ya}• ${prefix}lick${ya}
│ ${ya}• ${prefix}kiss${ya}
│ ${ya}• ${prefix}bite${ya}
│ ${ya}• ${prefix}yeet${ya}
│ ${ya}• ${prefix}bully${ya}
│ ${ya}• ${prefix}bonk${ya}
│ ${ya}• ${prefix}wink${ya}
│ ${ya}• ${prefix}poke${ya}
│ ${ya}• ${prefix}nom${ya}
│ ${ya}• ${prefix}slap${ya}
│ ${ya}• ${prefix}smile${ya}
│ ${ya}• ${prefix}wave${ya}
│ ${ya}• ${prefix}awoo${ya}
│ ${ya}• ${prefix}blush${ya}
│ ${ya}• ${prefix}smug${ya}
│ ${ya}• ${prefix}glomp${ya}
│ ${ya}• ${prefix}happy${ya}
│ ${ya}• ${prefix}dance${ya}
│ ${ya}• ${prefix}cringe${ya}
│ ${ya}• ${prefix}cuddle${ya}
│ ${ya}• ${prefix}highfive${ya}
│ ${ya}• ${prefix}handhold${ya}
│ ${ya}• ${prefix}dadu${ya}
│ ${ya}• ${prefix}patrick${ya}
│ ${ya}• ${prefix}amongus${ya}
│ ${ya}• ${prefix}gawrgura${ya}
│ ${ya}• ${prefix}animestick${ya}
│ ${ya}• ${prefix}doge${ya}
│ ${ya}• ${prefix}megumin${ya}
│ ${ya}• ${prefix}shinobu${ya}
│ ${ya}• ${prefix}emojimix${ya}
│ ${ya}• ${prefix}emojimix2${ya}
│ ${ya}• ${prefix}emoji${ya}
│ ${ya}• ${prefix}bucinstick${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'animemenu':

await Dha.send5ButImg(from, `┌──[ ${ye}RANDOM ANIME${ye} ]
│ ${ya}• ${prefix}anime${ya}
│ ${ya}• ${prefix}nhentai${ya}
│ ${ya}• ${prefix}nekopoisearch${ya}
│ ${ya}• ${prefix}nekopoi${ya}
│ ${ya}• ${prefix}kusonime${ya}
│ ${ya}• ${prefix}elf${ya}
│ ${ya}• ${prefix}neko${ya}
│ ${ya}• ${prefix}shota${ya}
│ ${ya}• ${prefix}sagiri${ya}
│ ${ya}• ${prefix}megumin${ya}
│ ${ya}• ${prefix}trap${ya}
│ ${ya}• ${prefix}blowjob${ya}
│ ${ya}• ${prefix}yaoi${ya}
│ ${ya}• ${prefix}ecchi${ya}
│ ${ya}• ${prefix}lk21${ya}
│ ${ya}• ${prefix}foxgirl${ya}
│ ${ya}• ${prefix}manga${ya}
│ ${ya}• ${prefix}gimage${ya}
│ ${ya}• ${prefix}pinterest${ya}
│ ${ya}• ${prefix}wallnime${ya}
│ ${ya}• ${prefix}chiisaihentai${ya}
│ ${ya}• ${prefix}ahegao${ya}
│ ${ya}• ${prefix}hololewd${ya}
│ ${ya}• ${prefix}sideoppai${ya}
│ ${ya}• ${prefix}animefeets${ya}
│ ${ya}• ${prefix}animebooty${ya}
│ ${ya}• ${prefix}animethighss${ya}
│ ${ya}• ${prefix}hentaiparadise${ya}
│ ${ya}• ${prefix}animearmpits${ya}
│ ${ya}• ${prefix}hentaifemdom${ya}
│ ${ya}• ${prefix}lewdanimegirls${ya}
│ ${ya}• ${prefix}biganimetiddies${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'grupmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}GROUP MENU${ye} ]
│ ${ya}• ${prefix}linkgroup${ya}
│ ${ya}• ${prefix}antilink <on/off>${ya}
│ ${ya}• ${prefix}autosticker <1/0>${ya}
│ ${ya}• ${prefix}group <open/close>${ya}
│ ${ya}• ${prefix}add 628××××${ya}
│ ${ya}• ${prefix}kick @tag${ya}
│ ${ya}• ${prefix}tagall <teks>${ya}
│ ${ya}• ${prefix}hidetag <teks>${ya}
│ ${ya}• ${prefix}promote @tag${ya}
│ ${ya}• ${prefix}demote @tag${ya}
│ ${ya}• ${prefix}setname <name>${ya}
│ ${ya}• ${prefix}setdesc <teks>${ya}
│ ${ya}• ${prefix}ephemeral [option]${ya}
│ ${ya}• ${prefix}setppgc [image]${ya}
│ ${ya}• ${prefix}setname [text]${ya}
│ ${ya}• ${prefix}setdesc [text]${ya}
│ ${ya}• ${prefix}editinfo [option]${ya}
│ ${ya}• ${prefix}mute [on/off]${ya}
│ ${ya}• ${prefix}vote [text]${ya}
│ ${ya}• ${prefix}devote${ya}
│ ${ya}• ${prefix}upvote${ya}
│ ${ya}• ${prefix}cekvote${ya}
│ ${ya}• ${prefix}hapusvote${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'gamemenu':

await Dha.send5ButImg(from, `┌──[ ${ye}GAME MENU${ye} ]
│ ${ya}• ${prefix}goblokcek${ya} 
│ ${ya}• ${prefix}jelekcek${ya} 
│ ${ya}• ${prefix}gaycek${ya}
│ ${ya}• ${prefix}lesbicek${ya}
│ ${ya}• ${prefix}gantengcek${ya} 
│ ${ya}• ${prefix}cantikcek${ya}
│ ${ya}• ${prefix}begocek${ya} 
│ ${ya}• ${prefix}suhucek${ya}
│ ${ya}• ${prefix}pintercek${ya}
│ ${ya}• ${prefix}jagocek${ya}
│ ${ya}• ${prefix}nolepcek${ya}
│ ${ya}• ${prefix}babicek${ya}
│ ${ya}• ${prefix}bebancek${ya}
│ ${ya}• ${prefix}baikcek${ya}
│ ${ya}• ${prefix}jahatcek${ya}
│ ${ya}• ${prefix}anjingcek${ya}
│ ${ya}• ${prefix}haramcek${ya}
│ ${ya}• ${prefix}pakboycek${ya}
│ ${ya}• ${prefix}pakgirlcek${ya}
│ ${ya}• ${prefix}sangecek${ya} 
│ ${ya}• ${prefix}bapercek${ya}
│ ${ya}• ${prefix}fakboycek${ya}
│ ${ya}• ${prefix}alimcek${ya}
│ ${ya}• ${prefix}suhucek${ya}
│ ${ya}• ${prefix}fakgirlcek${ya}
│ ${ya}• ${prefix}kerencek${ya}
│ ${ya}• ${prefix}wibucek${ya}
│ ${ya}• ${prefix}pasarkascek${ya}
│ ${ya}• ${prefix}jadian${ya}
│ ${ya}• ${prefix}apakah${ya}
│ ${ya}• ${prefix}rate${ya}
│ ${ya}• ${prefix}kapankah${ya}
│ ${ya}• ${prefix}bisakah${ya}
│ ${ya}• ${prefix}kuismath${ya}
│ ${ya}• ${prefix}tebak lagu${ya}
│ ${ya}• ${prefix}tebak gambar${ya}
│ ${ya}• ${prefix}tebak kata${ya}
│ ${ya}• ${prefix}tebak kalimat${ya}
│ ${ya}• ${prefix}tebak lirik${ya}
│ ${ya}• ${prefix}tebak lontong${ya}
│ ${ya}• ${prefix}berburu${ya}
│ ${ya}• ${prefix}mancing${ya}
│ ${ya}• ${prefix}menambang${ya}
│ ${ya}• ${prefix}mining${ya}
│ ${ya}• ${prefix}heal${ya}
│ ${ya}• ${prefix}profile${ya}
│ ${ya}• ${prefix}inventory${ya}
│ ${ya}• ${prefix}leaderboard${ya}
│ ${ya}• ${prefix}buy${ya}
│ ${ya}• ${prefix}sell${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'downloadmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}DOWNLOAD MENU${ye} ]
│ ${ya}• ${prefix}ytsearch <query>${ya}
│ ${ya}• ${prefix}play <query>${ya}
│ ${ya}• ${prefix}ytmp4 <link>${ya}
│ ${ya}• ${prefix}ytmp3 <link>${ya}
│ ${ya}• ${prefix}tiktoknowm <link>${ya}
│ ${ya}• ${prefix}tiktokaudio <link>${ya}
│ ${ya}• ${prefix}mediafire <link>${ya}
│ ${ya}• ${prefix}xnxxsearch <query>${ya}
│ ${ya}• ${prefix}xnxxvideo <link>${ya}
│ ${ya}• ${prefix}spotify <link>${ya}
│ ${ya}• ${prefix}spotifysearch <query>${ya}
│ ${ya}• ${prefix}jooxplay <query>${ya}
│ ${ya}• ${prefix}jooxplay <query>${ya}
│ ${ya}• ${prefix}instagram <query>${ya}
│ ${ya}• ${prefix}twitter <query>${ya}
│ ${ya}• ${prefix}twittermp3 <query>${ya}
│ ${ya}• ${prefix}facebook <query>${ya}
│ ${ya}• ${prefix}umma <query>${ya}
│ ${ya}• ${prefix}getvideo <query>${ya}
│ ${ya}• ${prefix}getmusic <query>${ya}
│ ${ya}• ${prefix}soundcloud <query>${ya}
│ ${ya}• ${prefix}wikimedia <query>${ya}
│ ${ya}• ${prefix}ringtone <query>${ya}
└───────

Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'stalkmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}STALKING MENU${ye} ]
│ ${ya}• ${prefix}stalk <query>${ya}
│ ${ya}• ${prefix}tiktokstalk <nama tt>${ya}
│ ${ya}• ${prefix}githubstalk <nama gh>${ya}
│ ${ya}• ${prefix}igstalk <nama ig>${ya}
│ ${ya}• ${prefix}ytstalk <nama yt>${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'regionmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}ISLAM MENU${ye} ]
│ ${ya}• ${prefix}asmaulhusna${ya}
│ ${ya}• ${prefix}iqra${ya}
│ ${ya}• ${prefix}hadist${ya}
│ ${ya}• ${prefix}juzamma${ya}
│ ${ya}• ${prefix}listsurah${ya}
│ ${ya}• ${prefix}alquran${ya}
│ ${ya}• ${prefix}jadwalsholat${ya}
│ ${ya}• ${prefix}kisahnabi${ya}
│ ${ya}• ${prefix}tafsirsurah${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'databasemenu':

await Dha.send5ButImg(from, `┌──[ ${ye}DATABASE MENU${ye} ]
│ ${ya}• ${prefix}setcmd${ya}
│ ${ya}• ${prefix}listcmd${ya}
│ ${ya}• ${prefix}delcmd${ya}
│ ${ya}• ${prefix}lockcmd${ya}
│ ${ya}• ${prefix}addmsg${ya}
│ ${ya}• ${prefix}listmsg${ya}
│ ${ya}• ${prefix}getmsg${ya}
│ ${ya}• ${prefix}delmsg${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'anonymouschatmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}ANONYMOUS MENU${ye} ]
│ ${ya}• ${prefix}anonymous${ya}
│ ${ya}• ${prefix}start${ya}
│ ${ya}• ${prefix}next${ya}
│ ${ya}• ${prefix}keluar${ya}
│ ${ya}• ${prefix}sendkontak${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'soundmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}SOUND MENU${ye} ]
│ ${ya}• ${prefix}sound1${ya}
│ ${ya}• ${prefix}sound2${ya}
│ ${ya}• ${prefix}sound3${ya}
│ ${ya}• ${prefix}sound4${ya}
│ ${ya}• ${prefix}sound5${ya}
│ ${ya}• ${prefix}sound6${ya}
│ ${ya}• ${prefix}sound7${ya}
│ ${ya}• ${prefix}sound8${ya}
│ ${ya}• ${prefix}sound9${ya}
│ ${ya}• ${prefix}sound10${ya}
│ ${ya}• ${prefix}sound11${ya}
│ ${ya}• ${prefix}sound12${ya}
│ ${ya}• ${prefix}sound13${ya}
│ ${ya}• ${prefix}sound14${ya}
│ ${ya}• ${prefix}sound15${ya}
│ ${ya}• ${prefix}sound16${ya}
│ ${ya}• ${prefix}sound17${ya}
│ ${ya}• ${prefix}sound18${ya}
│ ${ya}• ${prefix}sound19${ya}
│ ${ya}• ${prefix}sound20${ya}
│ ${ya}• ${prefix}sound21${ya}
│ ${ya}• ${prefix}sound22${ya}
│ ${ya}• ${prefix}sound23${ya}
│ ${ya}• ${prefix}sound24${ya}
│ ${ya}• ${prefix}sound25${ya}
│ ${ya}• ${prefix}sound26${ya}
│ ${ya}• ${prefix}sound27${ya}
│ ${ya}• ${prefix}sound28${ya}
│ ${ya}• ${prefix}sound29${ya}
│ ${ya}• ${prefix}sound30${ya}
│ ${ya}• ${prefix}sound31${ya}
│ ${ya}• ${prefix}sound32${ya}
│ ${ya}• ${prefix}sound33${ya}
│ ${ya}• ${prefix}sound34${ya}
│ ${ya}• ${prefix}sound35${ya}
│ ${ya}• ${prefix}sound36${ya}
│ ${ya}• ${prefix}sound37${ya}
│ ${ya}• ${prefix}sound38${ya}
│ ${ya}• ${prefix}sound39${ya}
│ ${ya}• ${prefix}sound40${ya}
│ ${ya}• ${prefix}sound41${ya}
│ ${ya}• ${prefix}sound42${ya}
│ ${ya}• ${prefix}sound43${ya}
│ ${ya}• ${prefix}sound44${ya}
│ ${ya}• ${prefix}sound45${ya}
│ ${ya}• ${prefix}sound46${ya}
│ ${ya}• ${prefix}sound47${ya}
│ ${ya}• ${prefix}sound48${ya}
│ ${ya}• ${prefix}sound49${ya}
│ ${ya}• ${prefix}sound50${ya}
│ ${ya}• ${prefix}sound51${ya}
│ ${ya}• ${prefix}sound52${ya}
│ ${ya}• ${prefix}sound53${ya}
│ ${ya}• ${prefix}sound54${ya}
│ ${ya}• ${prefix}sound55${ya}
│ ${ya}• ${prefix}sound56${ya}
│ ${ya}• ${prefix}sound57${ya}
│ ${ya}• ${prefix}sound58${ya}
│ ${ya}• ${prefix}sound59${ya}
│ ${ya}• ${prefix}sound60${ya}
│ ${ya}• ${prefix}sound61${ya}
│ ${ya}• ${prefix}sound62${ya}
│ ${ya}• ${prefix}sound63${ya}
│ ${ya}• ${prefix}sound64${ya}
│ ${ya}• ${prefix}sound65${ya}
│ ${ya}• ${prefix}sound66${ya}
│ ${ya}• ${prefix}sound67${ya}
│ ${ya}• ${prefix}sound68${ya}
│ ${ya}• ${prefix}sound69${ya}
│ ${ya}• ${prefix}sound70${ya}
│ ${ya}• ${prefix}sound71${ya}
│ ${ya}• ${prefix}sound72${ya}
│ ${ya}• ${prefix}sound73${ya}
│ ${ya}• ${prefix}sound74${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'logomenu':

await Dha.send5ButImg(from, `┌──[ ${ye}LOGO AND TEXT MENU${ye} ]
│ ${ya}• 3d-effect${ya}
│ ${ya}• 1917-style${ya}
│ ${ya}• 3d-rubystone${ya}
│ ${ya}• 3d-text-sub-zombie${ya}
│ ${ya}• 3dengraved${ya}
│ ${ya}• 3dluxury${ya}
│ ${ya}• 3dlove${ya}
│ ${ya}• 3dgolden${ya}
│ ${ya}• 3dgradient${ya}
│ ${ya}• 3dneonlight${ya}
│ ${ya}• 3dpapercut${ya}
│ ${ya}• 3drainbow${ya}
│ ${ya}• 3drealistic${ya}
│ ${ya}• 3dscifi${ya}
│ ${ya}• 3dtext-effect${ya}
│ ${ya}• 3dunderwater${ya}
│ ${ya}• 3dwaterpipe${ya}
│ ${ya}• alice-league-of-kings${ya}
│ ${ya}• angel-wing-galaxy${ya}
│ ${ya}• anubisarch-crossfire${ya}
│ ${ya}• art-shader${ya}
│ ${ya}• assassins-creed${ya}
│ ${ya}• azzenka-league-of-kings${ya}
│ ${ya}• birthday-cards${ya}
│ ${ya}• birthday-greeting${ya}
│ ${ya}• birthday-roses${ya}
│ ${ya}• black-metal${ya}
│ ${ya}• blood-frosted${ya}
│ ${ya}• blood-text${ya}
│ ${ya}• blue-effect${ya}
│ ${ya}• blue-glitter${ya}
│ ${ya}• brickwall${ya}
│ ${ya}• brokentext${ya}
│ ${ya}• bubble-effect${ya}
│ ${ya}• bulb-effect${ya}
│ ${ya}• circuitdark-gold-metal${ya}
│ ${ya}• color-fireworks${ya}
│ ${ya}• cool-metaldecorated-cookie${ya}
│ ${ya}• deluxe-golddinamo${ya}
│ ${ya}• deluxe-silver${ya}
│ ${ya}• double-exposure${ya}
│ ${ya}• dragon-fire${ya}
│ ${ya}• eroded-metal${ya} 
│ ${ya}• firework${ya}
│ ${ya}• fox-crossfire${ya}
│ ${ya}• fun-certify1${ya}
│ ${ya}• fun-certify2${ya}
│ ${ya}• futuristic${ya}
│ ${ya}• galaxy-effect2${ya}
│ ${ya}• galaxy-effect${ya}
│ ${ya}• galaxy-angel${ya}
│ ${ya}• galaxy-text${ya}
│ ${ya}• galaxy-text-3${ya}
│ ${ya}• gankk-league-of-kings${ya}
│ ${ya}• genji-overwatch${ya}
│ ${ya}• glossy${ya}
│ ${ya}• glossy-bluemetal${ya}
│ ${ya}• glossy-carbon${ya}
│ ${ya}• glossy-chrome${ya}
│ ${ya}• gold-avenger${ya}
│ ${ya}• gold-barcar${ya}
│ ${ya}• gold-batman${ya}
│ ${ya}• gold-fox${ya}
│ ${ya}• gold-bird2${ya}
│ ${ya}• gold-eagle${ya}
│ ${ya}• gold-effect${ya}
│ ${ya}• gold-glitter${ya}
│ ${ya}• gold-lion${ya}
│ ${ya}• gold-lion2${ya}
│ ${ya}• gold-star${ya}
│ ${ya}• gold-tiger${ya}
│ ${ya}• golden-letter${ya}
│ ${ya}• gr-crossfire${ya}
│ ${ya}• graffiti-color${ya}
│ ${ya}• graffiti-text3${ya}
│ ${ya}• graffiti-text5${ya}
│ ${ya}• graffiti-text8${ya}
│ ${ya}• graffiti-text4${ya}
│ ${ya}• heart-birthday${ya}
│ ${ya}• hanzo-overwatch${ya}
│ ${ya}• greenhorror${ya}
│ ${ya}• halloween-fire${ya}
│ ${ya}• green-brush${ya}
${ya}hero3-crossfire${ya}
│ ${ya}• heart-cups${ya}
│ ${ya}• holographic${ya}
│ ${ya}• light-text${ya}
│ ${ya}• lend-text${ya}
│ ${ya}• ledtext${ya}
│ ${ya}• layeredtext${ya}
│ ${ya}• lol-caitlyn${ya}
│ ${ya}• lol-ahri${ya}
│ ${ya}• logo-galaxy${ya}
│ ${ya}• lol-fizz${ya}
│ ${ya}• lol-ezreal-and-shen${ya}
│ ${ya}• lol-fiora${ya}
│ ${ya}• lol-draven${ya}
│ ${ya}• lol-jinx${ya}
│ ${ya}• lol-kalista${ya}
│ ${ya}• lol-khazix${ya}
│ ${ya}• lol-kogmaw${ya}
│ ${ya}• lol-leesin${ya}
│ ${ya}• lol-lux${ya}
│ ${ya}• lol-master-yi${ya}
│ ${ya}• lol-miss-fortunelol-nidalee${ya}
│ ${ya}• lol-quinn${ya}
│ ${ya}• lol-sona${ya}
│ ${ya}• lol-riven${ya}
│ ${ya}• lol-talon${ya}
│ ${ya}• lol-thresh${ya}
│ ${ya}• lol-vayne${ya}
│ ${ya}• machines-effect${ya}
│ ${ya}• lol-yasuo${ya}
│ ${ya}• lol-zed${ya}
│ ${ya}• lol-wukong${ya}
│ ${ya}• magic-text${ya}
│ ${ya}• mei-overwatch${ya}
│ ${ya}• matrix-text${ya}
│ ${ya}• magmatext${ya}
│ ${ya}• metal-lion-2${ya}
│ ${ya}• metal-headshot${ya}
│ ${ya}• metal-avenger${ya}
│ ${ya}• metal-real-madrid${ya}
│ ${ya}• metal-star${ya}
│ ${ya}• metal-superman${ya}
│ ${ya}• metal-text-effect${ya}
│ ${ya}• metallic-letter${ya}
│ ${ya}• metalic${ya}
│ ${ya}• metal-wolf-2${ya}
│ ${ya}• mganga-league-of-kings${ya}
│ ${ya}• miniontext${ya}
│ ${ya}• modern-gold-3${ya}
│ ${ya}• modern-gold-4${ya}
│ ${ya}• modern-gold-5-pro${ya}
│ ${ya}• modern-gold-green${ya}
│ ${ya}• modern-gold-purple${ya}
│ ${ya}• modern-gold-red${ya}
│ ${ya}• modern-gold-sliver${ya}
│ ${ya}• modern-goldred${ya}
│ ${ya}• neon${ya}
│ ${ya}• neon-2${ya}
│ ${ya}• neon-brightblue${ya}
│ ${ya}• neon-effects${ya}
│ ${ya}• neon-light-galaxy${ya}
│ ${ya}• neon-satin${ya}
│ ${ya}• neondevil${ya}
│ ${ya}• neonlight${ya}
│ ${ya}• neontext-light${ya}
│ ${ya}• paper-cut${ya}
│ ${ya}• paperart${ya}
│ ${ya}• rainbow-effect${ya}
│ ${ya}• reaper-overwatch${ya}
│ ${ya}• red-birthdaycake${ya}
│ ${ya}• redhot-metal${ya}
│ ${ya}• resht-league-of-kings${ya}
│ ${ya}• science${ya}
│ ${ya}• sfg-crossfire${ya}
│ ${ya}• sketch${ya}
│ ${ya}• wetglass${ya}
│ ${ya}• watercolor${ya}
│ ${ya}• water-effect${ya}
│ ${ya}• water-3d${ya}
│ ${ya}• violet-league-of-kings${ya}
│ ${ya}• snowtext${ya}
│ ${ya}• soldier-overwatch${ya}
│ ${ya}• sunlight-shadow${ya}
│ ${ya}• transformer${ya}
│ ${ya}• calkboard${ya}
│ ${ya}• airline${ya}
│ ${ya}• surfingboard${ya}
│ ${ya}• watercolor${ya}
│ ${ya}• neonwriting${ya}
│ ${ya}• arrowsigns${ya}
│ ${ya}• birthdaycake${ya}
│ ${ya}• glassbauble${ya}
│ ${ya}• footballplayer${ya}
│ ${ya}• ${prefix}tololserti${ya}
│ ${ya}• ${prefix}shadow${ya}
│ ${ya}• ${prefix}cup${ya}
│ ${ya}• ${prefix}cup1${ya}
│ ${ya}• ${prefix}romance${ya}
│ ${ya}• ${prefix}smoke${ya}
│ ${ya}• ${prefix}burnpaper${ya}
│ ${ya}• ${prefix}lovemessage${ya}
│ ${ya}• ${prefix}undergrass${ya}
│ ${ya}• ${prefix}love${ya}
│ ${ya}• ${prefix}coffe${ya}
│ ${ya}• ${prefix}woodheart${ya}
│ ${ya}• ${prefix}woodenboard${ya}
│ ${ya}• ${prefix}summer3d${ya}
│ ${ya}• ${prefix}wolfmetal${ya}
│ ${ya}• ${prefix}nature3d${ya}
│ ${ya}• ${prefix}underwater${ya}
│ ${ya}• ${prefix}golderrose${ya}
│ ${ya}• ${prefix}summernature${ya}
│ ${ya}• ${prefix}letterleaves${ya}
│ ${ya}• ${prefix}glowingneon${ya}
│ ${ya}• ${prefix}fallleaves${ya}
│ ${ya}• ${prefix}flamming${ya}
│ ${ya}• ${prefix}harrypotter${ya}
│ ${ya}• ${prefix}carvedwood${ya}
│ ${ya}• ${prefix}tiktokmaker${ya}
│ ${ya}• ${prefix}ktpmaker${ya}
│ ${ya}• ${prefix}arcade8bit${ya}
│ ${ya}• ${prefix}battlefield4${ya}
│ ${ya}• ${prefix}pubg${ya}
│ ${ya}• ${prefix}pornhub${ya}
│ ${ya}• ${prefix}glitch${ya}
│ ${ya}• ${prefix}avenger${ya}
│ ${ya}• ${prefix}space${ya}
│ ${ya}• ${prefix}ninjalogo${ya}
│ ${ya}• ${prefix}marvelstudio${ya}
│ ${ya}• ${prefix}lionlogo${ya}
│ ${ya}• ${prefix}wolflogo${ya}
│ ${ya}• ${prefix}steel3d${ya}
│ ${ya}• ${prefix}wallgravity${ya}
│ ${ya}• ${prefix}coolgravity${ya}
│ ${ya}• ${prefix}wetglass${ya}
│ ${ya}• ${prefix}multicolor3d${ya}
│ ${ya}• ${prefix}watercolor${ya}
│ ${ya}• ${prefix}luxurygold${ya}
│ ${ya}• ${prefix}galaxywallpaper${ya}
│ ${ya}• ${prefix}lighttext${ya}
│ ${ya}• ${prefix}beautifulflower${ya}
│ ${ya}• ${prefix}puppycute${ya}
│ ${ya}• ${prefix}royaltext${ya}
│ ${ya}• ${prefix}heartshaped${ya}
│ ${ya}• ${prefix}birthdaycake${ya}
│ ${ya}• ${prefix}galaxystyle${ya}
│ ${ya}• ${prefix}hologram3d${ya}
│ ${ya}• ${prefix}greenneon${ya}
│ ${ya}• ${prefix}glossychrome${ya}
│ ${ya}• ${prefix}greenbush${ya}
│ ${ya}• ${prefix}metallogo${ya}
│ ${ya}• ${prefix}noeltext${ya}
│ ${ya}• ${prefix}glittergold${ya}
│ ${ya}• ${prefix}textcake${ya}
│ ${ya}• ${prefix}starsnight${ya}
│ ${ya}• ${prefix}wooden3d${ya}
│ ${ya}• ${prefix}textbyname${ya}
│ ${ya}• ${prefix}writegalacy${ya}
│ ${ya}• ${prefix}galaxybat${ya}
│ ${ya}• ${prefix}snow3d${ya}
│ ${ya}• ${prefix}birthdayday${ya}
│ ${ya}• ${prefix}goldplaybutton${ya}
│ ${ya}• ${prefix}silverplaybutton${ya}
│ ${ya}• ${prefix}freefire${ya}
│ ${ya}• ${prefix}blackpink${ya}
│ ${ya}• ${prefix}neon${ya}
│ ${ya}• ${prefix}greenneon${ya}
│ ${ya}• ${prefix}advanceglow${ya}
│ ${ya}• ${prefix}futureneon${ya}
│ ${ya}• ${prefix}sandwriting${ya}
│ ${ya}• ${prefix}sandsummer${ya}
│ ${ya}• ${prefix}sandengraved${ya}
│ ${ya}• ${prefix}metaldark${ya}
│ ${ya}• ${prefix}neonlight${ya}
│ ${ya}• ${prefix}holographic${ya}
│ ${ya}• ${prefix}text1917${ya}
│ ${ya}• ${prefix}minion${ya}
│ ${ya}• ${prefix}deluxesilver${ya}
│ ${ya}• ${prefix}newyearcard${ya}
│ ${ya}• ${prefix}bloodfrosted${ya}
│ ${ya}• ${prefix}halloween${ya}
│ ${ya}• ${prefix}jokerlogo${ya}
│ ${ya}• ${prefix}fireworksparkle${ya}
│ ${ya}• ${prefix}natureleaves${ya}
│ ${ya}• ${prefix}bokeh${ya}
│ ${ya}• ${prefix}toxic${ya}
│ ${ya}• ${prefix}strawberry${ya}
│ ${ya}• ${prefix}box3d${ya}
│ ${ya}• ${prefix}roadwarning${ya}
│ ${ya}• ${prefix}breakwall${ya}
│ ${ya}• ${prefix}icecold${ya}
│ ${ya}• ${prefix}luxury${ya}
│ ${ya}• ${prefix}cloud${ya}
│ ${ya}• ${prefix}summersand${ya}
│ ${ya}• ${prefix}horrorblood${ya}
│ ${ya}• ${prefix}thunder${ya}
│ ${ya}• ${prefix}3dchristmas${ya}
│ ${ya}• ${prefix}3ddeepsea${ya}
│ ${ya}• ${prefix}americanflag${ya}
│ ${ya}• ${prefix}3dscifi${ya}
│ ${ya}• ${prefix}3drainbow${ya}
│ ${ya}• ${prefix}3dwaterpipe${ya}
│ ${ya}• ${prefix}halloweenskeleton${ya}
│ ${ya}• ${prefix}sketch${ya}
│ ${ya}• ${prefix}bluecircuit${ya}
│ ${ya}• ${prefix}space${ya}
│ ${ya}• ${prefix}metallic${ya}
│ ${ya}• ${prefix}fiction${ya}
│ ${ya}• ${prefix}greenhorror${ya}
│ ${ya}• ${prefix}transformer${ya}
│ ${ya}• ${prefix}berry${ya}
│ ${ya}• ${prefix}thunder${ya}
│ ${ya}• ${prefix}magma${ya}
│ ${ya}• ${prefix}3dcrackedstone${ya}
│ ${ya}• ${prefix}3dneonlight${ya}
│ ${ya}• ${prefix}impressiveglitch${ya}
│ ${ya}• ${prefix}naturalleaves${ya}
│ ${ya}• ${prefix}fireworksparkle${ya}
│ ${ya}• ${prefix}matrix${ya}
│ ${ya}• ${prefix}dropwater${ya}
│ ${ya}• ${prefix}harrypotter${ya}
│ ${ya}• ${prefix}foggywindow${ya}
│ ${ya}• ${prefix}neondevils${ya}
│ ${ya}• ${prefix}christmasholiday${ya}
│ ${ya}• ${prefix}3dgradient${ya}
│ ${ya}• ${prefix}gluetext${ya}
│ ${ya}• ${prefix}shadow${ya}
│ ${ya}• ${prefix}romantic${ya}
│ ${ya}• ${prefix}smoke${ya}
│ ${ya}• ${prefix}burnpapper${ya}
│ ${ya}• ${prefix}naruto${ya}
│ ${ya}• ${prefix}lovemsg${ya}
│ ${ya}• ${prefix}grassmsg${ya}
│ ${ya}• ${prefix}lovetext${ya}
│ ${ya}• ${prefix}coffecup${ya}
│ ${ya}• ${prefix}butterfly${ya}
│ ${ya}• ${prefix}harrypotter${ya}
│ ${ya}• ${prefix}retrolol${ya}
│ ${ya}• ${prefix}ffcover${ya}
│ ${ya}• ${prefix}crossfire${ya}
│ ${ya}• ${prefix}galaxy${ya}
│ ${ya}• ${prefix}glass${ya}
│ ${ya}• ${prefix}neon${ya}
│ ${ya}• ${prefix}beach${ya}
│ ${ya}• ${prefix}igcertificate${ya}
│ ${ya}• ${prefix}ytcertificate${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'photomenu':

await Dha.send5ButImg(from, `┌──[ ${ye}RANDOM FOTO${ye} ]
│ ${ya}• ${prefix}hentai${ya}
│ ${ya}• ${prefix}ahegao${ya}
│ ${ya}• ${prefix}ass${ya}
│ ${ya}• ${prefix}bdsm${ya}
│ ${ya}• ${prefix}cuckold${ya}
│ ${ya}• ${prefix}cum${ya}
│ ${ya}• ${prefix}ero${ya}
│ ${ya}• ${prefix}femdom${ya}
│ ${ya}• ${prefix}foot${ya}
│ ${ya}• ${prefix}gangbang${ya}
│ ${ya}• ${prefix}glasses${ya}
│ ${ya}• ${prefix}jahy${ya}
│ ${ya}• ${prefix}masturbation${ya}
│ ${ya}• ${prefix}orgy${ya}
│ ${ya}• ${prefix}panties${ya}
│ ${ya}• ${prefix}pussy${ya}
│ ${ya}• ${prefix}thighs${ya}
│ ${ya}• ${prefix}yuri${ya}
│ ${ya}• ${prefix}wallpaper${ya}
│ ${ya}• ${prefix}wallpapermeme${ya}
│ ${ya}• ${prefix}wallpaperprogamer${ya}
│ ${ya}• ${prefix}wallpapergamer${ya}
│ ${ya}• ${prefix}wallpaperanime${ya}
│ ${ya}• ${prefix}wallpaperteknologi${ya}
│ ${ya}• ${prefix}wallpapercyber${ya}
│ ${ya}• ${prefix}wallpaperinori${ya}
│ ${ya}• ${prefix}wallpaperislami${ya}
│ ${ya}• ${prefix}darkjokes${ya}
│ ${ya}• ${prefix}meme${ya}
│ ${ya}• ${prefix}hsdxd${ya}
│ ${ya}• ${prefix}sao${ya}
│ ${ya}• ${prefix}lovelive${ya}
│ ${ya}• ${prefix}pinterest${ya}
│ ${ya}• ${prefix}ppcouple${ya}
│ ${ya}• ${prefix}hijaber${ya}
│ ${ya}• ${prefix}cecan${ya}
│ ${ya}• ${prefix}cecan2${ya}
│ ${ya}• ${prefix}cogan${ya}
│ ${ya}• ${prefix}waifu${ya}
│ ${ya}• ${prefix}loli${ya}
│ ${ya}• ${prefix}megumin${ya}
│ ${ya}• ${prefix}shinobi${ya}
│ ${ya}• ${prefix}husbu${ya}
│ ${ya}• ${prefix}milf${ya}
│ ${ya}• ${prefix}foxgirl${ya}
│ ${ya}• ${prefix}cat${ya}
│ ${ya}• ${prefix}cosplay${ya}
│ ${ya}• ${prefix}wallml${ya}
│ ${ya}• ${prefix}art${ya}
│ ${ya}• ${prefix}bts${ya}
│ ${ya}• ${prefix}exo${ya}

└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'videomenu':

await Dha.send5ButImg(from, `┌──[ ${ye}RANDOM VIDEO${ye} ]
│ ${ya}• ${prefix}storyanime${ya}
│ ${ya}• ${prefix}asupan${ya}
│ ${ya}• ${prefix}asupan2${ya}
│ ${ya}• ${prefix}asupan3${ya}
│ ${ya}• ${prefix}bokep${ya}
│ ${ya}• ${prefix}bocil${ya}
│ ${ya}• ${prefix}santuy${ya}
│ ${ya}• ${prefix}ukhty${ya}
│ ${ya}• ${prefix}cecan${ya}
│ ${ya}• ${prefix}cecan-indo${ya}
│ ${ya}• ${prefix}cecan-jep${ya}
│ ${ya}• ${prefix}cecan-mal${ya}
│ ${ya}• ${prefix}cecan-tha${ya}
│ ${ya}• ${prefix}cecan-vie${ya}
│ ${ya}• ${prefix}cecan-chi${ya}
│ ${ya}• ${prefix}cecan-kor${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `DHA BOTZ MULTI DEVICE`,
                    description: `VERSION 1.2.3`,
                    buttonText: "SELECT MENU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Information Menu",
										"rowId": `${prefix}infomenu`
									},
									{
											"title": "Logo Dan Text Maker Menu",
										"rowId": `${prefix}logomenu`
										},
									{
										"title": "Primbon Menu",
							            "rowId": `${prefix}primbonmenu`
									},
										{
											"title": "Image Menu",
										 // //"description": "displays the list Of Image Features",
										"rowId": `${prefix}photomenu`
										},
										{
											"title": "Teks Menu",
										 // //"description": "displays the list Of Teks Features",
										"rowId": `${prefix}teksmenu`
										},
										{
											"title": "Grup Menu",
										 // //"description": "displays the list Of Grup Features",
										"rowId": `${prefix}grupmenu`
										},
										{
											"title": "Sticker Menu",
										 // //"description": "displays the list Of Sticker Features",
										"rowId": `${prefix}stickermenu`
										},
										{
											"title": "Anime Menu",
										 // //"description": "displays the list Of Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Games Menu",
										 // //"description": "displays the list Of Games Features",
										"rowId": `${prefix}gamemenu`
										},
										{
											"title": "Convert Menu",
										 //"description": "displays the list Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Other Menu",
										 //"description": "displays the list Of Other Features",
										"rowId": `${prefix}othermenu`
										},
										{
											"title": "Region Menu",
										 //"description": "displays the list Of Region Features",
										"rowId": `${prefix}regionmenu`
										},
										{
											"title": "Sound Menu",
										 //"description": "displays the list Of Sound Features",
										"rowId": `${prefix}soundmenu`
										},
										{
											"title": "Database Menu",
										 //"description": "displays the list Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Stalking Menu",
										 //"description": "displays the list Of Stalk Features",
										"rowId": `${prefix}stalkmenu`
										},
										{
											"title": "Download Menu",
										 //"description": "displays the list Of Download Features",
										"rowId": `${prefix}downloadmenu`
										},
										{
											"title": "Asupan Menu",
										 //"description": "displays the list Of Video Features",
										"rowId": `${prefix}videomenu`
										},
								]
							},
							{
								"title": "Chat with fellow users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										 //"description": "displays the list Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Owner",
								"rows": [
									{
										"title": "Owner Menu",
										 //"description": "displays the list Of Owner Features",
										"rowId": `${prefix}ownermenu`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'storemenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `MAU BELANJA APA KAK`,
                    description: `PILIH DISINI`,
                    buttonText: "SELECT STORE",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
									{
										"title": "DIAOMOND FREE FIRE",
										 //"description": "displays the list Of Diamond Free Fire",
										"rowId": `${prefix}idff`
									},
									{
										"title": "DIAMOND MOBILE LEGENDS",
										 //"description": "displays the list Of Diamond Mobile Legends",
										"rowId": `${prefix}idml`
									},
									{
											"title": "UC PUBG",
										 //"description": "displays the list Of UC PUBG",
										"rowId": `${prefix}idpubg`
										},
									{
										"title": "PULSA ALL OPERATOR",
										 //"description": "displays the list Of Pulsa All Operator",
										"rowId": `${prefix}pulsa`
									},
									{
										"title": "PAKET NELPON",
										 //"description": "displays the list Of Pulsa All Operator",
										"rowId": `${prefix}kartu`
									},
										{
											"title": "TOKEN LISTRIK",
										"rowId": `${prefix}idpln`
										}		
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

case 'idff':{
if (args.length == 0) return  replyNya(`Ketik IDFF IDMU\nCONTOH IDFF 1345834683`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST DIAMOND FREE FIRE`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT DIAMOND",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
									{
										"title": "70💎",
										"rowId": `${prefix}topupff ${txt1} 70dm 10.000`
									},
										{
										"title": "100💎",
										"rowId": `${prefix}topupff ${txt1} 100dm 15.000`
									},
										{
										"title": "120💎",
										"rowId": `${prefix}topupff ${txt1} 120dm 18.000`
									},
									
									{
										"title": "140💎",
										"rowId": `${prefix}topupff ${txt1} 140dm 20.000`
									},
										{
										"title": "180💎",
										"rowId": `${prefix}topupff ${txt1} 180dm 25.000`
									},
									
									{
									"title": "210💎",
									"rowId": `${prefix}topupff ${txt1} 210dm 30.000`
										},
								{
									"title": "280💎",
									"rowId": `${prefix}topupff ${txt1} 280dm 40.000`
										},
									{
									"title": "210💎",
									"rowId": `${prefix}topupff ${txt1} 300dm 42.000`
										},
										{
									"title": "355💎",
									"rowId": `${prefix}topupff ${txt1} 355dm 48.000`
										},
											{
										"title": "425💎",
										"rowId": `${prefix}topupff ${txt1} 425dm 60.000`
									},
										{
									"title": "720💎",
									"rowId": `${prefix}topupff ${txt1} 720dm 100.000`
										},
										{
									"title": "Member Mingguan",
									"rowId": `${prefix}topupff ${txt1} M.Mingguan 30.000`
										},
										{
									"title": "Member Bulanan",
									"rowId": `${prefix}topupff ${txt1} M.Bulanan 138.000`
										},
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'idml':{
if (args.length == 0) return  replyNya(`KETIK IDML ID/IDSERVERMU\nCONTOH IDML 84830127/2169`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST DIAMOND MOBILE LEGENDS`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT DIAMOND",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
										{
										"title": "59💎",
										"rowId": `${prefix}topupml ${txt1} 59dm 18.000`
									},
									
									{
									"title": "86💎",
									"rowId": `${prefix}topupml ${txt1} 86dm 23.000`
										},
									{
									"title": "172💎",
									"rowId": `${prefix}topupml ${txt1} 172dm 43.000`
										},
										{
									"title": "257💎",
									"rowId": `${prefix}topupml ${txt1} 257dm 63.000`
										},
											{
										"title": "344💎",
										"rowId": `${prefix}topupml ${txt1} 344dm 84.000`
									},
										{
									"title": "429💎",
									"rowId": `${prefix}topupml ${txt1} 429dm 104.000`
										},
										{
									"title": "Starlight Member",
									"rowId": `${prefix}topupml ${txt1} S.Member 130.000`
										},
										{
									"title": "Twilight Pass",
									"rowId": `${prefix}topupml ${txt1} T.Pass 130.000`
										},
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'idpubg':{
if (args.length == 0) return  replyNya(`KETIK IDPUBG IDMU\n CONTOH IDPUBG 5119961143`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST DIAMOND MOBILE LEGENDS`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT UC",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Bot Features",
								"rows": [
										{
										"title": "59💵",
										"rowId": `${prefix}topuppubg ${txt1} 59uc 10.000`
									},
									
									{
									"title": "70💵",
									"rowId": `${prefix}topuppubg ${txt1} 70uc 15.000`
										},
								{
									"title": "100💵",
									"rowId": `${prefix}topuppubg ${txt1} 100uc 20.000`
										},
									{
									"title": "150💵",
									"rowId": `${prefix}topuppubg ${txt1} 150uc 33.000`
										},
										{
									"title": "210💵",
									"rowId": `${prefix}topuppubg ${txt1} 210uc 43.000`
										},
											{
										"title": "250💵",
										"rowId": `${prefix}topuppubg ${txt1} 250uc 84.000`
									},
										{
									"title": "500💵",
									"rowId": `${prefix}topuppubg ${txt1} 500uc 93.000`
										},
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'idpln':{
if (args.length == 0) return  replyNya(`KETIK IDPLN IDPLNMU\nCONTOH IDPLN 181801003458`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST TOKEN LISTRIK`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT LISTRIK",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH TEGANGAN",
								"rows": [
									{
										"title": "TOKEN 20.000",
										"rowId": `${prefix}topuplistrik ${txt1} 20.000 22.000`
									},
										{
										"title": "TOKEN 50.000",
										"rowId": `${prefix}topuplistrik ${txt1} 50.000 52.000`
									},
										{
										"title": "TOKEN 100.000",
										"rowId": `${prefix}topuplistrik ${txt1} 100.000 102.000`
									},
									
									{
										"title": "TOKEN 200.000",
										"rowId": `${prefix}topuplistrik ${txt1} 200.000 202.000`
									},
										{
										"title": "TOKEN 500.000",
										"rowId": `${prefix}topuplistrik ${txt1} 500.000 502.000`
									},																	
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'kartu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `••••••••••••••••`,
                    description: `PILIH DISINI`,
                    buttonText: "SELECT KARTU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "ALL KARTU",
								"rows": [
									{
										"title": "XL",
										 //"description": "displays the list Of Diamond Free Fire",
										"rowId": `${prefix}xl`
									},
									{
										"title": "TELKOMSEL",
										 //"description": "displays the list Of Diamond Mobile Legends",
										"rowId": `${prefix}telkomsel`
									},
									{
											"title": "TRI",
										 //"description": "displays the list Of UC PUBG",
										"rowId": `${prefix}tri`
										},
									{
										"title": "INDOSAT",
										 //"description": "displays the list Of Pulsa All Operator",
										"rowId": `${prefix}indosat`
									},
									{
										"title": "AXIS",
										 //"description": "displays the list Of Pulsa All Operator",
										"rowId": `${prefix}axis`
									}	
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'xl':{
if (args.length == 0) return  replyNya(`KETIK XL NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON XL`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
									{
										"title": "350Mnt + 50Mnt All Opt",
										"rowId": `${prefix}topupnelpon ${txt1} 350Mnt+50MntAllOpt 7hari 12.000`
									},
										{
										"title": "200Mnt",
										"rowId": `${prefix}topupnelpon ${txt1} 200Mnt 14hari 16.000`
									},
										{
										"title": "200Mnt + 400 SMS",
										"rowId": `${prefix}topupnelpon ${txt1} 200Mnt+400SMS 30hari 36.000`
									},
										{
										"title": "500Mnt",
										"rowId": `${prefix}topupnelpon ${txt1} 500Mnt 30hari 36.000`
									},																				
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'telkomsel':{
if (args.length == 0) return  replyNya(`KETIK TELKOMSEL NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON TELKOMSEL`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
									{
										"title": "PAKET NELPON 10RB",
										"rowId": `${prefix}topupnelpon ${txt1} 10Rb 3hari 12.000`
									},
										{
										"title": "PAKET NELPON 20RB",
										"rowId": `${prefix}topupnelpon ${txt1} 20Rb 7hari 22.000`
									},
										{
										"title": "PAKET NELPON 25RB",
										"rowId": `${prefix}topupnelpon ${txt1} 25Rb 7hari 27.000`
									},
										{
										"title": "PAKET NELPON 50RB",
										"rowId": `${prefix}topupnelpon ${txt1} 50Rb 30hari 55.000`
									},
										{
										"title": "PAKET NELPON 100RB",
										"rowId": `${prefix}topupnelpon ${txt1} 100Rb 30hari 102.000`
									},																																
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'axis':{
if (args.length == 0) return  replyNya(`KETIK AXIS NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON AXIS`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
									{
										"title": "PAKET NELPON 30MNT ALL",
										"rowId": `${prefix}topupnelpon ${txt1} 30Mnt 7hari 10.000`
									},
										{
										"title": "PAKET NELPON 100MNT ALL",
										"rowId": `${prefix}topupnelpon ${txt1} 100Mnt 30hari 25.000`
									},																																								
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'axis':{
if (args.length == 0) return  replyNya(`KETIK AXIS NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON AXIS`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
									{
										"title": "PAKET NELPON 60MNT ALL",
										"rowId": `${prefix}topupnelpon ${txt1} 60Mnt 30hari 17.000`
									},
										{
										"title": "PAKET NELPON 150MNT ALL",
										"rowId": `${prefix}topupnelpon ${txt1} 150Mnt 30hari 31.000`
									},																																								
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'indosat':{
if (args.length == 0) return  replyNya(`KETIK INDOSAT NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON INDOSAT`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
									{
										"title": "PAKET NELPON ULIMITED",
										"rowId": `${prefix}topupnelpon ${txt1} Takterbatas 30hari 12.000`
									},
										{
										"title": "PAKET NELPON 30MNT ALL OPT + UNLIMITED",
										"rowId": `${prefix}topupnelpon ${txt1} 30mnt+takterbatas 7hari 18.000`
									},
										{
										"title": "PAKET NELPON 60MNT ALL OPT + UNLIMITED",
										"rowId": `${prefix}topupnelpon ${txt1} 60mnt+takterbatas 7hari 27.000`
									},
										{
										"title": "PAKET NELPON 60MNT ALL OPT + UNLIMITED",
										"rowId": `${prefix}topupnelpon ${txt1} 250mnt+takterbatas 30hari 52.000`
									},																															
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'tri':{
if (args.length == 0) return  replyNya(`KETIK TRI NOMORMU`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PAKET NELPON TRI`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PAKET NELPON",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PAKET",
								"rows": [
										{
										"title": "PAKET NELPON 20MNT ALL OPT",
										"rowId": `${prefix}topupnelpon ${txt1} 20mnt 7hari 8.000`
									},
										{
										"title": "PAKET NELPON 60MNT ALL OPT",
										"rowId": `${prefix}topupnelpon ${txt1} 60mnt 30hari 17.000`
									},
										{
										"title": "PAKET NELPON 150MNT ALL OPT",
										"rowId": `${prefix}topupnelpon ${txt1} 150mnt 30hari 32.000`
									},																															
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'pulsa':{
if (args.length == 0) return  replyNya(`KETIK PULSA NOMORMU\nCONTOH PULSA 082287486762`)
txt1 = args[0]
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `LIST PULSA ALL OPERATOR`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT PULSA",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH PULSA",
								"rows": [
									{
										"title": "PULSA 5.000",
										"rowId": `${prefix}topuppulsa ${txt1} 5.000 7.000`
									},
										{
										"title": "PULSA 10.000",
										"rowId": `${prefix}topuppulsa ${txt1} 10.000 12.000`
									},
										{
										"title": "PULSA 15.000",
										"rowId": `${prefix}topuppulsa ${txt1} 15.000 17.000`
									},
									
									{
										"title": "PULSA 20.000",
										"rowId": `${prefix}topuppulsa ${txt1} 20.000 22.000`
									},
										{
										"title": "PULSA 25.000",
										"rowId": `${prefix}topuppulsa ${txt1} 25.000 27.000`
									},						
									{
										"title": "PULSA 30.000",
										"rowId": `${prefix}topuppulsa ${txt1} 30.000 32.000`
									},
									{
										"title": "PULSA 35.000",
										"rowId": `${prefix}topuppulsa ${txt1} 35.000 37.000`
									},							
									{
										"title": "PULSA 40.000",
										"rowId": `${prefix}topuppulsa ${txt1} 40.000 42.000`
									},								
									{
										"title": "PULSA 45.000",
										"rowId": `${prefix}topuppulsa ${txt1} 45.000 47.000`
									},								
									{
										"title": "PULSA 50.000",
										"rowId": `${prefix}topuppulsa ${txt1} 50.000 52.000`
									},			
									{
										"title": "PULSA 55.000",
										"rowId": `${prefix}topuppulsa ${txt1} 55.000 57.000`
									},			
									{
										"title": "PULSA 60.000",
										"rowId": `${prefix}topuppulsa ${txt1} 60.000 62.000`
									},			
									{
										"title": "PULSA 65.000",
										"rowId": `${prefix}topuppulsa ${txt1} 65.000 67.000`
									},			
									{
										"title": "PULSA 70.000",
										"rowId": `${prefix}topuppulsa ${txt1} 70.000 72.000`
									},			
									{
										"title": "PULSA 75.000",
										"rowId": `${prefix}topuppulsa ${txt1} 75.000 77.000`
									},			
									{
										"title": "PULSA 80.000",
										"rowId": `${prefix}topuppulsa ${txt1} 80.000 82.000`
									},			
									{
										"title": "PULSA 85.000",
										"rowId": `${prefix}topuppulsa ${txt1} 85.000 87.000`
									},			
									{
										"title": "PULSA 90.000",
										"rowId": `${prefix}topuppulsa ${txt1} 90.000 92.000`
									},			
									{
										"title": "PULSA 95.000",
										"rowId": `${prefix}topuppulsa ${txt1} 95.000 97.000`
									},			
									{
										"title": "PULSA 100.000",
										"rowId": `${prefix}topuppulsa ${txt1} 100.000 102.000`
									},			
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'done':
replyTemplate('TERIMAKASIH SILAHKAN BERI PENILAIAN')
break
case 'wtk':
replyNya('SABAR YA BOTNYA SEDANG MEMERIKSA JIKA SUDAH MASUK KATAKAN DONE')
break
case 'wts':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `PENILAIN MENURUTMU`,
                    description: `____ ______ ____ ___`,
                    buttonText: "SELECT NILAI",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "PILIH BINTANG",
								"rows": [
									{
										"title": "⭐",
										"rowId": `b`
									},
										{
										"title": "⭐⭐",
										"rowId": `bb`
									},
										{
										"title": "⭐⭐⭐",
										"rowId": `bbb`
									},
									
									{
										"title": "⭐⭐⭐⭐",
										"rowId": `bbbb`
									},
										{
										"title": "⭐⭐⭐⭐⭐",
										"rowId": `bbbbb`
									},																	
						]				
							}											
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case'b':
replyOwnerr('TERIMAKASIH ATAS PENILAIAN DENGAN 1 BINTANG\nJIKA ADA MASUKAN YANG INGIN DISAMPAIKAN KETIK ULASAN')
break
 case'bb':
 replyOwnerr('TERIMAKASIH ATAS PENILAIAN DENGAN 2 BINTANG\nJIKA ADA MASUKAN YANG INGIN DISAMPAIKAN KETIK ULASAN')
 break
  case'bbb':
  replyOwnerr('TERIMAKASIH ATAS PENILAIAN DENGAN 3 BINTANG\nJIKA ADA MASUKAN YANG INGIN DISAMPAIKAN KETIK ULASAN')
  break
   case'bbbb':
   replyOwnerr('TERIMAKASIH ATAS PENILAIAN DENGAN 4 BINTANG\nJIKA ADA MASUKAN YANG INGIN DISAMPAIKAN KETIK ULASAN')
   break
    case'bbbbb':
    replyOwnerr('TERIMAKASIH ATAS PENILAIAN DENGAN 5 BINTANG\nJIKA ADA MASUKAN YANG INGIN DISAMPAIKAN KETIK ULASAN')
break
case 'hackff':{
if (args.length == 0) return  replyNya(`${prefix + command} ID FF YG MAU DI HACK`)
txt1 = args[0]
  txt2 = args[1]
  txt3 = args[2]
replyNya(`Sedang Mengunduh Dan Memindah Kan Akun Ke email Yang Telah Tersedia Email Dan Sandi Akun Tersebut`)		
const ov = ['Email: rendy_abyss@gmail.com - Password: rendy@14','Email: dinda-dewi11@gmail.com - Password: dinda11','Email: vanda208@gmail.com - Password: shahrukh','Email: wawanfold7@gmail.com - Password: indrafqo','Email: amitsharma.07821@gmail.com - Password: anjeeta_sharma','Email: thendychandra@gmail.com - Password: 01.192.05.0000','Email: Isaias.madriz@yahoo.com -Password: isa8as17']
const tenr = ov[Math.floor(Math.random() * ov.length)]
let anu = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${txt1}?apikey=${lolkey}`)
dnten = `ID FF : ${txt1}\nUsername : ${anu.result}\nHasil : ${tenr}`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./image/hack.jpg') }, { upload: Dha.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: dnten,
hydratedFooterText: Dha.user.name,
hydratedButtons: [
{
urlButton: {
displayText: 'Dha Hangker Tzy',
url: 'https://wa.me/6282287486762'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break


            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyNya(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return replyNya(bang)
                    }
                    try {
                        replyNya(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyNya(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyNya(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyNya(evaled)
                    } catch (err) {
                        await replyNya(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return replyNya(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return replyNya(err)
                        if (stdout) return replyNya(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    Dha.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
