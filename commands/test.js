
exports.run = (Discord, client, message, args) => {

let sender = message.author;
let allowedRole = message.guild.roles.find("name", "Board Of Executives");
let allowedRoleTwo = message.guild.roles.find("name", "Chief Executive Officer");


       if(message.member.roles.has(allowedRole.id)) {
         message.channel.send("Test")
       } else {
         message.channel.send(":gear: Our furious workers (TheReal) are working hard to make something, don't try again please!")
         message.delete()
         .then(m=>m.delete(10000))
}}

    
 
