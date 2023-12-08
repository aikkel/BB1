const path = require('path');
const login = require('./login.js');
const Sequelize = require('sequelize');
const config = require('../config/config.json').development;
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');
const AdvertModel = require('../models/Advert'); // Path to the Advert model


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../Database/BBDB.db') //path.join combines relative path segments into an absolute path
});

const User = UserModel(sequelize, Sequelize);

async function createUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
        Email: email,
        Password: hashedPassword,
    });
    return newUser;
}
const Advert = AdvertModel(sequelize, Sequelize);

async function getAdverts() {
  const adverts = await Advert.findAll();
  return adverts;
}

sequelize.sync();

  module.exports = {
    Sequelize,
    createUser,
    User,
    getAdverts,
    Advert,
};