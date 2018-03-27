
exports.run = (Discord, client, message, args) => {

let sender = message.author;
let allowedRole = message.guild.roles.find("name", "Board Of Executives");
let allowedRoleTwo = message.guild.roles.find("name", "Chief Executive Officer");


       if(message.member.roles.has(allowedRole.id)) {
         message.channel.send("Test")
       } else if (sender.bot) {
         message.delete(5000)
       } else {
         message.channel.sent("You need to be a BoX to use this command!")
         message.delete()
         .then(m=>m.delete(10000))
}}

    
 
