exports.run = (client, message) => {
    if (message.channel.nsfw === false) {
        return message.channel.send("Family Friendly")
    };
    const cat = require('nekos.life');
    const neko = new cat();
    
    async function rnh() {
    const embed = new client.vembed();
    
    const { url }  = await neko.nsfw.randomHentaiGif();
    embed.setImage(url);    
    message.channel.send(embed);
    }
    
    rnh();
    
    }
    