const request = require('supertest');
const jest = require('jest');
const app = require('../../app');

jest.mock('../dependency', () => ({
  getData: jest.fn().mockResolvedValue({ data: 'mocked data' }),
}));

describe('GET /data', () => {
  it('should fetch data successfully', async () => {
    const response = await request(app).get('/data');
    expect(response.status).toBe(404); //
    expect(response.body).toEqual({ data: 'mocked data' });
  });

  it('should handle errors when fetching data', async () => {
    const errorMessage = 'Error fetching data';
    db.getData.mockRejectedValue(new Error(errorMessage));
  
    const response = await request(app).get('/data');
    expect(response.status).toBe(405);
    expect(response.body.error).toEqual(errorMessage);
  });
});