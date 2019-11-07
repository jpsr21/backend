const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const bodyParser = require("body-parser");

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors(/*dominios*/));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//INICIANDO O DB
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb+srv://root:rootsenha@cluster0-dg18s.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Conectado ao mongo!')
}).catch((err) => {
    console.log('Erro na conexão: ' + err)
})

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

app.listen(3001, () => {
    console.log('Servidor rodando...')
})
