exports.run = (client, message, args) => {
  if(message.author.id !== client.config.token) return message.reply('siapa anda ?')
      const embed = new client.vembed();
      const warningTokenMessage = ["Tertipu Kamu Bangsat", "iNi.ToK3n.Bu.At.(K)amU", "Kepo cok", "Kamu Gay", "bapak kau jual ganja di BMKG"]
      //if (message.author.id !== '347756970369089566') return;
    try {
      let codein = args.join(' ');
      let code = eval(codein);      
      if (!codein) return;
      if (codein.includes(`token`)) {
        code = warningTokenMessage[Math.floor(Math.random() * warningTokenMessage.length)];
        console.log(`${message.author.tag} use this eval to against the tokens and privacy.`)
      } else {
        code = eval(code);
      }
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        embed.setAuthor('Evaluate')
        embed.setColor('RANDOM')
        embed.addField('📥 Input', `\`\`\`js\n${codein}\`\`\``)
        embed.addField('📤 Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}