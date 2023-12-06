const request = require('supertest');
const app = require('../../app');
const db = require('../../Database/db');
const login = require('../../Database/login');

// Assuming BBDB.db is a SQLite database file, we can't require it directly.
// We would interact with it using a database client, which is presumably set up in your db.js file.

jest.mock('../../Database/db', () => ({
  getData: jest.fn().mockResolvedValue({ data: 'mocked data' }),
}));

describe('GET /data', () => {
  it('should fetch data successfully', async () => {
    const response = await request(app).get('/data');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ data: 'mocked data' });
  });

  it('should handle errors when fetching data', async () => {
    const errorMessage = 'Error fetching data';
    db.getData.mockRejectedValue(new Error(errorMessage));
  
    const response = await request(app).get('/data');
    expect(response.status).toBe(500);
    expect(response.body.error).toEqual(errorMessage);
  });
});
//npx jest