const path = require('path');
const login = require('./login.js');
const Sequelize = require('sequelize');
const config = require('../config/config.json').development;
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

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
// const Advert = AdvertModel(sequelize, Sequelize);
const Advert = require('../models/Advert')(sequelize);
const Car = require('../models/Car')(sequelize, Sequelize.DataTypes);

async function getAdverts() {
  const adverts = await Advert.findAll();
  return adverts;
}

sequelize.sync();

  module.exports = {
    createUser,
    User,
    getAdverts,
    Advert,
    sequelize,
    Car: Car,
};