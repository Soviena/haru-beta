exports.run = (client, message, args) => {  
  const db = client.serv;
  
  console.log(args)
  
  var server = message.guild.id;
  
  let data = client.getData.get(server);
    if (!data) { 
    if(args === null || args === undefined || args.length == 0) return message.reply('perlu nama channel cth : *gset #general');
    var channel = args[0].slice(2, -1); 
    data = {
      id: `${server}`,
      guild: server,
      channel: channel
      }
    client.setData.run(data);  
    message.channel.send("GLOBAL CHAT sudah di setting");
    message.channel.send(`server : ${message.guild.name} ,di channel <#${channel}>`);
    
    } else {
    message.channel.send(`GLOBAL CHAT SUDAH AKTIF di server : ${message.guild.name},di channel <#${data.channel}>`);
    message.channel.send(`pakai *gremove untuk menghapus integrasi GLOBAL CHAT`);
    }
  
}