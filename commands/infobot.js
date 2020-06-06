exports.run = (client, message) => {
  const embed = new client.vembed;
  
  let totalSeconds = (client.uptime / 1000);
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  
  embed.setTitle('Info Bot Hibiki Verniy');
  embed.setDescription('Bot yang di buat oleh !cry#8870');
  embed.addField('Di hosting di :' , 'GLITCH');
  embed.addField('Versi Bot : ', 'v2.2');
  embed.addField('Aktif di : ' , `${client.guilds.size} server`);
  embed.addField('Melayani : ', `${client.users.size} member`);
  embed.addField(`Aktif sejak :` , `${hours} jam, ${minutes} menit yang lalu`);
  embed.setColor(0x5effd9);
  message.channel.send(embed);
}