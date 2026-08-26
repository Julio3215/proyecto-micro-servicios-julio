const express = require('express');
const { PORT } = require('./src/config');
const expressApp = require('./src/express-app');

const StartServer = async () => {
  const app = express();

  await expressApp(app);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
  }).on('error', (err) => {
    console.log(err);
    process.exit(1);
  });
};

StartServer();