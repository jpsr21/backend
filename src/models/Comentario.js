const mongoose = require("mongoose");

//PROPRIEDADES DO POST
const ComentarioSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Comentario', ComentarioSchema);