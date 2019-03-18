const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./sekrit.json");
  
client.on('ready', () => {
 console.log(`Ready to serve on ${client.guilds.size} servers, for ${client.users.size} users.`);
 //client.user.setActivity(`Serving ${client.users.size} users`);
 });
 
 // Set the prefix
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // The COMMAND
  
  if (command === 'ping') {
    message.channel.send("pong!");
  } else
  if (command === 'cat') {
	const randomcat = require("./modules/cat.js");
	console.log(randomcat());
  }

});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if(message.author.id !== config.ownerID) return;
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // AUTHOR ONLY COMMAND  
  
  if (command === 'ha') {
	message.channel.send("Eeeeeeee");
  } else

  if (command === "asl") {
  let [age, sex, location] = args;
  message.channel.send(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
}
  
});

client.login(config.token);