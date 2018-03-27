var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    var embedinfo = new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme | Made by TheReal (Catty)")
        .setColor(randomColor)
        .setTitle(":exclamation: Help")
        .setDescription("Please run =info for GKX information.")
    message.channel.sendEmbed(embedinfo);
    message.delete(0)
    .then(m=>m.delete(10000))

}
