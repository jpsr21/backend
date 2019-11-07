const mongoose = require("mongoose");

const Post = mongoose.model('Post');

module.exports = {
    async index(req, res) {
        const posts = await Post.find();

        return res.json(posts);
    },

    //MOSTRAR
    async show(req, res) {
        const post = await Post.findById(req.params.id);
        return res.json(post);
    },

    //CADASTRAR
    async store(req, res) {
        
        const post = await Post.create(req.body);

        return res.json(post);
    },

    //ATUALIZAR
    async update(req, res) {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(post);
    },

    //REMOVER
    async destroy(req, res) {
        await Post.findByIdAndRemove(req.params.id, {useFindAndModify: false}).then((sucess) => {
            console.log(sucess)
        }).catch((err) => {
            console.log(err)
        });
        return res.send();
    }
};