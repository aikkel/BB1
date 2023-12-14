const { Advert } = require('../../models/Advert');
const { setupDatabase, cleanupDatabase, insertTestAdvert, deleteFromAdvertTable, getAdvertById } = require('./testUtils');

describe('deleteFromAdvertTable', () => {
    beforeAll(async () => {
        // Set up the test database
        await setupDatabase();
    });

    afterAll(async () => {
        // Clean up the test database
        await cleanupDatabase();
    });

    it('should delete the advert from the table', async () => {
        const advertId = 7;

        // Insert a test advert into the database
        await insertTestAdvert(advertId);

        // Call the function to be tested
        const result = await deleteFromAdvertTable(advertId);

        // Check that the function returned true
        expect(result).toBe(true);

        // Check that the advert was deleted from the database
        const advert = await getAdvertById(advertId);
        expect(advert).toBeNull();
    });
});