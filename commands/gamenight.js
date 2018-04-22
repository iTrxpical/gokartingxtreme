exports.run = (Discord, client, message, args) => {

let allowedRole = message.guild.roles.find("name", "Event Staff");
if(message.member.roles.has(allowedRole.id)) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("You can't do a gamenight of nothing!");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("#FF0000")
		   .setThumbnail("https://t1.rbxcdn.com/dbffc3e5422149690627eab815bb193e")
		   .setTitle(":mega: Gamenight:")
		   .setDescription(text)
		   .setFooter("An announcment from " + author + " made at ")
		   .setTimestamp()
		   message.channel.send("@here");
		   message.channel.send("Gamenight hosted by: " + author);
		   message.channel.send({embed})
	   }
}
