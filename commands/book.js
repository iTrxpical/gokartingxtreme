exports.run(Discord, client, message, args) => {
	
	let embedtitle = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme")
  .setColor("#15f153")
  .setDescription("Private Booking Information & ToS")
  .addField("Payment", "Payment will be paid after our team have decided that the session will be able to go ahead. Once paid, no refunds will be given. We DM you on discord to discuss the final stages of private hire sessions.")
  .addField("Plans", "We have three stages for private hire sessions, `bronze`, `silver` and `gold`.")
  
  let embedgold = new Discord.RichEmbed()
    .setTitle("Gold") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#FFD700")
    .setDescription("Gold Plan Details:")
    .addField("Session Time", "30 minutes")
    .addField("Racer Amount", "20 racers maximum")
    .addField("Staff", "At least 8 working staff members")
    .addField("Race Types", "Free time, races and showdown avalible")
    .addField("Price", "R$400 (SALE)")
  
  let embedsilver = new Discord.RichEmbed()
    .setTitle("Silver") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#C0C0C0")
    .setDescription("Silver Plan Details:")
    .addField("Session Time", "60 minutes")
    .addField("Racer Amount", "20 racers maximum")
    .addField("Staff", "At least 6 working staff members")
    .addField("Race Types", "Free time, races and showdown avalible")
    .addField("Price", "R$250")
  
  let embedbronze = new Discord.RichEmbed()
    .setTitle("Bronze") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#C0C0C0")
    .setDescription("Bronze Plan Details:")
    .addField("Session Time", "30 minutes")
    .addField("Racer Amount", "15 racers maximum")
    .addField("Staff", "At least 4 working staff members")
    .addField("Race Types", "Free time, races avalible")
    .addField("Price", "R$150")
  
  message.channel.sendEmbed(embedtitle);
  message.channel.sendEmbed(embedgold);
  message.channel.sendEmbed(embedsilver);
  message.channel.sendEmbed(embedbronze);
}
