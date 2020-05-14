const httpStatus = require('http-status');
const { pick } = require('lodash');
const { Card } = require('../models');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { getQueryOptions } = require('../utils/query.utils');

const createCard = catchAsync(async (req, res) => {
  const card = await Card.create(req.body);
  res.status(httpStatus.CREATED).send(card.transform());
});

const getCards = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = getQueryOptions(req.query);
  const cards = await Card.find(filter, null, options);
  const response = cards.map((card) => card.transform());
  res.send(response);
});

const getCard = catchAsync(async (req, res) => {
  const card = await Card.findById(req.params.cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  res.send(card.transform());
});

const updateCard = catchAsync(async (req, res) => {
  const card = await Card.findById(req.params.cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }

  Object.assign(card, req.body);
  await card.save();
  res.send(card.transform());
});

const deleteCard = catchAsync(async (req, res) => {
  const card = await Card.findById(req.params.cardId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  await card.remove();
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCard,
  getCards,
  getCard,
  updateCard,
  deleteCard,
};
