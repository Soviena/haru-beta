exports.run = (client, message, args) => {
    message.channel.send("Pinging ...") // Placeholder for pinging ... 
    .then((message) => { // Resolve promise
    message.edit("Pong: " + client.ping + "ms" ) // Edits message with current timestamp minus timestamp of message
    });
}
