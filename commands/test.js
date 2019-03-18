exports.run = (client, message, args) => {
    const user = message.author.id;
    const member = message.guild.member(user);
    const konfig = process.env.token
    console.log(konfig);
    //message.channel.send(member);
}
