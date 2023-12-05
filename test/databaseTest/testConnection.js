const Sequelize = require('sequelize');
const config = require('../../config/config.json').development; // goes up 2 levels from this file.

const sequelize = new Sequelize(config);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
