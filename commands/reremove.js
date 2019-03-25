exports.run = (client, message, args) => {  
  
    const db = client.sql;
  
  let user = client.getUser.get(message.author.id);
  if (!user) { 
    message.reply('Respect point user nya emang udah 0');
  } else {
    db.prepare(`DELETE FROM Rp WHERE id = ${message.author.id}`).run();
    message.reply('Respect point user telah di reset ke 0');  
  }
  
  
}