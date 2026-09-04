const mongoose = require('mongoose');

// Evita que mongoose intente conectarse a MongoDB en unit tests
jest.spyOn(mongoose, 'createConnection').mockImplementation(() => ({
  model: jest.fn(),
  on: jest.fn()
}));

afterAll(async () => {
  await mongoose.disconnect();
});