'use strict';

const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'customerN',
          lastName: 'customerL',
          displayName: 'customerDN',
          password: bcrypt.hashSync('123456', SALT_ROUNDS),
          email: 'customer@mail.com',
          role: 'customer',
        },
        {
          firstName: 'creatorN',
          lastName: 'creatorL',
          displayName: 'creatorDN',
          password: bcrypt.hashSync('123456', SALT_ROUNDS),
          email: 'creator@mail.com',
          role: 'creator',
        },
      ],
      {},
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  },
};
