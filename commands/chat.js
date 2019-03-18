exports.run = (client, message, args) => {
if(args === undefined || args.length == 0) return message.reply("Perlu teks cth:'*chat hi how are you ?'");

const cat = require('nekos.life');
const neko = new cat();

async function answer() {
message.channel.startTyping();
console.log(args);
let txt = args.join(" ");
let { response } = await neko.sfw.chat({text: (txt)});
console.log(response);
message.channel.send(response);
message.channel.stopTyping();
}

answer();

}
