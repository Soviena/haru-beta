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

  let channel_id = "719173304740741171"; 
  let message_id1 = "719385367970840627";
  let message_id2 = "719385774277001258";
  let message_id3 = "719385932553519126";

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
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "🇦":
          member.addRole("545246502063177749"); //APEX
          member.send("Role Apex Legends Added");
          break;
          case "🇧":
          member.addRole("494371659038588949"); //BDO
          member.send("Role Black Dessert Online added");
          break;
          case "🇨":
          member.addRole("563383750369607690"); //Brawlhalla
          member.send("Role Brawlhalla Added");
          break;
          case "🇩":
          member.addRole("555729510780239894"); //The Forest
          member.send("Role The Forest added");
          break;
          case "🇪":
          member.addRole("490508688981753876"); //CSGO
          member.send("Role Counter Strike Global Offensive added");
          break;
          case "🇫":
          member.addRole("655491502264418325"); //Destiny 2
          member.send("Role Destiny 2 added");
          break;
          case "🇬":
          member.addRole("536555779180724224"); //Dota2
          member.send("Role Dota 2 added");
          break;
          case "🇭":
          member.addRole("490509288033222657"); //Fornite
          member.send("Role Fornite added");
          break;
          case "🇮":
          member.addRole("586432880016752672");
          member.send("Role GTA V Added");
          break;
          case "🇯":
          member.addRole("580739241647276032");
          member.send("Role Monster Hunter World added");
          break;
          case "🇰":
          member.addRole("545241660976660481");
          member.send("Role Minecraft Added");
          break;
          case "🇱":
          member.addRole("718306070677946520");
          member.send("Role Mobile Legends added");
          break;
          case "🇲":
          member.addRole("516480829036167171");
          member.send("Role OSU Added");
          break;
          case "🇳":
          member.addRole("518086052968267777");
          member.send("Role Overwatch added");
          break;
          case "🇴":
          member.addRole("518084786137464833");
          member.send("Role PUBG Mobile added");
          break;
          case "🇵":
          member.addRole("538707253407121410");
          member.send("Role PUBG PC Added");
          break;
          case "🇶":
          member.addRole("586732927115591680");
          member.send("Role Rainbow Six Added");
          break;
          case "🇷":
          member.addRole("586739653982420992");
          member.send("Role Pokemon GO Added");
          break;
          case "🇸":
          member.addRole("718084875361714276");
          member.send("Role Valorant Added");
          break;
          case "🇹":
          member.addRole("603565310942904364");
          member.send("Role FACTORIO Added");
          break;
      };
    }
    if(reaction.message.id === message_id2) 
    {     
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "💻":
          member.addRole("718743873911783464");
          member.send("Programmer added")
          break;
          case "📷":
          member.addRole("718743837362880623");
          member.send("Photographer added");
          break;
          case "📝":
          member.addRole("718747251278872676");
          member.send("Editor added");
          break;
          case "📏":
          member.addRole("718743844442603582");
          member.send("Designer added");
          break;
          case "✏️":
          member.addRole("718743830706257993");
          member.send("Artist added");
          break;
          case "♨️":
          member.addRole("719048962887385089");
          member.send("Redditor added");
          break;
          case "🇯🇵":
          member.addRole("655491496450981908");
          member.send("Otaku added");
          break;
          case "💮":
          member.addRole("719147904387907584");
          member.send("Holo Gangs added");
          break;
          case "🔞":
          member.addRole("541757912448761857");
          member.send("R++ added");
          break;
      };
    }
    if(reaction.message.id === message_id3) 
    {        
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "🟢":
          member.addRole("718748118241378304");
          member.addRole("557157104197173274");
          member.send("Calm green color addedd")
          break;
          case "🟩":
          member.addRole("718748137845424149");
          member.addRole("557157104197173274");
          member.send("Lime Green color addedd");
          break;
          case "🟡":
          member.addRole("718748112037871616");
          member.addRole("557157104197173274");
          member.send("Yellow color addedd");
          break;
          case "🟠":
          member.addRole("718748135975026699");
          member.addRole("557157104197173274");
          member.send("Orangers color addedd");
          break;
          case "🟣":
          member.addRole("718748138885873664");
          member.addRole("557157104197173274");
          member.send("Purplish color addedd");
          break;
          case "🔵":
          member.addRole("718748122117046272");
          member.addRole("557157104197173274");
          member.send("Sky Blue color addedd");
          break;
          case "🔺":
          member.addRole("718748126399299586");
          member.addRole("557157104197173274");
          member.send("Magentaa color addedd");
          break;
          case "🔴":
          member.addRole("718750570596270084");
          member.addRole("557157104197173274");
          member.send("Bloody Redd color addedd");
          break;
      };
    }
  });
  
  client.on("messageReactionRemove",(reaction,user)=>{
    if(!user) return;
    if(user.bot)return;
    if(!reaction.message.channel.guild) return;
    if(reaction.message.id === message_id1) 
    {         
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "🇦":
          member.removeRole("545246502063177749"); //APEX
          member.send("Role Apex Legends Removed");
          break;
          case "🇧":
          member.removeRole("494371659038588949"); //BDO
          member.send("Role Black Dessert Online Removed");
          break;
          case "🇨":
          member.removeRole("563383750369607690"); //Brawlhalla
          member.send("Role Brawlhalla Removed");
          break;
          case "🇩":
          member.removeRole("555729510780239894"); //The Forest
          member.send("Role The Forest Removed");
          break;
          case "🇪":
          member.removeRole("490508688981753876"); //CSGO
          member.send("Role Counter Strike Global Offensive Removed");
          break;
          case "🇫":
          member.removeRole("655491502264418325"); //Destiny 2
          member.send("Role Destiny 2 Removed");
          break;
          case "🇬":
          member.removeRole("536555779180724224"); //Dota2
          member.send("Role Dota 2 Removed");
          break;
          case "🇭":
          member.removeRole("490509288033222657"); //Fornite
          member.send("Role Fornite Removed");
          break;
          case "🇮":
          member.removeRole("586432880016752672");
          member.send("Role GTA V Removed");
          break;
          case "🇯":
          member.removeRole("580739241647276032");
          member.send("Role Monster Hunter World Removed");
          break;
          case "🇰":
          member.removeRole("545241660976660481");
          member.send("Role Minecraft Removed");
          break;
          case "🇱":
          member.removeRole("718306070677946520");
          member.send("Role Mobile Legends Removed");
          break;
          case "🇲":
          member.removeRole("516480829036167171");
          member.send("Role OSU Removed");
          break;
          case "🇳":
          member.removeRole("518086052968267777");
          member.send("Role Overwatch Removed");
          break;
          case "🇴":
          member.removeRole("518084786137464833");
          member.send("Role PUBG Mobile Removed");
          break;
          case "🇵":
          member.removeRole("538707253407121410");
          member.send("Role PUBG PC Removed");
          break;
          case "🇶":
          member.removeRole("586732927115591680");
          member.send("Role Rainbow Six Removed");
          break;
          case "🇷":
          member.removeRole("586739653982420992");
          member.send("Role Pokemon GO Removed");
          break;
          case "🇸":
          member.removeRole("718084875361714276");
          member.send("Role Valorant Removed");
          break;
          case "🇹":
          member.removeRole("603565310942904364");
          member.send("Role FACTORIO Removed");
          break;
      };
    }
    if(reaction.message.id === message_id2) 
    {
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "💻":
          member.removeRole("718743873911783464");
          member.send("Programmer Removed")
          break;
          case "📷":
          member.removeRole("718743837362880623");
          member.send("Photographer Removed");
          break;
          case "📝":
          member.removeRole("718747251278872676");
          member.send("Editor Removed");
          break;
          case "📏":
          member.removeRole("718743844442603582");
          member.send("Designer Removed");
          break;
          case "✏️":
          member.removeRole("718743830706257993");
          member.send("Artist Removed");
          break;
          case "♨️":
          member.removeRole("719048962887385089");
          member.send("Redditor Removed");
          break;
          case "🇯🇵":
          member.removeRole("655491496450981908");
          member.send("Otaku Removed");
          break;
          case "💮":
          member.removeRole("719147904387907584");
          member.send("Holo Gangs Removed");
          break;
          case "🔞":
          member.removeRole("541757912448761857");
          member.send("R++ Removed");
          break;
      };
    }
    if(reaction.message.id === message_id3) 
    {
        const member = reaction.message.guild.member(user);
        switch (reaction.emoji.name) {
          case "🟢":
          member.removeRole("718748118241378304");
          member.removeRole("557157104197173274");
          member.send("Calm green color Removed")
          break;
          case "🟩":
          member.removeRole("718748137845424149");
          member.removeRole("557157104197173274");
          member.send("Lime Green color Removed");
          break;
          case "🟡":
          member.removeRole("718748112037871616");
          member.removeRole("557157104197173274");
          member.send("Yellow color Removed");
          break;
          case "🟠":
          member.removeRole("718748135975026699");
          member.removeRole("557157104197173274");
          member.send("Orangers color Removed");
          break;
          case "🟣":
          member.removeRole("718748138885873664");
          member.removeRole("557157104197173274");
          member.send("Purplish color Removed");
          break;
          case "🔵":
          member.removeRole("718748122117046272");
          member.removeRole("557157104197173274");
          member.send("Sky Blue color Removed");
          break;
          case "🔺":
          member.removeRole("718748126399299586");
          member.removeRole("557157104197173274");
          member.send("Magentaa color Removed");
          break;
          case "🔴":
          member.removeRole("718750570596270084");
          member.removeRole("557157104197173274");
          member.send("Bloody Redd color Removed");
          break;
      };
    }
  });
  
}
