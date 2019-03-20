exports.run = (client, message) => {
const cat = require('nekos.life');
const snekfetch = require("snekfetch");
const neko = new cat();
const nekoAPI = 'https://nekos.life/api/v2/img/'

async function cats() {
const embed = new client.vembed();

const endpoint = message.channel.nsfw ? 'lewd' : 'neko'
console.log(endpoint);
const { body: { url } } = await snekfetch.get(nekoAPI + endpoint);
embed.setImage(url);
message.channel.send(embed);
}
  
try {
  cats();
}
catch(error) {
  console.error(error);
}


}
