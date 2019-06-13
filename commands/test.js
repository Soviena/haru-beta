exports.run = (client, message, args) => { 
  
    const embed = new client.vembed();
    embed.setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription('')
    .setImage(url)
    .setColor('RANDOM')
    .setFooter(`${message.author.username}#${message.author.discriminator} `, message.author.avatarURL)
    .setTimestamp();
 
    for(const data of list) {
      if(data.id !== message.guild.id) {
        if(client.guilds.get(data.id) !== undefined){
          client.guilds.get(data.id).channels.get(data.channel).send(embed);
        } else {}
      }  
    }  
  
}