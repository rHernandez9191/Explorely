'use strict';

const express = require('express');
const router = express.Router();
const Socio = require('./../models/SocioModel');
const Resena = require('./../models/ResenaModel');

//CRUD
//Create
router.post('/RegistrarSocio', (req, res) => {
    let body = req.body;
    let nuevoSocio = new Socio({
        TipoServicio: body.TipoServicio,
        Identificacion: body.Identificacion,
        NombreEmpresa: body.NombreEmpresa,
        Encargado1: body.Encargado1,
        Encargado2: body.Encargado2,
        TipoEmpresa: body.TipoEmpresa,
        Email: body.Email,
        Password: body.Password,
        FechaConstitucion: body.FechaConstitucion,
        Provincia: body.Provincia,
        Canton: body.Canton,
        Descripcion: body.Descripcion,
        Estado: 1,
        Rol: body.Rol,
        CantPersonas: body.CantPersonas,
        Precio: body.Precio,
        FotoPerfil: body.FotoPerfil
    });

    nuevoSocio.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                resultBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la persona, ocurrio el siguiente error: ',
                error
            });
        });
});
//Read
router.get('/ListarSocios', (req, res) => {
    Socio.find()
        .then((ListaSociosBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                ListaSociosBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de personas, ocurrio el siguiente error: ',
                error
            });
        });
});
router.get('/BuscarSocioIdentificacion', (req, res) => {
    let param = req.query;

    Socio.findOne({ Identificacion: param.Identificacion })
        .then((SocioBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                SocioBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de personas, ocurrio el siguiente error: ',
                error
            });
        });
});
router.get('/BuscarSocioId', (req, res) => {
    let param = req.query;

    Socio.findOne({ _id: param._id })
        .then((SocioBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                SocioBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de personas, ocurrio el siguiente error: ',
                error
            });
        });
});
router.get('/AutenticarSocio', function (req, res) {
    let params = req.query;
    Socio.findOne({
        Email: params.Email,
        Password: params.Password
    }).then((SocioDB) => {
        if (SocioDB == null) {
            res.json({
                resultado: false,
                msj: 'Usuario y/o contraseña incorrectos',
                SocioDB
            });
        } else if (Number(SocioDB.Estado) == 0) {
            res.json({
                resultado: false,
                msj: 'Usuario inactivo, por favor comuniquese con el administrador',
                SocioDB
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Persona autenticada correctamente',
                SocioDB
            });
        }
    }).catch((error) => {
        res.json({
            resultado: false,
            msj: 'No se pudo obtener a la persona',
            error
        });
    });
});
//Update
router.put('/ModificarSocio', (req, res) => {
    let body = req.body;
    Socio.updateOne({ _id: body._id }, {
        $set: body
        // $set: {
        //     Nombre: body.Nombre,
        //     Edad: body.Edad
        // }
    })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'Los datos se actualizaron de manera correcta',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo actualizar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});
router.put('/InactivarSocio', (req, res) => {
    let body = req.body;
    Socio.updateOne({ _id: body._id }, {
        $set: {
            Estado: 0
        }
    })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'Los datos se actualizaron de manera correcta',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo actualizar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});
//Delete
router.delete('/EliminarSocio', (req, res) => {
    let body = req.body;
    Socio.deleteOne({ _id: body._id })
        .then((info) => {
            res.json({
                resultado: true,
                msj: 'Los datos se eliminaron de manera correcta',
                info
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo eliminar a la persona, ocurrio el siguiente error: ',
                error
            });
        });
});


//subdocumentos v2
router.post('/RegistrarTarjeta', (req, res) => {
    let body = req.body;
    Persona.updateOne({ _id: body._id }, {
        $push: {
            Tarjetas: {
                Nombre: body.Nombre,
                Apellido: body.Apellido,
                NumeroTarjeta: body.NumeroTarjeta,
                CVV: body.CVV
            }
        }
    }).then((info) => {
        res.json({
            resultado: true,
            msj: 'Tarjeta registrada de manera correcta',
            info
        });
    }).catch((error) => {
        res.json({
            resultado: false,
            msj: 'Ocurrio un error y no se pudo registrar la tarjeta',
            error
        });
    });
});
router.delete('/EliminarTarjetaPersona', (req, res) => {
    let body = req.body;
    Persona.updateOne({ _id: body._idPersona }, {
        $pull: {
            Tarjetas: { _id: body._idTarjeta }
        }
    }).then((info) => {
        res.json({
            resultado: true,
            msj: 'Tarjeta eliminada de manera correcta',
            info
        });
    }).catch((error) => {
        res.json({
            resultado: false,
            msj: 'Ocurrio un error y no se pudo eliminar la tarjeta',
            error
        });
    });
});



router.post('/RegistrarResena', (req, res) => {
    let body = req.body;
    let nuevaResena = new Resena({
        IdSocio:body.IdSocio,
        IdPersona:body.IdPersona,
        Resena:body.Resena,
    });

    nuevaResena.save()
        .then((resultBD) => {
            res.json({
                resultado: true,
                msj: 'Registrado de manera correcta.',
                resultBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la reseña, ocurrio el siguiente error: ',
                error
            });
        });
});

router.get('/ListarResenas', (req, res) => {
    Resena.find()
        .then((ListaResenaBD) => {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta',
                ListaResenaBD
            });
        })
        .catch((error) => {
            res.json({
                resultado: false,
                msj: 'No se pudo obtener la lista de reseñas, ocurrio el siguiente error: ',
                error
            });
        });
});

module.exports = router;



