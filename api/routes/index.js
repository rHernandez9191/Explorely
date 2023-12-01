'use strict';

//aca vamos a ir llamando los diferentes routes a utilizar
const PersonaRoute = require("./PersonaRoute");
const SocioRoute = require("./SocioRoute");

module.exports = (app) => {
    app.use("/api", PersonaRoute);


    //Manejar rutas no encontradas devolviendo 404
    app.use((req, res) => {
        res.status(404);
        res.send({
            error: {
                status: 404,
                message: 'Ruta no encontrada'
            }
        });
    });

    //Manejar errores
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            error: {
                status: err.status || 500,
                message: err.message
            }
        });
    });
}

module.exports = (app) => {
    app.use("/api", SocioRoute);


    //Manejar rutas no encontradas devolviendo 404
    app.use((req, res) => {
        res.status(404);
        res.send({
            error: {
                status: 404,
                message: 'Ruta no encontrada'
            }
        });
    });

    //Manejar errores
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send({
            error: {
                status: err.status || 500,
                message: err.message
            }
        });
    });
}