exports.run = (client, message, args) => {
  if(args === undefined || args.length == 0) return message.reply("Perlu command buat di reload ex:'*reload ping'");
  console.log(args);
  const commandName = args[0];
  // Check if the command exists and is valid
  if(!client.commands.has(commandName)) {
    return message.reply("Command itu gk ada");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`Command ${commandName} Sudah di reload reloaded`);
};
