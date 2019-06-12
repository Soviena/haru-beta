exports.run = (client, message, args) => {
const sql = client.serv;
const list = sql.prepare("SELECT * FROM data DESC LIMIT 20;").all();
const id =  297540702315741194;
sql.prepare(`DELETE FROM data WHERE id = ${id}`).run();
  message.channel.send("")
  
  
}