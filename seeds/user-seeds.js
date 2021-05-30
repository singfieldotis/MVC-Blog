const { User } = require('../models');

const userdata = [
  {
    username: 'singfieldotis',
    email: 'email@email.com',
    password: 'password123'
  },
  {
    username: 'c-dawg',
    email: 'cdawg@email.com',
    password: 'password123'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;