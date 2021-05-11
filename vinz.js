
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processbiasalah,
   device,
   Browser
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./vinzganz/color')
const { animesaran } = require('./vinzganz/animesaran')
const { animesaran2 } = require('./vinzganz/animesaran2')
const { help } = require('./vinzganz/help')
const { rules } = require('./vinzganz/rules')
const { sewabot } = require('./vinzganz/sewabot')
const { listsurah } = require('./vinzganz/listsurah')
const { donasi } = require('./vinzganz/donasi')
const { fetchJson } = require('./vinzganz/fetcher')
const { recognize } = require('./vinzganz/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./vinzganz/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./vinz/index.js')

//apikey
const apivhtear = 'genbotkey' // Vhtear Beli Sendiri Yoo
const ZeksApi = 'apivinz'
const apileys = 'OneDayOneCharity' // Free Apikey
const TobzKey = 'Tobzzz17'
const lolhuman = 'genbotkey' //Besok Beli Sendiri
const onlydev = 'genbotkey' //Free Apikey
const xteam = 'genbotkey' //Hari Jumat Habis

//Ubah
const namaowner = 'VINZ DEV'
const namabot = 'VINZ CHAT BOT'

//kontak
const vcard = 'BEGIN:VCARD\n'  //Jangan diganti,Ntar error
            + 'VERSION:3.0\n'  //Jangan diganti,Ntar error
            + 'FN:I AM VINZ\n'  // Ganti jadi namamu
            + 'ORG:Pengembang ${namabot};\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=6282140744548:+6282140744548\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // Jangan diganti,Ntar Error
            
//settings    
fake = 'ANTI DELETE BY VINZ'
numbernye = '0@s.whatsapp.net'
prefix = '#'
prf = '#'
blocked = []   
limitawal = '500' //Terserah Mo Ganti apa kgk
memberlimit = 1 //Terserah Mo Ganti apa kgk
cr = '*VINZ CHAT BOT V 134.65*'
vr = '*VINZ CHAT BOT V 134.65*'

//owner number
const ownerNumber = ["6282140744548@s.whatsapp.net", "6285733722777@s.whatsapp.net"]  //Ganti Jadi Nomormu

//Json File
const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))
const antiporn = JSON.parse(fs.readFileSync('./src/antiporn.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const isBanned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const antifirtex2 = JSON.parse(fs.readFileSync('./database/group/antifirtex2.json'))
const antifirtex3 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
const antifirtex4 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))
const antifirtex5 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
const antifirtex6 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))

//CMD
const {
	cmdadd
} = require('./lib/totalcmd.js')

//function
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, biasalah, serials) => {
            const obj = { id: userid, name: sender, age: age, time: biasalah, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/****************"FUNCTION *******************/

const vinz = new WAConnection()
   vinz.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','aqua'),color('I AM VINZ','white'),color(']','aqua'),color('SQAN QR CODE DI WHATSAPP WEB!!','aqua'),color('VINZ','white'),color('DEVELOPER','red'),color('BOT','yellow'))
}) 

