exports.run = (client, message, args) => {
if(args === undefined || args.length == 0) return message.reply("Perlu teks cth:'*owo aku kawaii ?'");

const cat = require('nekos.life');
const neko = new cat();

async function owwo() {
message.channel.startTyping();
console.log(args);
let txt = args.join(" ");
let { owo } = await neko.sfw.OwOify({text: (txt)});
console.log(owo);
message.delete();
message.channel.send(owo);
message.channel.stopTyping();
}

owwo();

}
