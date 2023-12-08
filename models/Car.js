module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Car', {
        licencePlate: {
            type: DataTypes.TEXT,
            primaryKey: true,
        },
        model: DataTypes.TEXT,
        manufacture: DataTypes.TEXT,
        year: DataTypes.INTEGER,
        SIInfo: DataTypes.TEXT
    }, {
        tableName: 'Car', // specifying the table name since it's singular
        timestamps: false
    });
};
