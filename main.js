const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const Enmap = require("enmap");
const fs = require("fs");

const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const klien = new Client({ disableEveryone: true });
const config = process.env;
const GOOGLE_API_KEY = config.GOOGLE_API_KEY;
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

const SQLite = require("better-sqlite3");
const serv = new SQLite('./data/db/server.sqlite');

// structure

const vembed = require("./structure/vembed.js");

// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
client.vembed = vembed;
client.youtube = youtube;
client.queue = queue;
client.serv = serv;

client.getData = serv.prepare("SELECT * FROM data WHERE id = ?");
client.setData = serv.prepare("INSERT OR REPLACE INTO data (id, guild, channel) VALUES (@id, @guild, @channel);");
client.getChannel = serv.prepare("SELECT * FROM data WHERE channel = ?");


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

// MUSIC

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
    if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** Telah di tambahkan ke daftar antrian!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') {
      console.log('Song ended.');
      }
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Mencoba play: **${song.title}**`);
}

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);

client.handleVideo = handleVideo;

client.login(config.token);
