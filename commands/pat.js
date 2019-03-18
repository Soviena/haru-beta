exports.run = (client, message, args) => {
    if(args === undefined || args.length == 0){
      args = "dirinya sendiri.. Dasar jomblo!!"
    }
    const cat = require('nekos.life');
    const neko = new cat();
    
    async function pat() {
    const embed = new client.vembed();
    const user = message.author.id;
    
    const { url }  = await neko.sfw.pat();
    embed.setImage(url);
    embed.setDescription(`<@${user}> mengelus ${args}`);
    message.channel.send(embed);
    }
    
    pat();
    
    }
    