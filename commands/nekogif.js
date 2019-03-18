exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function negif() {
const embed = new client.vembed();

const { url }  = await neko.sfw.nekoGif();
embed.setImage(url);
message.channel.send(embed);
}

negif();

}
