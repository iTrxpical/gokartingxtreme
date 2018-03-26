exports.run = (Discord, client, message, args) => {

    message.delete(100)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .addField("Error 404: Unavalible","AaronnSmh and danfrostythesnowman3 are currently offline, if you require further assistance please call our helpline at 999 - Thanks, dan and aaron")
    message.channel.send("@Keane709#4030 @tomsIy#0138);
  }
