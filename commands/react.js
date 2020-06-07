exports.run = (client, message, args) => {
	const emoji = message.guild.emojis.cache.find(emoji => emoji.name === args);
	message.react(emoji);
    }
    