exports.run = async (client, message) => {      
  const arraySort = require('array-sort');

  let invites = await message.guild.fetchInvites().catch(error => { 
    return message.channel.send('Aku gk punya wewenangs!');
    }) 

  invites = invites.array();

  arraySort(invites, 'uses', { reverse: true }); 

  let possibleinvites = [];
  let index = 0;
  invites.forEach(function(invites) {
    possibleinvites.push(`**${++index}**. 🔸 **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

  const embed = new client.vembed()
    .setTitle(`🏆 INVITE LEADERBOARD 🏆`)
    .setColor('RANDOM')
    .setDescription(`${possibleinvites.join('\n')}`)
    .setTimestamp();
    message.channel.send(embed);

  //var server = 
  
  //var ch = args[0].slice(2, -1);
  //args.shift();
  //var txt = args.join(' ');
  //client.channels.get('556795240682618881').send(txt);
  //client.guilds.get('556788141202210816').channels.get('556795240682618881').send(txt)  
}
