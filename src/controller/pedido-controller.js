const Pedido = require('../model/Pedido')


const pedido = (app) =>{
    app.get('/pedido', (req,res)=>{
        res.send('Get Pedido: retorna informações do pedido')
    })

    app.post('/pedido', (req,res)=>{
        res.send('Post Pedido: retorna informações do pedido inserido')
    })

    app.put('/pedido', (req,res)=>{
        res.send('Put Pedido: retorna informações do pedido alterado')
    })

    app.delete('/pedido', (req,res)=>{
        res.send('Delete Pedido: retorna informações do pedido deletado')
    })

    // app.post('/pedido', (req, res)=>{
    //     try {
    //         const body = req.body
    //         const novoPedido = new Pedido

    //         //lógica de inserção de pedidos
    //         console.log (novoPedido)
    //         .then ((resposta)=>{
    //             res.json(resposta)
    //         })
    //         .catch((erro)=>{
    //             res.json(erro)
    //         })
    //     }
    //     catch (error){
    //         res.json ({
    //             "mensagem": error.message,
    //             "erro" : true
    //         })

    //     }
        
    // })
}

const novoPedido = new Pedido ("macarrão", "Camila", "Carlos", 21 , "cartão", "macarrao ao molho branco", 25/11/2021)
console.log (novoPedido)
// console.log(moment().format('YYYY-MM-DD HH:mm:ss'))

module.exports = pedido
