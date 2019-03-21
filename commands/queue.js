exports.run = async (client, message) => {
const serverQueue = client.queue.get(message.guild.id);
if (!serverQueue) return message.channel.send('Sedang tidak memutar lagu');
		return message.channel.send(`
__**Daftar Musik yang akan di putar :**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Sekarang memutar:** ${serverQueue.songs[0].title}
		`);
}