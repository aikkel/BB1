

const { setupDatabase, cleanupDatabase } = require('./unit/testUtils');
const mockDb = require('./mockDb');

setupDatabase(mockDb);

global.teardown = async () => await cleanupDatabase(mockDb);