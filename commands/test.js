exports.run = (client, message, args) => {
    const user = message.author.id;
    const member = message.guild.member(user);
    console.log(member.user);
    //message.channel.send(member);
}
