exports.run = (Discord, client, message, args) => {

    message.delete(50)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .addField(":ping_pong: Pongy!", new Date().getTime() - message.createdTimestamp + " ms")
    message.author.sendEmbed(embedping)
    message.reply("Check your DMs!")
    message.delete(10000)
    .then(message.channel.bulkDelete(1))
  }