vinz.on('credentials-updated', () => {
	const authInfo = vinz.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./vinzbot.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./vinzbot.json') && vinz.loadAuthInfo('./vinzbot.json')
vinz.connect();


vinz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await vinz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
					pp_user = 'https://i.ibb.co/B6mZsR9/20210403-182628.jpg'
				teks = `
Haii
@${num.split('@')[0]}
👋\nꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ 
*${mdata.subject}* Have a Nice Day
`
				let buff = await getBuffer(pp_user)
				vinz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
					pp_user = 'https://i.ibb.co/ZSV8q3y/20210403-183459.jpg'
				teks = `
sᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ 
@${num.split('@')[0]} Have a Nice Day
`
				let buff = await getBuffer(pp_user)
				vinz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await vinz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `\`\`\`「 PROMOTE DETECTED 」\`\`\`\n@${num.split('@')[0]}\n-Vinz BOT`
				let buff = await getBuffer(ppimg)
				vinz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await vinz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `\`\`\`「 DEMOTE DETECTED 」\`\`\`\n@${num.split('@')[0]}\n-Vinz BOT`
				let buff = await getBuffer(ppimg)
				vinz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	vinz.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

vinz.on('message-update', async (mek) => {
		try {
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? vinz.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk Grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? vinz.user.jid : vinz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? vinz.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `

┏━━⊱*「   ANTI DELETE   」* 
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
┣❏ *Tipe :* Text
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┣❏ *Pesan :* *${body ? body : '-'}*
┣❏ *status :* *200*
┃
┗━━━━━━━━━━━━━━❍
`
				vinz.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await vinz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `

┏━━⊱「   *ANTI DELETE*   」
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
┣❏ *Tipe :* *Sticker*
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┃
┗━━━━━━━━━━━━━━❍

`
				const buff = fs.readFileSync(savedFilename)
				vinz.sendMessage(from, strConversation, MessageType.text, opt4tag)
				vinz.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await vinz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `

┏━━⊱「   *ANTI DELETE*   」
┃
┣❏ *Nama :* *${pushname}* 
┣❏ *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
┣❏ *Tipe :* Image
┣❏ *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
┣❏ *Pesan :* ${body ? body : '-'}*
┃
┗━━━━━━━━━━━━━━❍

`
				vinz.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})
vinz.on('message-new', async (mek) => {
	try {
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
		}
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model, device_network, cpu_device, device_battery, device_ram } = vinz.user.phone
			const botNumber = vinz.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = vinz.contacts[sender] != undefined ? vinz.contacts[sender].vname || vinz.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await vinz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            //****************"SCURITY FEATURE **************//
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
            const isAntiPorn = isGroup ? antiporn.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
            const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
            const isAntiFirtex2= isGroup ? antifirtex2.includes(from) : false
            const isAntiFirtex3= isGroup ? antifirtex3.includes(from) : false
            const isAntiFirtex4= isGroup ? antifirtex4.includes(from) : false
            const isAntiFirtex5= isGroup ? antifirtex5.includes(from) : false
            const isAntiFirtex6= isGroup ? antifirtex6.includes(from) : false
            const isPublic = isGroup ? public.includes(from) : false
			const isBanned = ban.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				vinz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				vinz.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? vinz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : vinz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    vinz.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			vinz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    vinz.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	 //END SCURITY FEATURE
	//Role vinz Bot
	const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
           
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Admin'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
	
	  //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
        
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return vinz.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            vinz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        vinz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    vinz.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     
      //funtion virtual slot
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
		
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
 

if (isGroup && isAntiPorn && !isGroupAdmins && isBotGroupAdmins) {
    if (type === 'image') {
    const datafacol = await decryptMedia(message)
    const fotofacol = await uploadImages(datafacol, `fotoface.${sender}`)
    const getnsfw = await axios.get(`https://lolhuman.herokuapp.com/api/nsfwcheck?apikey=${lolhuman}&img=${fotofacol}`)
    const persen = getnsfw.data.result
    console.log(persen)
    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
    if (Number(getnsfw.data.result.split('%')[0]) >= 30.00) return reply('*Terdeteksi Mengirim Gambar Yang Berbau Porno*\nKeyakinan Gambar : ${persen}').then(() => vinz.removeParticipant(groupId, sender))
    }
}        
// ANTI LINK GRUP
                if (mesejAnti.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        vinz.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*${namabot} HARUS JADI ADMINâ—*`)})
		        }, 3000)
		        setTimeout( () => {
			        vinz.updatePresence(from, Presence.composing)
			        reply("ShenraTensei🌪️")
		        }, 2000)
		        setTimeout( () => {
			        vinz.updatePresence(from, Presence.composing)
			        reply("Isi Cakraa☁️")
		        }, 1000)
		        setTimeout( () => {
			        vinz.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		  }
		  
//ANTI VIRTEX 
        if (mesejAnti.includes("๒๒")){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
		
		if (mesejAnti.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
		if (!isGroup) return
		if (!isAntiFirtex2) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
		if (!isGroup) return
		if (!isAntiFirtex3) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
		if (!isGroup) return
		if (!isAntiFirtex4) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
		if (!isGroup) return
		if (!isAntiFirtex5) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	    if (mesejAnti.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
		if (!isGroup) return
		if (!isAntiFirtex6) return
		if (isGroupAdmins) return reply('ADMIN GRUP MAH BEBAS😁')
		vinz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`VIRTEX TERDETEKSI!!! MAAF ${sender.split("@")[0]} ANDA AKAN DI KICK DARI GRUP DALAM WAKTU 5 DETIK`)
		setTimeout( () => {
			vinz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("ShenraTensei🌪️")
		}, 4000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 3000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 2000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("4detik")
		}, 1000)
		setTimeout( () => {
			vinz.updatePresence(from, Presence.composing)
			reply("5detik")
		}, 0)
	}
	
	
		  if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`hmmm...`)
						setTimeout( () => {
 	                           vinz.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								vinz.updatePresence(from, Presence.composing)
								reply("byee")
							}, 4000)
								setTimeout( () => {
								vinz.updatePresence(from, Presence.composing)
								reply("awokaowkaowk")
							}, 3000)
								setTimeout( () => {
								vinz.updatePresence(from, Presence.composing)
								reply("semoga emak lu sehat")
							}, 2000)
								setTimeout( () => {
								vinz.updatePresence(from, Presence.composing)
								reply("gw keluar ye")
							}, 1000)
								setTimeout( () => {
								vinz.updatePresence(from, Presence.composing)
								reply(`sorry ngab member minimal ${memberlimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
        if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                    return reply("JAGA UCAPAN DONG!! 😠")
                        .then(() => vinz.groupRemove(from, sender))
                        .then(() => {
                            vinz.sendMessage(from, `「 ANTI BADWORD 」*nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
                        }).catch(() => vinz.sendMessage(from, `Untung cya bukan admin, kalo admin udah cya kick!`, text , {quoted : mek}))
                } else {
                    return reply( "Tolong Jaga Ucapan Meskipun anda sebagai Admin !")
                }
            }
        }

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//totalcommand
			if (isCmd) cmdadd()
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mVINZ\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mVINZ\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;32mGRUP VINZ\x1b[1;37m]=', color([command]), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', [time], '[\x1b[1;31mVINZ\x1b[1;37m]=', ('[\x1b[1;31mEMROR\x1b[1;37m]'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				//ANTI DELETE
				case 'antidelete': 
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return vinz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return vinz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						vinz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						vinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return vinz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						vinz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						vinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return vinz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return vinz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					vinz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						vinz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						vinz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						vinz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						vinz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				//NEW FITURE 2
				case 'suit':
		      if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
                    result = await fetchJson(`https://api.xteam.xyz/game/suit?q=${aruga}&APIKEY=${xteam}`)
                        txt = `*🤘GAME SUIT BY vinz🤘*\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `\n🔥Seranganmu : ${result.jawabanmu}\n`
                        txt += `💧Serangan Bot : ${result.jawabanbot}\n`
                        txt += `\n🕹️Poin : ${result.poin}\n`
                        reply(txt)
                        break
                        case 'requests':
                        case 'request':
                    if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return vinz.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `[ *REQUESTS FITUR* ]\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    vinz.sendMessage('${ownerNumber}', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner Bot, Requests palsu/main2 tidak akan ditanggapi.')
                    break
                             case 'report':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return vinz.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    vinz.sendMessage('${ownerNumber}', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner Bot, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    case 'mentionall':
			    if (isBanned) return reply(ind.baned())
			    if (!isRegistered) return reply(ind.noregis())
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 *vinz BOT* 〙', members_id, true)
					break
                    case 'hidetag5':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await vinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					vinz.sendMessage(from, options, text)
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
					break
					case 'hidetag20':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(10)
					var group = await vinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					vinz.sendMessage(from, options, text)
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(10)
					var group = await vinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					vinz.sendMessage(from, options, text)
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	.then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                 .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
	                .then(() => {vinz.sendMessage(from, options, text)})
					break
					case 'getses':
	if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
	         
                    if (!isOwner) return vinz.reply(from, 'Perintah ini hanya untuk Owner bot', id)
                    const sesPic = await vinz.getSnapshot()
                    vinz.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
                case 'rate':
				case 'nilai':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					vinz.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'pictcewek':
					case 'fotocewek':
					case 'cewek':
					case 'cewekcantik':
					case 'cecans':
					case 'cecan':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(mess.only.group)
		            
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=beli api key biar work`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyev = await getBuffer(ku)
					vinz.sendMessage(from, nyev, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'pictcowok':
					case 'cogans':
					case 'cogan':
					case 'cowok':
					﻿ case 'cowokgans':
					case 'fotocowok':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(mess.only.group)
					
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=beli api key biar work`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyeb = await getBuffer(ku)
					vinz.sendMessage(from, nyeb, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
				case 'kicktime':
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						 vinz.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					 vinz.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					 vinz.sendMessage(from, '_selamat tinggal Titip gorengan Ya jangan Balik Lagi...._', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					 vinz.sendMessage(from, '_ucapkan selamat tinggal mmwaah muwwah..._', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					 vinz.sendMessage(from, '_ciiee calon bakalan dikick..._', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					 vinz.sendMessage(from, '_siap siap ya bot Kick nih_', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
					case 'btoxic':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					vinz.sendMessage(from, ole, text, { quoted: mek })
					break
					case 'infogc':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				
				vinz.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await vinz.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					vinz.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
					case 'profile':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (isBanned) return reply(ind.baned())
					me = vinz.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Author* : *vinz*\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* OFF`
					buffer111 = await getBuffer(me.imgUrl)
					vinz.sendMessage(from, buffer111, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'virtualslot':
		      if (!isRegistered) return reply(ind.noregis())
		      if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=${xteam}`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
                        break
                        case 'virtualslot2':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            vinz.sendMessage(from, `[  🎰 VIRTUAL SLOT 🎰  ]\n-----------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n-----------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama,\nBerarti Kamu Win dan Mendapatkan +3 Limit\n\nContoh : 🍒 : 🍒 : 🍒<=====`, text, { quoted: mek })
            break
                        case 'togif':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await vinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/togif?apikey=${lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            vinz.sendMessage(from, ini_buff, video, { quoted: mek, mimetype: "video/gif", filename: file_name })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                 //ASUPAN 
                 case 'asupan': // Follow My Github
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupan?apikey=${onlydev}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				break
		case 'asupanamel': // Follow My Github
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanamel?apikey=${onlydev}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				break
		case 'asupanrana': // Follow My Github
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanrana?apikey=${onlydev}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				break
		case 'asupankaia': // Follow My Github
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupankaia?apikey=${onlydev}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				break
		case 'asupanuna': // Follow My Github
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/asupanuna?apikey=${onlydev}`, {method: 'get'})
				buff = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buff, video, {mimetype:  'video/mp4', caption: 'Nehh asupan nya.', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				break
				//Video Maker
				case 'poly':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
					case 'bold':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
					case 'glowing':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(9)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
					case 'army':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
					case 'colorful':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
					case 'retro':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, video, {mimetype:  'video/mp4', caption: 'Nihh Hasilnya Kak', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Subscribe vinz_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }})
				    await limitAdd(sender)
					break 
				// Encrypt Fiture
				case 'base64enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64enc?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base64dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b64dec?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base32enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32enc?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'base32dec': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/b32dec?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result)
					break
					case 'sha1enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(9)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha1?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'sha256enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha256?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'sha512enc': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`https://api.xteam.xyz/encrypt/sha512?text=${gatauda}&APIKEY=${xteam}`)
					reply(anu.result.encrypt)
					break
					case 'encbinary':
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					vinz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break  
				case 'decbinary':
				   decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					vinz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					break
				//New Fiture
				case 'tagsticker':
				  if (!isOwner) return reply(ind.ownerb())
                    if (!isRegistered) return reply(ind.noregis())
                    if (sender.split("@")[0])
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await vinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await vinz.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        vinz.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
				case 'superhero':
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/superhero?apikey=KatoNiBoss&query=${body.slice(11)}`)
                    get_result = get_result.result
		    txt = `Id : ${get_result.id}\n`
                    txt += `Nama : ${get_result.name}\n`
                    txt = `Status : ${get_result.powerstats.intelligence} - ${get_result.powerstats.strength} - ${get_result.powerstats.speed} - ${get_result.powerstats.durability} - ${get_result.powerstats.power} - ${get_result.powerstats.combat}\n`
                    txt += `BioGrap : ${get_result.biography.full-name} - ${get_result.biography.alter-egos}\n`
                    txt += `Series : ${get_result.aliases}\n`
                    txt += `Ultah : ${get_result.place-of-birth}\n`
                    txt += `Place : ${get_result.first-appearance}\n`
                    txt += `Publish : ${get_result.publisher}\n`
                    txt += `Rating : ${get_result.alignment}\n`
                    txt += `Gender : ${get_result.appearance.gender}\n`
                    txt += `Race : ${get_result.appearance.race}\n`
                    txt += `Height : ${get_result.appearance.height}\n`
                    txt += `Warna mata : ${get_result.appearance.eye-color}\n`
                    txt += `Warna rambut : ${get_result.appearance.hair-color}\n`
                    txt += `Work : ${get_result.work.occupation} - ${get_result.work.base} - ${get_result.work.connections}\n`
                    buffer = await getBuffer(get_result.image.url)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: txt})
                    break
				
				case 'apikeycek':
				case 'cekapikey':
		if (!isRegistered) return reply(ind.noregis())
		apiKey = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolhuman}`)
                    get_result = get_result.result
                        txt = `User : Vinz Developer\n`
                        txt += `Req : ${get_result.requests}\n`
                        txt += `Limit : ${get_result.today}\n`
                        txt += `Type : ${get_result.account_type}\n\n`
                        txt += `Expired : ${get_result.expired}\n\n`
                    reply(txt)
                    break
                    case 'ytkomen':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} vinz api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/ytcomment?apikey=${lolhuman}&username=${username}&comment=${comment}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
                    case 'phkomen':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} vinz api.lolhuman.xyz`)
		username = args[0]
		comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${lolhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
                    case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} vinz`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolhuman}&text=${body.slice(9)}`)
                    vinz.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
                    case 'artinama':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${lolhuman}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                    case 'jadian':
					limitAdd(sender) 
				    isLimit(sender)
					if (!isRegistered) return reply(ind.noregis())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
                case 'tebakumur':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolhuman}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
               case 'alay': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(6)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(12)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
					case 'hilih': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/hilih?apikey=${lolhuman}&text=${gatauda}`)
					reply(anu.result)
					break
               case 'namaninja': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: vinz`)
					gatauda = body.slice(11)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/ninja?apikey=${lolhuman}&nama=${gatauda}`)
					reply(anu.result)
					break
                   case 'tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolhuman}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*n${anu.result.flag}`
					setTimeout( () => {
					vinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.name, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, tebakbender, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break
// 
				case 'dompet':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
			case 'baka2':
			if (isBanned) return reply(ind.baned())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/baka?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'bj':
			if (isBanned) return reply(ind.baned())
		buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/bj?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'wallpaperanime':
			if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'pictlolicon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					break
					case 'semoji':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolhuman}`)
                    vinz.sendMessage(from, ini_anu, sticker, {quoted: mek})
                    break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    ini_txt = args.join(" ")
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolhuman}&text=${ini_txt}`)
                    vinz.sendMessage(from, ini_anu, image, {quoted: mek})
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "vinz", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nContoh: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|vinz|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
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
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${lolhuman}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    vinz.sendMessage(from, ini_anu, image, {quoted: mek})
                    break
                case 'xnxxsearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                   case 'pixiv':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${lolhuman}&query=${query}`)
                    vinz.sendMessage(from, ini_anu, image, {quoted: mek})
                    break
                case 'pixivdl':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${lolhuman}`)
                    vinz.sendMessage(from, ini_anu, image, {quoted: mek})
                    break
                case 'xhamstersearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${lolhuman}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break 
					case 'pictwaifu':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'nsfw_avatar':
		                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`)
		                    vinz.sendMessage(from, buffer, image, { quoted: mek })
		                    break
					case 'pictneko':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.group)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
			case 'senku':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=senku&apikey=${apivhtear}`, {method: 'get'})
					var sen = JSON.parse(JSON.stringify(anu.result));
					var ku =  sen[Math.floor(Math.random() * sen.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'senku!!', quoted: mek })
					await limitAdd(sender)
					break
			case 'kurumi2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${apivhtear}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					vinz.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					break
				case 'nakanomiku':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					break
			case 'wibu':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
			case 'quotes2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				quotes = body.slice(1)
				const quo =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				vinz.sendMessage(from, ''+tes+'\n\n_By : vinzganz._', text, { quoted: mek })
				await limitAdd(sender)
				break
		    //Photo Editor By vinz
			case 'facebookpage':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiwajah':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Proses Cok..')
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=VeanganzApi&img=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Proses Cok..')
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=VeanganzApi&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 vinz.sendMessage(from, gender, text, {quoted: mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Proses Cok..')
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=VeanganzApi&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 vinz.sendMessage(from, gender, text, {quoted: mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'hitler':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/hitler?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'trash':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'joke':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(6)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'sepia':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'alien':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/alien?apikey=${lolhuman}&img=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'removebg':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolhuman}&img=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'smile':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/tosmile?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'skullmask':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'fisheye':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/fisheye?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deepfry':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(9)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/deepfry?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'grayscale':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/grayscale?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imageflip':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(11)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/flip?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pixelate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(10)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/pixelate?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagerotate':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(13)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/editor/rotate?apikey=${lolhuman}&img=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'affect':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(8)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${anu.display_url}&apikey=${apileys}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'picture':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'blur':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'invert':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${anu.display_url}&apikey=${apileys}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'meme':
	if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  ct = body.slice(6)
	  atas = ct.split("|")[0];
      bawah = ct.split("|")[1];
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://docs-jojo.herokuapp.com/api/meme-gen?top=${atas}&bottom=${bawah}&img=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
			case 'gtav':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
			case 'gay':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
vinz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
	case 'nightbeach':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'laptop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'linephoto':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'raindrop':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'sketch':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
	case 'facebookpage':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'costumwp':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pantaimalam':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'pencil':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(14)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'bakar':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
	 vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'crossgun':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(ind.wait())
	  owgi = await vinz.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	  vinz.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
			case 'nhentai':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				husw = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${husw}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					vinz.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
			case 'ramaljadian':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${apivhtear}`, {method: 'get'})
					reply(anu.result.hasil)
					break
			case 'memeindo':  
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '*MEME🗿*'})
					await limitAdd(sender)
					break 
			case 'galaxstyle':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
			case 'attp':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				vinz.sendMessage(from, attp2, sticker, {quoted: mek})
				break
			case 'thunder':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/thunder?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'ttp':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ttp?apikey=${lolhuman}&text=${txt}`)
                    vinz.sendMessage(from, buffer, sticker, { quoted: mek })
                    break
                    
                 case 'ttp2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp2?apikey=vinzYT&text=${txt}`)
                    vinz.sendMessage(from, anu, sticker, { quoted: mek })
                    break
                    
                  case 'ttp3':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=vinzYT&text=${txt}`)
                    vinz.sendMessage(from, anu, sticker, { quoted: mek })
                    break
                    
				case 'ttp4':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Kata`)
                    txt = args.join(" ")
                    anu = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp4?apikey=${lolhuman}&text=${txt}`)
                    vinz.sendMessage(from, anu, sticker, { quoted: mek })
                    break   
                    
				case 'bokeh':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bokeh?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'strawberry':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/strawberry?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'metaldark':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/metaldark?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'cerpen':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
			vinz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			reply(anu.result.cerpen)
			await limitAdd(sender) 
			break  
			case 'quotesimage':
            case 'faktaunik':
            case 'katabijak':
            case 'pantun':
            case 'bucin':
            if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolhuman}`)
             reply(get_result.result)
             break
                case 'randomnama':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${lolhuman}`)
                    reply(anu.result)
                    break
			case 'jokerlogo':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
			case 'toxic':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/toxic?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'bloodfrosted':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'imagetext':
				case 'itext':
				case 'itxt':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}vinz`)
                imageToBase64(`https://api.vhtear.com/textxgif?text=${args[0]}&apikey=${apivhtear}`).then((response) => {var buf = Buffer.from(response, 'base64');
                vinz.sendMessage(from, buf, image, {quoted: mek, caption: "DONE BOS✓"})})
                break
				case 'halloween':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'firework':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
				case 'hororblood':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
			case 'animefanart':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/animefanart?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'megumin':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/megumin?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'shinobu':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/shinobu?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'baka':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/baka?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'eroyuri':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/eroyuri?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'wallpaper':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/wallpaper?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'smile':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/smile?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'happy':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/happy?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'dance':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/dance?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'slapnime':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/slap?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
					case 'bj':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/bj?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					break
					case 'neko3':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/neko?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
				case 'wame':
  					 // Fix Bug By vinz				
                 if (!isRegistered) return reply(ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					vinz.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*n*Or ( / )*n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					vinz.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  				  break
                case 'tiktokstalk': // Like My Video
				if (args.length < 1) return reply(`username tiktok mana om?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/tiktod/stalk/?username=${body.slice(13)}&apikey=${onlydev}`)
				anu = await getBuffer(anu.result.user.avatarThumb)
				teks = `➸ *Username* : ${anu.result.user.uniqueId}\n*➸ Nickname :* ${anu.result.user.nickname}\n*➸ Bio :* ${anu.result.user.signature}\n*➸ Verified? :* ${anu.result.user.verified}\n*➸ Jumlah Follower :* ${anu.result.stats.followerCount}\n*➸ Jumlah Following :* ${anu.result.stats.followingCount}\n*➸ Jumlah Like :* ${anu.result.stats.heart}\n*➸ Total Video :* ${anu.result.stats.videoCount}`
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} } }, caption: teks})
				break 
					case 'joox':
                    query = args.join(" ")
		if (!isRegistered) return reply(ind.noregis())
			   if (isBanned) return reply(ind.baned())
					  if (isLimit(sender)) return reply(ind.limitend(pusname))
              if (args.length < 1) return reply(`Contoh: ${prefix}joox Kokoronashi`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
		    get_info = get_result.info
		    txt = '*_[ SUBSCRIBE vinz ]_*n\n'
                    txt += `Judul : *${get_info.song}*n`
                    txt += `Album : *${get_info.album}*n`
                    txt += `Durasi : *${get_info.duration}*n`
                    txt += `Penyanyi : *${get_info.singer}*n`
                    txt += `Tanggal : *${get_info.date}*n`
                    txt += `Lirik :\n *${get_result.lirik}*n`
                    thumbnail = await getBuffer(get_result.image)
                    vinz.sendMessage(from, thumbnail, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: txt})
                    get_audio = await getBuffer(get_result.audio[0].link)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.song}.mp3`, quoted: mek })
                    break
                    case 'play':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Judul : ${get_info.title}\n`
                    ini_txt += `Upload : ${get_info.uploader}\n`
                    ini_txt += `Durasi : ${get_info.duration}\n`
                    ini_txt += `Viewers : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    buffer = await getBuffer(get_info.thumbnail)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: ini_txt})
                    get_audio = await getBuffer(get_result.audio[3].link)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    break
                case 'play2':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result.
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
                    get_audio = await getBuffer(get_result.audio)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video)
                    vinz.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Viewers : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
					case 'trap':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/trap?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'blackpink':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
			case 'goldplay':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
			case 'hologram':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(9)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${ct}`)
				itsmeiky.sendMessage(from, ct, image, {caption: 'Nih kak udah jadi..', quoted: iky})
				await limitAdd(sender)
				break
		case 'textbyname':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/textbyname?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
		case 'herrypoter':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(11)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
		case 'greenneon':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/greenneon?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
		case 'metallogo':			
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(10)
				reply(ind.wait())
				ct = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, ct, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih sdh Jadi...'})
				await limitAdd(sender)
				break
		case 'waifu2':				
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/waifu?apikey=${lolhuman}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: mek })
					await limitAdd(sender) 
					break
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				vinz.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 
			case 'qoutesnime':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`http://api.lolhuman.xyz/api/qoutesnime?apikey=${lolhuman}`)
					reply(anu.data.quote)
					await limitAdd(sender)
					break
			case 'shota':			
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/shota?apikey=${lolhuman}`, {method: 'get'})
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
		case 'sagiri':				
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/sagiri?apikey=${lolhuman}`, {method: 'get'})
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'puisiimg':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${apivhtear}`, {method: 'get'})
                   vinz.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
                case 'yuri':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${lolhuman}`, {method: 'get'})
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
                case 'wancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolhuman}`, {method: 'get'})
                    vinz.sendMessage(from, buffer, image, { quoted: mek })
                    break
			case 'kitsune':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kitsune`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'jadwaltv':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    channel = args[0]
                    tvnow = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhuman}`, {method: 'get'})
                    tvnow = tvnow.result
                    txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in tvnow) {
                        txt += `${x} - ${tvnow[x]}\n`
                    }
                    reply(txt)
                    break
			case 'kusonimesearch':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolhuman}`, {method: 'get'})
                    get_result = get_result.result
                    text += `Title : ${get_result.title}\n`
                    text += `Japanese : ${get_result.japanese}\n`
                    text += `Genre : ${get_result.genre}\n`
                    text += `Seasons : ${get_result.seasons}\n`
                    text += `Producers : ${get_result.producers}\n`
                    text += `Type : ${get_result.type}\n`
                    text += `Status : ${get_result.status}\n`
                    text += `Total Episode : ${get_result.total_episode}\n`
                    text += `Score : ${get_result.score}\n`
                    text += `Duration : ${get_result.duration}\n`
                    text += `Released On : ${get_result.released_on}\n`
                    text += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
			case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              vinz.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*ndetik\nmenit\njam\n\n*contoh*n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					vinz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
		case 'textdaun':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (args.length < 1) return reply(ind.wait())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`http://api.lolhuman.xyz/api/textprome/natureleaves?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					break
                    case 'femdom':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/femdom`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "NIH KAK!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'waifukawai':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "KAWAII!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'kemonomimi':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "ONII CHAN BAKA!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'kuni':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/kuni`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN*!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'neko2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/meow`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "NYANG!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                 case 'holo':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/holo`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "NIH OM!!"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'anime':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						reply(ind.wait())
						fs.writeFileSync('./vinzganz/anime.json', JSON.stringify(anime))
					break
				case 'animesaran':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					vinz.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
			case 'listsurah':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					vinz.sendMessage(from, listsurah() , text, tescuk, cr)
					break
			case 'audio':
				vinz.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 ayam = fs.readFileSync('./vinzganz/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                vinz.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
			case 'kdu':
				vinz.updatePresence(from, Presence.composing) 
 			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 data = fs.readFileSync('./vinzganz/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                vinz.sendMessage(hasil, image, mek, '*Husbu*')
				break
			case 'ganteng':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling Ganteng disini Adalah : @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                    case 'beban':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const met = groupMembers
					const msd = groupMembers
					const siapsa = met[Math.floor(Math.random() * met.length)]
					const sipsd = pushname[Math.floor(Math.random() * msd.length)]
					teks = `Yang paling Beban disini Adalah : @${siapsa.jid.split('@')[0]}`
					membr.push(siapsa.jid)
					mentions(teks, membr, true)
					break
                    case 'cantik':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					membr = []
					const meo = groupMembers
					const msk = groupMembers
					const siaps = meo[Math.floor(Math.random() * meo.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling Cantik disini Adalah : @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
			case 'gecg':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/gecg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                case 'avatar':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/avatar`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "..."})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpapernime':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						axios.get(`https://nekos.life/api/v2/img/wallpaper`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "Nih om"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			case 'wallpaperty':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					reply(ind.wait())
					paper = body.slice(7)
					u = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper/querty=${paper}?apikey=apiKey`, {method: 'get'})
					var per = JSON.parse(JSON.stringify(u.result));
					var trest =  pin[Math.floor(Math.random() * per.length)];
					pinehg = await getBuffer(trest)
					vinz.sendMessage(from, pinehg, image, { caption: '*Wallpaper*n\n*Hasil Pencarian : '+paper+'*', quoted: mek })
					break
			case 'amv':
				vinz.updatePresence(from, Presence.composing) 
			 reply(`*Sedang di Prosess...*`)
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				 data = fs.readFileSync('./vinzganz/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                vinz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
			case 'runtime':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				vinz.updatePresence(from, Presence.composing, cr) 
				uptime = process.uptime()
				subs = `
╔════════════════❍
║┏━━⊱「   𓅂𝐑𝐔𝐍𝐓𝐈𝐌𝐄𓅂   」
│
├─ ❏ \`\`\`Nama Bot :\`\`\` VINZ 𝐁𝐎𝐓
├─ ❏ \`\`\`Server :\`\`\` _${vinz.browserDescription[0]}_
├─ ❏ \`\`\`Runtime :\`\`\` _${kyun(uptime)}_
├─ ❏ \`\`\`Speed :\`\`\` _${process.uptime()}_
│
║┗━━━━━━━━━━━━━━❍
╚═════════════════❍
`
                vinz.sendMessage(from, subs, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./vinzganz/fake.jpg`)},"productId":"3937202479680283","title":"VINZ CHAT 𝐁𝐎𝐓","currencyCode":"RGM","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, isBroadcast: true})
				break
			case 'husbu2':
				vinz.updatePresence(from, Presence.composing) 
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					 data = fs.readFileSync('./vinzganz/husbu.js');
        		         jsonData = JSON.parse(data);
		                 randIndex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[randIndex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
				break
			case 'animesaran2':
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        costum( animesaran2(prefix), text, tescuk, vr)
                                        break
				case 'ram':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${apivhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'batle':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
					gh = `${body.slice(7)}`
					reply(ind.wait())
					gbl1 = gh.split("|")[0];
					gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana kak?')
					data = await getBuffer(`https://ferdiz-api.herokuapp.com/api/battlefield?text=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(data.result)
					frhan.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'ssweb':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					vinz.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
				case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *Sedang AFK Karna ${tels} Jangan Ganggu,ntar dia ngambek*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        vinz.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./vinzganz/emror.jpg');
                vinz.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*Orang ini sedang AFK,Jangan Ganggu!!!*'})
                 break 
                                       break
				case 'unafk':
                                        tels = body.slice(6)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *Telah Kembali dari AFK Karna ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        vinz.sendMessage(from, kl7, text, {quoted: mek})
                                        break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`「 PEMBAYARAN BERHASIL 」*n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
//CASE BADWORD
                 case 'addbadword':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		case 'katakatadilan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'katadoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)
					break
					case 'hemkel':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/Pantun.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
					case 'runtime':
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					
				vinz.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
				case 'tutuptime': //by ★彡Rҽʂƚα~Fʋɳƙყ彡★
              vinz.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					vinz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
					case 'quoterandom':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})
					reply(anu.result)
					break
                  case 'nobadword':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (!isOwner) return reply(ind.ownerb())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('lel🗿')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*fitur BadWord sudah aktif tadi!!*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
		//rules
		case 'rules':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                   costum( rules(prefix), text, tescuk, cr)
                    break
			//randommenu
		case 'spamsms':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhuman}&nomor=${nomor}`)
                    reply("Success")
                    break
        case 'spamtext':
					if (isLimit(sender)) return reply(limits.limitend(pushname))
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                reply('Otw Spam 1x')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('85648910195')) return reply('Gagal tidak dapat spam nomer bot')
                                       if (args[0].startsWith('85876330812')) return reply('Gagal tidak dapat spam nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=${ZeksApi}`, {method: 'get'})
                                       break                           
		case 'googleimage':
				   vinz.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${apivhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					vinz.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					break
                    case 'nsfwblowjob':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break
		case 'quran':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				vinz.sendMessage(from, quran, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolhuman}&text=${txt}`)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
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
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    if (isLimit(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolhuman}&text=${txt}`)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
                    
                    case 'anakharamserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti vinz*`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'hekelserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel vinz*`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'babuserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu vinz*`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'ffserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'bucinserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'bocilepepserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'gayserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pacarserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'sadboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'surgaserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pinterserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti vinz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'badgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'badboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti vinz`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti vinz`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'editodserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodlookingserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti vinz`)
				reply(ind.wait())
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fuckboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti vinz`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'jametserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'youtuberserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'public':
					if (!isOwner) return reply('ONLY OWNER!!')
					if (args.length < 1) return reply('Pilih 1(Aktif) atau 2(Nonaktif) Sayang!')
					if (Number(args[0]) === 1) {
						if (isPublic) return reply('Sudah Aktif')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang semua anggota dapat mengirim perintah✔️')
					} else if (Number(args[0]) === 0) {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang hanya owner dapat mengirim perintah✔️')
					} else {
						reply('Pilih 1(Aktif) atau 2(Nonaktif) Ownerku!!')
					}
					break
		case 'shortlink':
				 // Fix Bug By vinz				
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/shorturl?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolhuman}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
			case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vinz.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				vinz.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} }) 
				break
			case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				anu = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				vinz.sendMessage(from, anu, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, ptt: true })
				break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await vinz.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./src/stik.json`, JSON.stringify(setiker))
					vinz.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
			case 'getsticker':
			case 'gets':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
				namastc = body.slice(12)
				result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
				vinz.sendMessage(from, result, sticker)
				break
           case 'liststicker':
				teks = '*Sticker List :*n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				vinz.sendMessage(from, teks.trim(), extendedText, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, contextInfo: { "mentionedJid": setiker } })
				break
			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				vinz.sendMessage(from, teks.trim(), extendedText, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
			case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vinz.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
				fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
				vinz.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} }) 
				await limitAdd(sender)
				break
			case 'getimage':
            case 'getimg':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
				namastc = body.slice(10)
				anu = fs.readFileSync(`./src/image/${namastc}.jpeg`)
				vinz.sendMessage(from, anu, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, caption: `Result From Database : ${namastc}.jpeg` })
				break
			case 'imagelist':
			case 'listimage':
				teks = '*List Image :*n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				vinz.sendMessage(from, teks.trim(), extendedText, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, contextInfo: { "mentionedJid": imagenye } })
				break
			case 'addvideo':
				if (!isQuotedVideo) return reply('Reply videonya blokk!')
				svst = body.slice(10)
				if (!svst) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await vinz.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
				fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
				vinz.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} }) 
				break
			case 'getvideo':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
				namastc = body.slice(10)
				anu = fs.readFileSync(`./src/video/${namastc}.mp4`)
				vinz.sendMessage(from, anu, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} }) 
				break
			case 'listvideo':
			case 'videolist':
				teks = '*List Video :*n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*`
				vinz.sendMessage(from, teks.trim(), extendedText, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }}, contextInfo: { "mentionedJid": videonye } })
				break   
			case 'nightcore':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })
				       break 
				case 'slow':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} })
						fs.unlinkSync(ran)
					    })
				        break
				case 'tupai':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} })
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} })
						fs.unlinkSync(ran)
					    })
				        break
				case 'gemuk':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} })
						fs.unlinkSync(ran)
					    })
				        break
				case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}__", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} }} })
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						vinz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} } } })
						fs.unlinkSync(ran)
					   })
				       break
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						vinz.sendMessage(from, topt, audio, {mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} } }, ptt:true})
						})
						await limitAdd(sender)
					    break
		case 'delete':
		case 'del':
		case 'd':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isGroup)return reply(mess.only.group)
			if (!isGroupAdmins)return reply(mess.only.admin)
			vinz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			break
		case 'dxd':
				try {
				 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						bufferqq = await getBuffer(res.result)
						vinz.sendMessage(from, bufferqq, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						vinz.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
		case 'loli3':
	if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
           res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzKey}`, {method: 'get'})
           buffer = await getBuffer(res.result)
           vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '*LOLI IS LIFE*'})
		await limitAdd(sender)
           break
		case 'waifu':
                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        vinz.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
		case 'dadu':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			ranp = getRandom('.png')
			rano = getRandom('.webp')
		        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
			exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			fs.unlinkSync(ranp)
			if (err) return reply(ind.wait())
			buffer = fs.readFileSync(rano)
			vinz.sendMessage(from, buffer, sticker)
			fs.unlinkSync(rano)
			})
			break
				case 'darkjoke': 
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				gatauda = body.slice(8)
				reply(ind.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolhuman}`, {method: 'get'})
				vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				await limitAdd(sender)
				break
		case 'googlesearch':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xteam}`)
				buffer = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Hasilnya...' })
				break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('${ownerNumber}', fee)
                reply(`「 SUKSES 」*n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'limit':
				   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				   checkLimit(sender)
					break
			//ANIME
			case 'kurumi':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					vinz.sendMessage(from, nye, image, { caption: 'KURUMI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'miku':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					vinz.sendMessage(from, nye, image, { caption: '*I LOVE MIKUâ™¥*', quoted: mek })
					await limitAdd(sender) 
					break 
			case 'naruto':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					vinz.sendMessage(from, nye, image, { caption: '*`\`\`UZUMAKI NARUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					vinz.sendMessage(from, nye, image, { caption: '*MINATO NAMIKAZE*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					vinz.sendMessage(from, nye, image, { caption: '*UZUMAKI BORUTO*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					vinz.sendMessage(from, nye, image, { caption: '*HINATA HYOUGA*', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					vinz.sendMessage(from, nye, image, { caption: '*SASUKE UCIHA', quoted: mek })
					await limitAdd(sender) 
					break 
					case 'bitly':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=${TobzKey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'tinyurl':
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.xteam.xyz/shorturl/tinyurl?url=${args[0]}&APIKEY=${xteam}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				vinz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
				case 'sakura':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					vinz.sendMessage(from, nye, image, { caption: '*SAKURA*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rem':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limits.limitend(pushname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=rem`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					vinz.sendMessage(from, nye, image, { caption: '*REM-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'chika':
                                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                if (isLimit(sender)) return reply(limits.limitend(pushname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					vinz.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
					await limitAdd(sender) 
					break
				case 'kurumi2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(limitend(pushname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					vinz.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek })
					await limitAdd(sender) 
					break 
					case 'stickerwm':
                    if ((isMedia && !vinz.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await vinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            vinz.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case 'kaneki':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())  
				if (isLimit(sender)) return reply(limitend(pushname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					vinz.sendMessage(from, nye, image, { caption: '*KANEKI-KUN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'touka':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					vinz.sendMessage(from, nye, image, { caption: '*TOUKA-CHAN*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					vinz.sendMessage(from, nye, image, { caption: '*RIZE-CHAN*', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'vinz':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+vinz`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					vinz.sendMessage(from, nye, image, { caption: 'vinz-CHAN', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(ind.wait())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					vinz.sendMessage(from, nye, image, { caption: 'ITORI-CHAN', quoted: mek })
					await limitAdd(sender) 
					break
//sound menu by ${lolhuman}				
case 'sound':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
const dap = fs.readFileSync('./mp3/sound.mp3')
vinz.sendMessage(from, dap, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound1':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
satu = fs.readFileSync('./mp3/sound1.mp3');
vinz.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound2':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
dua = fs.readFileSync('./mp3/sound2.mp3');
vinz.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound3':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tiga = fs.readFileSync('./mp3/sound3.mp3');
vinz.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound4':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
empat = fs.readFileSync('./mp3/sound4.mp3');
vinz.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound5':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lima = fs.readFileSync('./mp3/sound5.mp3');
vinz.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound6':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
enam = fs.readFileSync('./mp3/sound6.mp3');
vinz.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound7':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tujuh = fs.readFileSync('./mp3/sound7.mp3');
vinz.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound8':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lapan = fs.readFileSync('./mp3/sound8.mp3');
vinz.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound9':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./mp3/sound9.mp3');
vinz.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound10':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./mp3/sound10.mp3');
vinz.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break		     		
case 'sound11':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./mp3/sound11.mp3');
vinz.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound10':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./mp3/sound12.mp3');
vinz.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break		     		
case 'sasageyo':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lima = fs.readFileSync('./mp3/Sasageyo.mp3');
vinz.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'pota':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
enam = fs.readFileSync('./mp3/pota.mp3');
vinz.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'welot':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tujuh = fs.readFileSync('./mp3/welot.mp3');
vinz.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'ganteng':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lapan = fs.readFileSync('./mp3/ganteng.mp3');
vinz.sendMessage(from, lapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'gatal':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
bilan = fs.readFileSync('./mp3/gatal.mp3');
vinz.sendMessage(from, bilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'alay':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
puluh = fs.readFileSync('./mp3/alay.mp3');
vinz.sendMessage(from, puluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break		     		
			//MAKER
			case 'vinta':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply(ind.wrongf())
					vin = body.slice(7)
					reply(ind.wait())
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					vinz.sendMessage(from, vintage, image, {caption: 'nih anjim ${vin}', quoted: mek})
					await limitAdd(sender)
					break
					case 'summer':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'sandwrite':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'metaldark':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'dropwater':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'skeleton':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'avatarhacker':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${txt}&apikey=${apivhtear}`, {method: 'get'})
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'glowmetallic':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(14)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${txt}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'viettel':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/viettel_text?text=${txt}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'matrick':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/matrix_text?text=${txt}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'girlgrafity':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(12)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${txt1}&text2=${txt2}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'watermaker':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(10)
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/water_maker?text=${txt}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'koifish':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(9)
					reply(ind.wait())
					anu = await getBuffer(`https://api.xteam.xyz/textpro/koifish?text=${txt}&APIKEY=${xteam}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'textgoogle':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(11)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    txt3 = txt.split("|")[2];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/googletext?text1=${txt1}&text2=${txt2}&text3=${txt3}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					
					case 'ballon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(7)
					txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
					reply(ind.wait())
					anu = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${txt1}&text2=${txt2}&apikey=${apivhtear}`)
					vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
				
					
					case 'neontext':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'multimaterial':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(15)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/multimaterial?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'webmatrix':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/underwebmatrix?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					case 'blueglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/blueglass?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'orangeglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/orangeglass?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'greenglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(12)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/greeglass?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'spamchat':
                    if (!isOwner) return reply(ind.ownerb())
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (args.length < 2) return reply(`Mau Spamchat ke siapa? Contoh: ${prefix}spamchat 6282158549899 Oy ajc`)
          				if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
          
                        mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
          				const kontul = body.slice(8)
                      if (kontul.length > 300) return vinz.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const busah = `*[  SPAM CHAT  ]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${kontul}`

                      var options = {
                         text: busah,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})
                       .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                       .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { vinz.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    reply('SPAMCHAT ANDA TELAH SAMPAI KE NOMOR YG DITUJU')
                    break
					
					case 'dota2avatar':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/dota2avatar?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'avatarlol':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/lolavatarglitch?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'coroverwatch':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(14)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/photooxy/coveroverwatch?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'purpleglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/purpleglass?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					case 'redglass':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/redglass?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
					
					
					case 'bannerlol':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya Mana Kak??')
					txt = body.slice(11)
					reply(ind.wait())
					anu = await getBuffer(`https://lolhuman.herokuapp.com/api/photooxy3/bannerlol?apikey=${lolhuman}&text=${txt}`)
					vinz.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih hasilnyaaaa'})
					await limitAdd(sender)
					break
					
					case 'newyearcard':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/newyearcard?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
                    case 'breakwall':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(11)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/breakwall?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
                    case 'glossychrome':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(14)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/ephoto1/glossychrome?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
                    case 'gamelogo':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.vhtear.com/gamelogo?text=${aruga}&apikey=${apivhtear}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
                    case 'futureneon':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(12)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break 
                    case 'qrcode':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/qrcode?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'quotesmaker':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/quotemaker?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
                    case 'quotesmaker2':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(15)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotesmaker2 teks|watermark\n\nEx :\n${prefix}quotesmaker2 ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/quotemaker2?apikey=${lolhuman}&text=${quote}&author=${wm}`, {method: 'get'})
					anu = await getBuffer(anu.result)
					vinz.sendMessage(from, anu, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
                    case 'texttovn':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(10)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/gtts/id?apikey=${lolhuman}&text=${aruga}`)
					vinz.sendMessage(from, anu, audio, {quoted: mek, ptt:true})
					await limitAdd(sender)
					break
                    case 'emojitopng':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(12)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/smoji/${aruga}?apikey=${lolhuman}`)
					vinz.sendMessage(from, aruga, image, {quoted: mek})
					await limitAdd(sender)
					break
                    case 'emojitopng2':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(13)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/sticker/emojitopngwhatsapp?emo=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: mek})
					await limitAdd(sender)
					break
                    case 'stickersearch':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(15)
					reply(ind.wait())
					aruga = await getBuffer(`https://lolhuman.herokuapp.com/api/stickerwa?apikey=${lolhuman}&query=${aruga}`)
					vinz.sendMessage(from, anu, sticker, {quoted: mek})
					await limitAdd(sender)
					break  
                    case 'fflogo':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${aruga}&apikey=${apivhtear}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
				case 'liputan6': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Date* : ${i.isoDate}\n*Description* : ${i.description}\n=================\n`
				}
				reply(teks)
				break
		case 'cnnnews': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.contentSnippet}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'republika': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'temponews': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Link* : ${i.link}\n*Content* : ${i.content}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'kumparannews': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creator:* : ${i.creator}\n*Title* : ${i.title}\n*Link* : ${i.link}\n*Categori* : ${i.categories}\n*Description* : ${i.description}\n*Date* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'lazymedia': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				break
		case 'infohoax': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari berita apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/turnbackhoax?page=${body.slice(9)}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Author:* : ${i.author}\n*Title* : ${i.title}\n*Tag* : ${i.tag}\n*Time* : ${i.time}\n*Description* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				break
		case 'resepmakanan': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`mau nyari resep makanan apaan bang?`)
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/resepmasakan?q=${body.slice(13)}&apikey=${onlydev}`)
				teks = '=================\n'
				for (let i of asu.hasil.results) {
					teks += `*Title* : ${i.title}\n*Key* : ${i.key}\n*Time* : ${i.times}\n*Serving* : ${i.serving}\n*Difficulty* : ${i.difficulty}\n=================\n`
				}
				reply(teks)
				break
		case 'doaharian': // Like My Video	
				vinz.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat': // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'jadwalsholat': // Like My Video
				if (args.length < 1) return reply(`kotanya mana bang?`)
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/jadwalshalat?kota=${body.slice(14)}&apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Tanggal : ${i.tanggal}\n*Imsyak* : ${i.imsyak}\n*Shubuh* : ${i.shubuh}\n*Terbit* : ${i.terbit}\n*Dhuha* : ${i.dhuha}\n*Dzuhur* : ${i.dzuhur}\n*Ashar* : ${i.ashr}\n*Magrib* : ${i.magrib}\n*Isya* : ${i.isya}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'kisahnabi': // Like My Video
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=${onlydev}`)
				buffer7 = await getBuffer(anu.result.nabi.image)
				teks = `*HASIL*n\n*➸ Nama Nabi :* ${anu.result.nabi.nabi}\n*➸ Lahir :* ${anu.result.nabi.lahir}\n*➸ Umur :* ${anu.result.nabi.umur}\n*➸ Tempat :* ${anu.result.nabi.tempat}\n*➸ Kisah :* ${anu.result.nabi.kisah}`
				vinz.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} } }, caption: teks})
				break
		case 'tahlil': // Like My Video
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=${onlydev}`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'ayatkursi': // Like My Video
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=${onlydev}`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				vinz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_${namabot}_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./vinzganz/fake.jpg')} } }, caption: 'Nih hasilnya kak...'})
				break
				case 'googlesearch': // Follow My Github	
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply(ind.wrongf())
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(ind.wait())
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${onlydev}`)
				anu = await getBuffer(anu.result.url)
				vinz.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih hasilnya kak...'})
				await limitAdd(sender)
				break
					case 'captainamerica':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(16)
					reply(ind.wait())
					aruga = await getBuffer(`https://api.xteam.xyz/textpro/captainamerica?text=${aruga}&APIKEY=${xteam}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'sumery':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(8)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'blood':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(7)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'firework':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					arugazzz = body.slice(10)
					reply(ind.wait())
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					vinz.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					await limitAdd(sender)
					break
					case 'lava':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply(ind.wrongf())
					aruga = body.slice(6)
					reply(ind.wait())
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					vinz.sendMessage(from, aruga, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
					case 'valorantbanner':
					// ❗Comment My Video
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Text Mana Cuy?\n*Contoh ${prefix}valorantbanner vinz|Ganteng|Banget*`)
				ct = body.slice(15)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=${lolhuman}&text1=${ll1}&text2=${ll2}&text3=${ll3}`)
				reply(ind.wait())
				vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Hasilnya...' })
				break
				case 'pemainbola':
				// ❗Comment My Video
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Text Mana Cuy?\n*Contoh ${prefix}pemainbola vinz|17*`)
				ct = body.slice(11)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto2/juventusshirt?apikey=${lolhuman}&text1=${dap1}&text2=${dap2}`)
				reply(ind.wait())
				vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Hasilnya...' })
				break
				case 'codbanner':
				// ❗Comment My Video
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Text Mana Cuy?\n*Contoh ${prefix}pemainbola vinz|Ganz*`)
				ct = body.slice(11)
				dap1 = ct.split("|")[0];
                dap2 = ct.split("|")[1];
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolhuman}&text1=${dap1}&text2=${dap2}`)
				reply(ind.wait())
				vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Hasilnya...' })
				break
				case 'galaxybat':
				// ❗Comment My Video
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Text Mana Cuy?\n*Contoh ${prefix}galaxybat vinzGanz*`)
				ct = body.slice(10)
				anu = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxybat?apikey=${lolhuman}&text=${ct}`)
				reply(ind.wait())
				vinz.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
					case 'silktext':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))				
					if (args.length < 1) return reply(ind.wrongf())
					silk = body.slice(10)
					if (silk.length > 7) return reply('Teksnya kepanjangan Tod, maksimal 6 karakter')
					buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${apivhtear}`)
					reply(ind.wait())
		    			vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
		    			await limitAdd(sender)	
		    			break
					case 'slide':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana Tod?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait)
					vinz.sendMessage(from, atytyd, video, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender) 
					break  
					case 'pubglogo':
				if (args.length < 1) return reply(`textnya mana om?`)
				ct = body.slice(9)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(ind.wait())
				anu = await fetchJson(`https://dapuhy-apikey.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=${xteam}`)
				buffer = await getBuffer(anu.result.url)
				vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Hasilnya...' })
				break  
					case 'cml':
					case 'ml':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
                     			if (args.length > 10) return reply('karakter minimal 10')
					cml = `${body.slice(5)}`
					cml1 = cml.split("/")[0];
					cml2 = cml.split("/")[1];
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=${cml1}&text=${cml2}&apikey=${apivhtear}`, {method: 'get'})
					vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender) 
					break  
case 'hartatahta':
if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
if (isLimit(sender)) return reply(ind.limitend(pusname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
har = body.slice(12)
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${apivhtear}` )
reply('「❗」Hirti Tihti Tai Anjg :v')
vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
await limitAdd(sender)
break
			case 'wasted':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
nobg = fs.readFileSync(rano)
vinz.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break
case 'triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolhuman}&img=${ini_url}`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        vinz.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
                                             case 'drawing':
                         if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())                    
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  owgi = await vinz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 vinz.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('reply imagenya kak!')
}
break
					case 'antilinkgrup':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('UDAH NYALA KAK')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MENGAKTIFKAN ANTI LINK DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim link grup`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('SUKSES MEMATIKAN ANTI LINK DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antiporn':
					case 'antiporno':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('Ketik 1 untuk Mengaktifkan Anti Porno\nContoh : ${prefix}antiporn 1')
					if (Number(args[0]) === 1) {
						if (isAntiPorn) return reply('UDAH NYALA KAK')
						antiporn.push(from)
						fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))
						reply('SUKSES MENGAKTIFKAN ANTI PORNO DI GRUP')
						vinz.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim Hal yg Mengandung Porno`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiPorn) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antiporn.splice(ini, 1)
						fs.writeFileSync('./src/antiporn.json', JSON.stringify(antiporn))
						reply('SUKSES MEMATIKAN ANTI PORNO DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
                case 'quotes':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					await limitAdd(sender)
					break		
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
					break 
                case 'slap':
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					vinz.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*n\n'+ ple })
					await limitAdd(sender)
					break
					case 'tampar':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						vinz.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                    vinz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'setbotpp':
					if (!isOwner) return reply(ind.ownerb())
				    vinz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(enmedia)
					await vinz.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya,Wangy sekali😗')
					break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n「 _BRAINLY_ 」*n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					vinz.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await vinz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinz.sendMessage(_.jid, buff, image, {caption: `「 BC GROUP 」*n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 BC GROUP 」*n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
				case 'sewabot':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					vinz.sendMessage(from, sewabot(prefix) , text, { quoted: mek })
					break 
				case 'pinterest': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					vinz.sendMessage(from, pinehg, image, { caption: '*Pinterest*n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'husbu':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			   	if (!isGroup) return reply(ind.groupo())
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(res.image)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
				case 'loli':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(6)
					anu = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					vinz.sendMessage(from, buffer, image, { caption: 'kyaa >_< o... onii - chan >///<', quoted: mek})
					await limitAdd(sender)
					break		
				case 'nekonime':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(10)
					anu = await fetchJson(`https://api.vhtear.com/randomnekonime&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(anu.result.result)
					vinz.sendMessage(from, buffer, image, { caption: 'Save loli, Pukul furry', quoted: mek})
					await limitAdd(sender)
					break
				case 'neko':
                		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
               			if (isLimit(sender)) return reply(ind.limitend(pusname))
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih nekonime mu >_<'})
					await limitAdd(sender)
					break
					case 'tebakgambar':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${apivhtear}`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soalImg)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					vinz.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'ranime':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
					await limitAdd(sender)
					break
				case 'nsfwloli':
				try {   
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isGroup) return reply(ind.groupo()) 
				res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${apivhtear}`, {method: 'get'})
					reply(ind.wait())
					buffer = await getBuffer(res.result.result)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
				}
					await limitAdd(sender)
					break 
				case 'ero':
				    try {
                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/ero`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwpussy':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/pussy_jpg`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwyuri':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						axios.get(`https://nekos.life/api/v2/img/yuri`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					vinz.sendMessage(from, buf, image, {quoted: mek,caption: "*INGAT ADA TUHAN KAK*"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwtrap':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${lolhuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwloli2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '*INGAT ADA TUHAN KAK*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('*ERROR*')
					}
					break
			case 'nsfwwaifu':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break
			case 'waifu2':
				    try {
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
                        if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=${lolhuman}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '*:)*'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwneko':
				try {  
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzKey}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'wibu2':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${apivhtear}`)
					reply(ind.wait())
					buffer = await getBuffer(data.result.foto)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '^W^'})
					await limitAdd(sender)
					break
			case 'nekopoi':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
			if (!isGroup) return reply(ind.groupo()) 
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
			reply(ind.wait())
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			    case 'hentai':
			    if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(limitend(pushname))
					if (!isNsfw) return reply(' *FALSE* ')
				    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolhuman}`)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                    case 'wikipedia':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                    case 'translate':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhuman}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
				case 'randomhentong':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
					gatauda = body.slice(15)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzKey}`)
					reply(ind.wait())
					buffer = await getBuffer(anu.result)
					vinz.sendMessage(from, buffer, image, { caption: 'Comli teross', quoted: mek})
					await limitAdd(sender)
					break			
			case 'blowjob':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isNsfw) return reply(ind.nsfwoff())
				ranp = getRandom('.gif')
				rano = getRandom('.webp')
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
				fs.unlinkSync(ranp)
				if (err) return reply(ind.stikga())
				buffer = fs.readFileSync(rano)
				vinz.sendMessage(from, buffer, sticker)
				fs.unlinkSync(rano)
				
				})
				break
		case 'resepmasakan':  
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                reply(ind.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${apivhtear}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*n${anu.result.desc}\n\n*BAHAN² YG DIPERLUKAN*n${anu.result.bahan}\n\n*CARA MASAKNYA*n${anu.result.cara}`
                   vinz.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
                   case 'stalkig':
                   if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                   if (isLimit(sender)) return reply(ind.limitend(pusname))
                     teks = body.slice(9)
                     anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${apivhtear}`, {method: 'get'})
                     reply('「❗」Sabar Lagi Stalking IG nya kak')
                     buffer = await getBuffer(anu.result.picture)
                     hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username?* : _${anu.result.username}_ \n *Nama??* : _${anu.result.full_name}_ \n *Jumlah Follower??﹦?* : _${anu.result.follower}_ \n *Jumlah Following?* : _${anu.result.follow}_ \n *Jumlah Post?* : _${anu.result.post_count}_ \n *Biografi?? :* _${anu.result.biography}`
                    vinz.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			        break 
			       case 'githubstalk':
					if (!isRegistered) return reply(ind.noregis())
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=${lolhuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'tkstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolhuman}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break
		case 'ytstalk':
					if (!isRegistered) return reply(ind.noregis())
					ytk = `${body.slice(11)}`
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=RiuApikey&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••\n'
					for (let search of anu.result) {
						cari += `*Channel* : ${search.channel_name}\n*Info* : ${search.channel_about}\n*Created* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					break
					case 'takestick':
		if (!isRegistered) return reply(ind.noregis())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz|Ganz`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await vinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            vinz.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case 'attp2':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/attp?apikey=${lolhuman}&text=${ini_txt}`)
                    vinz.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    break
                    case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			if (!isGroupAdmins) return reply(ind.admin())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					vinz.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    			vinz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
					case 'soundquran':
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					reply(`[❗] Wait Bro Rada Lama Durasinya 30 Menit`)
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/18?apikey=${lolhuman}`)
					vinz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `masyaallah.mp3`, quoted: mek })
					break
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					vinz.updatePresence(from, Presence.composing) 
					teks = `*Ini adalah list group ${namabot} :\n\n*`
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `*[${no.toString()}]* @${hehehe.split('@')[0]}\n`
					}
					teks += `\n*Total grup : ${groupId.length}*`
					vinz.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
					case 'blocklist':
					teks = 'List Beban Kontak :\n'
					for (let block of blocked) {
						teks += `➢ @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					vinz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
		case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                const biasalah = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                if(isNaN(umurUser)) return await reply('*Umur harus berupa angka!*')       
                if (namaUser.length >= 30) return reply(`*why is your name so long it's a name or a train*`)
                if (umurUser > 20) return reply(`*UMUR KAMU TERLALU TUA*`)
                if (umurUser < 10) return reply(`*UMUR KAMU TERLALU MUDA*`)
                pp_user = await getBuffer(`https://i.ibb.co/zbS493t/20210403-184336.jpg`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, biasalah, serialUser)
                    await vinz.sendMessage(from, pp_user, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, biasalah, sender)})
                    reply('Terima Kasih Sudah Absen')
		    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(biasalah, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, biasalah, serialUser)
                    await vinz.sendMessage(from, pp_user, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, biasalah, sender)})
		    reply('Terima Kasih Sudah Daftar')
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(biasalah, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
					case 'totaluser':
					vinz.updatePresence(from, Presence.composing) 
 
					if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())   
					teks = `\`\`\`╭────*「 *TOTAL USER vinz BOT👑* 」\n\`\`\``
					no = 0
					for (let hehehe of registered) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${_registered.length}\n╰──────*「 *vinz BOT* 」*────`
					vinz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": registered}})
					break
            	case 'mining':
                      if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Nih Untukmu Owner♥ ${one}Xp `)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					vinz.sendMessage(from, 'Pertanyaan : *'+bisakah+'*n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					vinz.sendMessage(from, 'Pertanyaan : *'+kapankah+'*n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
         			  case 'apakah':
         			  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					vinz.sendMessage(from, 'Pertanyaan : *'+apakah+'*n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
		case 'babi':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
                    const gmek = await vinz.getGroupMembersId(groupId)
                    let gmik = gmek[Math.floor(Math.random() * gmek.length)]
                    const mmkk = `YANG PALING BABI DISINI ADALAH @${gmik.replace(/@c.us/g, '')}`
                    vinz.sendTextWithMentions(dari, mmkk, id)
                    break
                    case 'nulis2':
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${lolhuman}&text=${ct}`)
				vinz.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
		case 'nulis3':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${buffer}&apikey`, {method: 'get'})
				vinz.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'nulis4':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${buffer}&APIKEY=${xteam}`, {method: 'get'})
				vinz.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
				case 'nulis5':		
                 if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				buffer = body.slice(7)
				reply(ind.wait())
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${buffer}&APIKEY=${xteam}`, {method: 'get'})
				vinz.sendMessage(from, buffer, image, {caption: 'Nih kak udah jadi..', quoted: mek})
				await limitAdd(sender)
				break
	case 'nulis':
	case 'tulis':
	vinz.updatePresence(from, Presence.composing)
	if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
			reply(ind.wait)
					tulis = body.slice(7)
				  nama = tulis.split("|")[0];
					kelas = tulis.split("|")[1];
					isi = tulis.split("|")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					vinz.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'quran':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					vinz.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'pasangan':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${apivhtear}`, {method: 'get'})
				vinz.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
				await limitAdd(sender) 
				break 
	  case 'seberapagay':
           if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
		teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   await limitAdd(sender)
		   break
				case 'pbucin':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           			if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				vinz.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
			case 'pantun':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           		if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			vinz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'anime':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname))
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result)
					vinz.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
                case 'kucing':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kucing`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					vinz.sendMessage(from, pok, image, { quoted: mek , caption: '*nyang🐈*'})
					await limitAdd(sender) 
					break 
		case 'fitnah':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))				
		if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					vinz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
					case 'ntahlah':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query={body.slice(11)}&apikey=${apivhtear}`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					vinz.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
	case 'hobby':
           if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Nonton Wibu']
					const by = hob[Math.floor(Math.random() * hob.length)]
					vinz.sendMessage(from, 'Pertanyaan : *'+hobby+'*n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'meme':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(ind.wait())
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					vinz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
					case 'testime':
					setTimeout( () => {
					vinz.sendMessage(from, 'Waktu habis:v', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '5 Detik lagi', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '10 Detik lagi', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
		case 'caklontong':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${apivhtear}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					vinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
					case 'join':
                if (!isOwner && !isRegistered) return await reply('Btw,lu siapa???')
                if (isGroup) return await reply('Maap, command hanya untuk private')
                if (args.length == 0) return await reply('Reply Link Grupnya!!')
                var link = args[0].replace("https://chat.whatsapp.com/", "")
                await vinz.acceptInvite(link)
                break
			case 'family100':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${apivhtear}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					vinz.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					vinz.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
         	case 'ping':
          	if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
           	await vinz.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
		break
               			case 'menu': 
               			case 'help':
                 if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
                    uptime = process.uptime()
                    myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const yamete = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
              const waktu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			  const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
			  const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
              const jalan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4')
		      const yey = await axios.get('https://xinzbot-api.herokuapp.com/api/ucapan?apikey=XinzBot&timeZone=Asia/Jakarta')
              const vlo = await getBuffer('https://i.ibb.co/4VWy1BM/logo.jpg')
                    subscribe = `
