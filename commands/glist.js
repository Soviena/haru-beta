exports.run = (client, message, args) => {
const sql = client.serv;
const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
 
    // Now shake it and show it! (as a nice embed, too!)
  const embed = new client.vembed();
    embed.setTitle("DATA LIST")
    .setAuthor("ALIANSI undefined")
    .setDescription("SERVER YANG TERDAFTAR GLOBAL CHAT")
    .setColor(0x00AE86);
 
  for(const data of list) {
    if(client.guilds.get(data.id) !== undefined){
    embed.addField(`${client.guilds.get(data.id).name}`, `--> ${client.guilds.get(data.id).channels.get(data.channel).name}`);
    } else {}
  }
  message.channel.send({embed});
  
}