exports.run = (client, message, args) => {
    const embedhelp = new client.vembed();
    const embedadm = new client.vembed();
    const embednsfw = new client.vembed();
    const embedmsc = new client.vembed();

    embedhelp.setAuthor("List Command");
    embedhelp.addField("*avatar [mention] ","dapatkan profil Pic seseorang / dirimu sendiri");
    embedhelp.addField("*baka ","kirim GIF baka!");
    embedhelp.addField("*chat {teks} ","chatting dengan bot");
    embedhelp.addField("*cuddle [mention] ","Peluk dengan mesra dan penuh cinta ");
    embedhelp.addField("*fact ","dapatkan RandomFact");
    embedhelp.addField("*help ","perintah yang digunakan saat ini");
    embedhelp.addField("*hug [mention] ","peluk seseorang");
    embedhelp.addField("*info ","Menampilkan Info server ini");
    embedhelp.addField("*jam ","Menampilkan waktu setempat");
    embedhelp.addField("*kiss [mention] ","Mencium seseorang");
    embedhelp.addField("*kitsune ","dapatkan gambar FoxGirl");
    embedhelp.addField("*master ","try it");
    embedhelp.addField("*meow ","tampilkan gambar kucing (asli)");
    embedhelp.addField("*mimi ","tampilkan ilustrasi furry (demihuman)");
    embedhelp.addField("*neko ","gambar kucing lucu");
    embedhelp.addField("*nekogif ","kucing lucu v2");
    embedhelp.addField("*owo {teks} ","ubah teks mu menjadi lebih kawaii");
    embedhelp.addField("*pat [mention] ","elus kepala seseorang");
    embedhelp.addField("*ping ","cek latensi bot ke server");
    embedhelp.addField("*poke [mention] ","colek seseorang");
    embedhelp.addField("*slap [mention] ","tampar seseorang");
    embedhelp.addField("*smug ","get smug bro");
    embedhelp.addField("*why ","kamu tanya kenapa ?");

    embedadm.setAuthor("List Command Admin");
    embedadm.addField("*prune {banyak_pesan} ","hapus 1 - 99 pesan");
    embedadm.addField("*reload {command} ","muat ulang command");
    embedadm.addField("dan masih ditambahkan yang lain");

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
    embedmsc.addField("*stop ","Hentikan lagu");

    message.channel.send(embedhelp);
    message.channel.send(embedmsc);
    if ((message.member.hasPermission('MANAGE_MESSAGES'))) {
        message.channel.send(embedadm);        
    }
    if (message.channel.nsfw === true) {
        message.channel.send(embednsfw);
    }
}
