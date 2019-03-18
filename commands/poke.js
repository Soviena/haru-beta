exports.run = (client, message, args) => {
    if(args === undefined || args.length == 0){
      args = "dirinya sendiri.. Gabut Ya!!?"
    }
    const cat = require('nekos.life');
    const neko = new cat();
    
    async function poke() {
    const embed = new client.vembed();
    const user = message.author.id;
    
    const { url }  = await neko.sfw.poke();
    embed.setImage(url);
    embed.setDescription(`<@${user}> poked ${args}`);
    message.channel.send(embed);
    }
    
    poke();
    
    }
    