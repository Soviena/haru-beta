exports.run = (client, message) => {
    message.react("586723200281608193")
    .then(() => message.react("586723106039529472 "))
    .catch(() => console.error('One of the emojis failed to react.'));
    }
    