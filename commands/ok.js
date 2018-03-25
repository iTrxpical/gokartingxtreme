exports.run = (Discord, client, message, args) => {

    message.delete(100)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //var embedping = new Discord.RichEmbed()
        //.setColor(randomColor)
       // .addField("Yes!", "I can't wait.")
    message.channel.send("Please react below with :ballot_box_with_check: if you are attending!")
}
