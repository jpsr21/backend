const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");
const ComentarioController = require("./controllers/ComentarioController");

//const User = mongoose.model('User');

//ROTAS USUARIO
routes.get("/users", UserController.index);
routes.get('/users/:id', UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);

//ROTAS POST
routes.get("/posts", PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post("/posts", PostController.store);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.destroy);

//ROTAS COMENTARIO
routes.get("/comentarios", ComentarioController.index);
routes.get('/comentarios/:id', ComentarioController.show);
routes.post("/comentarios", ComentarioController.store);
routes.put("/comentarios/:id", ComentarioController.update);
routes.delete("/comentarios/:id", ComentarioController.destroy);

module.exports = routes;