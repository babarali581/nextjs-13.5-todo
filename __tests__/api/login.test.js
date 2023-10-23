import login from '../../src/pages/api/login';

describe('Login API', () => {
  it('returns a token for valid credentials', async () => {
    const req = {
      body: {
        username: 'admin',
        password: '12345'
      },
      method: 'POST'
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: expect.any(String) }));
  });

  it('returns an error for invalid credentials', async () => {
    const req = {
      body: {
        username: 'wrong',
        password: 'wrong'
      },
      method: 'POST'
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
  });

  // You can also add tests for other scenarios.
});
