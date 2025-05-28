// Create tests/load/basic.test.js:

const request = require('supertest');
const app = require('../../../src/app');

describe('Load Tests', () => {
  test('should handle multiple concurrent requests', async () => {
    const concurrentRequests = 50;
    const requests = Array(concurrentRequests).fill(null).map(() =>
      request(app).get('/health').expect(200)
    );

    const startTime = Date.now();
    await Promise.all(requests);
    const endTime = Date.now();

    const totalTime = endTime - startTime;
    const averageResponseTime = totalTime / concurrentRequests;

    expect(averageResponseTime).toBeLessThan(1000); // Should respond within 1 second on average
  }, 30000); // 30 second timeout

  test('should maintain performance under sustained load', async () => {
    const requestsPerSecond = 10;
    const durationSeconds = 5;
    const totalRequests = requestsPerSecond * durationSeconds;

    const results = [];

    for (let i = 0; i < totalRequests; i++) {
      const startTime = Date.now();
      await request(app).get('/health').expect(200);
      const endTime = Date.now();

      results.push(endTime - startTime);

      // Maintain rate of requests per second
      await new Promise(resolve => setTimeout(resolve, 1000 / requestsPerSecond));
    }

    const averageResponseTime = results.reduce((a, b) => a + b, 0) / results.length;
    const maxResponseTime = Math.max(...results);

    expect(averageResponseTime).toBeLessThan(500);
    expect(maxResponseTime).toBeLessThan(2000);
  }, 30000);
});
