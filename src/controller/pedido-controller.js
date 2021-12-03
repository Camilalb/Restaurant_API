const Pedido = require('../model/Pedido')
const PedidoDAO = require('../DAO/PedidoDAO')

const pedido = (app, bd) =>{
    const novoPedidoDAO = new PedidoDAO(bd)

    app.get('/pedido', async (req,res)=>{
        
        try {
            const resposta = await novoPedidoDAO.pegaTodosPedidos()                 
            res.json(resposta)
        } catch (error) {
            res.json(error)
        }
    })

    app.get('/pedido/:id', async (req, res)=> {
        const id = req.params.id
        try {
            const resposta = await novoPedidoDAO.pegaPedidosPorId(id)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }
    })

    app.get('/usuario/:motoboy', async (req, res)=> {
        const motoboy = req.params.motoboy
        console.log(motoboy)
        try {
            const resposta = await novoPedidoDAO.pegaPedidosPorMotoboy(motoboy)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }
    })

    app.get('/usuario/:nome_do_cliente', async (req, res)=> {
        const cliente = req.params.nome_do_cliente

        try {
            const resposta = await novoPedidoDAO.pegaPedidosPorCliente(cliente)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }
    })

    app.post('/pedido', async (req,res)=>{
       
        try {
            const body = req.body
            const novoPedido = new Pedido (body.QTD_PRATO1,body.PRATO1,body.QTD_PRATO2,body.PRATO2,body.QTD_PRATO3,body.PRATO3,body.NOME_DO_CLIENTE,body.MOTOBOY,body.FILIAL,body.VALOR_TOTAL,body.FORMA_DE_PAGAMENTO,body.OBSERVACAO)
           
            const resposta = await novoPedidoDAO.inserePedido(novoPedido)
            console.log("novoPedido")
            res.json(resposta)
        } catch (error){
            res.status(400).json({
                "mensagem" : error.message,
                "erro" : true 
            })
        }
    })

    app.put('/pedido/:numero_do_pedido', async (req,res)=>{
        const id = parseInt(req.params.numero_do_pedido) 
        const body = req.body
        
        try {
            const respostaGet = await novoPedidoDAO.pegaPedidosPorId(id)
            const pedidoAntigo = respostaGet.requisicao[0]
            if(pedidoAntigo){
                const pedidoAtualizado = new Pedido (
                    body.QTD_PRATO1 || pedidoAntigo.QTD_PRATO1,
                    body.PRATO1|| pedidoAntigo.PRATO1,
                    body.QTD_PRATO2 || pedidoAntigo.QTD_PRATO2,
                    body.PRATO2 || pedidoAntigo.PRATO2,
                    body.QTD_PRATO3 || pedidoAntigo.QTD_PRATO3,
                    body.PRATO3|| pedidoAntigo.PRATO3,
                    body.NOME_DO_CLIENTE || pedidoAntigo.NOME_DO_CLIENTE,
                    body.MOTOBOY || pedidoAntigo.MOTOBOY,
                    body.FILIAL || pedidoAntigo.FILIAL,
                    body.VALOR_TOTAL || pedidoAntigo.VALOR_TOTAL,
                    body.FORMA_DE_PAGAMENTO || pedidoAntigo.FORMA_DE_PAGAMENTO,
                    body.OBSERVACAO || pedidoAntigo.OBSERVACAO,
                )
                const resposta = await novoPedidoDAO.atualizaPedido(id, pedidoAtualizado)
                res.json(resposta)               
            } else {
                res.status(404).json({
                    "mensagem": `Pedido com número "${id}" não existe`,
                    "error" : true
                })
            }
        } catch (error) {
            res.status(400).json({
                "mensagem" : error.message,
                "error" : true
            })
        }
    })

    app.delete('/pedido/:numero_do_pedido', async (req,res)=>{
        const id = parseInt(req.params.numero_do_pedido)
        try {
            const resposta = await novoPedidoDAO.deletaPedido(id)
            res.json(resposta)
        } catch (error) {
            res.status(400).json({
                "mensagem" : error.message,
                "erro" : true
            })
        }

    })

}

module.exports = pedido
