const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');

const StartServer = async () => {
    const app = express();
    await databaseConnection();
    await expressApp(app);

    app.listen(PORT, () => {
        console.log(`listenig to port ${PORT}`);
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();

/* const express = require('express');


const app = express();
const PORT = 8002;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        servicio: 'products',
        mensaje: 'Microservicio de productos funcionando'
    });
});

app.listen(PORT, () => {
    console.log(`Products ejecutándose en el puerto ${PORT}`);
}); */