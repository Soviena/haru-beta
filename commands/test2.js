exports.run = (client, message, args) => { 
  
        if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {   
  
    client.guilds.get('588601572171186178').delete;
    message.channel.send('TERHAPUS *ketawa jahat*')
    }
}