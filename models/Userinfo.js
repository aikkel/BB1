module.exports = (sequelize, DataTypes) => {
    return sequelize.define('UserInfo', {
        name: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phoneNumber: DataTypes.INTEGER,
        city: DataTypes.TEXT,
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        timestamps: false
    });
};
