require('./config/config');

const express = require('express');

const app = express();

const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const bodyParser =  require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configuración global de las rutas
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
});

