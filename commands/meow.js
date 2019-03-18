exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function cats() {
const embed = new client.vembed();

const { url }  = await neko.sfw.meow();
embed.setImage(url);
message.channel.send(embed);
}

cats();

}
