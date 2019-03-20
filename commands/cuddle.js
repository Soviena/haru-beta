
exports.run = (client, message, args) => {
if(args === undefined || args.length == 0){
  args = "dirinya sendiri"
}
const cat = require('nekos.life');
const neko = new cat();

async function cdl() {
const embed = new client.vembed();
const user = message.author.id;

const { url }  = await neko.sfw.cuddle();
embed.setImage(url);
embed.setDescription(`<@${user}> memeluk mu dengan hangat (${args})`);
message.channel.send(embed);
}

cdl();

}
