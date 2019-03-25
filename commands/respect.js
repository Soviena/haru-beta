exports.run = async (client, message) => {
  const db = client.sql;
  
    let data = client.getUser.get(message.author.id);
  
    if (!data) { 
    data = {
      id: `${message.author.id}`,
      user: message.author.id,
      guild: message.guild.id,
      Respect: 0
      }
    client.setUser.run(data);  
    message.channel.send(`Memberi Respect sebanyak : ${data.Respect} , di server ${client.guilds.get(data.guild).name}`);    
    } else  {
      message.channel.send(`Memberi Respect sebanyak : ${data.Respect} , di server ${client.guilds.get(data.guild).name}`);    
    }
}