module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define('UserInfo', {
        name: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phoneNumber: DataTypes.INTEGER,
        city: DataTypes.TEXT,
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userRefID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', // name of the User model
                key: 'ID',     // key in User to which it references
            }
        }
    }, {
        timestamps: false
    });

    return UserInfo;
};
