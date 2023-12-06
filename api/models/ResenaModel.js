'use strict';

const mongoose = require('mongoose');
const schemaResena = mongoose.Schema({
    IdSocio:{ type: String, required: true, unique: false },
    IdPersona:{ type: String, required: true, unique: false },
    Resena:{ type: String, required: true, unique: false },
});



module.exports = mongoose.model('Resena', schemaResena, 'Resenas');