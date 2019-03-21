exports.run = async (client, message, args) => {  
  if(message.author.id === client.config.ownerID || message.author.id === '496109700060807174') {
  message.reply("HELLO MASTER, what can i do for you ?");
  return;
  } else {
  message.reply("Siapa anda ?");
  return;
  }
    
  

}
