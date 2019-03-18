exports.run = (client, message, args) => {
    if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {
      message.reply("It works, you are my master");
    }
}
