exports.run = (client, message, args) => {
if(args === undefined || args.length == 0){
  args = "dirinya sendiri"
}
const cat = require('nekos.life');
const neko = new cat();

async function slaps() {
const embed = new client.vembed();
const user = message.author.id;

const { url }  = await neko.sfw.slap();
embed.setImage(url);
embed.setDescription(`<@${user}> Menampar ${args}`);
message.channel.send(embed);
}

slaps();

}
