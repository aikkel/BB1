const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Database/BBDB.db');

const login = require('./login.js');
const Sequelize = require('sequelize');
const config = require('../config/config.json').development;
const bcrypt = require('bcrypt');
const UserModel = require('../models/User');

const sequelize = new Sequelize(config);
const User = UserModel(sequelize, Sequelize);

async function createUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
        Email: email,
        Password: hashedPassword,
    });
    return newUser;
}

sequelize.sync();

  module.exports = {
    Sequelize,
    createUser,
    User,
    db,
  };