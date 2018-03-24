exports.run = (Discord, client, message, args) => {
        
message.author.send("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content === "See") {
                message.channel.send("You Want To See Someones Spec OK!");
            } else if (message.content === "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
            }
        })
}
