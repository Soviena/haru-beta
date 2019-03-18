exports.run = (client, message, args) => {
    const user = message.author.id;
    const member = message.guild.member(user);
    const konfig = process.env
    console.log(konfig.token);
    console.log(member.joinedTimestamp);
  
}
