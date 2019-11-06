const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors(/*dominios*/));

//INICIANDO O DB
mongoose.connect('mongodb+srv://root:rootsenha@cluster0-dg18s.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

requireDir('./src/models');

//teste
/*app.get("/", (req, res) => {
    Product.create({
        nome: 'nome2',
        email: 'email2',
        senha: 'senha2'
    })
});
*/

//ROTAS
app.use('/api', require("./src/routes"));

app.listen(3001);