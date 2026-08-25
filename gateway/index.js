const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const PORT = process.env.PORT || 8000;
app.get('/', (req,res)=>res.json({service:'gateway', message:'API Gateway funcionando'}));
app.use('/customers', proxy('http://customers:8001'));
app.use('/products', proxy('http://products:8002'));
app.use('/shopping', proxy('http://shopping:8003'));
app.listen(PORT, '0.0.0.0', ()=>console.log(`API Gateway corriendo en ${PORT}`));
