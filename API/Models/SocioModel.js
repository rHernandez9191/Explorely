'use strict';

const mongoose = require('mongoose');
const schemaSocio = mongoose.Schema({
    TipoServicio: { type: Number, required: true, unique: false },
    Identificacion: { type: String, required: true, unique: true },
    NombreEmpresa: { type: String, required: true, unique: false },
    Encargado1: { type: String, required: true, unique: false },
    Encargado2: { type: String, required: false, unique: false },
    TipoEmpresa: { type: Number, required: true, unique: false },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true, unique: false },
    FechaConstitucion: { type: String, required: true, unique: false },
    Provincia: { type: Number, required: true, unique: false },
    Canton: { type: String, required: true, unique: false },
    Descripcion: { type: String, required: true, unique: false },
    Estado: { type: Number, required: true, unique: false },
    Rol: { type: Number, required: true, unique: false },
    FotoPerfil: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Socio', schemaSocio, 'Socios');