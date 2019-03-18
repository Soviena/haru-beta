exports.run = async (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send('Kamu belum masuk voice channel >:T');
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT')) {
    return message.channel.send('Aku gk bisa konek ke voice itu.. :sad:,alexa play despacito');
  }
  if (!permissions.has('SPEAK')) {
    return message.channel.send('Aku gk bisa Bersuara di voice channel itu :sad:');
  }

  const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  const serverQueue = client.queue.get(message.guild.id);
  console.log(args);

  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
    const playlist = await client.youtube.getPlaylist(url);
    const videos = await playlist.getVideos();
    for (const video of Object.values(videos)) {
      const video2 = await client.youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
      await client.handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
    }
    return message.channel.send(`✅ Playlist: **${playlist.title}** Telah di tambahkan ke daftar`);
  } else {
    try {
      var video = await client.youtube.getVideo(url);
    } catch (error) {
      try {
        var videos = await client.youtube.searchVideos(args, 10);
        let index = 0;
        message.channel.send(`
__**Pilih Lagu:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Balas pesan ini dengan pilih dari no 1 - 10..
        `);
        // eslint-disable-next-line max-depth
        try {
          var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
            maxMatches: 1,
            time: 10000,
            errors: ['time']
          });
        } catch (err) {
          console.error(err);
          return message.channel.send('Padahal sudah ku siapkan.. tapi kamu gk memilih.. Dasar gk PEKA');
        }
        const videoIndex = parseInt(response.first().content);
        var video = await client.youtube.getVideoByID(videos[videoIndex - 1].id);
      } catch (err) {
        console.error(err);
        return message.channel.send('🆘 Maaf.. Gak ketemu');
      }
    }
    return client.handleVideo(video, message, voiceChannel).catch(console.error);
  }

}
