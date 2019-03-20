exports.run = (client, message, args) => {
    var ch = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    console.log(ch);
    message.channel.send(ch);
  

}
