    
exports.run = (client, message, args) => {
    if(message.author.id !== client.config.ownerID) {
    message.reply("Kamu Bukan Master Ku!");
    return;
    }
    const sql = client.serv;
    const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
     
    var txt = args.join(' ');
    
    // Now shake it and show it! (as a nice embed, too!)
    const embed = new client.vembed();
    embed.setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`${txt}`)
    .setColor('RANDOM')
    .setFooter(`${message.author.username}#${message.author.discriminator} `, message.author.avatarURL)
    .setTimestamp();
    for(const data of list) {
      if(data.id !== message.guild.id) {
         console.log(client.guilds.get("'"+data.id+"'").name);
      client.guilds.get("'"+data.id+"'").channels.get("'"+data.channel+"'").send(embed);
      }  
    }  
  
}