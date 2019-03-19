exports.run = async (client, message, args) => {
    const moment = require("moment");

    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const self = message.author.id
        member = message.guild.member(self);
    }
    const joinServer = moment(member.joinedAt).format('llll');
    const embed = new client.vembed();
    var time = cz
    var a = member.lastMessage.createdTimestamp;
    var day = a - time;
    console.log(time);
    console.log(day);
}
