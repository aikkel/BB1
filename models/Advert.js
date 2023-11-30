module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Advert', {
        advertID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.INTEGER,
        model: DataTypes.NUMERIC,
        manufacture: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        licencePlate: DataTypes.INTEGER,
        picture: DataTypes.INTEGER
    }, {
        timestamps: false
    });
};
