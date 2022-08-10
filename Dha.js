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
const hx = require("hxz-api")
const maker = require('mumaker')
const bocil = require('@bochilteam/scraper') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'));
const textpro = require('./lib/textpro')
const _sewa = require('./lib/sewa')
const { niatsholat, 
asmaulhusna,  
bacaanshalat, 
getDoujin, 
onGoing, 
kusoNime,
ffstalk, 
npmstalk, 
quotesanime, 
pornovid, 
hentaivid, 
nomorhp, 
character, 
anime, 
manga, 
searchsticker, 
igstalk, 
igfoto, 
igvideo, 
listsurah, 
jadwalsholat, 
telesticker, 
aiovideodl, 
linkwa,
mediafiredl } = require('./lib/scrape')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api");
const xfar = require('xfarr-api');
const bdr = require('rumus-bdr')
const { wikimedia } = require('./lib/scraper')
const { DhaBotTiktok } = require('./lib/tiktokbyDha');
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
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
        const isAutoStick = _autostick.includes(from)
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
                if (!('antitoxic' in chats)) chats.antitoxic = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: true,
                antitoxic: false,
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
            Dha.readMessages([m.key])
            Dha.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        
	const totalFitur = () =>{
var mytext = fs.readFileSync("./Dha.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
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
		await Dha.setStatus(`${Dha.user.name} | Runtime :  ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        replyNya(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link, maaf kamu akan di kick !`)
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
//gabutan
				if (budy === 'Assalamualaikum'){
					result = fs.readFileSync(`./image/Assalamualaikum.mp3`)
					Dha.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
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

//Replynya        
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
async function Adminchip(teks) {
                       const buttonsDefault = [
	             		{ urlButton: { displayText: `VAVE STORE CHIP`, url : `https://wa.me/+62812-9438-9989` } }
                                        	  ]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "© YUDHA PERDANA", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: thumb}                                   
                                               }
                       return Dha.sendMessage(from, buttonMessage)
                }

 //NGETIK Lihat Online
	Dha.sendPresenceUpdate('composing', m.chat)
	Dha.sendPresenceUpdate('available', from)
//AUTOSTICKER	
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
//AUTOSTICKERPC
if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await Dha.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await Dha.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }                
        switch(command) {
case 'p': case 'P':{
replyNye(`Budayakan Ucap Salam Kak ${pushname} Jangan Pa Pe Pa Pe`)
}        
break
case'bot':
reply(`Jika Butuh Bantuan Bot Tekan Tombol Di bawah`)
break
case'terimakasih':
replyNye(`Sama Sama Kak ${pushname}`)
break
//////////////BATAS GAME MENU//////////)	    
        case 'ttc': case 'ttt': case 'tictactoe': {
        
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
	    case 'family100': {
	    
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
            case 'tebak': {
            
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                
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
case 'dare':

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
///////// GABUTAN DALAM GRUP//////////
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
                        { buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
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

case 'cantikcek':
case 'pakboycek':
case 'pakgirlcek':
case 'gantengcek':   
case 'sangecek':
    case 'gaycek':
        case 'lesbicek':
       case 'begocek':
       case 'suhucek':
       case 'jagocek':
       case 'pintercek':
       case 'nolepcek':
       case 'babicek':
       case 'jahatcek':
       case 'bebancek':
				if (!q) return replyNya(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
Dha.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
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
case 'maticek':
              if (!q) return replyNya(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              replyNya(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break                    
/////////////////BATAS GROUP/////////
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                	if (!text) throw ('Masukan nomor nya dengan awalan 628⁩')
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'promote': {	
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Dha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replyNya(jsonformat(res))).catch((err) => replyNya(jsonformat(err)))
	}
	break
	    case 'setnamegc': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Dha.groupUpdateSubject(m.chat, text).then((res) => replyNya(mess.success)).catch((err) => replyNya(jsonformat(err)))
            }
            break
          case 'setdescgc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await Dha.groupUpdateDescription(m.chat, text).then((res) => replyNya(mess.success)).catch((err) => replyNya(jsonformat(err)))
            }
            break
case 'afk': {
if (!m.isGroup) throw mess.group
if (!text) throw 'Text ?'
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replyNya(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
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
case 'revoke': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
Dha.groupRevokeInvite(m.chat)
}
break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return replyNya(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                replyNya(`Aktif Kak`)
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
   
//=======BATAS STIKER ANIME
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
 case 'trap':case 'blowjob':
 	        
 	        					replyNya(mess.wait)
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
	        
		replyNya(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
Dha.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
//////////////BATAS CONVERTS //////////
case 'wasted': case 'joke': case 'hitler': case 'wanted': case 'greyscale': case 'trash': case 'cicle': case 'blur': case 'sepia': case 'invert': case 'affect': case 'picture': {
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto`)
m.reply(mess.wait)
mee = await Dha.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://leyscoders-api.herokuapp.com/api/img/${command}?url=${mem}&apikey=IkyOgiwara`
memek = await Dha.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'attp': case 'ttp': {
if (!text) throw `Example : ${prefix + command} text`
await Dha.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'YUDHA', 'PUNYA', m, {asSticker: true})
}
break

            case 'sticker': case'stiker': case 's': case 'stickergif': case 'sgif': {
            
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
	        if (!text) return replyNya(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
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
            	                    if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            replyNya(eb)
        }
        break
            case 'dbinary': {
            	                    if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            replyNya(db)
        }
        break
case 'emojimix': {

if (!text) return replyNya(`Contoh : ${prefix + command} 😅`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await Dha.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
            case 'emojimix2': {
            
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
////////BATAS SEARCH MENU//////////////
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
            case 'pinterest': {
            
                replyNya(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                Dha.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
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
/////////////////BATAS DOWNLOADER/////////////////
case 'mediafire': {
        if(!text) return reply(`Masukkan yang ingin dicari\n*Contoh :* ${prefix+command} https://www.mediafire.com/file/n2cbrerhd2rug6s/libwebp-1.2.1-windows-x64.rar/file`)
    try {
        let { mediafire } = require('./lib/mediafire.js')
        let res = await mediafire(text)
        for (let i of res ){
        await Dha.sendMessage(m.chat, {document: { url: i.link}, mimetype: 'application', fileName: i.filename}, {quoted: m})
    }
    } catch(e) {
        console.log(e)
        reply('Link Error')
        }
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
case 'tiktok':{
  	
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await DhaBotTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Dhatiktokop = musim_rambutan.result.watermark
texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'No Watermark ❌'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: {url:Dhatiktokop},
caption: texttk,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: thumb,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
Dha.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  	  
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await DhaBotTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Dhaytiktoknowm = musim_rambutan.result.nowatermark
    Dha.sendMessage(from, { video: { url: Dhaytiktoknowm }, caption: "Here you go!" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
  		
  if (!q) return reply('Where is the audio?')
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await DhaBotTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Dhaytiktokaudio = musim_rambutan.result.nowatermark
    Dha.sendMessage(from, { audio: { url: Dhaytiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'igstory': case 'instagramstory': case 'instagramstory2': {
  	
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory yudha_perdana809`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            Dha.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                Dha.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  Dha.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Maaf nama pengguna ${text} Tidak Membuat igstory atau mungkin ${text} memprivasi akunnya`))
            }	
			break  
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
  	
  if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${global.themeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${global.themeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:thumb,
jpegThumbnail:thumb,
caption: textbv,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
Dha.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'ig': {
	  	
  if (args[0] === "mp4") {
Dha.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
Dha.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply("Error! ")
}
}
break		
/////////////////BATAS Maker MENU//////////////
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
             replyNye(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                Dha.sendMessage(m.chat, { image: { url: anu }, caption: `_By_ *${global.ownername}*` }, { quoted: m })
             }
             break

////////////BATAS IMAGE ////////////
case "darkjoke":
var res = await Darkjokes()
teks = "\n*Darkjoke*"
Dha.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
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
hydratedContentText: `Meme`,
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
case 'wallislami':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallinori':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallcyber':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallteknologi':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallanime':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallgamer':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallprogamer':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallmeme':{
	        
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
case 'wallmountain':{
replyNya(mess.wait)
let eek = await fetchJson(`https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`)
let random = eek[Math.floor(Math.random() * eek.length)]
Dha.sendMessage(m.chat, { image: { url: random }, caption: `Nih Kak` }, { quoted: m })
}
break
////////////BATAS ANIME//////////
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
	    	    	        // -1 limit
                replyNya(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Dha.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Dha.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
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
//////// BATAS TEKS 
case 'kisahnabi': {
m.reply(mess.wait)
var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nabi?q=${text}&apikey=IkyOgiwara`)
var captnya = `
あTitle : ${data.result.nabi}
あThumbnail : ${data.result.lahir}
あDesc : ${data.result.umur}
あStory : ${data.result.tempat}
あTitle : ${data.result.kisah}\n`
Dha.sendMessage(m.chat, {caption: captnya, image: { url: data.result.image }}, {quoted: m })
}
break
case "quotes":
var res = await Quotes()
teks = "══════════════════"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "══════════════════"
reply(teks)
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
case 'style': case 'styletext': {
	        
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
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':

            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            replyNya(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
              	        
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

 ///////////////////BATAS PRIMBON MENU//////////////
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
            case 'pernikahan': case 'jadiannikah': {
            
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
case 'igstalk':{

if (!q) return reply(`Contoh ${prefix+command} Dhabotzx`)
aj = await igstalk(`${q}`)
Dha.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{

if (!q) return replyNye(`Contoh ${prefix+command} 946716486`)
eeh = await ffstalk(`${q}`)
replyNye(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'ghstalk':{

if (!q) return replyNye(`Contoh ${prefix+command} KirBotz`)
hw = await fetchJson(`https://api.github.com/users/${q}`)
Dha.sendMessage(m.chat, { image: { url: hw.avatar_url }, caption: 
`*/ Stalking Github \\*

Name : ${hw.login}
Id : ${hw.id}
Node Id : ${hw.node_id}
Avatar Url : ${hw.avatar_url}
Gravatar Id : ${hw.gravatar_id}
Url : ${hw.url}
Url2 : ${hw.html_url}
Followers Url : ${hw.followers_url}
Following Url : ${hw.following_url}
Gists Url : ${hw.gists_url}
Starred Url : ${hw.starred_url}
Subscriptions Url : ${hw.subscriptions_url}
Organizations Url : ${hw.organizations_url}
Repos Url : ${hw.repos_url}
Events Url : ${hw.events_url}
Received Events Url : ${hw.received_events_url}
Type : ${hw.type}
Site Admin : ${hw.site_admin}
Name : ${hw.name}
Company : ${hw.company}
Blog : ${hw.blog}
Location : ${hw.location}
Email : ${hw.email}
Hireable : ${hw.hireable}
Bio : ${hw.bio}
Twitter Username : ${hw.twitter_username}
Public Repos : ${hw.public_repos}
Public Gists : ${hw.public_gists}
Followers : ${hw.followers}
Following : ${hw.following}
Created At : ${hw.created_at}
Updated At : ${hw.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{

if (!q) return replyNye(`Contoh ${prefix+command} @adiwajshing/baileys`)
eha = await npmstalk(`${q}`)
replyNye(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break

////////////////////BATAS ISLAMI//////////////
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
ibnu-majah
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
m.reply(mess.wait)
let res = await fetchJson(`https://api.violetics.pw/api/religion/asmaulhusna?apikey=beta`)
let capt = `あ Asmaul Husna\n\n`
for (let i of res.result){
capt += `あ Number: ${i.index}\n`           
capt += `あ Latin: ${i.latin}\n`      
capt += `あ Arab: ${i.arabic}\n`      
capt += `あ Indonesia: ${i.translation_id}\n`      
 capt += `あ English: ${i.translation_en}\n\n──────────────────────\n`
}
m.reply(capt)
}
break
case 'doaharian': 
m.reply(mess.wait)
var data = await fetchJson(`https://api.violetics.pw/api/religion/doa-harian?apikey=beta`)
var captnya = `Doa Harian\n
あName : ${data.result.surah}
あUrl : ${data.result.arab}
あRating : ${data.result.latin}`
m.reply(captnya)
break
///////////////////// BATAS DATA BASE //////////
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
  if (!m.quoted) return replyNye('*Reply Message!*')
  if (!text) return replyNye(`*Contoh : ${prefix + command} FileName*`)
  let msgs = global.db.data.database
  if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
  msgs[text.toLowerCase()] = quoted.fakeObj
  let buttons = [
      {buttonId: `${prefix}listmsg`, buttonText: {displayText: 'List Message'}, type: 1}
  ]
  let buttonMessage = {
  document: global.thumb,
  fileName: Dha.user.bot,
  mimetype: 'application/docx',
  fileLength: 0,
  jpegThumbnail: global.thumb,
  caption: `Sukses Menambah List Pesan Sebagai : *${text}*\n\nAkses dengan ${prefix}getmsg ${text}\nAtau Klik Tombol Dibawah\n\nLihat List Pesan Dengan ${prefix}listmsg`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4,
  contextInfo:{forwardingScore: 999999, isForwarded: true, externalAdReply: {title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnailUrl: ``, thumbnail: global.thumb, sourceUrl: global.linkgc}}
  }
  Dha.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
case 'getmsg': {
  if (!text) return replyNye(`*Contoh : ${prefix + command} FileName\n\nLihat list pesan dengan ${prefix}listmsg*`)
  let msgs = global.db.data.database
  if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
  Dha.copyNForward(m.chat, msgs[text.toLowerCase()], true)
  }
  break
case 'listmsg': case 'listmess': case 'listmes': case 'listmessage': {
  try {
  let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
  let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
  listMsgs = []
  for (let i of seplit) {
  listMsgs.push({title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
  }
  const sections = [
  {title: "Total Message " + seplit.length, rows: listMsgs}
  ]
  const listMessage = {
  text: "Silahkan Klik Dibawah, Untuh Melihat List Respon Message",
  footer: global.ownerName,
  title: "「 List Respon Message 」",
  buttonText: "List Message",
  sections,
  contextInfo:{forwardingScore: 999999, isForwarded: true, externalAdReply: {title: `Hai ${pushname}`, body: `${wib}`, previewType: "PHOTO", thumbnailUrl: ``, thumbnail: global.thumb, sourceUrl: global.linkgc}}
  }
  Dha.sendMessage(m.chat, listMessage, {quoted: m})
  } catch {
  replyNye(`Belum ada respon message yang ditambahkan dalam list`)
  }
  }
  break

/////////////// BATAS ANONYMOUS CHAT //////////
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
///////////////// BATAS OTHER MENU//////////////  
case 'wikimedia': {
            	        
                if (!text) throw 'Masukkan Query Title'		
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
 case 'ssweb':{
if(!q) return m.reply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return replyNye("Link error");
if (args.length < 1) return m.reply('Urlnya mana om')
let teks = q
let ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
let buff = await getBuffer(ana.screenshot)
await Dha.sendMessage(from, {caption : `Link: ${teks}`, image: buff}, {quoted: m})
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
////////// BATAS INFOMASI
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
    case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                Dha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
  case 'like': {
  
     Dha.sendMessage(from, { react: { text: `👍`, key: m.key }})
     }
            break    
   case 'dislike': {
  
     Dha.sendMessage(from, { react: { text: `👎`, key: m.key }})
     }
            break             
    case 'read': {
  
     Dha.sendMessage(from, { react: { text: `👁️`, key: m.key }})
     }
            break            
 case 'hati': case'super': {
  
     Dha.sendMessage(from, { react: { text: `❤️`, key: m.key }})
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
let teks = `     「 Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await Dha.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
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
//==========>>>>>>>>> BATAS PELAJAR

case 'luassegitiga':
if (!q) return replyNye(`${prefix}luassegitiga 2 7`)
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
replyNye(`*Results:* ${luasseg}\n${caraluas}`)
} catch (err) {
replyNye('The format of the message is wrong')
}
break
case 'kelilingsegitiga':
if (!q) return replyNye(`Example: ${prefix}kelilingsegitiga 32 10 8`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
replyNye(`*Results:* ${kelsegitiga}\n*Formula:* ${carakel}`)
} catch (err) {
replyNye('The format of the message is wrong')
}
break
case 'luaspersegi':
if (!q) return replyNye(`Example: ${prefix}luaspersegi 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
replyNye(`*Results:* ${luaspersegi}\n*Formula:* ${luaspersegis}`) 
} catch (err) {
replyNye('The format of the message is wrong') 
}
break

case 'kelilingpersegi':
if (!q) return replyNye(`Example: ${prefix}keliling persegi 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
replyNye(`*Results:* ${persegi}\n*Formula:* ${caraPersegi}`) 
} catch (err) {
replyNye('The format of the message is wrong') 
}
break
case 'kubus':
if (!q) return replyNye(`Example: ${prefix}kubus 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
replyNye(`*Results:* ${kuadrat}`) 
} catch (err) {
replyNye('The format of the message is wrong') 
}
break
case 'kubik':
if (!q) return replyNye(`Untuk mencari sebuah Hasil Kubik\nExample: ${prefix}cubic 9`) 
try {
const kubik = bdr.rdb.kubik(q)
replyNye(`*Results:* ${kubik}`) 
} catch (err) {
replyNye('The format of the message is wrong') 
}
break
////////////// BATASA CREATOR MENU /////////////
case 'autostickerpc':
if (!isCreator) return replyNya(mess.owner)
if (args.length < 1) return replyNya('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return replyNya(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replyNya('autosticker pc activated')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replyNya('autosticker pc deactivated')
}
break
case 'sendsession':
if (!isCreator) return replyNye(mess.owner)
anuu = fs.readFileSync('./Dhabotz.json')
Dha.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `Dhabotz.json`}, {quoted:m})
break

case 'getcase':
if (!isCreator) return replyNye(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Dha.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replyNya(`${getCase(q)}`)
break
case 'get':
if (!isCreator) throw mess.owner
if (!q) return replyNye("linknya?")
fetch(`${args[0]}`)
.then((res) => res.text())
.then((bu) => {
m.reply(bu)
})
break
case 'addowner':
if (!isCreator) throw mess.owner
if (!args[0]) return replyNye(`Contoh ${prefix+command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyNye(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (!isCreator) throw mess.owner
if (!args[0]) return replyNye(`Contoh ${prefix+command} 628×××××`)
yuu = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyNye(`Nomor ${yuu} Telah Di Hapus Owner!!!`)
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
            case 'creategc':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Example* : #creategc namagroup`)
let cret = await Dha.groupCreate(args.join(" "), [])
let response = await Dha.groupInviteCode(cret.id)
teks = `*Create Groups*

⫹⫺Name : ${cret.subject}
⫹⫺Owner : @${cret.owner.split("@")[0]}
⫹⫺Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
⫹⫺Link Groups: https://chat.whatsapp.com/${response}`
m.reply(teks)
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
case 'kirimpesan': {
if (!isCreator) return replyNye(mess.owner)
if (!args.join(" ")) return replyNye(`Example :\n${prefix + command} 916909xxxxxx|Hi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT |*

Message from owner of bot
Number : @${m.sender.split("@")[0]}
Message : ${pesny}`
Dha.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await replyNye("Success")
break            
case 'join': {
   if (!isCreator) throw mess.owner
if (!args[0]) return replyNye(`Where's the link?`)
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return replyNye("Link invalid!")
if (isCreator) {
await Dha.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
replyNye("Succes!")
} else {
Dha.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 2) {
teks = `Sorry, your group members are less than 2, at least for a bot to join you must have more than 2 members`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./DhaMedia/theme/cheemsthumb.jpg'), `${global.watermark}`, `${global.botname}`, " 6282287486762@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await Dha.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
replyNye("Succes!")
} else {
replyNye("Error")
}
}).catch(_ => _)
}
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
case 'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| Pesan Dari Creator |*

Pesan : ${pesny}`
Dha.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
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
//////////////BATASS ASUPAN MENU/////////////BATAS
case 'asupan': case 'asupan3': case 'asupan2':{
	        
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

case 'ukhty':{
	        
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


case 'cecan':{

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
case 'bayar':{
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
case 'help': case 'menu':{
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
➥ ${ya}Total Vitur${ya} : ${totalFitur()}
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
│ ${ya} ${Yy+=1} ${prefix}menu${ya}
│ ${ya} ${Yy+=1} ${prefix}help${ya}
│ ${ya} ${Yy+=1} ${prefix}speedtest${ya}
│ ${ya} ${Yy+=1} ${prefix}ping${ya}
│ ${ya} ${Yy+=1} ${prefix}runtime${ya}
│ ${ya} ${Yy+=1} ${prefix}owner${ya}
│ ${ya} ${Yy+=1} ${prefix}delete${ya}
│ ${ya} ${Yy+=1} ${prefix}quoted${ya}
│ ${ya} ${Yy+=1} ${prefix}listpc${ya}
│ ${ya} ${Yy+=1} ${prefix}listgc${ya}
│ ${ya} ${Yy+=1} ${prefix}listonline${ya}
│ ${ya} ${Yy+=1} ${prefix}like${ya}
│ ${ya} ${Yy+=1} ${prefix}dislike${ya}
│ ${ya} ${Yy+=1} ${prefix}super${ya}
│ ${ya} ${Yy+=1} ${prefix}read${ya}
└───────
┌──[ ${ye}OWNER MENU${ye} ]
│ ${ya}${Yy+=1} $ Evalator${ya}
│ ${ya}${Yy+=1} > Executor${ya}
│ ${ya}${Yy+=1} ${prefix}autostickepc${ya}
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
│ ${ya}${Yy+=1} ${prefix}translate${ya}
│ ${ya}${Yy+=1} ${prefix}groupdha${ya}
│ ${ya}${Yy+=1} ${prefix}ssweb${ya}
│ ${ya}${Yy+=1} ${prefix}donasi${ya}
│ ${ya}${Yy+=1} ${prefix}wikimedia${ya}
└──────
┌──[ ${ye}CONVERST MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}sticker${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix${ya}
│ ${ya}${Yy+=1} ${prefix}emojimix2${ya}
│ ${ya}${Yy+=1} ${prefix}bucinstick${ya}
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
│ ${ya}${Yy+=1} ${prefix}quotes${ya}
│ ${ya}${Yy+=1} ${prefix}quotesanime${ya}
│ ${ya}${Yy+=1} ${prefix}halah${ya}
│ ${ya}${Yy+=1} ${prefix}hilih${ya}
│ ${ya}${Yy+=1} ${prefix}huluh${ya}
│ ${ya}${Yy+=1} ${prefix}heleh${ya}
│ ${ya}${Yy+=1} ${prefix}holoh${ya}
└──────
┌──[ ${ye}STICKER ANIME${ye} ]
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
│ ${ya}${Yy+=1} ${prefix}doge${ya}
│ ${ya}${Yy+=1} ${prefix}animestick${ya}
└──────
┌──[ ${ye}RANDOM ANIME${ye} ]
│ ${ya}${Yy+=1} ${prefix}anime${ya}
│ ${ya}${Yy+=1} ${prefix}sao${ya}
│ ${ya}${Yy+=1} ${prefix}neko${ya}
│ ${ya}${Yy+=1} ${prefix}lovelive${ya}
│ ${ya}${Yy+=1} ${prefix}hsdxd${ya}
│ ${ya}${Yy+=1} ${prefix}megumin${ya}
│ ${ya}${Yy+=1} ${prefix}waifu${ya}
│ ${ya}${Yy+=1} ${prefix}loli${ya}
│ ${ya}${Yy+=1} ${prefix}husbu${ya}
│ ${ya}${Yy+=1} ${prefix}mild${ya}
└──────
┌──[ ${ye}GROUP MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}linkgroup${ya}
│ ${ya}${Yy+=1} ${prefix}antilink${ya}
│ ${ya}${Yy+=1} ${prefix}autosticker${ya}
│ ${ya}${Yy+=1} ${prefix}group${ya}
│ ${ya}${Yy+=1} ${prefix}add${ya}
│ ${ya}${Yy+=1} ${prefix}kick${ya}
│ ${ya}${Yy+=1} ${prefix}tagall${ya}
│ ${ya}${Yy+=1} ${prefix}hidetag <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}promote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}demote @tag${ya}
│ ${ya}${Yy+=1} ${prefix}setname <name>${ya}
│ ${ya}${Yy+=1} ${prefix}setdesc <teks>${ya}
│ ${ya}${Yy+=1} ${prefix}ephemeral [option]${ya}
│ ${ya}${Yy+=1} ${prefix}setppgc [image]${ya}
│ ${ya}${Yy+=1} ${prefix}setnamegc [text]${ya}
│ ${ya}${Yy+=1} ${prefix}setdescgc [text]${ya}
│ ${ya}${Yy+=1} ${prefix}editinfo [option]${ya}
│ ${ya}${Yy+=1} ${prefix}mute [on/off]${ya}
│ ${ya}${Yy+=1} ${prefix}vote [text]${ya}
└──────
┌──[ ${ye}FUN MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}bisakah${ya} 
│ ${ya}${Yy+=1} ${prefix}apakah${ya} 
│ ${ya}${Yy+=1} ${prefix}bagaimanakah${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
└──────
┌──[ ${ye}GAME MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}truth${ya} 
│ ${ya}${Yy+=1} ${prefix}dare${ya}
│ ${ya}${Yy+=1} ${prefix}kuismath${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lagu${ya}
│ ${ya}${Yy+=1} ${prefix}tebak gambar${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kata${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kalimat${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lirik${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lontong${ya}
└──────
┌──[ ${ye}DOWNLOAD MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}play <query>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp4 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}ytmp3 <link>${ya}
│ ${ya}${Yy+=1} ${prefix}tiktok <link>${ya}
│ ${ya}${Yy+=1} ${prefix}igstory <namauser>${ya}
│ ${ya}${Yy+=1} ${prefix}instagram <query>${ya}
│ ${ya}${Yy+=1} ${prefix}getvideo <query>${ya}
│ ${ya}${Yy+=1} ${prefix}getmusic <query>${ya}
└───────
┌──[ ${ye}STALKING MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}ghstalk <nama github>${ya}
│ ${ya}${Yy+=1} ${prefix}igstalk <nama ig>${ya}
│ ${ya}${Yy+=1} ${prefix}ffstalk <id game>${ya}
│ ${ya}${Yy+=1} ${prefix}ytstalk <nama yt>${ya}
└──────
┌──[ ${ye}ISLAM MENU${ye} ] 
│ ${ya}${Yy+=1} ${prefix}iqra${ya}
│ ${ya}${Yy+=1} ${prefix}hadist${ya}
│ ${ya}${Yy+=1} ${prefix}juzamma${ya}
│ ${ya}${Yy+=1} ${prefix}listsurah${ya}
│ ${ya}${Yy+=1} ${prefix}alquran${ya}
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
┌──[ ${ye}MAKER TEXT PRO${ye} ]
│ ${ya}${Yy+=1} ${prefix}christmas${ya}
│ ${ya}${Yy+=1} ${prefix}3dchristmas${ya}
│ ${ya}${Yy+=1} ${prefix}sparklechristmas${ya}
│ ${ya}${Yy+=1} ${prefix}deepsea${ya}
│ ${ya}${Yy+=1} ${prefix}scifi${ya}
│ ${ya}${Yy+=1} ${prefix}rainbow2${ya}
│ ${ya}${Yy+=1} ${prefix}waterpipe${ya}
│ ${ya}${Yy+=1} ${prefix}spooky${ya} 
│ ${ya}${Yy+=1} ${prefix}pencil${ya}  
│ ${ya}${Yy+=1} ${prefix}circuit${ya}  
│ ${ya}${Yy+=1} ${prefix}discovery${ya}
│ ${ya}${Yy+=1} ${prefix}metalic${ya}
│ ${ya}${Yy+=1} ${prefix}fiction${ya}
│ ${ya}${Yy+=1} ${prefix}demon${ya} 
│ ${ya}${Yy+=1} ${prefix}transformer${ya}  
│ ${ya}${Yy+=1} ${prefix}berry${ya}
│ ${ya}${Yy+=1} ${prefix}thunder${ya} 
│ ${ya}${Yy+=1} ${prefix}3dstone2${ya} 
│ ${ya}${Yy+=1} ${prefix}neonlight${ya}  
│ ${ya}${Yy+=1} ${prefix}glitch${ya}  
│ ${ya}${Yy+=1} ${prefix}harrypotter${ya}  
│ ${ya}${Yy+=1} ${prefix}brokenglass${ya}  
│ ${ya}${Yy+=1} ${prefix}papercut${ya} 
│ ${ya}${Yy+=1} ${prefix}watercolor${ya}  
│ ${ya}${Yy+=1} ${prefix}multicolor${ya}  
│ ${ya}${Yy+=1} ${prefix}neondevil${ya}  
│ ${ya}${Yy+=1} ${prefix}underwater${ya}
│ ${ya}${Yy+=1} ${prefix}graffitibike${ya}
│ ${ya}${Yy+=1} ${prefix}snow${ya}  
│ ${ya}${Yy+=1} ${prefix}cloud${ya}  
│ ${ya}${Yy+=1} ${prefix}honey${ya}  
│ ${ya}${Yy+=1} ${prefix}ice${ya}  
│ ${ya}${Yy+=1} ${prefix}fruitjuice${ya}  
│ ${ya}${Yy+=1} ${prefix}biscuit${ya}
│ ${ya}${Yy+=1} ${prefix}wood${ya} 
│ ${ya}${Yy+=1} ${prefix}chocolate${ya}  
│ ${ya}${Yy+=1} ${prefix}strawberry${ya}
│ ${ya}${Yy+=1} ${prefix}matrix${ya}
│ ${ya}${Yy+=1} ${prefix}blood${ya}
│ ${ya}${Yy+=1} ${prefix}dropwater${ya} 
│ ${ya}${Yy+=1} ${prefix}toxic${ya}
│ ${ya}${Yy+=1} ${prefix}lava${ya}
│ ${ya}${Yy+=1} ${prefix}rock${ya}
│ ${ya}${Yy+=1} ${prefix}bloodglas${ya}
│ ${ya}${Yy+=1} ${prefix}halloween${ya}
│ ${ya}${Yy+=1} ${prefix}darkgold${ya}
│ ${ya}${Yy+=1} ${prefix}joker${ya}
│ ${ya}${Yy+=1} ${prefix}wicker${ya}
│ ${ya}${Yy+=1} ${prefix}firework${ya}
│ ${ya}${Yy+=1} ${prefix}skeleton${ya}
│ ${ya}${Yy+=1} ${prefix}blackpink${ya}
│ ${ya}${Yy+=1} ${prefix}sand${ya}
│ ${ya}${Yy+=1} ${prefix}glue${ya}
│ ${ya}${Yy+=1} ${prefix}1917${ya}
│ ${ya}${Yy+=1} ${prefix}leaves${ya}
│ ${ya}${Yy+=1} ${prefix}demon${ya} 
└──────

┌──[ ${ye}RANDOM FOTO${ye} ]
│ ${ya}${Yy+=1} ${prefix}meme${ya} 
│ ${ya}${Yy+=1} ${prefix}darkjo${ya} 
│ ${ya}${Yy+=1} ${prefix}darkjokes${ya} 
│ ${ya}${Yy+=1} ${prefix}ppcople${ya} 
│ ${ya}${Yy+=1} ${prefix}coffe${ya} 
│ ${ya}${Yy+=1} ${prefix}wallml${ya} 
│ ${ya}${Yy+=1} ${prefix}wallcyber${ya} 
│ ${ya}${Yy+=1} ${prefix}wallinori${ya} 
│ ${ya}${Yy+=1} ${prefix}wallislami${ya} 
│ ${ya}${Yy+=1} ${prefix}wallanime${ya} 
│ ${ya}${Yy+=1} ${prefix}wallteknologi${ya} 
│ ${ya}${Yy+=1} ${prefix}wallgemer${ya} 
│ ${ya}${Yy+=1} ${prefix}wallprogemer${ya} 
│ ${ya}${Yy+=1} ${prefix}wallmeme${ya} 
│ ${ya}${Yy+=1} ${prefix}wallmountain${ya} 
│ ${ya}${Yy+=1} ${prefix}cosplay${ya} 
└──────
┌──[ ${ye}RANDOM ASUPAN${ye} ]
│ ${ya}${Yy+=1} ${prefix}storyanime${ya}
│ ${ya}${Yy+=1} ${prefix}asupan${ya}
│ ${ya}${Yy+=1} ${prefix}asupan2${ya}
│ ${ya}${Yy+=1} ${prefix}asupan3${ya}
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
│ ${ya}• ${prefix}menu${ya}
│ ${ya}• ${prefix}help${ya}
│ ${ya}• ${prefix}speedtest${ya}
│ ${ya}• ${prefix}ping${ya}
│ ${ya}• ${prefix}runtime${ya}
│ ${ya}• ${prefix}owner${ya}
│ ${ya}• ${prefix}delete${ya}
│ ${ya}• ${prefix}quoted${ya}
│ ${ya}• ${prefix}listpc${ya}
│ ${ya}• ${prefix}listgc${ya}
│ ${ya}• ${prefix}listonline${ya}
│ ${ya}• ${prefix}like${ya}
│ ${ya}• ${prefix}dislike${ya}
│ ${ya}• ${prefix}super${ya}
│ ${ya}• ${prefix}read${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'ownermenu':

await Dha.send5ButImg(from, `┌──[ ${ye}OWNER MENU${ye} ]
│ ${ya}• $ Evalator${ya}
│ ${ya}• > Executor${ya}
│ ${ya}• ${prefix}sewa${ya}
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
│ ${ya}• ${prefix}quotes${ya}
│ ${ya}• ${prefix}quotesanime${ya}
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
│ ${ya}• ${prefix}animestick${ya}
│ ${ya}• ${prefix}doge${ya}
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
│ ${ya}• ${prefix}sao${ya}
│ ${ya}• ${prefix}neko${ya}
│ ${ya}• ${prefix}lovelive${ya}
│ ${ya}• ${prefix}hsdxd${ya}
│ ${ya}• ${prefix}megumin${ya}
│ ${ya}• ${prefix}waifu${ya}
│ ${ya}• ${prefix}loli${ya}
│ ${ya}• ${prefix}husbu${ya}
│ ${ya}• ${prefix}mild${ya}
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
│ ${ya}${Yy+=1} ${prefix}truth${ya} 
│ ${ya}${Yy+=1} ${prefix}dare${ya}
│ ${ya}${Yy+=1} ${prefix}kuismath${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lagu${ya}
│ ${ya}${Yy+=1} ${prefix}tebak gambar${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kata${ya}
│ ${ya}${Yy+=1} ${prefix}tebak kalimat${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lirik${ya}
│ ${ya}${Yy+=1} ${prefix}tebak lontong${ya}
└──────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'funmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}FUN MENU${ye} ]
│ ${ya}${Yy+=1} ${prefix}bisakah${ya} 
│ ${ya}${Yy+=1} ${prefix}apakah${ya} 
│ ${ya}${Yy+=1} ${prefix}bagaimanakah${ya}
│ ${ya}${Yy+=1} ${prefix}kapankah${ya}
│ ${ya}${Yy+=1} ${prefix}gantengcek${ya} 
│ ${ya}${Yy+=1} ${prefix}cantikcek${ya}
│ ${ya}${Yy+=1} ${prefix}begocek${ya} 
│ ${ya}${Yy+=1} ${prefix}suhucek${ya}
│ ${ya}${Yy+=1} ${prefix}pintercek${ya}
│ ${ya}${Yy+=1} ${prefix}jagocek${ya}
│ ${ya}${Yy+=1} ${prefix}nolepcek${ya}
│ ${ya}${Yy+=1} ${prefix}babicek${ya}
│ ${ya}${Yy+=1} ${prefix}bebancek${ya}
│ ${ya}${Yy+=1} ${prefix}jahatcek${ya}
│ ${ya}${Yy+=1} ${prefix}rate${ya}
│ ${ya}${Yy+=1} ${prefix}pakboycek${ya}
│ ${ya}${Yy+=1} ${prefix}pakgirlcek${ya}
│ ${ya}${Yy+=1} ${prefix}sangecek${ya} 
└────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'downloadmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}DOWNLOAD MENU${ye} ]
│ ${ya}• ${prefix}play <query>${ya}
│ ${ya}• ${prefix}ytmp4 <link>${ya}
│ ${ya}• ${prefix}ytmp3 <link>${ya}
│ ${ya}• ${prefix}tiktok <link>${ya}
│ ${ya}• ${prefix}igstory <namauser>${ya}
│ ${ya}• ${prefix}instagram <query>${ya}
│ ${ya}• ${prefix}getvideo <query>${ya}
│ ${ya}• ${prefix}getmusic <query>${ya}
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break
case 'stalkmenu':

await Dha.send5ButImg(from, `┌──[ ${ye}STALKING MENU${ye} ]
│ ${ya}• ${prefix}ghstalk <nama github>${ya}
│ ${ya}• ${prefix}igstalk <nama ig>${ya}
│ ${ya}• ${prefix}ffstalk <id game>${ya}
│ ${ya}• ${prefix}ytstalk <nama yt>${ya}
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
└───────
Note: 
Masih Tahap Pengembangan Jika Ada Eror/Bug Segera Lapor
Thanks~`, Dha.user.name,thumb, [{"urlButton": {"displayText": "Website","url": `${myweb}`}}] )
break



case 'command':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `DHA BOTZ MULTI DEVICE`,
                    description: `Pilih Disini.......`,
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
										"rowId": `${prefix}maker`
										},
									    {
										"title": "Primbon Menu",
							            "rowId": `${prefix}primbonmenu`
									    },
										{
										"title": "Database Menu",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Stalking Menu",
										"rowId": `${prefix}stalkmenu`
										},
										{
											"title": "Download Menu",
										"rowId": `${prefix}downloadmenu`
										},
										{
										"title": "Grup Menu",
										"rowId": `${prefix}grupmenu`
										},
										{
										"title": "Sticker Menu",
										"rowId": `${prefix}stickermenu`
										},
										{
										"title": "Fun Menu",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Anime Menu",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Games Menu",
										"rowId": `${prefix}gamemenu`
										},
										{
											"title": "Convert Menu",
										"rowId": `${prefix}convertmenu`
										},
										{
										"title": "Other Menu",
										"rowId": `${prefix}othermenu`
										},
										{
											"title": "Region Menu",
										"rowId": `${prefix}regionmenu`
										},
										{
											"title": "Image Menu",
										"rowId": `${prefix}photomenu`
										},
										{
											"title": "Teks Menu",
										"rowId": `${prefix}teksmenu`
										},
										{
											"title": "Sound Menu",
										"rowId": `${prefix}soundmenu`
										},
										{
											"title": "Asupan Menu",
										"rowId": `${prefix}videomenu`
										}]
							            },
							            {
								         "title": "Chat with fellow users",
								         "rows": [
									    {
										"title": "Anonymous Chat Menu",
										"rowId": `${prefix}anonymouschatmenu`
									     }]
							             },
							             {
								         "title": "Owner",
								         "rows": [
									     {
										 "title": "Owner Menu",
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

case 'maker':{
if (!q) return m.reply(`${command} Dha Botz`)
const sections = [
    {
	title: `Teks Pro`,
	rows: [
	    {title: "SPARKLE CHRISTMAS", rowId: `${prefix}sparklechristmas ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "DEEPSEA", rowId: `${prefix}deepsea ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "SCIFI", rowId: `${prefix}scifi ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "RAINBOW2", rowId: `${prefix}rainbow2 ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "WATERPIPE", rowId: `${prefix}waterpipe ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "METALIC", rowId: `${prefix}metalic ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "FICTION", rowId: `${prefix}fiction ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "CIRCUIT", rowId: `${prefix}circuit ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "3DSTONE2", rowId: `${prefix}3dstone2 ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "DISCOVERY", rowId: `${prefix}discovery ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "SPOOKY", rowId: `${prefix}spooky ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "PENCIL", rowId: `${prefix}pencil ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "BERRY", rowId: `${prefix}berry ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "THUNDER", rowId: `${prefix}thunder ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "GLITCH", rowId: `${prefix}glitch ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "HARRY POTTER", rowId: `${prefix}harrypotter ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "PAPER CUT", rowId: `${prefix}papercut ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "WATER COLOR", rowId: `${prefix}watercolor ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "DEMON", rowId: `${prefix}demon ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "NEONDEVIL", rowId: `${prefix}neondevil ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "UNDERWATER", rowId: `${prefix}underwater ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "GRAFFITI BIKE", rowId: `${prefix}graffitibike ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "SNOW", rowId: `${prefix}snow ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "CLOUD", rowId: `${prefix}cloud ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "HONEY", rowId: `${prefix}honey ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "ICE", rowId: `${prefix}ice ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "FRUITJUICE", rowId: `${prefix}fruitjuice ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "BISCUIT", rowId: `${prefix}biscuit ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "CHOCOLATE", rowId: `${prefix}chocolate ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "TRANSFORMER", rowId: `${prefix}transformer ${q}`}
	]
    },{
	title: `Teks Pro`,
	rows: [
	    {title: "3DCHRISTMAS", rowId: `${prefix}3dchristmas ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "LEAVES", rowId: `${prefix}leaves ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "1917", rowId: `${prefix}1917 ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "GLUE", rowId: `${prefix}glue ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "SAND", rowId: `${prefix}sand ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "BLACKPINK", rowId: `${prefix}blackpink ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "SKELETON", rowId: `${prefix}skeleton ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "FIREWORK", rowId: `${prefix}firework ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "JOKER", rowId: `${prefix}joker ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "WICKER", rowId: `${prefix}wicker ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "DARKGOLD", rowId: `${prefix}darkgold ${q}`}
	]
    },
     {
	title: `Teks Pro`,
	rows: [
	    {title: "HALLOWEEN", rowId: `${prefix}halloween ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "MULTICOLOR", rowId: `${prefix}multicolor ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "BLOODGLAS", rowId: `${prefix}bloodglas ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "ROCK", rowId: `${prefix}rock ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "DROPWATER", rowId: `${prefix}dropwater ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "TOXIC", rowId: `${prefix}toxic ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "BLOOD", rowId: `${prefix}blood ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "NEONLIGHT", rowId: `${prefix}neonlight ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "LAVA", rowId: `${prefix}lava ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "MATRIX", rowId: `${prefix}matrix ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "BROKENGLASS", rowId: `${prefix}brokenglass ${q}`}
	]
    },  {
	title: `Teks Pro`,
	rows: [
	    {title: "WOOD", rowId: `${prefix}wood ${q}`}
	]
    },
    {
	title: `Teks Pro`,
	rows: [
	    {title: "CHRISTMAS", rowId: `${prefix}christmas ${q}`}
	]
    },
]
let isian = `    
Silahkan Pilih Mau Dibikinin Teks Pro Yang Mana`
const listMessage = {
  text: isian,
  footer: "Powered By @yudha Perdana",
  title: "━━[ Pembuantan Maker ]━━",
  buttonText: "Klik Disini",
  sections
}
const tessgh = await Dha.sendMessage(from, listMessage)
}
break
case 'regionmenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `ISLAMI FITUR`,
                    description: `Pilih Dibawah.......`,
                    buttonText: "SELECT MENU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "List Iqra",
								"rows": [
									{
										"title": "IQRA 1",
										"rowId": `${prefix}iqra 1`
									},
									{
										"title": "IQRA 2",
										"rowId": `${prefix}iqra 2`
									},
									{
										"title": "IQRA 3",
										"rowId": `${prefix}iqra 3`
									},
									{
										"title": "IQRA 4",
										"rowId": `${prefix}iqra 4`
									},
									{
										"title": "IQRA 5",
										"rowId": `${prefix}iqra 5`
									},
									{
										"title": "IQRA 6",
										"rowId": `${prefix}iqra 6`
									}]
									},
							           {
								"title": "All Hadist",
								"rows": [
									   {
										"title": "HADIST ABU-DAUD",
										"rowId": `${prefix}Hadist Abu-daud`
								    	},{
										"title": "HADIST  BUKHARI",
										"rowId": `${prefix}hadist bukhari`
									  	},{
										"title": "HADIST AHMAD",
										"rowId": `${prefix}hadist ahmad`
									    },{
										"title": "HADIST  MUSLIM",
										"rowId": `${prefix}hadist muslim`
									  	},{
										"title": "HADIST MALIK",
										"rowId": `${prefix}hadist malik`
									  	},{
										"title": "HADIST NASAI",
										"rowId": `${prefix}hadist nasai`
									  	},{
										"title": "HADIST DARIMI",
										"rowId": `${prefix}hadist darimi`
									  	},
									    {
										"title": "HADIST IBNU-MAJAH",
										"rowId": `${prefix}hadist ibnu-majah`
									  	}]
										},
										{
								"title": "Random Doa Harian",
								"rows": [
									   {
										"title": "DOA HARIAN",
										"rowId": `${prefix}doaharian`
								    	},{
										"title": "ASMAULHUSNA",
										"rowId": `${prefix}asmaulhusna`
									  	},{
										"title": "ALQURAN",
										"rowId": `${prefix}alquran`
									  	},{
										"title": "TAFSIR SURAH",
										"rowId": `${prefix}tafsirsurah`
									    }]
										}
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'photomenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `IMAGE FITUR`,
                    description: `Pilih Dibawah.......`,
                    buttonText: "SELECT MENU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Random Image Dark",
								"rows": [
									{
										"title": "MEME",
										"rowId": `${prefix}meme`
									},
									{
										"title": "MEME ANIME",
										"rowId": `${prefix}wallmeme`
									},
									{
										"title": "DARKJOKE",
										"rowId": `${prefix}darkjoke`
									},
									{
										"title": "DARKJOKES",
										"rowId": `${prefix}darkjokes`
									}]
									},
							           {
								"title": "Random image Wallpaper",
								"rows": [
									   {
										"title": "WALLPAPER ML",
										"rowId": `${prefix}wallml`
								    	},{
										"title": "WALPAPER ISLAMI",
										"rowId": `${prefix}wallislami`
									  	},{
										"title": "WALLPAPER MOUNTAIN",
										"rowId": `${prefix}wallmountain`
									    },{
										"title": "WALPAPER ANIME",
										"rowId": `${prefix}wallanime`
									  	},{
										"title": "WALPAPER INORI",
										"rowId": `${prefix}wallinori`
									  	},{
										"title": "WALPAPER TEKNOLOGI",
										"rowId": `${prefix}wallteknologi`
									  	},{
										"title": "WALPAPER CYBER",
										"rowId": `${prefix}wallcyber`
									  	},
									    {
										"title": "WALPAPER GEMER",
										"rowId": `${prefix}wallgamer`
									  	},
									  	{
										"title": "WALLPAPER PROGRAMMER",
										"rowId": `${prefix}wallprogamer`
										}]
										},
										{
								"title": "Random image",
								"rows": [
									   {
										"title": "IMAGE COUPLE",
										"rowId": `${prefix}ppcouple`
								    	},{
										"title": "IMAGE COSPLAY",
										"rowId": `${prefix}cosplay`
									  	},{
										"title": " IMAGE COFFE",
										"rowId": `${prefix}coffe`
									    }]
										}
						],
          listType: 1
                }
            }), {})
            Dha.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'soundmenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `SOUND FITUR`,
                    description: `Pilih Sendiri.......`,
                    buttonText: "SELECT MENU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Random Sound",
								"rows": [
									{
										"title": "SOUND 1",
										"rowId": `${prefix}sound1`
									},
									{
										"title": "SOUND 2",
										"rowId": `${prefix}sound2`
									},
									{
										"title": "SOUND 3",
							            "rowId": `${prefix}sound3`
									},
									{
										"title": "SOUND 4",
										"rowId": `${prefix}sound4`
									},
									{
										"title": "SOUND 5",
										"rowId": `${prefix}sound5`
									},
									{
										"title": "SOUND 6",
										"rowId": `${prefix}sound6`
									},
									{
										"title": "SOUND 7",
										"rowId": `${prefix}sound7`
									},
									{
										"title": "SOUND 8",
										"rowId": `${prefix}sound8`
								    },
								    {
										"title": "SOUND 9",
										"rowId": `${prefix}sound9`
								    },
								    {
										"title": "SOUND 10",
										"rowId": `${prefix}sound10`
								    },{
										"title": "SOUND 11",
										"rowId": `${prefix}sound11`
								    },{
										"title": "SOUND 12",
										"rowId": `${prefix}sound12`
								    },{
										"title": "SOUND 13",
										"rowId": `${prefix}sound13`
								    },{
										"title": "SOUND 14",
										"rowId": `${prefix}sound14`
								    },{
										"title": "SOUND 15",
										"rowId": `${prefix}sound15`
								    },{
										"title": "SOUND 16",
										"rowId": `${prefix}sound16`
								    },{
										"title": "SOUND 17",
										"rowId": `${prefix}sound17`
								    },{
										"title": "SOUND 18",
										"rowId": `${prefix}sound18`
								    },{
										"title": "SOUND 19",
										"rowId": `${prefix}sound19`
								    },{
										"title": "SOUND 20",
										"rowId": `${prefix}sound20`
								    },{
										"title": "SOUND 21",
										"rowId": `${prefix}sound21`
								    },{
										"title": "SOUND 22",
										"rowId": `${prefix}sound22`
								    },{
										"title": "SOUND 23",
										"rowId": `${prefix}sound23`
								    },{
										"title": "SOUND 24",
										"rowId": `${prefix}sound24`
								    },{
										"title": "SOUND 25",
										"rowId": `${prefix}sound25`
								    },{
										"title": "SOUND 26",
										"rowId": `${prefix}sound26`
								    },{
										"title": "SOUND 27",
										"rowId": `${prefix}sound27`
								    },{
										"title": "SOUND 28",
										"rowId": `${prefix}sound28`
								    },{
										"title": "SOUND 29",
										"rowId": `${prefix}sound29`
								    },{
										"title": "SOUND 30",
										"rowId": `${prefix}sound30`
								    },{
										"title": "SOUND 31",
										"rowId": `${prefix}sound31`
								    },{
										"title": "SOUND 32",
										"rowId": `${prefix}sound32`
								    },{
										"title": "SOUND 33",
										"rowId": `${prefix}sound33`
								    },{
										"title": "SOUND 34",
										"rowId": `${prefix}sound34`
								    },{
										"title": "SOUND 35",
										"rowId": `${prefix}sound35`
								    },{
										"title": "SOUND 36",
										"rowId": `${prefix}sound36`
								    },{
										"title": "SOUND 37",
										"rowId": `${prefix}sound37`
								    },{
										"title": "SOUND 38",
										"rowId": `${prefix}sound38`
								    },{
										"title": "SOUND 39",
										"rowId": `${prefix}sound39`
								    },{
										"title": "SOUND 40",
										"rowId": `${prefix}sound40`
								    },{
										"title": "SOUND 41",
										"rowId": `${prefix}sound41`
								    },{
										"title": "SOUND 42",
										"rowId": `${prefix}sound42`
								    },{
										"title": "SOUND 43",
										"rowId": `${prefix}sound43`
								    },{
										"title": "SOUND 44",
										"rowId": `${prefix}sound44`
								    },{
										"title": "SOUND 45",
										"rowId": `${prefix}sound45`
								    },{
										"title": "SOUND 46",
										"rowId": `${prefix}sound46`
								    },{
										"title": "SOUND 47",
										"rowId": `${prefix}sound47`
								    },{
										"title": "SOUND 48",
										"rowId": `${prefix}sound48`
								    },{
										"title": "SOUND 49",
										"rowId": `${prefix}sound49`
								    },{
										"title": "SOUND 50",
										"rowId": `${prefix}sound50`
								    },{
										"title": "SOUND 51",
										"rowId": `${prefix}sound51`
								    },{
										"title": "SOUND 52",
										"rowId": `${prefix}sound52`
								    },{
										"title": "SOUND 53",
										"rowId": `${prefix}sound53`
								    },{
										"title": "SOUND 54",
										"rowId": `${prefix}sound54`
								    },{
										"title": "SOUND 55",
										"rowId": `${prefix}sound55`
								    },{
										"title": "SOUND 56",
										"rowId": `${prefix}sound56`
								    },{
										"title": "SOUND 57",
										"rowId": `${prefix}sound57`
								    },{
										"title": "SOUND 58",
										"rowId": `${prefix}sound58`
								    },{
										"title": "SOUND 59",
										"rowId": `${prefix}sound59`
								    },{
										"title": "SOUND 60",
										"rowId": `${prefix}sound60`
								    },{
										"title": "SOUND 61",
										"rowId": `${prefix}sound61`
								    },{
										"title": "SOUND 62",
										"rowId": `${prefix}sound62`
								    },{
										"title": "SOUND 63",
										"rowId": `${prefix}sound63`
								    },{
										"title": "SOUND 64",
										"rowId": `${prefix}sound64`
								    },{
										"title": "SOUND 65",
										"rowId": `${prefix}sound65`
								    },{
										"title": "SOUND 66",
										"rowId": `${prefix}sound66`
								    },{
										"title": "SOUND 67",
										"rowId": `${prefix}sound67`
								    },{
										"title": "SOUND 68",
										"rowId": `${prefix}sound68`
								    },{
										"title": "SOUND 69",
										"rowId": `${prefix}sound69`
								    },{
										"title": "SOUND 70",
										"rowId": `${prefix}sound70`
								    },{
										"title": "SOUND 71",
										"rowId": `${prefix}sound71`
								    },{
										"title": "SOUND 72",
										"rowId": `${prefix}sound72`
								    },{
										"title": "SOUND 73",
										"rowId": `${prefix}sound73`
								    },{
										"title": "SOUND 74",
										"rowId": `${prefix}sound74`
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
case 'videomenu':{
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `ASUPAN FITUR`,
                    description: `JANGAN BAPER.......`,
                    buttonText: "SELECT MENU",
                    footerText: Dha.user.name,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Asupan Image",
								"rows": [
									{
										"title": "RANDOM CECAN",
										"rowId": `${prefix}cecan`
									},
									{
										"title": "CECAN KOREA",
										"rowId": `${prefix}cecan-kor`
									},
									{
										"title": "CECAN CHINA",
										"rowId": `${prefix}cecan-chi`
									},
									{
										"title": "CECAN VIETNAM",
							            "rowId": `${prefix}cecan-vie`
									},
									{
										"title": "CECAN THAILAND",
										"rowId": `${prefix}cecan-tha`
									},
									{
										"title": "CECAN MALAYSIA",
										"rowId": `${prefix}cecan-mal`
									},
									{
										"title": "CECAN JEPANG",
										"rowId": `${prefix}cecan-jep`
									},
									{
										"title": "CECAN INDONESIA",
										"rowId": `${prefix}cecan-indo`
									}]
							           },
							           {
								"title": "Asupan Video",
								"rows": [
									   {
										"title": "RANDOM ASUPAN",
										"rowId": `${prefix}asupan`
								    	},
								     	{
										"title": "ASUPAN UKHTY",
										"rowId": `${prefix}ukhty`
									    },
									    {
										"title": "ASUPAN SANTUY",
										"rowId": `${prefix}santuy`
									  	},
									  	{
										"title": "ASUPAN BOCIL",
										"rowId": `${prefix}bocil`
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

//-------->>>>>>>>>>BATAS JUALAN MENU
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
replyTemplate('TERIMAKASIH Jangan Lupa Next order lagi kak')
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
case 'sewabot':{
  var { sewabot } = require('./lib/sewabot.js')
  Dha.send5ButImg(m.chat, sewabot(prefix), global.ownerName, global.thumb,  [{"urlButton": {"displayText": "My Owner","url": `https://wa.me/6282287486762`}}] )
  }
  break
case'ceksewa': {
  var {ceksewa  } = require('./lib/sewabot.js')
  Dha.send5ButImg(m.chat, ceksewa(prefix), global.ownerName, global.thumb,  [{"urlButton": {"displayText": "My OWNER","url": `https://wa.me/6282287486762`}}] )
  }
  break
//---------->>>>>>>>>>> Vave store
case 'listchip': {
            Dha.sendMessage(m.chat, { text : `*Ready Chip Kuning*
                        
100m = 7k
200m = 14k
300m = 20k
400m = 27k
500m = 33k
600m = 40k
700m = 50k
800m = 55k
900m = 60k
1b = 63k

Buat temen temen yang berminat untuk order chip lansunga aja ketik orderchip`, mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break	    
case'orderchip':
Adminchip(`*List Payment Bank*
- BCA
7295150360
Rizky Ariyanto
- SEANBANK
901916312380
Rizky Ariyanto
- Jago
107591305400
Istihanah

Untuk info lebih lengkap bisa hubungin lansung admin chipnya
Terimakasih~`)
break

case'listbongkar':
Adminchip(`*List Bongkaran Chip*

Bongkaran 1-5b x57
Bongkaran 6-39b x58
Bongkaran 40b atas x59

Untuk info lebih lengkap bisa hubungin lansung admin chipnya
Terimakasih~`)
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
