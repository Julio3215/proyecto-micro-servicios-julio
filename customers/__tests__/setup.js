const mongoose = require('mongoose');

jest.spyOn(mongoose, 'createConnection').mockImplementation(() => ({
  model: jest.fn(),
  on: jest.fn()
}));

afterAll(async () => {
  await mongoose.disconnect();
});