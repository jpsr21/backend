const mongoose = require("mongoose");

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        return res.json(users);
    },

    //MOSTRAR
    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    //CADASTRAR
    async store(req, res) {
        
        const user = await User.create(req.body);

        return res.json(user);
    },

    //ATUALIZAR
    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    //REMOVER
    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id).then((sucess) => {
            console.log(sucess)
        }).catch((err) => {
            console.log(err)
        });
        return res.send();
    }
};