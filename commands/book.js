exports.run = (Discord, client, message, args) => {

const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
           message.channel.send("What plan do you wish to book?");
	        collector.on('collect', message => {
            if (message.content === "Gold") {
		var type = 'Gold'
                    var embedgold = new Discord.RichEmbed()
		.addField("Gold:", ":white_check_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedgold)
            } else if (message.content === "Silver") {
                    var embedsilver = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":white_check_mark:")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedsilver)
		var type = 'Silver'
            } else if (message.content === "Bronze") {
                    var embedbronze = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.addField("Bronze:", ":white_check_mark:");
		message.channel.send(embedbronze)
		var type = 'Bronze'
	    }
		})
			     
        let bookname = message.author;
        
    var embedping = new Discord.RichEmbed()
    .setTitle("Go Karting Xtreme")
    .setDescription("Private Booking")
    .setColor("#15f153")
    .addField("Booker", `${bookname} with ID: ${bookname.id}`)
    .addField("Type", `&{type}`)
    .addField("Booked At", message.createdAt)
    .setFooter("Private Booking V1.0");

    let bookingchannel = message.guild.channels.find(`name`, "private-hire");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    bookingchannel.send(bookEmbed);
    message.reply("Your booking has been placed! Expect a DM from our team shortly!")
    
}
