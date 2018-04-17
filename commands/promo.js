var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.channel.send("It's time for promotions!");
    var embedinfo = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme - Communication Department")
  .setAuthor("Aaron#1742", "https://t0.rbxcdn.com/2315d9dfbfa60580b6247b7643215e89")
  .setColor("#0000FF")
  .setThumbnail("https://t1.rbxcdn.com/6dd35ca11f8725b855205aa74b0cd504")
  .setImage("https://t1.rbxcdn.com/dbffc3e5422149690627eab815bb193e")
  .setFooter("An Announcment by AaronnSmh", "https://t1.rbxcdn.com/dbffc3e5422149690627eab815bb193e")
  .setTimestamp()
  .setDescription("It's the time you've been waiting for! Today, 3 lucky peole will be promoted to the supervisor roles. 2 CS and 1 Event Team! Don't be let down if you don't get a promotion, there is always a chance in the future.")
  .addField("First Person:", "Reeseman063 :clap:")
  .addField("Second Person:", "happyman001144 :clap:")
  .addField("Third Person:", "Toy_Kayden :clap:")
  .addField("Well done!", "Contact me for a training.")
    message.channel.sendEmbed(embedinfo);
    message.channel.send("@everyone");

}
