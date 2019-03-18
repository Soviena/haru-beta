exports.run = (client, message, args) => {
if(args === undefined || args.length == 0){
  args = "dirinya sendiri... Dasar Jomblo!!"
}
const cat = require('nekos.life');
const neko = new cat();

async function kiss() {
const embed = new client.vembed();
const user = message.author.id;

const { url }  = await neko.sfw.kiss();
embed.setImage(url);
embed.setDescription(`<@${user}> Mencium ${args}`);
message.channel.send(embed);
}

kiss();

}
