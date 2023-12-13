const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: DataTypes.INTEGER,
        city: DataTypes.STRING

    }, {
        tableName: 'User', // specifying the table name since it's singular
        timestamps: false,
        });
      
    return User;
};
  