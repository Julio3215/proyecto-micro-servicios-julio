const ErrorHandler = require('../../src/utils/error-handler');

describe('Error Handler Unit Tests - Products', () => {
  let mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  test('debe responder con estado 500 y el mensaje de error', async () => {
    const error = new Error('Error al gestionar productos');
    await ErrorHandler(error, null, mockRes, null);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Internal server error' });
  });
});