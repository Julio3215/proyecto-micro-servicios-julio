const express = require('express');
const expressProxy = require('express-http-proxy');
const { CUSTOMERS_URL, PRODUCTS_URL, SHOPPING_URL } = require('./config');

module.exports = (app) => {
  // Proxy hacia Customers (Puerto 8001)
  app.use('/customers', expressProxy(CUSTOMERS_URL));
  
  // Proxy hacia Products (Puerto 8002)
  app.use('/products', expressProxy(PRODUCTS_URL));
  
  // Proxy hacia Shopping (Puerto 8003)
  app.use('/shopping', expressProxy(SHOPPING_URL));
};