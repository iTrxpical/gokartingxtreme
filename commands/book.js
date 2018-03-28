exports.run(Discord, client, message, args) => {

const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
     	message.channel.send("What plan do you wish to book?");
            if (message.content === "Gold") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content === "Silver") {
                message.channel.send("You Want To Change Your Spec OK!");
            } else if (message.content === "Bronze") {
		    
	    }
	message.author.send("What time & date do you wish the private session to be?");
        console.log(collector)
        let time = collector.on('collect', message => {
            });
        let bookname = message.author;
        message.author.send("Any Comments?")
        console.log(collector)
        let notes = collector.on('collect', message => {
        });
        
        let bookEmbed = new Discord.RichEmbed()
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
