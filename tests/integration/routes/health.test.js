const request = require('supertest');
const app = require('../../../src/app');

describe('Health Check Routes', () => {
  describe('GET /health', () => {
    test('should return 200 and health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toEqual({
        status: 'OK',
        timestamp: expect.any(String),
        uptime: expect.any(Number)
      });
    });
  });

  describe('GET /health/detailed', () => {
    test('should return detailed health information', async () => {
      const response = await request(app)
        .get('/health/detailed')
        .expect(200);

      expect(response.body).toHaveProperty('status');
      expect(response.body).toHaveProperty('checks');
      expect(response.body.checks).toHaveProperty('database');
      expect(response.body.checks).toHaveProperty('memory');
    });
  });
});
