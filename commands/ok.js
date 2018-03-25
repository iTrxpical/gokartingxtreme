exports.run = (Discord, client, message, args) => {

    message.delete(100)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
        .setTitle('#HYPE')
        .setImage('https://lh3.googleusercontent.com/vwnUTKfCtde45bTBY2WnRHYt79If3uA1jLCIhYgNcFGYt_6wBrrP5ooHA-ZTq4WeyaPXd710ymhds4KJFKRw=w1680-h913')
        //.addField("Yes!", "I can't wait.")
    //message.channel.send(embedping);
    message.channel.send("Me!")
}
