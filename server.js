
const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');

const config = {
  channelAccessToken: "t2TwN0KQLEz6JWiSFZo31aVI5yzybQBPJx6Dl135Vz1mnFpIGhB7xREENvuZtiZtB4kuqmdrJdUYdJR+QhNO/MPxr0Pz5HVJJNn638hhtFeEcNpMqOT/BYioHnv+70z8GbockMeZlYvJEcv/9Vu2YgdB04t89/1O/w1cDnyilFU=",
  channelSecret: "df410e822d65f2584dcb583288dd4ee3",
};

// create LINE SDK client
const client = new line.Client(config);
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((e)=>{
      console.log(e);
    });

});

var d = new Date();


function handleEvent(event) {
  
    if(event.message.text == "hai"){
      const echo = { type: 'text', text: "Halo juga :)·" };
      return client.replyMessage(event.replyToken, echo);
    }
  
  if(d.gethours() == 23){
    const echo = { type: 'text', text: "Malam :)"};
    return client.pushMessage(event.replytoken, echo);
  }
  
    if(event.message.text == "malam"){
      const echo = { type: 'text', text: "Malam juga :)·" };
      return client.pushMessage(event.replyToken, echo);
    }

    const echo = { type: 'text', text: "Saya tidak mengerti, saya simpan dulu" };
    return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});