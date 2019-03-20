exports.run = (client, message, args) => {
	  const matches = args.match(/\d/);
	  const ch = matches[1];
    console.log(ch);
    message.channel.send(ch);
  

}
