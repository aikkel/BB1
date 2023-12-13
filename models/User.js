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
        hooks: {
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    const salt = await bcrypt.genSalt();
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    });

    return User;
};