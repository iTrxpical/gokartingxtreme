var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    var embedinfo = new Discord.RichEmbed()
        .setFooter("© Go-Karting Xtreme | A group with 1000 members!")
        .setColor(randomColor)
        .setTitle(":100:  :sparkler: **__1000 MEMBERS__** :sparkler: :100:")
        .setDescription("Woop, woop! We’ve hit 1000 members on our Roblox group. This is a massive achievement for us, and we want to thank all of our racers and staff for supporting us! We’ll be hosting a huge party on Monday 26th March to celebrate this. Details of the party will be released shortly, it will include a giveaway of R$450!")
        .addField("Details Of Party:","This will be the biggest event we've ever had! ")
        .addField("Date","26/3/18")
        .addField("Time","7PM-8:45PM (BST)")
    message.channel.sendEmbed(embedinfo);

}
