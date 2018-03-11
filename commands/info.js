var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("check your DMs!");
    var embedinfo = new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme | Made by TheReal (Catty)")
        .setColor(randomColor)
        .setTitle("📖 Go-Karting Xtreme Information")
        .setDescription("For other inquiries that this information doesn't cover, use `-new [Issue]` in `#create-ticket`!")
        .addField(":iphone: What is Go-Karting Xtreme?", "")
        .addField(":pencil2: How do I use BloxiCord?", "BloxiCord is designed to be a simple, fast and easy solution to all the bots that are found in a regular discord server. More than 90% of the people we asked had over 3 bots that did different things in their server, we are coming in to try and lower that in an even more simpler fasion. If our `~cmds` and `~help` commands didn't help, join our official discord server down below. We have an active support team waiting to help you!")
        .addField(":telephone_receiver: Support?", "Struggling with BloxiCord? Found a bug? Have a suggestion of a feature you want us to add? Feel free to join our discord offical server (link below)! If you do require help simply head to the support channel and run the `~support` command!")
        .addField(":moneybag: How much does it cost?", "The regular bot is free! When we release the paid version, it will have more functions but BloxiCord will always be free.")
        .addField(":inbox_tray: BloxiCord Bot Invite", "**Click this button for an invite link:** [<:radio_button:382568980218511361>](https://discordapp.com/oauth2/authorize?client_id=414823685770444801&scope=bot&permissions=502627454)")
        .addField(":pushpin: Official Server", "https://discord.gg/WxUPp3P")
        .addField(":closed_book: Our Website", "**COMING SOON**")
    message.author.sendEmbed(embedinfo);

}
