const axios = require("axios");
const Scry = require("scryfall-sdk");

const cardsUrl = "http://localhost:4000/v1/cards/";

const emitter = Scry.Cards.all();

emitter.on("data", card => {
  axios.post(cardsUrl, card)
    .then(res => console.log(res.data))
    .catch(e => console.log(e));
}).on("end", () => {
  console.log("ended");
}).on("cancel", () => {
  console.log("cancelled");
}).on("error", (e) => console.log(e));
