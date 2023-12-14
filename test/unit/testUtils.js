const Advert = require('../../models/Advert'); 
const sequelize = { //sequelize mock object.
    sync: jest.fn(),
    authenticate: jest.fn().mockResolvedValue(),
    close: jest.fn().mockResolvedValue(),
    //destroy: jest.fn().mockResolvedValue(1),
    findByPk: jest.fn(), // Add this line
    //getAdvertById: jest.fn().mockResolvedValue(),
    models: {
      Advert: {
        bulkCreate: jest.fn(),
        destroy: jest.fn().mockResolvedValue(1), // Add this line
        findOne: jest.fn().mockResolvedValue(null),
      },
    },
    drop: jest.fn(),
};

async function setupDatabase() {
  // Sync the database schema
  await sequelize.sync({ force: true });
}

async function insertTestAdvert(advertId) {
  await sequelize.models.Advert.bulkCreate([
    { 
      advertID: advertId, 
      description: 'This is a test advert',
      price: 100,
      // ...any other fields that your Advert model might have
    },
    // ...other test adverts
  ]);

  // Return the mock Advert model
  return sequelize.models.Advert;
}

async function cleanupDatabase() {
  // Drop all tables in the database
  await sequelize.drop();

  // Reset the mock functions
  sequelize.sync.mockReset();
  sequelize.models.Advert.bulkCreate.mockReset();
  sequelize.drop.mockReset();
}

async function deleteFromAdvertTable(advertId) {
    try {
        // Connect to the database
        await sequelize.authenticate();

        // Delete the advert
        const result = await sequelize.models.Advert.destroy({
    where: {
        advertID: advertId
    }
        });

        // Close the connection
        await sequelize.close();

        // Return true if at least one row was deleted, false otherwise
        return result > 0;
    } catch (error) {
        console.error('Failed to delete advert:', error);
        return false;
    }
}

async function getAdvertById(advertId) {
    // Use the findOne method to retrieve the advert
    const advert = await sequelize.models.Advert.findOne({
      where: {
        advertID: advertId
      }
    });
    // Return the retrieved advert
  return advert;
}

module.exports = { setupDatabase, cleanupDatabase, insertTestAdvert, deleteFromAdvertTable, getAdvertById };