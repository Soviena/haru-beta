exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function ear() {
const embed = new client.vembed();

if (message.channel.nsfw === true) {
    const { url }  = await neko.nsfw.eroKemonomimi();
    embed.setImage(url);

} else {
    const { url }  = await neko.sfw.kemonomimi();
    embed.setImage(url);

}

message.channel.send(embed);
}

ear();

}
