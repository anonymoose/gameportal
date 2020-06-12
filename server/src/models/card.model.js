const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  object2: String,
  id2: String,
  oracle_id2: String,
  multiverse_ids2: [Number],
  mtgo_id2: Number,
  mtgo_foil_id2: Number,
  tcgplayer_id2: Number,
  name2: String,
  lang2: String,
  released_at2: Date,
  uri2: String,
  scryfall_uri2: String,
  layout2: String,
  highres_image2: Boolean,
  image_uris2: {
    small2: String,
    normal2: String,
    large2: String,
    png2: String,
    art_crop2: String,
    border_crop2: String,
  },
  mana_cost2: String,
  cmc2: Number,
  type_line2: String,
  oracle_text2: String,
  colors2: [String],
  color_identity2: [String],
  legalities2: {
    standard2: String,
    future2: String,
    historic2: String,
    pioneer2: String,
    modern2: String,
    legacy2: String,
    pauper2: String,
    vintage2: String,
    penny2: String,
    commander2: String,
    brawl2: String,
    duel2: String,
    oldschool2: String,
  },
  games2: [String],
  reserved2: Boolean,
  foil2: Boolean,
  nonfoil2: Boolean,
  oversized2: Boolean,
  promo2: Boolean,
  reprint2: Boolean,
  variation2: Boolean,
  set2: String,
  set_name2: String,
  set_type2: String,
  set_uri2: String,
  set_search_uri2: String,
  scryfall_set_uri2: String,
  rulings_uri2: String,
  prints_search_uri2: String,
  collector_number2: String,
  digital2: Boolean,
  rarity2: String,
  card_back_id2: String,
  artist2: String,
  artist_ids2: [String],
  illustration_id2: String,
  border_color2: String,
  frame2: String,
  full_art2: Boolean,
  textless2: Boolean,
  booster2: Boolean,
  story_spotlight2: Boolean,
  edhrec_rank2: Number,
  prices2: {
    usd2: String,
    usd_foil2: String,
    eur2: String,
    tix2: String,
  },
  related_uris2: {
    gatherer2: String,
    tcgplayer_decks2: String,
    edhrec2: String,
    mtgtop82: String,
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
