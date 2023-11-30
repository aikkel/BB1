module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Car', {
        carID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licencePlate: DataTypes.TEXT,
        model: DataTypes.TEXT,
        manufacture: DataTypes.TEXT,
        year: DataTypes.INTEGER,
        SIInfo: DataTypes.TEXT
    }, {
        timestamps: false
    });
};
