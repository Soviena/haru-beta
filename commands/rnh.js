exports.run = (client, message, args) => {
    if (message.channel.nsfw === false) {
        return message.channel.send("Family Friendly")
    };
  
    if(args === undefined || args.length == 0){
    var x = '1';
    }  
  
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
    