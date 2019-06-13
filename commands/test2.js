exports.run = (client, message, args) => { 
  
        if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {   
  
    message.channel.send(message.guild.iconURL);
    }
}