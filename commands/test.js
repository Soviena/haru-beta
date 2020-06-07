exports.run = (client, message, args) => { 
  console.log(client.user.message.id('719183990891741295').reactions);
  message.channel.send("done");
}