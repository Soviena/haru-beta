exports.run = (client, message) => {
    const embed = new client.vembed();

    embed.setTitle(`SELF ROLE`)
    .addField("Identity", ":flag_jp: : おたく")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(' ',":regional_indicator_r: : R++")
    .addField(':regional_indicator_r: : R++',":regional_indicator_r: : R++")
    .addField(':regional_indicator_r: : R++',":regional_indicator_r: : R++")
    .setColor(0x00e4e8);
    message.channel.send(embed);
    /*
    message.channel.send("Tekan emoji")
    .then(() => client.user.lastMessage.react("586723200281608193"))
    .then(() => client.user.lastMessage.react("586723106039529472"))
    .catch(() => console.error('One of the emojis failed to react.'));
    */
    }
    