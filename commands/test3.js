hexports.run = (client, message, args) => { 
  
        if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {   
  
    const embed = new client.vembed();
    var id = args;
    //let guild = client.guilds.get(`${id}`);
    //if (!guild) return message.reply("Error :(");
    //guild.fetchInvites()
    //  .then(invites => message.channel.send('Found Invites:\n' + invites.map(invite => invite.code).join('\n')))
    //  .catch(console.error);
  
    let guild = client.guilds.get(`${id}`);
    if (!guild) return message.reply("The bot isn't in the guild with this ID.");

    let invitechannels = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))
    if(!invitechannels) return message.channel.send('Gk bisa bikin code invite nya :(')
  
    invitechannels.random().createInvite()
     .then(invite=> message.channel.send('Found Invite:\n' + 'http://discord.gg/' + invite.code));
    }
}