exports.run = (client, message, args) => {  
    if(message.author.id !== client.config.ownerID) {
      message.reply("Kamu Bukan Master Ku!");
      return;
    }else {    
    const db = client.sql;    
    db.prepare(`DELETE FROM Rp WHERE guild = '${message.guild.id}'`).run();
    message.reply('Respect point Semua user telah di reset ke 0');  
    }

}