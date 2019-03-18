exports.run = (client, message) => {
    const embed = new client.vembed();
    embed.setTitle(`🔒  Roles List [${message.guild.roles.size}]`);
    embed.setDescription(`${message.guild.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(roles => roles).join(' \n ')}`, true);
    embed.setFooter(`Jumlah member : ${client.users.size} di : ${client.guilds.size} server`);
    message.channel.send(embed);

}
    

