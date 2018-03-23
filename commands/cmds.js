var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("For cmds, please check your DMs!");
    var embedcmds= new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme")
        .setColor(randomColor)
        .setTitle(":book: Go-Karting Xtreme CMDS")
        .setDescription("Below is a list of avalible commands for the Go-Karting Xtreme Bot")
        .addField(":exclamation: =help", "Refers user to =info command.")
        .addField(":exbook: =info", "DMs user detailed infomation about how Go-Karting Xtreme operates.")
        .addField("::ping_pong:: =ping", "Shows your current ping.")
        .addField(":clock: More CMDS coming soon", "What do you expect me to put here?")
    message.author.sendEmbed(embedcmds);
    message.delete(10000)

}
