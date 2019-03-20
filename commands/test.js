exports.run = (client, message, args) => {
    
    const welcomeChannel = client.channels.get("id", "")
    welcomeChannel.sendMessage("Welcome\n"+member.user.username);
    
  

}
