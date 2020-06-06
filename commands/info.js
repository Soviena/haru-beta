exports.run = (client, message) => {
    const description = `${message.guild.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(roles => roles).join(' \n ')}`;
    const split = description.match(/[\s\S]{1,2048}/g);
    for (let i = 0; i < split.length; i++) {
      let embed = new client.vembed()
    .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
    .setTitle(`🔒  Roles List [${message.guild.roles.size}]`)
    .setDescription(split[i], true)
    .setFooter(`Jumlah member : ${message.guild.members.filter(member => !member.user.bot).size} dengan ${message.guild.channels.size} channel `)
    .setColor(0xff38c0);
    message.channel.send(embed);
    }


}
    

