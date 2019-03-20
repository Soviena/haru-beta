exports.run = (client, message, args) => {
  
  if(message.author.id !== client.config.ownerID) {
  message.reply("Kamu Bukan Master Ku!");
  return;
  }
  
  //var ch = args[0].slice(2, -1);
  //args.shift();
  var txt = args.join(' ');
  //client.channels.get('556795240682618881').send(txt);
  client.guilds.get('556788141202210816').channels.get('556795240682618881').send(txt)  
}
