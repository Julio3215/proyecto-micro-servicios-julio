const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { ErrorHandler } = require('./utils');

module.exports = async (app) => {
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));
  app.use(cors());

  // Conectar las rutas proxy
  routes(app);

  // Manejo global de errores
  app.use(ErrorHandler);
};