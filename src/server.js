const app = require('./app')
const PORT = process.env.PORT || 3300;

app.listen(PORT, ()=>{
    console.log(`Servidor rodando: http://localhost:${PORT}/`)
})