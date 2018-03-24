var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("For cmds, please check your DMs!");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme | Made by TheReal (Catty)")
        .setColor(randomColor)
        .setTitle(":book: Go-Karting Xtreme Commands")
        .setDescription("Wondering what I do? Well you sir/ma'am have a very good question! Read on to see why I am here!")
        .addField(":exclamation: =help", "Refers user to =info command.")
        .addField(":book: =info", "DMs user detailed infomation about how Go-Karting Xtreme operates.")
        .addField("::ping_pong:: =ping", "Shows your current ping.")
        .addField(":clock: More CMDS coming soon", "What do you expect me to put here?")
    message.author.sendEmbed(embedcmds);
    message.delete(10000)

}
