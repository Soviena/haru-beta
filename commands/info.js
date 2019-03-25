exports.run = (client, message) => {
    const embed = new client.vembed()
    .setAuthor(`message.guild.id, message.guild.iconURL`)
    .setTitle(`🔒  Roles List [${message.guild.roles.size}]`)
    .setDescription(`${message.guild.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(roles => roles).join(' \n ')}`, true)
    .setFooter(`Jumlah member : ${message.guild.members.filter(member => !member.user.bot).size} dengan ${message.guild.channels.size} channel `)
    .setColor(0xff38c0)
    .channel.send(embed);

}
    

