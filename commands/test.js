exports.run = (client, message, args) => { 
  
    const embed = new client.vembed();
    var url = client.guilds.get(args).iconURL;
    embed.setAuthor(client.guilds.get(args).owner.user.name, client.guilds.get(args).owner.user.avatarURL)
    .setDescription(`${client.guilds.get(args).name}`)
    .setImage(url)
    .setColor('RANDOM')
    .setFooter(`${message.author.username}#${message.author.discriminator} `, message.author.avatarURL)
    .setTimestamp();
   
  client.guilds.get().channels.get().send(embed);
  
}