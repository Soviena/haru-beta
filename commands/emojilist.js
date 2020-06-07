exports.run = (client, message) => {
    const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
    const split = emojiList.match(/[\s\S]{1,2048}/g);
        for (let i = 0; i < split.length; i++) {
            let embed = new client.vembed()
            .setDescription(split[i], true);
            message.channel.send(embed);
        }
    }
    