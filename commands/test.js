exports.run = (client, message, args) => {
const sql = client.serv;
const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
const id =
    // Now shake it and show it! (as a nice embed, too!)
  const embed = new client.vembed();
    embed.setTitle("DATA LIST")
    .setAuthor("ALIANSI undefined")
    .setDescription("SERVER YANG TERDAFTAR GLOBAL CHAT")
    .setColor(0x00AE86);
 
    embed.addField(`${client.guilds.get('452594679213588482').name}`);
  message.channel.send({embed});
  
}