'use strict';

const mongoose = require('mongoose');
const schemaPersona = mongoose.Schema({
    TipoIdentificacion: { type: Number, required: true, unique: false },
    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true, unique: false },
    Apellido1: { type: String, required: true, unique: false },
    Apellido2: { type: String, required: false, unique: false },
    Sexo: { type: String, required: true, unique: false },
    Edad: { type: Number, required: true, unique: false },
    Estado: { type: Number, required: true, unique: false },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true, unique: false },
    Rol: { type: Number, required: true, unique: false },
    Nacimiento: { type: String, required: true, unique: false },
    FotoPerfil: { type: String, required: false, unique: false },
    Tarjetas:[
        {
           nombre: { type: String, required: true, unique: false },
           tipoTarjeta: { type: String, required: true, unique: false },
           numTarjeta: { type: String, required: true, unique: false },
           vencimiento: { type: String, required: true, unique: false } 
        }
    ],
    Reservas:[
        {
            IdReserva:{ type: String, required: true, unique: false },
            NombreLugar:{ type: String, required: true, unique: false },
            Precio:{ type: String, required: true, unique: false },
            FechaEntrada:{ type: String, required: true, unique: false },
            FechaSalida:{ type: String, required: true, unique: false }
        }
    ]

});

module.exports = mongoose.model('Persona', schemaPersona, 'Personas');
