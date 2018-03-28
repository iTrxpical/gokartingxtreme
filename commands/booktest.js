

exports.run(Discord, client, message, args) => {
message.author.send("Hi there! What session would plan would you liek to book? Options are: 'GOLD', 'SILVER' and 'BRONZE'. Say 'cancel' to cancel.");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            if (message.content === "GOLD") {
                message.channel.send("When would you like to book your gold session? Please include time and date.");
                var plan = "GOLD";
                collector.on('collect', message => 
                let date = collector.on('collect', message => {
            });
                let bookname = message.author;
            }
            } else if (message.content === "SILVER") {
                message.channel.send("When would you like to book your silver session? Please include time and date.");
                var plan = "SILVER";
                collector.on('collect', message => 
                let date = collector.on('collect', message => {
            });
                let bookname = message.author;
            } else if (message.content === "BRONZE") {
                message.channel.send("When would you like to book your bronze session? Please include time and date.");
                var plan = "BRONZE";
                collector.on('collect', message => 
                let date = collector.on('collect', message => {
            });
                let bookname = message.author;
            }
        })    
}
