// Go-Karting Xtreme Discord Bot Code
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: GR9qVVd

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = '=';

   
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setActivity('over Go-Karting Xtreme | =help', { type: 'WATCHING' });
    sleep(5000);
    client.user.setActivity('Go-Karting Xtreme | =help', { type: 'PLAYING' });
    client.user.setStatus("online");
    client.user.setAvatar('https://lh5.googleusercontent.com/YPh3jGsNfOcSYMDPBL_gZA7pRxnntj_HCELsewakqLuNBDpNOC6Cm1ElTpisBKsqY32SGXzpsuvaRu0w7SO2=w1680-h913');
});


client.on('message', message => {    
    
       let sender = message.author;
       let allowedRole = message.guild.roles.find("name", "Board Of Executives");
       let allowedRoleTwo = message.guild.roles.find("name", "Chief Executive Officer");

       if (message.channel.id === '422091691604967425') {
       if(message.member.roles.has(allowedRole.id)) {
         message.channel.send("Message Allowed :ballot_box_with_check:")
       } else if(message.member.roles.has(allowedRoleTwo.id)) {
         message.channel.send("Message Allowed :ballot_box_with_check:")
       } else if (sender.bot) {
         message.delete(5000)
       } else {
         message.delete()
       }}
    
    if (sender.bot) return;
   
    if (message.channel.type === 'dm') {
        var embederrordm = new Discord.RichEmbed()
        .setTitle('Error 404:')
        .setDescription('Our system can only detect things in the GKX guild. Join our server, with the code: `jBENN5z`!')
        .setImage('https://media.giphy.com/media/gU25raLP4pUu4/giphy.gif')
        .setFooter('Error 404: DM Message | Made by TheReal (Catty)')
        .setColor('#000000');
        message.channel.send(embederrordm);
        return;
    }
   
   if (message.mentions.members.firstKey() === '422393536420511752') {
    message.channel.send(':zzz: :zzz: :sleeping: You woke me. If you need me, please use the command `=info`!')
   }

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

            console.log(`${message.author.username} ${message.author.id} ran the command: ${cmd} sucessfully!`);

        }
    })


client.login(process.env.TOKEN);
