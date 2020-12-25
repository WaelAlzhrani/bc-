const Discord = require("discord.js"),
      client = new Discord.Client(),
      app = require("express")()

client.app = app;
client.login(process.env.TOKEN);

["events", "routes"].forEach(h => require(`./handlers/${h}`)(client, __dirname))



// ======== { • const • }======== //
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp"); 
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms");
const prefix = "$";
var table = require("table").table;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// ======== { • playing • }======== //
client.on("ready", () => {
  client.user.setActivity("Nabarat", {
    type: "PLAYING"
  }); ////////////////mrfixw
  client.user.setStatus("dnd");
});



client.on("message",async message => {
if(!message.channel.guild) return;


let args = message.content.split(' ');

let ownerID = "698830615671210024"


if(args[0] === prefix + "nbc") {

if (!message.member.hasPermission('MANAGE_GUILD')) return;

if(!args[1]) return message.channel.send("**Usage:** +broadcast [all | online | role]")


if(args[1] === "all") {

let allMessage = args.slice(2).join(' ')

if(!allMessage) return message.channel.send(`**Usage:** +broadcast all [message]`)

message.guild.members.forEach(m => {
m.send(allMessage.replace("[user]",m));
})
message.channel.send(`This message was sent to \`${message.guild.memberCount}\` people`)
}

if(args[1] === "online") {

let onlineMessage = args.slice(2).join(' ')

if(!onlineMessage) return message.channel.send(`**Usage:** +broadcast online [message]`)

message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(onlineMessage.replace("[user]",m));
})
message.channel.send(`This message was sent to \`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` people`)
}

if(args[1] === "role") {

let checkRole = message.mentions.roles.first()

if(!checkRole) return message.channel.send(`**Usage:** +broadcast role [@role] [message]`)

let roleMessage = args.slice(3).join(' ')

if(!roleMessage) return message.channel.send(`**Usage:** +broadcast role [@role] [message]`)


message.guild.roles.find("name",checkRole.name).members.forEach(m => {
m.send(roleMessage.replace("[user]",m));
})
message.channel.send(`This message was sent to \`${message.guild.roles.find("name",checkRole.name).members.size}\` people`)
}

}

});

client.on ("message", async (Message) => {
    if (!Message.guild ||
        Message.author.bot) return false;
     if (Message.content.startsWith (prefix + "������� ������")) {
        if (!Message.member.hasPermission ("MANAGE_ROLES"))return Message.reply("**You dont have Permissions.**")//����� ��� �� ����� �� ����
        var role = Message.mentions.roles.first ();
        if (!role) return Message.reply ("**mention the role.**");

        var members = Message.guild.members.filter (m => m.roles.get (role.id));
        if (members.size == 0) return Message.reply ("**There are 0 members have this role.**");
        var embed = new Discord.RichEmbed ()
        .setColor ("BLACK")
        .setTitle (`We have ${members.size} Members have this role on this server`)
        .setDescription (`${members.map(m => "<@"+m.user.id+">").join("\n")}`)
        .setFooter (`Requested By: ${Message.author.tag}`, Message.author.avatarURL)

        Message.channel.send (embed);
    }
})



client.on('message', message => {
    if (message.guild) return undefined;
    var roomid = "744935704953618602";
    var room = client.channels.get(roomid);
    if (!room) return undefined;
    var emb = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor(message.author.username,message.author.displayAvatarURL)
    .setDescription(`**Message from ${message.author} in the bot dm**\n\`\`\`apache\nMessage; ${message.content}\`\`\``)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();
    room.send(emb);
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : تم الإرسال`); 
 message.delete(); 
};     
});
