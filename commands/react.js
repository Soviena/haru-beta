exports.run = (client, message) => {
    const embed = new client.vembed();

    embed.setTitle(`GAME ROLES`)
    .addField(':regional_indicator_a: : Apex Legend',":regional_indicator_b: : Black Dessert")
    .addField(':regional_indicator_c: : Brawlhalla',":regional_indicator_d: : The Forest")
    .addField(':regional_indicator_e: : CSGO',":regional_indicator_f: : Destiny 2")
    .addField(':regional_indicator_g: : Dota 2',":regional_indicator_h: : Fornite")
    .addField(':regional_indicator_i: : GTA V',":regional_indicator_j: : Monster Hunter World")
    .addField(':regional_indicator_k: : Minecraft',":regional_indicator_l: : Mobile Legends")
    .addField(':regional_indicator_m: : OSU',":regional_indicator_n: : Overwatch")
    .addField(':regional_indicator_o: : PUBG Mobile',":regional_indicator_p: : PUBG Pc")
    .addField(':regional_indicator_q: : Rainbow Six',":regional_indicator_r: : Pokemon GO")
    .addField(':regional_indicator_s: : Valorant',":regional_indicator_t: : Factorio")
    .setColor(0x00e4e8);
    message.channel.send(embed)
    .then(() => client.user.lastMessage.react(':regional_indicator_a:'))
    .catch(() => console.error('One of the emojis failed to react.'));
    /*
    message.channel.send("Tekan emoji")
    .then(() => client.user.lastMessage.react("586723200281608193"))
    .then(() => client.user.lastMessage.react("586723106039529472"))
    .catch(() => console.error('One of the emojis failed to react.'));
    */
    }
    