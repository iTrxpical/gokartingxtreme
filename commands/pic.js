var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

var embederrordm = new Discord.RichEmbed()
        .setTitle("It's party time!:")
        .setDescription("You're invited to our 1K member party!")
        .setImage('https://cdn.discordapp.com/attachments/425907562039345155/426454936776081408/unknown.png')
        .setFooter("Go-Karting Xtreme | 1K Member Party")
        .setColor('#000000');
        message.channel.send(embederrordm);
        return;
    }
