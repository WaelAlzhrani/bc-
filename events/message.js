module.exports = async (client, message) => {
  if(message.content.startsWith("!ping")) return message.channel.send("PONG!")
}
