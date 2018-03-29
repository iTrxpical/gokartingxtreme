exports.run = (Discord, client, message, args) => {

	if (message.channel.id === '368417914459783171') {
	message.delete()
	} else {
	message.reply("unfortunately we can't book in this channel! Please go to <#368417914459783171> to book a private session!")
	.then(m=>m.delete(10000))
	return;
	}

var type = " ";
var time = " ";
var date = " ";
var group = " ";
var groupid = "N/A";
var minrole = "N/A";
var notesPlans = " ";
var usernames = "N/A";

const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 300000 });
        message.channel.send("The max time for this booking process is `5 minutes`, if you take longer then it may not go through the system. **Notice: Our booking process will not tell you when the time is over, if you do not recieve a DM from our bot within an hour of booking, retry or contact our BoX team.**");
	message.channel.send("What plan do you wish to book? (`Gold`, `Silver` or `Bronze`)");
	        collector.on('collect', message => {
            if (message.content == "Gold") {
		type = 'Gold'
    var embedgold = new Discord.RichEmbed()
		.addField("Gold:", ":white_check_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.setColor("#FFD700")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedgold)
		message.delete()
		message.channel.send("What time do you wish it to be? (Include timezone)");
	  collector.on('collect', message => {
		time = message.content
		var embedtime = new Discord.RichEmbed()
		.addField("Time:", `${time}`)
		message.channel.send(embedtime)
		message.delete()
		message.channel.send("What date do you wish it to be? (Format: DD-MM-YY (**- not /**))");
	  collector.on('collect', message => {
		date = message.content
		var embeddate = new Discord.RichEmbed()
		.addField("Date:", `${date}`)
		message.channel.send(embeddate)
		message.channel.delete
		})
		})

	  } else if (message.content == "Silver") {
                    var embedsilver = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":white_check_mark:")
		.setColor("#C0C0C0")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedsilver)
		message.delete()
		type = 'Silver'
            } else if (message.content == "Bronze") {
                    var embedbronze = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.setColor("#CD7F32")
		.addField("Bronze:", ":white_check_mark:");
		message.channel.send(embedbronze)
		message.delete()
		type = 'Bronze'
	    }
		})

        let bookname = message.author;

function embedBook() {
    var bookEmbed = new Discord.RichEmbed()
    .setTitle("Go Karting Xtreme")
    .setDescription("Private Booking")
    .setColor("#15f153")
    .addField("Booker", `${bookname} with the ID: ${bookname.id}`)
    .addField("Type", `${type}`)
    .addField("Time", `${time}`)
		.addField("Date", `${date}`)
    .addField("Booked At", message.createdAt)
    .setFooter("Private Booking V1.0");

    let bookingchannel = message.guild.channels.find(`name`, "private-hire");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    bookingchannel.send(bookEmbed);
    message.reply("Your booking has been placed! Expect a DM from our team shortly!")
}
setTimeout(embedBook,2e4)
}
