import { app } from '../src/app';

describe('GET /', () => {
  it('should return 200', async () => {
    const res = await app.inject().get('/');

    expect(res.statusCode).toBe(200);
  });
});