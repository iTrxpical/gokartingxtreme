exports.run = (Discord, client, message, args) => {

const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
     	message.channel.send("What plan do you wish to book?");
            if (message.content === "Gold") {
		var type = 'Gold'
                message.channel.send("Gold: :white_check_mark:");
		message.channel.send("Silver: :negative_squared_cross_mark:");
		message.channel.send("Bronze: :negative_squared_cross_mark:");
            } else if (message.content === "Silver") {
               	message.channel.send("Gold: :negative_squared_cross_mark:"); 
		message.channel.send("Silver: :white_check_mark:");
		message.channel.send("Bronze: :negative_squared_cross_mark:");
		var type = 'Silver'
            } else if (message.content === "Bronze") {
                message.channel.send("Gold: :negative_squared_cross_mark:");
		message.channel.send("Silver: :negative_squared_cross_mark:");
		message.channel.send("Bronze: :white_check_mark:");
		var type = 'Bronze'
	    }
	message.channel.send("What time do you wish it to be");

        let bookname = message.author;
        
    var embedping = new Discord.RichEmbed()
    .setTitle("Go Karting Xtreme")
    .setDescription("Private Booking")
    .setColor("#15f153")
    .addField("Booker", `${bookname} with ID: ${bookname.id}`)
    .addField("Time & Date", `${time}`)
    .addField("Booked At", message.createdAt)
    .addField("Notes", `${notes}`);
    .setFooter("Private Booking V1.0")

    let bookingchannel = message.guild.channels.find(`name`, "private-hire");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    bookingchannel.send(bookEmbed);
    message.reply("Your booking has been placed! Expect a DM from our team shortly!")
    
}
