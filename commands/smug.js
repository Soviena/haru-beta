exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function mug() {
const embed = new client.vembed();

const { url }  = await neko.sfw.smug();
embed.setImage(url);
embed.setDescription(`<@${message.author.id}> Smugged`);
message.channel.send(embed);
}

mug();

}
