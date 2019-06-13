exports.run = (client, message, args) => { 
  
    const embed = new client.vembed();
    var id = args;
    console.log(id);
    console.log(client.guilds.get(`${id}`).name);
    var url = client.guilds.get(`${id}`).iconURL;
    embed.setAuthor(client.guilds.get(`${id}`).owner.user.username, client.guilds.get(`${id}`).owner.user.avatarURL)
    .setDescription(`${client.guilds.get(`${id}`).name}`)
    .setImage(url)
    .setColor('RANDOM');
    message.channel.send(embed);
  
}