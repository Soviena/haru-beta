exports.run = (client, message) => {
  const sql = client.sql ;
  const list = sql.prepare("SELECT * FROM Rp ORDER BY Respect DESC LIMIT 10;").all();
  
    const embed = new client.vembed()
    .setTitle("Global Respect Leaderboard")
    .setDescription(`Top 10 Pemberi Respect terbesar di ${client.guilds.size} server`)
    .setColor(0x00AE86);
 
  for(const data of list) {
    if(data.Respect === 0){
    } else {
    embed.addField(`${client.users.get(data.user).tag} - ${client.guilds.get(data.guild).name}`, `Respect : ${data.Respect}`);
    }
  };
  message.channel.send(embed);
}