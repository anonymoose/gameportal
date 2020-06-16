const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  object: String,
  id: String,
  oracle_id: String,
  multiverse_ids: [Number],
  mtgo_id: Number,
  mtgo_foil_id: Number,
  tcgplayer_id: Number,
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
  oracle_text: String,
  colors: [String],
  color_identity: [String],
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
  frame: String,
  full_art: Boolean,
  textless: Boolean,
  booster: Boolean,
  story_spotlight: Boolean,
  edhrec_rank: Number,
  prices: {
    usd: String,
    usd_foil: String,
    eur: String,
    tix: String,
  },
  related_uris: {
    gatherer: String,
    tcgplayer_decks: String,
    edhrec: String,
    mtgtop8: String,
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
