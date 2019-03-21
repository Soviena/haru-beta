exports.run = (client, message, args) => {  
  if(message.author.id !== client.config.ownerID) {
  message.reply("Kamu Bukan Master Ku!");
  return;
  }
    
  arraySort = require('array-sort')

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}**. 🔸 **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`🏆 INVITE LEADERBOARD 🏆`)
        .setColor(color)
        .setDescription(`${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send(embed);
    
}
  //var server = 
  
  //var ch = args[0].slice(2, -1);
  //args.shift();
  //var txt = args.join(' ');
  //client.channels.get('556795240682618881').send(txt);
  //client.guilds.get('556788141202210816').channels.get('556795240682618881').send(txt)  
}
