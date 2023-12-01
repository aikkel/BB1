module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Advert', {
        advertID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: DataTypes.TEXT, 
        model: DataTypes.TEXT,       // Assuming model is text
        manufacture: DataTypes.TEXT, // Assuming manufacture is text
        year: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        licencePlate: DataTypes.TEXT, // Matching the Car model's data type
        picture: DataTypes.TEXT       // Assuming picture is a URL or file path
    }, {
        timestamps: false
    });
};
