exports.run = (client, message, args) => {  
  const db = client.serv;
    
  var server = message.guild.id;
  
  let data = client.getData.get(server);
    if (!data) { 
    if(args === null || args === undefined || args.length == 0) return message.reply('perlu nama channel cth : *gset #general');
    var channel = args[0].slice(2, -1); 
    if(isNaN(channel)){
      message.reply("Format penulisan nama channel salah!");
      return;
    }
    data = {
      id: '255589775992553472',
      guild: '255589775992553472',
      channel: '547318518346022913'
      }
    client.setData.run(data);  
    message.channel.send("GLOBAL CHAT sudah di setting");
    message.channel.send(`server : ${message.guild.name} ,di channel <#${channel}>`);
    
    } 
  
}