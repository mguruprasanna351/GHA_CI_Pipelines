import request from 'supertest';
import app from './index';

describe('API Endpoints', () => {
  it('should return hello world', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body).toEqual({ message: 'Hello World!' });
  });
});