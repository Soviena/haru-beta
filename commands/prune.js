exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**🔒 Kamu gk punya wewenang buat melakukan itu.**");
    var messagesToDelete = args;
    if (!args || args == null || args == "") return message.channel.send("❌ tolong masukkan berapa banyak pesan yang ingin **dihapus**!");
    if (args > 99) return message.channel.send("❌ aduh.. maaf banget, aku gkbisa ngapus lebih dari 99...");
    message.channel.fetchMessages({limit: messagesToDelete})
    .then(messages => message.channel.bulkDelete(messages.size + 1))
    .catch(error => message.channel.send(`❌ Maaf ${message.author}, gagal saat **menghapus** karna: *${error}*.`));
}