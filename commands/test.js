exports.run = (client, message, args) => {
  
  var ch = args[0].slice(2, -1);
  args.shift();
  var txt = args.join(' ');
  client.channels.get(ch).send(txt);
  console.log(args);
  
}
