module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'User', // specifying the table name since it's singular
        timestamps: false
    });

    return User;
};
