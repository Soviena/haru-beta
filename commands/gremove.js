exports.run = (client, message, args) => {
const sql = client.serv; 

  
  let data = client.getData.get(message.guild.id);
  if (!data) { 
    message.reply('Di server ini tidak ada integrasi Global Chat');
  } else {
    sql.prepare(`DELETE FROM data WHERE id = ${message.guild.id}`).run();
    message.reply('Integrasi GLOBAL CHAT telah di hapus');  
    }
}

