const express = require('express');
const app = express();
const cors = require('cors')

// Importando Controllers
const pedido = require('./controller/pedido-controller')

// Importando o Banco de Dados SQLite
const bd = require('./infra/sqlite-db')

// Middlewares
app.use(express.json())
app.use(cors())

// Rotas da Entidade
pedido(app,bd)

module.exports = app