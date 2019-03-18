exports.run = async (client, message) => {
const serverQueue = client.queue.get(message.guild.id);
if (!serverQueue) return message.channel.send('sedang tidak memutar lagu');
return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
}
