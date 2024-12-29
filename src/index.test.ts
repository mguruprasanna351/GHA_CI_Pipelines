import request from ' supertest ';
import express from ' express ';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

describe('API Tests', () => {
  it('should return hello world message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});