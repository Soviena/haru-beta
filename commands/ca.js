
exports.run = (client, message) => {
    if (message.channel.nsfw === false) {
        return message.channel.send("Family Friendly")
    };
    const cat = require('nekos.life');
    const neko = new cat();
    
    async function ca() {
    const embed = new client.vembed();
    
    const { url }  = await neko.nsfw.cumArts();
    embed.setImage(url);    
    message.channel.send(embed);
    }
    
    ca();
    
    }
  
    