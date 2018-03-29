exports.run = (Discord, client, message, args) => {

const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send("@test);
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .setTitle("Announcment:")
        .setDescription(sayMessage)
        .setFooter("Announcment made at:", new Date().getTime() - message.createdTimestamp + " ms")
    message.channel.send(embedping)
}


