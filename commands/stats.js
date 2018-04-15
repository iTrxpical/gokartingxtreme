var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.channel.send("Communication Detartment Stats:");
    var embedinfo = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme - Communication Department")
  .setColor("#0000FF")
  .setDescription("The communication department opened on 5/3/18 and today is our 40th operating day! Below are some stats about what we've managed to do in those 40 days.")
  .addField("Applications Recieved", "48")
  .addField("Staff Hired", "25+")
  .addField("Events Heald", "15+")
  .addField("Tweets Tweeted", "50+")
  .addField("Robux Made From Merch", "R$300+")
  .addField("Tickets Solved", "800+")
    message.channel.sendEmbed(embedinfo);
    var embedgold = new Discord.RichEmbed()
  .setTitle("The Future") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#0000FF")
    .setDescription("We've also got a ton of exciting stuff planned for the future, we'll be hosting competitions, intruducing new staff roles(including a rank between manager and staff), as well as putting together a livestream team that will stream race events live to YouTube. Thanks, Aaron!")
    message.channel.sendEmbed(embedgold);
    message.channel.send("@everyone");

}
