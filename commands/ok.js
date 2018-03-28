exports.run = (Discord, client, message, args) => {

    message.delete(100)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .addField("Dan has now been muted :D", "He can't now talk.")
    message.channel.send(embedping)
    .then(m=>m.delete(10000))
  }
