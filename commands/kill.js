exports.run = (client, message, args) => {
    var member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(member === undefined || member === null){
    const id = message.author.id
    member = message.guild.member(id);
    }
    
    var kill = require('../data/kill'),
    killkeyarr = Object.keys(kill),
    kindex = Math.floor(Math.random() * killkeyarr.length),
    bunuh = kill[killkeyarr[kindex]];
    message.channel.send(`${member.user.username} ${bunuh} `);

    
}
