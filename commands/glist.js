exports.run = (client, message, args) => {
const sql = client.serv;
const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
 
    // Now shake it and show it! (as a nice embed, too!)
  const embed = new client.vembed();
    embed.setTitle("DATA LIST")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("SERVER YANG TERDAFTAR GLOBAL CHAT")
    .setColor(0x00AE86);
 
  for(const data of list) {
    embed.addField(`${client.guilds.get(data.id).name}`, `--> ${message.guild.channels.get(data.channel).name}`);
  }
  message.channel.send({embed});
  
}