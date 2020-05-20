const Joi = require('@hapi/joi');
const { objectId } = require('./custom.validation');

const createCard = {
  body: Joi.object(),
};

const getCards = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCard = {
  params: Joi.object().keys({
    cardId: Joi.string().custom(objectId),
  }),
};

const updateCard = {
  params: Joi.object().keys({
    cardId: Joi.required().custom(objectId),
  }),
  body: Joi.object().min(1),
};

const deleteCard = {
  params: Joi.object().keys({
    cardId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
};