╭───────────
┣━━⊱「   *INFO USER*  」
│
├─ ❏ Nama : ${pushname}
├─ ❏ Nomor : @${sender.split('@')[0]}
├─ ❏ Uang : Rp${uangku}
├─ ❏ Role : ${role}
├─ ❏ Level : ${getLevelingLevel(sender)}
├─ ❏ XP : ${getLevelingXp(sender)}
│
┣━━⊱「  *INFO BOT* 」
│
├─ ❏ Dev : I Am Vinz
├─ ❏ Team : Naswari Team
├─ ❏ Fitur : 986 
├─ ❏ Nama : ${namabot}
├─ ❏ Owner : ${namaowner}
├─ ❏ Prefix : ${prefix}
├─ ❏ Speed : ${process.uptime()}
├─ ❏ User Register : ${_registered.length}
├─ ❏ Wa Version : ${wa_version}
├─ ❏👾OS : ${os_version}
├─ ❏💻 : ${device_manufacturer}
├─ ❏🌐Browser : ${vinz.browserDescription[1]}
├─ ❏ 🕰 : ${jam}:${menit}:${detik}
├─ ❏ 🗓️ : ${day} - ${myMonths[bulan]} - ${year}
│
│
┣━━⊱「 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}info*
├─ ❏ *${prefix}ping*
├─ ❏ *${prefix}rules*
├─ ❏ *${prefix}owner*
├─ ❏ *${prefix}sewabot*
├─ ❏ *${prefix}setnamabot*
├─ ❏ *${prefix}daftar*
├─ ❏ *${prefix}cekapikey*
├─ ❏ *${prefix}afk*
├─ ❏ *${prefix}report*
├─ ❏ *${prefix}requests*
├─ ❏ *${prefix}totaluser*
├─ ❏ *${prefix}testime*
│
┣━━⊱「𝗔𝗡𝗧𝗜 𝗩𝗜𝗥𝗧𝗘𝗫 𝗠𝗘𝗡𝗨」
│
├─ ❏ *${prefix}antivirtex*
├─ ❏ *${prefix}antialakazam*
├─ ❏ *${prefix}antixvirus*
├─ ❏ *${prefix}antivirustebel*
├─ ❏ *${prefix}anticollosal*
├─ ❏ *${prefix}antiviruschina*
│
┣━━⊱「  𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨  」
│
├─ ❏ *${prefix}nightcore*
├─ ❏ *${prefix}slow*
├─ ❏ *${prefix}tupai*
├─ ❏ *${prefix}blub*
├─ ❏ *${prefix}gemuk*
├─ ❏ *${prefix}ghost*
├─ ❏ *${prefix}bass*
├─ ❏ *${prefix}toptt*
│
┣━━⊱「 𝗖𝗟𝗢𝗨𝗗 𝗦𝗧𝗢𝗥𝗔𝗚𝗘 」
│
├─ ❏ *${prefix}addsticker*
├─ ❏ *${prefix}getsticker*
├─ ❏ *${prefix}stickerlist*
├─ ❏ *${prefix}addvideo*
├─ ❏ *${prefix}getvideo*
├─ ❏ *${prefix}videolist*
├─ ❏ *${prefix}getimage*
├─ ❏ *${prefix}addImage*
├─ ❏ *${prefix}imagelist*
├─ ❏ *${prefix}addaudio*
├─ ❏ *${prefix}getaudio*
├─ ❏ *${prefix}audiolist*
│
┣━━⊱「 𝗘𝗡𝗖𝗥𝗬𝗣𝗧 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}base64enc*
├─ ❏ *${prefix}base64dec*
├─ ❏ *${prefix}base32enc*
├─ ❏ *${prefix}base32dec*
├─ ❏ *${prefix}sha1enc*
├─ ❏ *${prefix}sha256enc*
├─ ❏ *${prefix}sha512enc*
├─ ❏ *${prefix}encbinary*
├─ ❏ *${prefix}decbinary*
│
┣━━⊱「  𝗩𝗜𝗗𝗘𝗢 𝗠𝗔𝗞𝗘𝗥  」
│
├─ ❏ *${prefix}army*
├─ ❏ *${prefix}colorful*
├─ ❏ *${prefix}poly*
├─ ❏ *${prefix}bold*
├─ ❏ *${prefix}glowing*
├─ ❏ *${prefix}retro*
│
┣━━⊱「 𝗡𝗘𝗪 𝗙𝗜𝗧𝗨𝗥𝗘 」
│
├─ ❏ *${prefix}virtualslot*
├─ ❏ *${prefix}virtualslot2*
├─ ❏ *${prefix}suit*
├─ ❏ *${prefix}blueglass*
├─ ❏ *${prefix}greenglass*
├─ ❏ *${prefix}purpleglass*
├─ ❏ *${prefix}orangeglass*
├─ ❏ *${prefix}avatarlol*
├─ ❏ *${prefix}oroverwatch*
├─ ❏ *${prefix}dota2avatar*
├─ ❏ *${prefix}koifish*
├─ ❏ *${prefix}togif*
├─ ❏ *${prefix}buggc*
├─ ❏ *${prefix}buggc2*
├─ ❏ *${prefix}tomp3*
├─ ❏ *${prefix}chord*
├─ ❏ *${prefix}redglass*
├─ ❏ *${prefix}webmatrix*
├─ ❏ *${prefix}multimaterial*
├─ ❏ *${prefix}tagsticker*
├─ ❏ *${prefix}superhero*
├─ ❏ *${prefix}skeleton*
├─ ❏ *${prefix}avatarhacker*
├─ ❏ *${prefix}watermaker*
├─ ❏ *${prefix}ballon*
├─ ❏ *${prefix}girlgrafity*
├─ ❏ *${prefix}matrick*
├─ ❏ *${prefix}viettel*
├─ ❏ *${prefix}glowmetallic*
├─ ❏ *${prefix}textgoogle*
├─ ❏ *${prefix}tinyurl*
├─ ❏ *${prefix}githubstalk*
├─ ❏ *${prefix}ytstalk*
├─ ❏ *${prefix}tkstalk*
├─ ❏ *${prefix}attp2*
├─ ❏ *${prefix}tebakbendera*
├─ ❏ *${prefix}hilih*
├─ ❏ *${prefix}alay*
├─ ❏ *${prefix}nulis4*
├─ ❏ *${prefix}nulis5*
├─ ❏ *${prefix}amongus*
├─ ❏ *${prefix}namaninja*
├─ ❏ *${prefix}tebakumur*
├─ ❏ *${prefix}besarkecil*
├─ ❏ *${prefix}ytkomen*
├─ ❏ *${prefix}phkomen*
├─ ❏ *${prefix}jodoh*
├─ ❏ *${prefix}jadian*
├─ ❏ *${prefix}weton*
├─ ❏ *${prefix}tebakumur*
├─ ❏ *${prefix}purba*
├─ ❏ *${prefix}cekapikey*
│
┣━━⊱「 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}shopee*
├─ ❏ *${prefix}google*
├─ ❏ *${prefix}gimage*
├─ ❏ *${prefix}gimage2*
├─ ❏ *${prefix}konachan*
├─ ❏ *${prefix}playstore*
├─ ❏ *${prefix}stickerwa*
├─ ❏ *${prefix}wallpapersearch*
├─ ❏ *${prefix}wallpapersearch2*
├─ ❏ *${prefix}ytsearch*
├─ ❏ *${prefix}wikipedia*
├─ ❏ *${prefix}translate*
│
┣━━⊱「 𝗔𝗦𝗨𝗣𝗔𝗡 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}asupan*
├─ ❏ *${prefix}asupan2*
├─ ❏ *${prefix}asupanrana*
├─ ❏ *${prefix}asupanamel*
├─ ❏ *${prefix}asupankaia*
├─ ❏ *${prefix}asupanuna*
│
┣━━⊱「 𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}sticker* 
├─ ❏ *${prefix}︎shadow*
├─ ❏ *${prefix}cup*
├─ ❏ *${prefix}cup1*
├─ ❏ *${prefix}googlesearch*
├─ ❏ *${prefix}avenger*
├─ ❏ *${prefix}smoke*
├─ ❏ *${prefix}burnpaper*
├─ ❏ *${prefix}lovemessage*
├─ ❏ *${prefix}undergrass*
├─ ❏ *${prefix}valorantbanner*
├─ ❏ *${prefix}fflogo*
├─ ❏ *${prefix}newyearcard*
├─ ❏ *${prefix}bannerlol*
├─ ❏ *${prefix}captainamerica*
├─ ❏ *${prefix}itxt*
├─ ❏ *${prefix}starnight*
├─ ❏ *${prefix}codbanner*
├─ ❏ *${prefix}love*
├─ ❏ *${prefix}woodheart*
├─ ❏ *${prefix}flowerheart*
├─ ❏ *${prefix}woodenboard*
├─ ❏ *${prefix}darkneon*
├─ ❏ *${prefix}candlemug*
├─ ❏ *${prefix}lovemsg*
├─ ❏ *${prefix}mugflower*
├─ ❏ *${prefix}narutobanner*
├─ ❏ *${prefix}paperonglass*
├─ ❏ *${prefix}romancetext*
├─ ❏ *${prefix}shadowtext*
├─ ❏ *${prefix}qrcode*
├─ ❏ *${prefix}emojitopng*
├─ ❏ *${prefix}glowingneon*
├─ ❏ *${prefix}space*
├─ ❏ *${prefix}hpotter*
├─ ❏ *${prefix}woodblock*
├─ ❏ *${prefix}summer3d*
├─ ❏ *${prefix}hartatahta*
├─ ❏ *${prefix}wolfmetal*
├─ ❏ *${prefix}nature3d*
├─ ❏ *${prefix}underwater*
├─ ❏ *${prefix}golderrose*
├─ ❏ *${prefix}lionlogo*
├─ ❏ *${prefix}ninjalogo*
├─ ❏ *${prefix}marvelstudio*
├─ ❏ *${prefix}wolflogo*
├─ ❏ *${prefix}steel3d*
├─ ❏ *${prefix}wallgravity*
├─ ❏ *${prefix}summernature*
├─ ❏ *${prefix}letterleaves*
├─ ❏ *${prefix}fallleaves*
├─ ❏ *${prefix}flamming*
├─ ❏ *${prefix}harrypotter*
├─ ❏ *${prefix}futureneon*
├─ ❏ *${prefix}breakwall*
├─ ❏ *${prefix}carvedwood*
├─ ❏ *${prefix}wetglass*
├─ ❏ *${prefix}multicolor3d*
├─ ❏ *${prefix}watercolor*
├─ ❏ *${prefix}luxurygold*
├─ ❏ *${prefix}galaxywallpaper*
├─ ❏ *${prefix}lighttext*
├─ ❏ *${prefix}beautifulflower*
├─ ❏ *${prefix}puppycute*
├─ ❏ *${prefix}royaltext*
├─ ❏ *${prefix}heartshaped*
├─ ❏ *${prefix}birthdaycake*
├─ ❏ *${prefix}galaxystyle
├─ ❏ *${prefix}hologram3d*
├─ ❏ *${prefix}glossychrome*
├─ ❏ *${prefix}greenbush*
├─ ❏ *${prefix}metallogo*
├─ ❏ *${prefix}noeltext*
├─ ❏ *${prefix}glittergold*
├─ ❏ *${prefix}textcake*
├─ ❏ *${prefix}starsnight*
├─ ❏ *${prefix}wooden3d*
├─ ❏ *${prefix}textbyname*
├─ ❏ *${prefix}writegalacy*
├─ ❏ *${prefix}galaxybat*
├─ ❏ *${prefix}snow3d*
├─ ❏ *${prefix}birthdayday*
├─ ❏ *${prefix}freefire*
├─ ❏ *${prefix}textdaun*
├─ ❏ *${prefix}nulis*
├─ ❏ *${prefix}silktext*
├─ ❏ *${prefix}makequote*
├─ ❏ *${prefix}toimg*
├─ ❏ *${prefix}ocr*
├─ ❏ *${prefix}galaxstyle*
├─ ❏ *${prefix}jokerlogo*
├─ ❏ *${prefix}toxic*
├─ ❏ *${prefix}bloodfrosted*
├─ ❏ *${prefix}hororblood*
├─ ❏ *${prefix}halloween*
├─ ❏ *${prefix}pemainbola*
├─ ❏ *${prefix}firework*
├─ ❏ *${prefix}glitch*
├─ ❏ *${prefix}blackpink*
├─ ❏ *${prefix}goldplay*
├─ ❏ *${prefix}hologram*
├─ ❏ *${prefix}textbyname*
├─ ❏ *${prefix}herrypoter*
├─ ❏ *${prefix}metallogo*
├─ ❏ *${prefix}ttp*
├─ ❏ *${prefix}thunder*
├─ ❏ *${prefix}bokeh*
├─ ❏ *${prefix}strawberry*
├─ ❏ *${prefix}metaldark*
├─ ❏ *${prefix}textdaun*
├─ ❏ *${prefix}nulis*
├─ ❏ *${prefix}silktext*
├─ ❏ *${prefix}quotesmaker*
├─ ❏ *${prefix}quotesmaker2*
├─ ❏ *${prefix}emojitosticker*
├─ ❏ *${prefix}toimg*
├─ ❏ *${prefix}ocr*
├─ ❏ *${prefix}galaxstyle*
├─ ❏ *${prefix}jokerlogo*
├─ ❏ *${prefix}triggered*
├─ ❏ *${prefix}gtav*
├─ ❏ *${prefix}gay*
├─ ❏ *${prefix}nigthbeach*
├─ ❏ *${prefix}laptop*
├─ ❏ *${prefix}linephoto*
├─ ❏ *${prefix}raindrop*
├─ ❏ *${prefix}sketch*
├─ ❏ *${prefix}wanted*
├─ ❏ *${prefix}crossgun*
├─ ❏ *${prefix}bloodfrosted*
├─ ❏ *${prefix}hororblood*
├─ ❏ *${prefix}gamelogo*
├─ ❏ *${prefix}halloween*
├─ ❏ *${prefix}firework*
├─ ❏ *${prefix}goldplay*
├─ ❏ *${prefix}silverplaybutton*
├─ ❏ *${prefix}hologram*
├─ ❏ *${prefix}textbyname*
├─ ❏ *${prefix}herrypoter*
├─ ❏ *${prefix}imagetext*
├─ ❏ *${prefix}greenneon*
├─ ❏ *${prefix}metallogo* 
│
┣━━⊱「 𝗜𝗠𝗔𝗚𝗘 𝗘D𝗜𝗧 𝗠𝗘𝗡𝗨 」
│
├─ ❏  *${prefix}pixelate*
├─ ❏  *${prefix}imageflip*
├─ ❏  *${prefix}imagerotate*
├─ ❏  *${prefix}removebg*
├─ ❏  *${prefix}deepfry*
├─ ❏  *${prefix}fisheye*
├─ ❏  *${prefix}skullmask*
├─ ❏  *${prefix}grayscale*
├─ ❏  *${prefix}smile*
├─ ❏  *${prefix}alien*
├─ ❏  *${prefix}wanted*
├─ ❏  *${prefix}gtav*
├─ ❏  *${prefix}facebookpage*
├─ ❏  *${prefix}costumwp*
├─ ❏  *${prefix}pantaimalam*
├─ ❏  *${prefix}pencil*
├─ ❏  *${prefix}bakar*
├─ ❏  *${prefix}crossgun*
├─ ❏  *${prefix}hitler*
├─ ❏  *${prefix}trash*
├─ ❏  *${prefix}picture*
├─ ❏  *${prefix}blur*
├─ ❏  *${prefix}sepia*
├─ ❏  *${prefix}affect*
├─ ❏  *${prefix}sketch*
├─ ❏  *${prefix}raindrop*
├─ ❏  *${prefix}joke*
├─ ❏  *${prefix}invert*
├─ ❏  *${prefix}meme atas/bawah*
│
┣━━⊱「 𝗦𝗘𝗥𝗧𝗜𝗙𝗜𝗞𝗔𝗧 𝗠𝗘𝗡𝗨 」
│
├─ ❏  *${prefix}anakharamserti*
├─ ❏  *${prefix}hekelserti* 
├─ ❏  *${prefix}babuserti* 
├─ ❏  *${prefix}ffserti* 
├─ ❏  *${prefix}bucinserti* 
├─ ❏  *${prefix}bocilepepserti* 
├─ ❏  *${prefix}gayserti* 
├─ ❏  *${prefix}pacarserti* 
├─ ❏  *${prefix}sadboyserti* 
├─ ❏  *${prefix}surgaserti* 
├─ ❏  *${prefix}pinterserti*
├─ ❏  *${prefix}badgirlserti*
├─ ❏  *${prefix}badboyserti*
├─ ❏  *${prefix}goodgirlserti*
├─ ❏  *${prefix}goodboyserti*
├─ ❏  *${prefix}editodberkelasserti*
├─ ❏  *${prefix}goodlookingserti*
├─ ❏  *${prefix}fucekboyserti*
├─ ❏  *${prefix}jametserti*
├─ ❏  *${prefix}youtuberserti*
├─ ❏  *${prefix}fftourserti*
├─ ❏  *${prefix}fftourserti2*
├─ ❏  *${prefix}fftourserti3*
├─ ❏  *${prefix}fftourserti4*
├─ ❏  *${prefix}fftourserti5*
├─ ❏  *${prefix}mltourserti*
├─ ❏  *${prefix}mltourserti2*
├─ ❏  *${prefix}mltourserti3*
├─ ❏  *${prefix}mltourserti4*
├─ ❏  *${prefix}mltourserti5*
├─ ❏  *${prefix}pubgtourserti*
├─ ❏  *${prefix}pubgtourserti2*
├─ ❏  *${prefix}pubgtourserti3*
├─ ❏  *${prefix}pubgtourserti4*
├─ ❏  *${prefix}pubgtourserti5*
│
┣━━⊱「 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 」
│
├─ ❏  *${prefix}sticker*
├─ ❏  *${prefix}stickerwm* 
├─ ❏  *${prefix}ttp* 
├─ ❏  *${prefix}ttp2* 
├─ ❏  *${prefix}ttp3*
├─ ❏  *${prefix}ttp4* 
├─ ❏  *${prefix}attp* 
├─ ❏  *${prefix}toimg* 
├─ ❏  *${prefix}ngif* 
├─ ❏  *${prefix}nsfwnekogif* 
├─ ❏  *${prefix}randomhentaigif* 
├─ ❏  *${prefix}semoji* 
├─ ❏  *${prefix}stickerwa* 
├─ ❏  *${prefix}triggered* 
├─ ❏  *${prefix}stickerspongebob* 
├─ ❏  *${prefix}stickerpatrick* 
├─ ❏  *${prefix}stickersearch*  
├─ ❏  *${prefix}telesticker*
│
┣━━⊱「 𝗟𝗜𝗡𝗞 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}bitly*
├─ ❏ *${prefix}cuttly*
├─ ❏ *${prefix}tinyurl*
├─ ❏ *${prefix}shortlink*
├─ ❏ *${prefix}shortlink2*
├─ ❏ *${prefix}shortlink3*
├─ ❏ *${prefix}shortlink4*
├─ ❏ *${prefix}shortlink5*
├─ ❏ *${prefix}shortlink6*
│
┣━━⊱「 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}beban*
├─ ❏ *${prefix}cantik*
├─ ❏ *${prefix}audio*
├─ ❏ *${prefix}mining*
├─ ❏ *${prefix}playstore*
├─ ❏ *${prefix}slap*
├─ ❏ *${prefix}tampar*
├─ ❏ *${prefix}bisakah*
├─ ❏ *${prefix}kapankah*
├─ ❏ *${prefix}apakah*
├─ ❏ *${prefix}seberapagay*
├─ ❏ *${prefix}rate*
├─ ❏ *${prefix}truth*
├─ ❏ *${prefix}dare*
├─ ❏ *${prefix}hobby*
├─ ❏ *${prefix}beban*
├─ ❏ *${prefix}ganteng*
├─ ❏ *${prefix}cantik*
├─ ❏ *${prefix}memeindo*
├─ ❏ *${prefix}darkjoke*
├─ ❏ *${prefix}cerpen*
├─ ❏ *${prefix}quotesimage*
├─ ❏ *${prefix}fitnah*
├─ ❏ *${prefix}pasangan*
├─ ❏ *${prefix}ntahlah*
├─ ❏ *${prefix}slap*
├─ ❏ *${prefix}quotesmotivasi*
├─ ❏ *${prefix}quotessehat*
├─ ❏ *${prefix}quotescinta*
├─ ❏ *${prefix}hemkel*
├─ ❏ *${prefix}quotes2*
├─ ❏ *${prefix}katadoi*
├─ ❏ *${prefix}katakatadilan*
├─ ❏ *${prefix}qoutes*
├─ ❏ *${prefix}caklontong*
├─ ❏ *${prefix}family100*
├─ ❏ *${prefix}tebakgambar*
├─ ❏ *${prefix}kbbi*
├─ ❏ *${prefix}dadu*
├─ ❏ *${prefix}artinama*
│
┣━━⊱「 𝗦𝗜𝗠𝗣𝗟𝗘 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}nulis*
├─ ❏ *${prefix}nulis2*
├─ ❏ *${prefix}nulis3*
├─ ❏ *${prefix}nulis4*
├─ ❏ *${prefix}semoji* 
├─ ❏ *${prefix}fakedonald*
├─ ❏ *${prefix}ktpmaker*
├─ ❏ *${prefix}wame*
├─ ❏ *${prefix}joox*
├─ ❏ *${prefix}stalkig*
├─ ❏ *${prefix}tiktokstalk*
├─ ❏ *${prefix}ytsearch*
├─ ❏ *${prefix}ytmp3*
├─ ❏ *${prefix}ytmp4*
├─ ❏ *${prefix}play*
├─ ❏ *${prefix}ssweb*
├─ ❏ *${prefix}googlesearch*
├─ ❏ *${prefix}ytsearch*
│
┣━━⊱「 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}character*
├─ ❏ *${prefix}manga*
├─ ❏ *${prefix}animesaran*
├─ ❏ *${prefix}animesaran2*
├─ ❏ *${prefix}husbu2*
├─ ❏ *${prefix}anime*
├─ ❏ *${prefix}wallpaperanime*
├─ ❏ *${prefix}trap*
├─ ❏ *${prefix}baka2*
├─ ❏ *${prefix}wallpapernime*
├─ ❏ *${prefix}animefanart*
├─ ❏ *${prefix}megumin*
├─ ❏ *${prefix}shinobu*
├─ ❏ *${prefix}baka*
├─ ❏ *${prefix}eroyuri*
├─ ❏ *${prefix}happy*
├─ ❏ *${prefix}dance*
├─ ❏ *${prefix}neko3*
├─ ❏ *${prefix}smile*
├─ ❏ *${prefix}wallpaper*
├─ ❏ *${prefix}slapnime*
├─ ❏ *${prefix}shota*
├─ ❏ *${prefix}sagiri*
├─ ❏ *${prefix}femdom*
├─ ❏ *${prefix}waifukawai*
├─ ❏ *${prefix}kuni*
├─ ❏ *${prefix}kitsune*
├─ ❏ *${prefix}yuri*
├─ ❏ *${prefix}yaoi*
├─ ❏ *${prefix}wancak*
├─ ❏ *${prefix}quotesnime*
├─ ❏ *${prefix}waifu2*
├─ ❏ *${prefix}bj*
├─ ❏ *${prefix}ram*
├─ ❏ *${prefix}pictlolicon*
├─ ❏ *${prefix}pictneko*
├─ ❏ *${prefix}testwaifu*
├─ ❏ *${prefix}nsfw_avatar*
├─ ❏ *${prefix}senku*
├─ ❏ *${prefix}pictwaifu*
├─ ❏ *${prefix}kurumi2*
├─ ❏ *${prefix}nakanomiku*
├─ ❏ *${prefix}waifu2*
├─ ❏ *${prefix}waifu*
├─ ❏ *${prefix}loli*
├─ ❏ *${prefix}loli2*
├─ ❏ *${prefix}neko*
├─ ❏ *${prefix}neko2*
├─ ❏ *${prefix}nekonime*
├─ ❏ *${prefix}randomanime*
├─ ❏ *${prefix}randomhusbu*
├─ ❏ *${prefix}wibu*
├─ ❏ *${prefix}wibu2*
├─ ❏ *${prefix}boruto*
├─ ❏ *${prefix}rize*
├─ ❏ *${prefix}kaneki*
├─ ❏ *${prefix}kemonomimi*
├─ ❏ *${prefix}holo*
├─ ❏ *${prefix}naruto*
├─ ❏ *${prefix}amv*
├─ ❏ *${prefix}minato*                                                                             
├─ ❏ *${prefix}tagall*
├─ ❏ *${prefix}gecg*
├─ ❏ *${prefix}avatar*
├─ ❏ *${prefix}miku*
├─ ❏ *${prefix}kurumi*
├─ ❏ *${prefix}hinata*
├─ ❏ *${prefix}sasuke*
├─ ❏ *${prefix}sakura*
├─ ❏ *${prefix}akura*
├─ ❏ *${prefix}itori*
├─ ❏ *${prefix}touka*
├─ ❏ *${prefix}rem*
├─ ❏ *${prefix}chika*
│
┣━━⊱「 𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}quran*
├─ ❏ *${prefix}quotesislami*
├─ ❏ *${prefix}listsurah*
├─ ❏ *${prefix}doaharian*
├─ ❏ *${prefix}asmaulhusna*
├─ ❏ *${prefix}niatsholat*
├─ ❏ *${prefix}bacaansholat*
├─ ❏ *${prefix}jadwalsholat*
├─ ❏ *${prefix}kisahnabi*
├─ ❏ *${prefix}tahlil*
├─ ❏ *${prefix}ayatkursi*
├─ ❏ *${prefix}hadits*
├─ ❏ *${prefix}quran*
│
┣━━⊱「 𝗡𝗘𝗪𝗦 𝗠𝗘𝗡𝗨 」
│
├─ ❏  *${prefix}cnnindonesia*
├─ ❏  *${prefix}cnnnasional*
├─ ❏  *${prefix}jadwaltv*
├─ ❏  *${prefix}jadwaltvnow*
├─ ❏  *${prefix}newsinfo*
├─ ❏  *${prefix}cnninternasional*
├─ ❏  *${prefix}infogempa*
├─ ❏  *${prefix}liputan6*
├─ ❏  *${prefix}cnnnews*
├─ ❏  *${prefix}republika*
├─ ❏  *${prefix}temponews*
├─ ❏  *${prefix}kumparannews*
├─ ❏  *${prefix}lazymedia*
├─ ❏  *${prefix}resepmakanan*
│
┣━━⊱「 𝗠𝗢𝗩𝗜𝗘 𝗦𝗧𝗢𝗥?? 」
│
├─ ❏ *${prefix}ik21*
├─ ❏ *${prefix}wattpad*
├─ ❏ *${prefix}cerpen*
├─ ❏ *${prefix}ceritahoror*
├─ ❏ *${prefix}drakorongoing*
├─ ❏*${prefix}wattpadsearch*
│
┣━━⊱「 𝗠𝗘𝗗𝗜𝗔 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}beritahoax*
├─ ❏ *${prefix}amv*
├─ ❏ *${prefix}brainly*
├─ ❏ *${prefix}pinterest*
├─ ❏ *${prefix}randomhusbu*
├─ ❏ *${prefix}randomcyberspace*
├─ ❏ *${prefix}randomgame*
├─ ❏ *${prefix}ytmp3*
├─ ❏ *${prefix}ytmp4*
├─ ❏ *${prefix}shopee*
├─ ❏ *${prefix}play*
├─ ❏ *${prefix}play2*
├─ ❏ *${prefix}ytsearch*
├─ ❏ *${prefix}google*
├─ ❏ *${prefix}randommountain*
├─ ❏ *${prefix}nangis*
├─ ❏ *${prefix}bokep*
├─ ❏ *${prefix}blowjob*
├─ ❏ *${prefix}xnxx*
├─ ❏ *${prefix}xnxxsearch*
├─ ❏ *${prefix}xhamster*
├─ ❏ *${prefix}xhamstersearch*
├─ ❏ *${prefix}pixiv*
├─ ❏ *${prefix}pixivdl*
├─ ❏ *${prefix}youtubedl*
├─ ❏ *${prefix}randomloli*
├─ ❏ *${prefix}randomprogramer*
├─ ❏ *${prefix}meme*
├─ ❏ *${prefix}memeindo*
├─ ❏ *${prefix}telesticker*
├─ ❏ *${prefix}tiktoknowm*
├─ ❏ *${prefix}tiktokmusic*
├─ ❏ *${prefix}spotify*
├─ ❏ *${prefix}spotifysearch*
├─ ❏ *${prefix}jooxplay*
├─ ❏ *${prefix}igdl*
├─ ❏ *${prefix}fbdl*
├─ ❏ *${prefix}zippyshare*
├─ ❏ *${prefix}pinterest*
├─ ❏ *${prefix}pinterestdl*
├─ ❏ *${prefix}tts*
├─ ❏ *${prefix}joox*
├─ ❏ *${prefix}lirik*
├─ ❏ *${prefix}ssweb*
├─ ❏ *${prefix}map*
├─ ❏ *${prefix}stalkig*
├─ ❏ *${prefix}afk*
├─ ❏ *${prefix}unafk*
│
┣━━⊱「 𝗦𝗢𝗨𝗡𝗗 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}sound*
├─ ❏ *${prefix}sound1*
├─ ❏ *${prefix}sound2*
├─ ❏ *${prefix}sound3*
├─ ❏ *${prefix}sound4*
├─ ❏ *${prefix}sound5*
├─ ❏ *${prefix}sound6*
├─ ❏ *${prefix}sound7*
├─ ❏ *${prefix}sound8*
├─ ❏ *${prefix}sound9*
├─ ❏ *${prefix}sound10*
├─ ❏ *${prefix}sound11*
├─ ❏ *${prefix}sound12*
├─ ❏ *${prefix}sasageyo*
├─ ❏ *${prefix}welot*
├─ ❏ *${prefix}ganteng*
├─ ❏ *${prefix}gatal*
├─ ❏ *${prefix}alay*
├─ ❏ *${prefix}pota*
├─ ❏ *${prefix}texttovn*
│
┣━━⊱「 𝗟𝗜𝗠𝗜𝗧 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}limit*
├─ ❏ *${prefix}buylimit*
├─ ❏ *${prefix}dompet*
│
┣━━⊱「 FANS 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}exo*
├─ ❏ *${prefix}bts*
│
┣━━⊱「 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}hentai*
├─ ❏ *${prefix}pokemon*
├─ ❏ *${prefix}anjing*
├─ ❏ *${prefix}nsfwloli*
├─ ❏ *${prefix}nsfwneko*
├─ ❏ *${prefix}solo*
├─ ❏ *${prefix}nsfwtrap*
├─ ❏ *${prefix}nsfwpussy*
├─ ❏ *${prefix}nsfwyuri*
├─ ❏ *${prefix}ero*
├─ ❏ *${prefix}nsfwloli2*
├─ ❏ *${prefix}sideoppai*
├─ ❏ *${prefix}nsfwwaifu*
├─ ❏ *${prefix}ecchi*
├─ ❏ *${prefix}nekopoi* <judul>
│
┣━━⊱「 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}hidetag*
├─ ❏ *${prefix}del*
├─ ❏ *${prefix}grouplist*
├─ ❏ *${prefix}level*
├─ ❏ *${prefix}leaderboard*
├─ ❏ *${prefix}linkgc*
├─ ❏ *${prefix}tagall*
├─ ❏ *${prefix}setpp*
├─ ❏ *${prefix}add*
├─ ❏ *${prefix}kick*
├─ ❏ *${prefix}setname*
├─ ❏ *${prefix}wame*
├─ ❏ *${prefix}setdesc*
├─ ❏ *${prefix}demote*
├─ ❏ *${prefix}promote*
├─ ❏ *${prefix}listadmin*
├─ ❏ *${prefix}group* [buka/tutup]
├─ ❏ *${prefix}leveling* [enable/disable]
├─ ❏ *${prefix}nsfw* [1/0]
├─ ❏ *${prefix}simih* [1/0]
├─ ❏ *${prefix}antilinkgrup* [1/0]
├─ ❏ *${prefix}welcome* [1/0]
│
┣━━⊱「 ??𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 」
│
├─ ❏ *${prefix}bc*
├─ ❏ *${prefix}bcgc*
├─ ❏ *${prefix}kickall*
├─ ❏ *${prefix}setreply*
├─ ❏ *${prefix}addlimit*
├─ ❏ *${prefix}setlimit*
├─ ❏ *${prefix}setnamabot*
├─ ❏ *${prefix}setprefix*
├─ ❏ *${prefix}setvhtear*
├─ ❏ *${prefix}setonlydev*
├─ ❏ *${prefix}setlolhuman*
├─ ❏ *${prefix}antilinkgrup* [1/0]
├─ ❏ *${prefix}antidelete* [aktif/mati]
├─ ❏ *${prefix}clearall*
├─ ❏ *${prefix}ban*
├─ ❏ *${prefix}unban*
├─ ❏ *${prefix}block*
├─ ❏ *${prefix}unblock*
├─ ❏ *${prefix}setmemberlimit*
├─ ❏ *${prefix}addbadword* <teks>
├─ ❏ *${prefix}listbadword*
├─ ❏ *${prefix}nobadword*
├─ ❏ *${prefix}listblock*
├─ ❏ *${prefix}leave*
├─ ❏ *${prefix}event* [1/0]
├─ ❏ *${prefix}clone*
├─ ❏ *${prefix}setbotpp*
│
╰───────────
` 
                    vinz.sendMessage(from, vlo, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./vinzganz/fake.jpg`)},"productId":"3937202479680283","title":"VINZ CHAT 𝐁𝐎𝐓","currencyCode":"RGM","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, isBroadcast: true, caption: subscribe})
					break
				case 'donasi':
				case 'donate':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					vinz.sendMessage(from, donasi(), text)
					break
		case 'quotesislami':
                 if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					vinz.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
                 if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					vinz.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*n\n'+ nsh })
					await limitAdd(sender)
					break	
					case 'otagall':
			if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  *vinz Bot* 〙', members_id, true)
					break
		case 'quotescinta':
                 if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const cinta =['SABAR MASIH TAHAP PEMBUATAN','MASIH TAHAP PEMBUATAN']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					vinz.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*n\n'+ cin })
					await limitAdd(sender)
					break
					case 'beban':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname[Math.floor(Math.random() * tod.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					break
		// Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                    case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
								
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					vinz.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
								
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya KakaðŸ‘','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai CantikðŸŠ','70% Hai UkhtyðŸŠ','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum UkhtyðŸŠ','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih SemangatðŸŠ']
					const tik = can[Math.floor(Math.random() * can.length)]
					vinz.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				  case 'ownergrup':
				  case 'ownergroup':
               vinz.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           vinz.sendMessage(from, options, text, { quoted: mek } )
				break
                    case 'nangis':
				if (!isRegistered) return reply(ind.noregis())
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						vinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'ngewe':
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(' *NSFW OF* ')
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						vinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isRegistered) return reply(ind.noregis())
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						vinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						vinz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break		
                case 'drakorongoing':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'jadwaltv':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    vinz.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                 case 'telesticker':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        vinz.sendMessage(from, ini_buffer, sticker)
                     }
                    break
                case 'tiktoknowm':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    vinz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'ngif':
                case 'nsfwnekogif':
                case 'randomhentaigif':
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    ini_buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolhuman}`
                    exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        vinz.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
                case 'tiktokmusic':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhuman}&url=${ini_link}`)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                case 'spotify':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${lolhuman}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    vinz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                case 'igdl':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    vinz.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'fbdl':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    vinz.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'zippyshare':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolhuman}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pinterestdl':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterestdl?apikey=${lolhuman}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${lolhuman}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${lolhuman}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
		          case 'shopee':
		            if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                  case 'gimage':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolhuman}&query=${query}`)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'gimage2':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        vinz.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolhuman}&query=${query}`)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolhuman}&query=${query}`)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch2':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolhuman}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    vinz.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break  
                 case 'character':
                    if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    vinz.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'stickerwa':
                  if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolhuman}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolhuman}&img=${x}`)
                        vinz.sendMessage(from, ini_buffer, sticker)
                    }
                    break
		case 'quotesmotivasi':
                 if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					vinz.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*n\n'+ cin })
					await limitAdd(sender)
					break
                case 'level':
		case 'lvl':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nama* : ${pushname}\n┣⊱ Nomor : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
               vinz.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
					case 'info':
					case 'ingfo':
					case 'ingfokan':
					me = vinz.user
					uptime = process.uptime()
					teks = `*Nama Bot* : ${namabot}\n*Owner* : *${namaowner}*\n*Author* : VINZ DEV\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block* : ${blocked.length}\n*Bot aktif selama* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					vinz.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					vinz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					case 'tagimg':
					if (!isRegistered) return reply(ind.noregis())
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await vinz.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await vinz.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        vinz.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                case 'hidetag':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await vinz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					vinz.sendMessage(from, options, text)
					await limitAdd(sender)
					break
					case 'setmemberlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`memberlimit berhasil diubah menjadi ${memberlimit}`)
                    break
                    case 'yaoi':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break
                    case 'ecchi':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break
                    case 'sideoppai':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break
                    case 'bts':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/bts?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Plastiqnya Kaka:v'  })
                    break
                    case 'blackpink':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`https://api.xteam.xyz/randomimage/blackpink?APIKEY=${xteam}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Plastiqnya Kaka:v'  })
                    break
                    case 'exo':
		if (!isRegistered) return reply(ind.noregis())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/exo?apikey=${lolhuman}`)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: 'Plastiqnya Kaka:v' })
                    break
                case 'quotemaker':
		case 'makequote':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					vinz.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
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
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} vinz`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolhuman}&text1=${txt1}&text2=${txt2}`)
                    vinz.sendMessage(from, ini_anu, image, {quoted: mek})
                    break
        case 'truth':
		if (!isRegistered) return reply(ind.noregis())
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://i.ibb.co/tzPwWDH/20210402-203555.jpg`)
		vinz.sendMessage(from, truteh, image, { caption: '*TRUTH*n\n'+ ttrth, quoted: mek })
		break
		case 'dare':
		if (!isRegistered) return reply(ind.noregis())
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://i.ibb.co/SVbfCZY/20210402-203727.jpg`)
		vinz.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*n\n'+ der })
		break
		case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                
					if (args.length < 1) return reply('Urlnya mana om')
					teks = body.slice(7)
					reply(ind.wait())
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buff = await getBuffer(anu.gambar)
					vinz.sendMessage(from, buff, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					vinz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'anjing':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					vinz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					//ANTI VIRTEX BY vinz
				    case 'antivirtex':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('UDAH NYALA KAK')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('SUKSES MEMATIKAN ANTI VIRTEX DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					case 'antialakazam':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex2) return reply('UDAH NYALA KAK')
						antifirtex2.push(from)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ALAKAZAM DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex2) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex2.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ALAKAZAM DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					case 'antixvirus':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex3) return reply('UDAH NYALA KAK')
						antifirtex3.push(from)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐗-𝐕𝐢𝐫𝐮𝐬 DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex3) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex3.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐗-𝐕𝐢𝐫𝐮𝐬 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					case 'antivirustebel':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex4) return reply('UDAH NYALA KAK')
						antifirtex4.push(from)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex4) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex4.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
						reply('SUKSES MEMATIKAN ANTI VIRTEX *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					case 'anticollosal':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex5) return reply('UDAH NYALA KAK')
						antifirtex5.push(from)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍 DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex5) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex5.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
						reply('SUKSES MEMATIKAN ANTI VIRTEX 𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍 DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					case 'antiviruschina':
					if (!isGroup) return reply(ind.groupo())					
					if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')					
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex6) return reply('UDAH NYALA KAK')
						antifirtex6.push(from)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MENGAKTIFKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
						vinz.sendMessage(from,`ALLERT!!! DILARANG KIRIM VIRUS!!KARNA GRUP INI BERSIFAT ANTI VIRUS!!JIKA KIRIM VIRUS MAKA AKAN DI KICK!!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex6) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antifirtex6.splice(ini, 1)
						fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
						reply('SUKSES MEMATIKAN ANTI VIRTEX ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚ DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					vinz.sendMessage(from, { quoted: mek})
					break
					
					
		//MUSIC & MEDIA
		case 'chord':
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=${TobzKey}`)
                vinz.sendMessage(from, anu.result, text, {quoted:mek})
                break
		case 'tomp3':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pushname))
                	vinz.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(ind.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						vinz.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break
                case 'ytmp3':
                reply(ind.wait)
                anu = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=${body.slice(7)}`)
                if (anu.error) return reply(anu.error)
                ingfomp3 = `*Lagu Ditemukan*n➸ Judul : ${anu.title}\n\n*Proses*`
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.result)
                vinz.sendMessage(from, buffer, image, {quoted: mek, caption: ingfomp3})
                vinz.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: mek})
                break
                case 'ytmp4':
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lolhuman}&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Description :\n ${get_result.description}`
                    buffer = await getBuffer(get_result.thumbnail)
                    vinz.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    vinz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    break
                case 'darkneon':
                case 'candlemug':
                case 'lovemsg':
                case 'mugflower':
                case 'narutobanner':
                case 'paperonglass':
                case 'romancetext':
                case 'shadowtext':
                case 'underwater':
                case 'hpotter':
                case 'woodblock':
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nContoh: ${prefix + command} vinz`)
                    txt = args.join(" ")
                    reply(ind.wait())
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    vinz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": "*TSUNDERE*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('vinzganz/fake.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
                    break
				case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
              			if (isLimit(sender)) return reply(ind.limitend(pusname))
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
				case 'yutubdl':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')				
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${apivhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*➸ JUDUL* : ${anu.result.title}\n\n*[WAIT] Proses Dumlu Yakan*`
					thumb = await getBuffer(anu.result.imgUrl)
					baby.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.UrlVideo)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					break
		
                case 'text3d':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
              	    if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return vinz.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    vinz.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	await limitAdd(sender)
					break
			    case 'fototiktok':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
			        await limitAdd(sender)
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                vinz.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			//tools
			case 'qrcode':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return vinz.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			vinz.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			vinz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzKey}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			vinz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await vinz.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
					case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
				case 'unban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await vinz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								vinz.sendMessage(from, buffer, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await vinz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								vinz.sendMessage(from, buffer, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return vinz.sendMessage(from, 'Diperlukan kode bahasa!!', text, {quoted: mek})
					const gtts = require('./vinzganz/gtts')(args[0])
					if (args.length < 2) return vinz.sendMessage(from, 'Mana teks yang ma di jadiin suara? suara saya kah:v?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('lah teks nya kepanjangan bambang😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							vinz.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break
				case 'say':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			 	if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
						if (args.length < 1) return vinz.sendMessage(from, '𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗺𝗮𝗻𝗮 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗸𝗲𝗺𝘂𝗻𝗴𝗸𝗶𝗻𝗮𝗻 𝘂𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱')
					}
					await limitAdd(sender)
					break
                 case 'linkgc':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await vinz.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    vinz.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await vinz.chats.all()
					vinz.setMaxListeners(25)
					for (let _ of anu) {
						vinz.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
				 vinz.updatePresence(from, Presence.composing) 
				 vinz.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					vinz.blockUser (`${body.slice(7)}@c.us`, "add")
					vinz.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    vinz.blockUser (`${body.slice(9)}@c.us`, "remove")
					vinz.sendMessage(from, `Perintah diterima, Membuka ${body.slice(9)}@c.us`, text)
					break
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => vinz.groupLeave(from))
					break 
			case 'delete':
			case 'del':
			case 'd':
			if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
					vinz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => vinz.groupLeave(from))
					break 
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await vinz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await vinz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							vinz.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('*_succes broadcast_* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 BROADCAST BOT 」*n\n${body.slice(4)}`)
						}
						reply('*_succes broadcast_* ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await vinz.downloadAndSaveMediaMessage(mek)
                         await vinz.updateProfilePicture (from, media)
                        reply('[SUKSES] Mengganti icon grub')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						vinz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
					case 'grup':
					case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						vinz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						vinz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
                  vinz.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  vinz.sendMessage(from, 'Tuh kontak ${namaowner} <•_•> ,Jangan Lupa Save Ya (*>*)',MessageType.text, { quoted: mek} )
                  ini_buffer = await getBuffer("https://i.ibb.co/TBYdPv7/20210402-204108.jpg")
                  vinz.sendMessage(from, ini_buffer, MessageType.image, {quoted: mek, caption: '*SUBSCRIBE:*\n*https://m.youtube.com/channel/UCvVd-kAsrJUjg0bwKqxUPeg*'})
                  break
		break    
           	case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                vinz.groupUpdateSubject(from, `${body.slice(9)}`)
                vinz.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                vinz.groupUpdateDescription(from, `${body.slice(9)}`)
                vinz.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           				case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						vinz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`YA YAHYA WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
						vinz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧??𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						vinz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
						vinz.groupMakeAdmin(from, mentioned)
					}
					break
                    case 'setlimit':
		            case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 	
					case 'setvhtear':
		            case 'setapikeyvhtear':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    apivhtear = args[0]
					reply(`*Apikey vhtear berhasil di ubah menjadi* : ${apivhtear}`)
					break
                    case 'setlolhuman':
		            case 'setapikeylolhuman':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    lolhuman = args[0]
					reply(`*Apikey LolHuman berhasil di ubah menjadi* : ${lolhuman}`)
					break 
		            case 'setnamabot':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    namabot = args[0]
					reply(`*Nama Bot berhasil di ubah menjadi* : ${namabot}`)
					break 		 		
					case 'setonlydev':
		            case 'setapikeyonlydev':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    onlydev = args[0]
					reply(`*Apikey OnlyDev berhasil di ubah menjadi* : ${onlydev}`)
					break 		
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶??𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `asek dapat makanan,otw mengkickmu, 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						vinz.groupRemove(from, mentioned)
					} else {
						mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						vinz.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		//no group feature
		case 'mutual':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
           	break
		case 'next':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isGroup) return reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
        	break
				case 'toimg':
				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('Reply/tag sticker !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await vinz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						vinz.sendMessage(from, buffer, image, {quoted: mek, caption: 'tuh dh jadi '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*SUDAH AKTIF* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Mengaktifkan fitur Welcome/Left di grub ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUKSES ❭ Menonaktifkan Welcome/Left di grub ini')
					} else {
						reply(ind.satukos())
					}
					break
                			case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ SUKSES ❭ MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
					
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await vinz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						vinz.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
					
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await vinz.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							vinz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
			if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }

		if (budy.includes(`Ngentod`)) {
                  reply(`Jaga Omongan😡`)
                  }

		if (budy.includes(`Thanks`)) {
                  reply(`Sama Sama Kak😁`)
                  }

		if (budy.includes(`Makasih`)) {
                  reply(`Sama Sama Kak😁`)
                  }

         if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu ${namabot}*`)

			  }
			if (!isGroup && !isCmd) {
                        await vinz.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${lolhuman}&text=${budy}`)
                        reply(simi.result)
                    }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
					} else {
						console.log(color('[VINZ BOT]','yellow'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	
