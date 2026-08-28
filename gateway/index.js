const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

// Acepta tanto '/customers' como '/customer'
app.use('/customers', proxy('http://customer_microservice:8001'));
app.use('/customer', proxy('http://customer_microservice:8001'));

app.use('/products', proxy('http://product_microservice:8002'));
app.use('/shopping', proxy('http://shopping_microservice:8003'));

app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});