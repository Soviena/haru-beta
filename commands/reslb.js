exports.run = (client, message) => {
  const sql = client.sql ;
  const list = sql.prepare("SELECT * FROM Rp WHERE guild = ? ORDER BY Respect DESC LIMIT 10;").all(message.guild.id);
  
    const embed = new client.vembed()
    .setTitle("Respect Leaderboard")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Top 10 Pemberi Respect terbesar di server ini")
    .setColor(0x00AE86);
 
  for(const data of list) {
    if(data.Respect === 0){
    } else {
    embed.addField(client.users.get(data.user).tag, `Respect : ${data.Respect}`);
    }
  };
  message.channel.send(embed);
}