exports.run = (client, message, args) => {
    var regex = /\d/g;
    var ch = regex.exec(args[0]);
    console.log(ch[0]);
  

}
