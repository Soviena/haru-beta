exports.run = (client, message) => {
const cat = require('nekos.life');
const neko = new cat();

async function whys() {
const { why } = await neko.sfw.why();
console.log(why);
message.channel.send(why);
}

whys();

}
