exports.run = (client, message, args) => {
    const embedhelp = new client.vembed();
    const embedadm = new client.vembed();
    const embednsfw = new client.vembed();
    const embedmsc = new client.vembed();

    embedhelp.setAuthor("List Command")
    .setDescription("avatar , eval , glist , gset , gremove , info , infobot , jam , lbinvite , ping , userinfo")
    .addField('FUN IMAGE', 'baka , cuddle , hug , kiss , kitsune , meow , mimi , neko , nekogif , pat , poke , pout , slap , smug')
    .addField('FUN TEXT', 'chat [teks] , fact , kill , owo [teks] , why');

    embedadm.setAuthor("List Command Admin");
    embedadm.addField("*prune {banyak_pesan} ","hapus 1 - 99 pesan");
    embedadm.addField("*reload {command} ","muat ulang command")
    .addField("*eval [syntax]", "Run syntax");

    embednsfw.setAuthor("List Command NSFW");
    embednsfw.addField("*neko ","lewd neko");
    embednsfw.addField("*kitsune ","lewd kitsune");
    embednsfw.addField("*ca ","ARTS");
    embednsfw.addField("*mimi ","Lewd KemonoMimi");
    embednsfw.addField("*rnh ","Random Hentai shit");
    embednsfw.addField("silakan request lagi jika ingin");

    embedmsc.setAuthor("List Command Musik");
    embedmsc.addField("*np ","now playing");
    embedmsc.addField("*play [judul_lagu] ","putar lagu");
    embedmsc.addField("*skip ","lewati lagu");
    embedmsc.addField("*stop ","Hentikan lagu")
    .addField("*queue", "Daftar Lagu");

    message.channel.send(embedhelp);
    message.channel.send(embedmsc);
    if ((message.member.hasPermission('MANAGE_MESSAGES'))) {
        message.channel.send(embedadm);        
    }
    if (message.channel.nsfw === true) {
        message.channel.send(embednsfw);
    }
}
