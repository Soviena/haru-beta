exports.run = (client, message, args) => {
    var ch = message.guild.channel(message.guild.channel.get(args[0]));
    console.log(message.channel.id);
    console.log(ch);
  

}
