const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;

// Importando Controllers
const pedido = require('./controller/pedido-controller')

// Importando o Banco de Dados SQLite



// Middlewares
app.use(express.json())

// Rotas das Entidades
pedido(app)


app.listen(PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${PORT}/`)
})