const { MessageEmbed } = require("discord.js");
const conf = require('../ayarlar.json');
const qdb = require("quick.db");
const cdb = new qdb.table("cezalar");
const db = new qdb.table("ayarlar");
const client = global.client;

client.komutlar = [
  {isim: "vip", rol: "839574661997395980"},
  {isim: "rapper", rol: "839882674373787729"},
  {isim: "beatboxer", rol: "839882674373787729"},
  {isim: "vocalist", rol: "839882674373787729"},
  {isim: "gitarist", rol: "839882674373787729"},
  {isim: "kemanist", rol: "839882674373787729"},
  {isim: "piyanist", rol: "839882674373787729"},
  {isim: "lovers", rol: "595644405273067532"},
  {isim: "sap", rol: "662988962134229002"},
  {isim: "ekip", rol: "839574662140657706"},
  {isim: "uyarı1", rol: "839900112854974534"},
  {isim: "uyarı2", rol: "839900205192183848"},
  {isim: "uyarı3", rol: "839900206384021505"},
  {isim: "streamer", rol: "839882323389448203"},
  {isim: "teyitver", rol: "839832334822932500"},
];

module.exports = (message) => {
  if (!message.content.startsWith(conf.prefix)) return;
  let ayar = db.get('ayar') || {};
  let args = message.content.substring(conf.prefix.length).split(" ");
  let command = args[0];
  args = args.splice(1);
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!uye) return;
  let komut = client.komutlar.find(k => k.isim === command);

  if (komut && (komut.isim === "teyitver")) {
    if (!message.member.roles.cache.has("839832334822932500") && !message.member.roles.cache.has(ayar.sahipRolu) && !conf.sahip.some(id => message.author.id === id)) return;
    uye.roles.add(["600429816935874609", "603665487662153738"]);
    return message.react(client.emojiler.onay);
  };
  if (komut && (komut.isim === "streamer" || komut.isim === "youtuber" || komut.isim === "coder" || komut.isim === "famous")) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    uye.roles.cache.has(komut.rol) ? uye.roles.remove(komut.rol) : uye.roles.add(komut.rol);
    return message.react(client.emojiler.onay);
  };

};

module.exports.configuration = {
  name: "message"
};