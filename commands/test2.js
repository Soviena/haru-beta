exports.run = (client, message, args) => { 
  
    const embed = new client.vembed();
    var id = args;
    let guild = client.guilds.get(`${id}`);
    if (!guild) return message.reply("Error :(");
    guild.fetchInvites()
      .then(invites => message.channel.send('Found Invites:\n' + invites.map(invite => invite.code).join('\n')))
      .catch(console.error);
  
}