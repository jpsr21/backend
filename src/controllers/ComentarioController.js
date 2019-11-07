const mongoose = require("mongoose");

const Comentario = mongoose.model('Comentario');

module.exports = {
    async index(req, res) {
        const comentarios = await Comentario.find();

        return res.json(comentarios);
    },

    //MOSTRAR
    async show(req, res) {
        const comentario = await Comentario.findById(req.params.id);
        return res.json(comentario);
    },

    //CADASTRAR
    async store(req, res) {
        
        const comentario = await Comentario.create(req.body);

        return res.json(comentario);
    },

    //ATUALIZAR
    async update(req, res) {
        const comentario = await Comentario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(comentario);
    },

    //REMOVER
    async destroy(req, res) {
        await Comentario.findByIdAndRemove(req.params.id, {useFindAndModify: false}).then((sucess) => {
            console.log(sucess)
        }).catch((err) => {
            console.log(err)
        });
        return res.send();
    }
};