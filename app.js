// Go-Karting Xtreme Discord Bot Code
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: GR9qVVd

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs on BloxiCord.`);
    client.user.setActivity('on ' + client.guilds.size + ' servers! | ~help', { type: 'WATCHING' });
    client.user.setStatus("online");
});


client.on('message', message => {

    let boe = message.guild.roles.find(r => r.name === "Board of Exectives") || message.guild.roles.find(r => r.name === "Chief Executive Officer");
    if (!message.author.hasRole(boe)) return;
    if (!message.channel.id === '422091691604967425') message.delete(10000) return;

})
   client.on('message', message => {
    
    
    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**Unfortunately we can only read things our guild (server). Please join our server (code: GR9qVVd) to use the bot! **")
        return;
    }

    var guildid = message.guild.id
    db.fetch(`guildPrefix_${guildid}`).then(i => {

        let prefix = i || '~'

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`);

        }

    })
})

client.login(process.env.TOKEN);
