exports.run = (client, message, args) => {  
  const db = client.serv;
    
  var server = '255589775992553472';
  
  let data = client.getData.get(server);
    if (!data) { 
    data = {
      id: '255589775992553472',
      guild: '255589775992553472',
      channel: '547318518346022913'
      }
    client.setData.run(data);  
    message.channel.send("GLOBAL CHAT sudah di setting");
    
    } 
  
}