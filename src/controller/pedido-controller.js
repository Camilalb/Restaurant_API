const Pedido = require('../model/Pedido')

const pedido = (app) =>{
    app.get('/pedido', (req,res)=>{
        res.send('Get Pedido: retorna informações do pedido')
    })

    app.post('/pedido', (req, res)=>{
        const body = req.body
        console.log ("o corpo do usuario é: ", body)
        res.json ({
            "requisição": body,
            "erro" : false
        })
    })

    // app.put

    // app.delete
}

const novoPedido = new Pedido ("1",["Macarrão","Carne Moida", "Queijo Ralado"], "Camila", "Carlos")
console.log (novoPedido)

module.exports = pedido
