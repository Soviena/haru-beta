exports.run = async (client, message, args) => {
    const embed = new client.vembed();
    if(message.author.id !== client.config.ownerID) {
        return;
      }else {      
    //zero two
    /*
    embed.setImage('https://i.imgur.com/PzFZAWG.jpg');
    embed.addField('Zero Two', `Darling in the FranXX`);
    embed.setColor(0xFF9D2C);
    message.channel.send(embed);
    */
    //eriri
    /*
    embed.setImage('https://i.imgur.com/AXWCYMK.jpg');
    embed.addField('Eriri Spencer Sawamura', `Saenai Heroine no Sodatekata`);
    embed.setColor(0xFF9D2C);
    message.channel.send(embed);
    */

    //katou megumi
    /*
    embed.setImage('https://i.imgur.com/PcaAaQv.jpg');
    embed.addField('Megumi Katou', `Saenai Heroine no Sodatekata`);
    embed.setColor(0xFF9D2C);
    message.channel.send(embed);
    */

    /*
   message.channel.send("test")
   .then(function (message) {
    message.react("💖")
   });

    const filter = (reaction, user) => {
	['💖'].includes(reaction.emoji.name) && user.id === message.author.id;
    }   

message.awaitReactions(filter, { max: 2, time: 10000, errors: ['time'] })
	.then(collected => {
        message.channel.send(`${collected.first().author} got the correct answer!`);
        console.log(collected);
		})
	.catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
    });

    client.on('messageReactionAdd', (reaction, user) => {
        console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
    });
    
    client.on('messageReactionRemove', (reaction, user) => {
        console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
    });
    */
    
    

    const emoji = "💖";
    let ms = await message.channel.send("sa");
    await ms.react(emoji);

    const filter = (reaction, user) => {
        ['💖'].includes(reaction.emoji.name) && user.id === message.author.id && author.bot === false;
    }
    
     ms.awaitReactions(filter, { max: 2, time: 10000, errors: ['time'] })
     message.reply(`got the correct answer!`);
     console.log(message.author.bot);
     
     


    client.on('messageReactionAdd', (reaction, user) => {
        console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
    });
    
    client.on('messageReactionRemove', (reaction, user) => {
        console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
    });
    



    }
}