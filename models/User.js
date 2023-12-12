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
        city: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'User', // specifying the table name since it's singular
        timestamps: false,
        // hooks: {
        //     beforeCreate: async (user) => {
        //       const salt = await bcrypt.genSalt();
        //       user.password = await bcrypt.hash(user.password, salt);
        //     }
        //   }
        });
      
    return User;
};
  