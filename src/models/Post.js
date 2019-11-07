const mongoose = require("mongoose");

//PROPRIEDADES DO POST
const PostSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: false
    },
    imagem: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: false
    },
    comentarios: {
        type: String,
        required: false
    },
    curtido: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Post', PostSchema);