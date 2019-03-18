exports.run = async (client, message, args) => {
    const moment = require("moment");

    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const self = message.author.id
        member = message.guild.member(self);
    }
    const joinServer = moment(member.user.joinedAt).format('llll');
    const embed = new client.vembed();
    embed.setTitle(`${member.user.username}'s Profile info.`)
    embed.addField('Joined at:', `${moment.utc(member.user.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
    message.channel.send(embed);
    console.log(member.user.joinedAt);
    
}