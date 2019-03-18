exports.run = async (client, message, args) => {
  const serverQueue = client.queue.get(message.guild.id);
  if (!message.member.voiceChannel) return message.channel.send('Kamu gk ada di voice channel');
  if (!serverQueue) return message.channel.send('Gak Nyambung Asli.. padahal aku gk lagi muter lagu');
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end('Ashiapp..');
  message.channel.send('Ashiapp');
  return undefined;
}
