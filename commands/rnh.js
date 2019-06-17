exports.run = (client, message, args) => {
    if (message.channel.nsfw === false) {
        return message.channel.send("Family Friendly")
    };
  
    if(args === undefined || args.length == 0){
    var x = 1;
    }  else {
    if(args > 10){
    return message.reply("Maximal 10");
    }  else {
    x = 5;
    }
    }
  
    const cat = require('nekos.life');
    const neko = new cat();
    
    async function rnh() {
    const embed = new client.vembed();
    
    var i;
    for (i = 0; i < x; i++) { 

    const { url }  = await neko.nsfw.randomHentaiGif();
    embed.setImage(url);    
    message.channel.send(embed);
    }
    }
    
    rnh();
    message.channel.send(`TOBAT EI <@${message.author.id}>`);

    
    }
    