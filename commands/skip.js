exports.run = (client, message) => {

const serverQueue = client.queue.get(message.guild.id);

if (!message.member.voiceChannel) return message.channel.send('Kamu gk ada di voice channel >:T');
if (!serverQueue) return message.channel.send('lagi gak muter musik');

serverQueue.connection.dispatcher.end('Skip command has been used!');
message.channel.send('Ter SKIP dong');
return undefined;
}
