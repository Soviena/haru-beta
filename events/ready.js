module.exports = (client) => {
  const moment = require("moment");
  const db = client.sql;
  const dba = client.serv;
  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  
  function changing_status() {
    let status = [`bersama ${client.users.size} penonton`, `memiliki ${client.channels.size} cabang`, `${moment().utcOffset('+0700').format("HH:mm A")} WIB`,
    `${moment().utcOffset('+0800').format("HH:mm A")} WITA`, 
    `${moment().utcOffset('+0900').format("HH:mm A")} WIT`,`berada di ${client.guilds.size} server`]

    let random = status[Math.floor(Math.random() * status.length)]
    client.user.setActivity(random , { type: 'STREAMING', url: `https://www.twitch.tv/vizsher`});
    
  }
  
    const table = db.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'Rp';").get();
    if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    db.prepare("CREATE TABLE Rp (id TEXT PRIMARY KEY, user TEXT, guild TEXT, Respect INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    db.prepare("CREATE UNIQUE INDEX idx_scores_id ON Rp (id);").run();
    db.pragma("synchronous = 1");
    db.pragma("journal_mode = wal");
  }
  
    const dbo = dba.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'data';").get();
    if (!dbo['count(*)']) {
      dba.prepare("CREATE TABLE data (id TEXT PRIMARY KEY, guild TEXT, channel TEXT);").run();
      dba.prepare("CREATE UNIQUE INDEX idx_guild_id ON data (id);").run();
      dba.pragma("synchronous = 1");
      dba.pragma("journal_mode = wal");
      }
  
  setInterval(changing_status, 5000);

  let channel_id = "485436637665558531"; 
  let message_id = "719164766320459776";

  client.channels.get(channel_id).fetchMessage(message_id).then(m => {
    console.log("Cached reaction message.");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
  });

  client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    if(reaction.emoji.id == "586723200281608193" && reaction.message.id === message_id) 
    {
        reaction.message.channel.send("U reacted OK1");
        /*
        guild.fetchMember(user) // fetch the user that reacted
            .then((member) => 
            {
                let role = (member.guild.roles.find(role => role.name === "YOUR ROLE NAME HERE"));
                member.addRole(role)
                .then(() => 
                {
                    console.log(`Added the role to ${member.displayName}`);
                }
                );
            });
        */
    }
    if(reaction.emoji.id == "586723106039529472" && reaction.message.id === message_id) 
    {
      reaction.message.channel.send("U reacted OK2");
    }

  });
  
  
  client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
  });
  
}
