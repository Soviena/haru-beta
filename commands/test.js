exports.run = (client, message, args) => { 
  
    const embed = new client.vembed();
    console.log(args);
    var channel = args[0].slice(0, 0);
    console.log(channel);
    var url = client.guilds.get(args).iconURL;
    embed.setAuthor(client.guilds.get(args).owner.user.name, client.guilds.get(args).owner.user.avatarURL)
    .setDescription(`${client.guilds.get(args).name}`)
    .setImage(url)
    .setColor('RANDOM');
    message.channel.send(embed);
  
}