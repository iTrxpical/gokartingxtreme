exports.run = (Discord, client, message, args) => {

    message.delete(100)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .setTitle('Priavate Bookings')
        //.setImage('')
        .setDescription('As 25/3/18 you'll be able to book private sessions! This will mean that you can hire us for your own events. Below are our private booking plans. To book us, please create a ticket in #create-ticket.')
        //.addField("Yes!", "I can't wait.")
    message.channel.send(embedping);
    //message.channel.send("Me!")
}
