exports.run = (client, message, args) => {
const moment = require("moment");

let embed = new client.vembed()
embed.addField("⏰ Jam", `${moment().utcOffset('+0700').format("HH:mm A")} WIB \n
${moment().utcOffset('+0800').format("HH:mm A")} WITA \n
${moment().utcOffset('+0900').format("HH:mm A")} WIT`)
message.channel.send(embed)
}