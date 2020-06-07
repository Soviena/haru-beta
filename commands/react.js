exports.run = (client, message) => {
    const embed = new client.vembed();
    let embed = new client.vembed()
    .setTitle(`SELF ROLE`)
    .setDescription(":flag_jp: : Wibu")
    .setColor(0xff38c0);
    message.channel.send(embed);
    /*
    message.channel.send("Tekan emoji")
    .then(() => client.user.lastMessage.react("586723200281608193"))
    .then(() => client.user.lastMessage.react("586723106039529472"))
    .catch(() => console.error('One of the emojis failed to react.'));
    */
    }
    