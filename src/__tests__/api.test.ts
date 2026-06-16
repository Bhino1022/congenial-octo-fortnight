import request from 'supertest';
import { Express } from 'express';
import express from 'express';
import { apiRouter } from '../routes/api';
import { healthRouter } from '../routes/health';

describe('API Endpoints', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/health', healthRouter);
    app.use('/api', apiRouter);
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
    });

    it('should have uptime as a number', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(typeof response.body.uptime).toBe('number');
      expect(response.body.uptime).toBeGreaterThanOrEqual(0);
    });
  });

  describe('GET /api/', () => {
    it('should return API endpoints info', async () => {
      const response = await request(app)
        .get('/api/')
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body).toHaveProperty('endpoints');
      expect(response.body.endpoints).toHaveProperty('math');
      expect(response.body.endpoints).toHaveProperty('greeting');
    });

    it('should list all math operations', async () => {
      const response = await request(app)
        .get('/api/')
        .expect(200);

      const mathEndpoints = response.body.endpoints.math;
      expect(mathEndpoints).toHaveProperty('add');
      expect(mathEndpoints).toHaveProperty('subtract');
      expect(mathEndpoints.add).toHaveProperty('method', 'POST');
      expect(mathEndpoints.add).toHaveProperty('path', '/api/math/add');
    });
  });

  describe('POST /api/math/add', () => {
    it('should add two numbers', async () => {
      const response = await request(app)
        .post('/api/math/add')
        .send({ a: 5, b: 3 })
        .expect(200);

      expect(response.body).toHaveProperty('operation', 'add');
      expect(response.body).toHaveProperty('a', 5);
      expect(response.body).toHaveProperty('b', 3);
      expect(response.body).toHaveProperty('result', 8);
    });

    it('should handle negative numbers', async () => {
      const response = await request(app)
        .post('/api/math/add')
        .send({ a: -5, b: 3 })
        .expect(200);

      expect(response.body.result).toBe(-2);
    });

    it('should return 400 if numbers are missing', async () => {
      const response = await request(app)
        .post('/api/math/add')
        .send({ a: 5 })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 if inputs are not numbers', async () => {
      const response = await request(app)
        .post('/api/math/add')
        .send({ a: 'five', b: 3 })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 if body is empty', async () => {
      const response = await request(app)
        .post('/api/math/add')
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /api/math/subtract', () => {
    it('should subtract two numbers', async () => {
      const response = await request(app)
        .post('/api/math/subtract')
        .send({ a: 10, b: 3 })
        .expect(200);

      expect(response.body).toHaveProperty('operation', 'subtract');
      expect(response.body).toHaveProperty('a', 10);
      expect(response.body).toHaveProperty('b', 3);
      expect(response.body).toHaveProperty('result', 7);
    });

    it('should handle negative results', async () => {
      const response = await request(app)
        .post('/api/math/subtract')
        .send({ a: 3, b: 10 })
        .expect(200);

      expect(response.body.result).toBe(-7);
    });

    it('should return 400 if numbers are missing', async () => {
      const response = await request(app)
        .post('/api/math/subtract')
        .send({ b: 3 })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });

    it('should return 400 if inputs are not numbers', async () => {
      const response = await request(app)
        .post('/api/math/subtract')
        .send({ a: 10, b: 'three' })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /api/greet', () => {
    it('should greet with a custom name', async () => {
      const response = await request(app)
        .post('/api/greet')
        .send({ name: 'Alice' })
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('Alice');
    });

    it('should greet with default name if not provided', async () => {
      const response = await request(app)
        .post('/api/greet')
        .send({})
        .expect(200);

      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toContain('World');
    });

    it('should return 400 if name is not a string', async () => {
      const response = await request(app)
        .post('/api/greet')
        .send({ name: 123 })
        .expect(400);

      expect(response.body).toHaveProperty('error');
    });

    it('should handle special characters in name', async () => {
      const response = await request(app)
        .post('/api/greet')
        .send({ name: 'Alice O\'Brien' })
        .expect(200);

      expect(response.body.message).toContain('Alice O\'Brien');
    });
  });

  describe('Error Handling', () => {
    it('should return 404 for unknown routes', async () => {
      await request(app)
        .get('/api/unknown')
        .expect(404);
    });

    it('should handle malformed JSON gracefully', async () => {
      await request(app)
        .post('/api/math/add')
        .set('Content-Type', 'application/json')
        .send('invalid json')
        .expect(400);
    });
  });
});
