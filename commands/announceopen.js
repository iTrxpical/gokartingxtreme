exports.run(Discord, client, message, args, collector) => {

	 if message.author.send.id == '281060171730649089'
     let bookEmbed = new Discord.RichEmbed()
    .setTitle(":loudspeaker: Weekly Opening Hours:)
    .setDescription("Below are the opening hours for Go-Karting Xtreme (GMT))
    .setColor("#15f153")
    .addField("Monday:","1800-2000")
    .addField("Tuesday:","1800-2000")
    .addField("Wednesday:","1800-2000")
    .addField("Thursday:","1800-2000")
    .addField("Friday:","1800-2000")
    .addField("Saturday:","1800-2000")
    .addField("Sunday:","1800-2000")
    .setFooter("Go-Karting Xtreme, updated at:", message.createdAt)

    let openinghours = message.guild.channels.find(`name`, "opening-hours");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    openinghours.send(bookEmbed);
    

     else
         return;
}
