exports.run = (client, message) => {
    const embed = new client.vembed();
    embed.setTitle(`🔒  Roles List [${message.guild.roles.size}]`);
    embed.setDescription(`${message.guild.roles.map(roles => roles).join(' \n ')}`, true)
    embed.setFooter(`Jumlah member : ${client.users.size}`)
    message.channel.send(embed);

}
    

