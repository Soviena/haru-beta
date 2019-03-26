exports.run = (client, message) => {

    const embed = new client.vembed();
    var clap = require('../data/clap'),
    clapkeyarr = Object.keys(clap),
    urlindex = Math.floor(Math.random() * clapkeyarr.length),
    rclap = clap[clapkeyarr[urlindex]];

    embed.setImage(rclap);
    embed.setDescription(`<@${message.author.id}> Bertepuk tengan`);
    message.channel.send(embed);    

}
