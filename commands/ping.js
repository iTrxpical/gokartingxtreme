exports.run = (Discord, client, message, args) => {

    message.delete(10)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .addField(":ping_pong: Pongy!", new Date().getTime() - message.createdTimestamp + " ms")
    message.channel.sendEmbed(embedping)
    .then(message.delete(10000))
  }
