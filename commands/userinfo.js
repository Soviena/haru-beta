exports.run = (client, message, args) => {
    const moment = require("moment");
    moment.locale('id');

    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
        const self = message.author.id
        member = message.guild.member(self);
    }
  
    // get day elapsed
    var oneDay = 24*60*60*1000;
    var time = new Date(moment.utc(member.joinedAt).format('YYYY,MM,DD'));
    var joint = new Date(moment.utc(member.user.createdAt).format('YYYY,MM,DD'));
    var a = new Date(moment.utc(message.createdTimestamp).format('YYYY,MM,DD'));
    var diffDays = Math.round(Math.abs((a.getTime() - time.getTime())/(oneDay)));
    var diffDaysj = Math.round(Math.abs((a.getTime() - joint.getTime())/(oneDay)));
  
    const joinServer = moment(member.joinedAt).format('llll');
    const embed = new client.vembed();
    if(message.guild.members.get(member.user.id).nickname !== null){
    embed.setAuthor(`${member.user.username}#${member.user.discriminator} ~ ${message.guild.members.get(member.user.id).nickname}`);
    } else {
    embed.setAuthor(`${member.user.username}#${member.user.discriminator}`);
    }
    embed.setThumbnail(member.user.avatarURL);
    embed.addField('Lahir di Discord pada : ', `${moment.utc(member.user.createdAt).format('dddd, Do MMMM YYYY')} \n (${diffDaysj}) hari yang lalu`, true);
    embed.addField('Bergabung dengan server pada:', `${moment.utc(member.joinedAt).format('dddd,Do MMMM YYYY')} \n (${diffDays}) hari yang lalu`, true);
    message.channel.send(embed);
    
}