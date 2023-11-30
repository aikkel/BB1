module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.TEXT,
            primaryKey: true,
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
