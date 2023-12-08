'use strict';

const mongoose = require('mongoose');
const schemaReservas = mongoose.Schema({
    IdSocio:{ type: String, required: true, unique: false },
    TipoServicio: { type: Number, required: true, unique: false },
    Identificacion: { type: String, required: true, unique: true },
    NombreEmpresa: { type: String, required: true, unique: false },
    IdPersona:{ type: String, required: true, unique: false },
    Provincia: { type: Number, required: true, unique: false },
    CantPersonas: { type: String, required: true, unique: false },
    Precio: { type: String, required: true, unique: false },
    
});



module.exports = mongoose.model('Reserva', schemaReservas, 'Reservas');