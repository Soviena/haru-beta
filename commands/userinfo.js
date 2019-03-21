exports.run = async (client, message, args) => {
    const moment = require("moment");

    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const self = message.author.id
        member = message.guild.member(self);
    }
  
    // get day elapsed
    var oneDay = 24*60*60*1000;
    var time = new Date(moment.utc(member.joinedAt).format('YYYY,MM,DD'));
    var a = new Date(moment.utc(member.lastMessage.createdTimestamp).format('YYYY,MM,DD'));
    var diffDays = Math.round(Math.abs((a.getTime() - time.getTime())/(oneDay)));
  
    const joinServer = moment(member.joinedAt).format('llll');
    const embed = new client.vembed();
    embed.setAuthor(`${member.user.username}#${member.user.discriminator} ~ ${message.guild.members.get(member.user.id).nickname}`);
    embed.setThumbnail(member.user.avatarURL);
    embed.addField('Membuat akun discord pad : ');
    embed.addField('Bergabung dengan server pada:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} \n (${diffDays}) hari yang lalu`, true);
    message.channel.send(embed);
    console.log(member.user.createdAt);
    
}