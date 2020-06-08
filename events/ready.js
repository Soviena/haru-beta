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

  // DETECT REACTION

  let channel_id = "557928889062653974"; 
  let message_id1 = "719386602085941331";
  let message_id2 = "719386490685227080";
  let message_id3 = "719386397177544705";

  client.channels.get(channel_id).fetchMessage(message_id1).then(m => {
    console.log("Cached reaction message 1");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
  });

  client.channels.get(channel_id).fetchMessage(message_id2).then(m => {
    console.log("Cached reaction message 2");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
  });

  client.channels.get(channel_id).fetchMessage(message_id3).then(m => {
    console.log("Cached reaction message 3");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
  });

  client.on("messageReactionAdd",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    if(reaction.message.id === message_id1) 
    {
        console.log(reaction.emoji.name);
        const member = reaction.message.member
        switch (reaction.emoji.name) {
          case "🇦":
          //member.addRole("597011179545690121");
          break;
          case "🇧":
          //member.addRole("597011179545690121");
          break;
          case "🇨":
          //member.addRole("597011179545690121");
          break;
          case "🇩":
          //member.addRole("597011179545690121");
          break;
          case "🇪":
          //member.addRole("597011179545690121");
          break;
          case "🇫":
          //member.addRole("597011179545690121");
          break;
          case "🇬":
          //member.addRole("597011179545690121");
          break;
          case "🇭":
          //member.addRole("597011179545690121");
          break;
          case "🇮":
          //member.addRole("597011179545690121");
          break;
          case "🇯":
          //member.addRole("597011179545690121");
          break;
          case "🇰":
          //member.addRole("597011179545690121");
          break;
          case "🇱":
          //member.addRole("597011179545690121");
          break;
          case "🇲":
          //member.addRole("597011179545690121");
          break;
          case "🇳":
          //member.addRole("597011179545690121");
          break;
          case "🇴":
          //member.addRole("597011179545690121");
          break;
          case "🇵":
          //member.addRole("597011179545690121");
          break;
          case "🇶":
          //member.addRole("597011179545690121");
          break;
          case "🇷":
          //member.addRole("597011179545690121");
          break;
          case "🇸":
          //member.addRole("597011179545690121");
          break;
          case "🇹":
          //member.addRole("597011179545690121");
          break;
      };
    }
    if(reaction.message.id === message_id2) 
    {
        console.log(reaction.emoji.name);
        const member = reaction.message.member
        switch (reaction.emoji.name) {
          case "💻":
          //member.addRole("597011179545690121");
          console.log(reaction);
          break;
          case "📷":
          //member.addRole("597011179545690121");
          member.send("Photographer");
          break;
          case "📝":
          //member.addRole("597011179545690121");
          member.send("Editor");
          break;
          case "📏":
          //member.addRole("597011179545690121");
          member.send("Designer");
          break;
          case "✏️":
          //member.addRole("597011179545690121");
          member.send("Artist");
          break;
          case "♨️":
          //member.addRole("597011179545690121");
          member.send("Redditor");
          break;
          case "🇯🇵":
          //member.addRole("597011179545690121");
          member.send("Otaku");
          break;
          case "💮":
          //member.addRole("597011179545690121");
          member.send("Holo Gangs");
          break;
          case "🔞":
          //member.addRole("597011179545690121");
          member.send("R++");
          break;
      };
    }
  });
  
  
  client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
  });
  
}
