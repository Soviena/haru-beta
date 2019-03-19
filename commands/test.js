exports.run = async (client, message, args) => {
    const moment = require("moment");

    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const self = message.author.id
        member = message.guild.member(self);
    }
    const joinServer = moment(member.joinedAt).format('llll');
    const embed = new client.vembed();
    var oneDay = 24*60*60*1000;
    var time = new Date(moment.utc(member.joinedAt).format('YYYY,MM,DD'));
    var a = new Date(moment.utc(member.lastMessage.createdTimestamp).format('YYYY,MM,DD'));
    var diffDays = Math.round(Math.abs((a.getTime() - time.getTime())/(oneDay)));
  
    console.log(time);
    console.log(a);
    console.log(diffDays);
}
