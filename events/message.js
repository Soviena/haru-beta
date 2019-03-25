module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  
  
  // IF GLOBAL CHAT  
  let channel = message.channel.id;
  let data = client.getChannel.get(channel);
  if (!data) { //ignore
  } else {
    const sql = client.serv;
    const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
     
    var url;
    var txt = message.content;
    var attachment = (message.attachments).array();
    if(attachment[0] !== undefined){
    console.log(attachment[0]);
    var url = attachment[0].url;
    }    
    // Now shake it and show it! (as a nice embed, too!)
    const embed = new client.vembed();
    embed.setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription(`${txt}`)
    .setImage(url)
    .setColor('RANDOM')
    .setFooter(`${message.author.username}#${message.author.discriminator} `, message.author.avatarURL)
    .setTimestamp();
 
    for(const data of list) {
      if(data.id !== message.guild.id) {
      client.guilds.get(data.id).channels.get(data.channel).send(embed);
      }  
    }  
  }
// --------- 
  
    // Read F only
  if(message.content === 'F'){
    if(client.talkedRecently.has(message.author.id)) {
      return;
    } else {
    const db = client.sql;
    var userid = client.getUser.get(message.author.id, message.guild.id);
    if (!userid) { 
    data = {
      id: `${message.guild.id}-${message.author.id}`,
      user: message.author.id,
      guild: message.guild.id,
      Respect: 0
    }
    client.setUser.run(data);  
    
    let user = client.getUser.get(message.author.id, message.guild.id);
    user.Respect++;
    client.setUser.run(user);
    } else {
    userid.Respect++;
    client.setUser.run(userid);
    };
      
    client.talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
    client.talkedRecently.delete(message.author.id);
    }, 60000);    
    //message.reply('Works as it is')
      
    }
  }
  
  

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};
