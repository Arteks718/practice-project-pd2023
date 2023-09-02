const db = require('./../models');
const ServerError = require('../errors/ServerError');

module.exports.getOffers = async (req, res, next) => {
  // TODO: pagination

  try {
    const foundOffers = await db.Offers.findAll({ raw: true });
    res.status(200).send(foundOffers);
  } catch (err) {
    next(new ServerError());
  }
};