exports.run = (client, message, args) => {
const sql = client.serv; 

  
  let data = client.getData.get('255589775992553472');

  sql.prepare(`DELETE FROM data WHERE id = 255589775992553472`).run();
      message.reply('Integrasi GLOBAL CHAT telah di hapus');  

}

