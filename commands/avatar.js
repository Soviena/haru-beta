exports.run = async (client, message, args) => {
    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const avatar = message.author.id
        member = message.guild.member(avatar);
    }
    const embed = new client.vembed();
    embed.setTitle(`${member.user.username}'s Profile Picture.`)
    embed.setImage(member.user.displayAvatarURL);
    console.log(member.user);
    console.log(member);
    message.channel.send(embed);
}
