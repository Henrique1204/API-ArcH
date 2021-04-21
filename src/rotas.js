const express = require('express');
const rotasClientes = express.Router();

const clientesGet = require('./controllers/clientes_get.controller');
rotasClientes.get('/clientes', clientesGet);

const clientesPost = require('./controllers/clientes_post.controller');
rotasClientes.post('/clientes', clientesPost);

module.exports = (app) => {
    app.use('/', rotasClientes);
};
