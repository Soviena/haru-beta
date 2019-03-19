exports.run = (client, message, args) => {
    
    
    const embed = new client.vembed();
    var kill = require('../data/pout'),
    killkeyarr = Object.keys(kill),
    kindex = Math.floor(Math.random() * killkeyarr.length),
    bunuh = kill[killkeyarr[kindex]];

    
}
