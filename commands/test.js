exports.run = async (client, message, args) => {  
  if(message.author.id !== client.config.ownerID) {
  message.reply("Kamu Bukan Master Ku!");
  return;
  }
    
  console.log(client.commands.map(c=>c.commandName));  

}
