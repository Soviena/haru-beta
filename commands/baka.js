
exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function bk() {
const embed = new client.vembed();

const { url }  = await neko.sfw.baka();
embed.setImage(url);
embed.setDescription(`<@${message.author.id}> said baka`);
message.channel.send(embed);
}

bk();

}

