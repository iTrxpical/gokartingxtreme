exports.run = (Discord, client, message, args) => {

    message.delete(10)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedprivatesession = new Discord.RichEmbed()
        .setColor(randomColor)
        .setTitle(":book: Private Booking")
        .addField("How to create a private booking:", "I will add this at some point")
    message.channel.sendEmbed(embedprivatesession);
}
