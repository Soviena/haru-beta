exports.run = (client, message) => {
    message.channel.send("Tekan emoji")
    .then(() => client.user.lastMessage.react("586723200281608193"))
    .then(() => client.user.lastMessage.react("586723106039529472"))
    .catch(() => console.error('One of the emojis failed to react.'));
    }
    