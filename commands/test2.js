exports.run = (client, message, args) => { 
  const sql = client.serv;
const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
  
        if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {   
  const embed = new client.vembed();
    embed.setTitle("DATA LIST")
    .setAuthor("ALIANSI undefined")
    .setDescription("SERVER YANG TERDAFTAR GLOBAL CHAT")
    .setColor(0x00AE86);
 
  for(const data of list) {
    message.channel.send(`${data.id}`)
  }
  message.channel.send({embed});
    }
}