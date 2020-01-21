const Discord = require("discord.js"),
      client = new Discord.Client(),
      app = require("express")()

client.app = app;
client.login(process.env.TOKEN);

["events", "routes"].forEach(h => require(`./handlers/${h}`)(client, __dirname))