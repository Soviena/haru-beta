exports.run = (client, message) => {
  const embed = new client.vembed;
  
  embed.setTitle('Info Bot Hibiki Verniy');
  embed.setDescription('Bot yang di buat oleh Verniy#2201');
  embed.addField('Di hosting di :' , 'GLITCH');
  embed.addField('Versi Bot : ', 'v1.10');
  embed.addField('Aktif di : ' , `${client.guilds.size} server`);
  embed.addField('Melayani : ', `${client.users.size} member`);
  embed.setColor(0x5effd9);
  message.channel.send(embed);
}