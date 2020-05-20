const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  object: String,
  id: String,
  oracle_id: String,
  multiverse_ids: [Number],
  name: String,
  lang: String,
  released_at: Date,
  uri: String,
  scryfall_uri: String,
  layout: String,
  highres_image: Boolean,
  image_uris: {
    small: String,
    normal: String,
    large: String,
    png: String,
    art_crop: String,
    border_crop: String,
  },
  mana_cost: String,
  cmc: Number,
  type_line: String,
  colors: [String],
  color_identity: [String],
  card_faces: [
    {
      object: String,
      name: String,
      printed_name: String,
      mana_cost: String,
      type_line: String,
      printed_type_line: String,
      oracle_text: String,
      printed_text: String,
      artist: String,
      artist_id: String,
      illustration_id: String,
    },
  ],
  legalities: {
    standard: String,
    future: String,
    historic: String,
    pioneer: String,
    modern: String,
    legacy: String,
    pauper: String,
    vintage: String,
    penny: String,
    commander: String,
    brawl: String,
    duel: String,
    oldschool: String,
  },
  games: [String],
  reserved: Boolean,
  foil: Boolean,
  nonfoil: Boolean,
  oversized: Boolean,
  promo: Boolean,
  reprint: Boolean,
  variation: Boolean,
  set: String,
  set_name: String,
  set_type: String,
  set_uri: String,
  set_search_uri: String,
  scryfall_set_uri: String,
  rulings_uri: String,
  prints_search_uri: String,
  collector_number: String,
  digital: Boolean,
  rarity: String,
  card_back_id: String,
  artist: String,
  artist_ids: [String],
  illustration_id: String,
  border_color: String,
  frame: Number,
  full_art: Boolean,
  textless: Boolean,
  booster: Boolean,
  story_spotlight: Boolean,
  edhrec_rank: Number,
  prices: {
    usd: Number,
    usd_foil: Number,
    eur: Number,
    tix: Number,
  },
  related_uris: {
    gatherer: String,
    tcgplayer_decks: String,
    edhrec: String,
    mtgtop8: String,
  },
  purchase_uris: {
    tcgplayer: String,
    cardmarket: String,
    cardhoarder: String,
  },
});

let Card = null;

cardSchema.methods.transform = function () {
  return this.toObject();
};

cardSchema.statics.search = function (filter /* , options */) {
  return Card.find({ name: { $regex: filter.name, $options: 'i' } });
};

Card = mongoose.model('Card', cardSchema);

module.exports = Card;
