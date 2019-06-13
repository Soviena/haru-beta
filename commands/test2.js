exports.run = (client, message, args) => { 
  
        if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {   
  
    const embed = new client.vembed();
    var id = args;
    let guild = client.guilds.get(`${id}`);
    if (!guild) return message.reply("Error :(");
    guild.fetchInvites()
      .then(invites => message.channel.send('Found Invites:\n' + invites.map(invite => invite.code).join('\n')))
      .catch(console.error);
    }
}