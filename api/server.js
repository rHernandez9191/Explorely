'use strict';

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const inicializarRutas = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/Public'));

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Se establecio la conexion con la base de datos');

    const server = app.listen(process.env.PORT || 8000, () => {
        let port = server.address().port;
        console.log('La aplicacion esta levantada en el puerto: ', port);

        //Inicializar las rutas del servidor
        inicializarRutas(app);
    });
}).catch((err) => {
    console.log(err);
    process.exit(1);
});