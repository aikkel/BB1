const { cleanupDatabase } = require('./unit/testUtils');

module.exports = async () => {
    await cleanupDatabase();
};