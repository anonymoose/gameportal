const express = require('express');
const validate = require('../../middlewares/validate');
const cardValidation = require('../../validations/card.validation');
const cardController = require('../../controllers/card.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(cardValidation.createCard), cardController.createCard)
  .get(validate(cardValidation.getCards), cardController.getCards);

router
  .route('/:cardId')
  .get(validate(cardValidation.getCard), cardController.getCard)
  .patch(validate(cardValidation.updateCard), cardController.updateCard)
  .delete(validate(cardValidation.deleteCard), cardController.deleteCard);

module.exports = router;
