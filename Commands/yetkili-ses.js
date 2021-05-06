const Discord = require('discord.js')
const conf = require('../ayarlar.json')
const moment = require('moment')
const ms = require('ms')
moment.locale('TR')

let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;

module.exports.execute = async(client, message, args, ayar) => {

    let embed = new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true})).setColor("RANDOM")
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let role = message.guild.roles.cache.get("831262068304248874")
    let members = message.guild.members.cache.filter(member => member.roles.highest.position >= role.position && !member.user.bot && !member.voice.channel && member.presence.status !== 'offline')
    message.channel.send(`Ses kanalına'mı geçsek?\n${members.map(member => member).join(", ")}`)

};
module.exports.configuration = {
    name: "yetkili-ses",
    aliases: ["yses"],
};