const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Advert = sequelize.define('Advert', {
        advertID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licencePlate: {
            type: DataTypes.TEXT,
            references: {
              model: 'Car',
              key: 'licencePlate'
            }
          }, 
        userID: {
            type: DataTypes.INTEGER,
            references: {
            model: 'User',
            key: 'id'
          }
        },
        description: DataTypes.TEXT, 
        model: DataTypes.TEXT,       // Assuming model is text
        manufacture: DataTypes.TEXT, // Assuming manufacture is text
        year: DataTypes.INTEGER,
        price: DataTypes.INTEGER,    
        picture: DataTypes.TEXT       // Assuming picture is a URL or file path
    }, {
        tableName: 'Advert', // specifying the table name since it's singular
        timestamps: false
    });

    return Advert;
};
