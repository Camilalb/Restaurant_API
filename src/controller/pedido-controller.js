const Pedido = require('../model/Pedido')
const PedidoDAO = require('../DAO/PedidoDAO')

const pedido = (app, bd) =>{
    const novoPedidoDAO = new PedidoDAO(bd)

    app.get('/pedido', async (req,res)=>{
        
        try {
            const resposta = await novoPedidoDAO.pegaTodosPedidos()
            console.log(resposta)            
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
        try {
            const resposta = await novoPedidoDAO.pegaPedidosPorMotoboy(motoboy)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }
    })

    app.get('/usuario/:nome_do_cliente', async (req, res)=> {
        const cliente = req.params.nome_do_cliente
        console.log(req.params.nome_do_cliente)
        try {
            const resposta = await novoPedidoDAO.pegaPedidosPorCliente(cliente)
            res.json(resposta)
        } catch (error) {
            res.status(404).json(error)
        }
    })

    app.post('/pedido', async (req,res)=>{
        console.log(req.body)
        try {
            const body = req.body
            const novoPedido = new Pedido (body.QTD_PRATO1,body.PRATO1,body.QTD_PRATO2,body.PRATO2,body.QTD_PRATO3,body.PRATO3,body.NOME_DO_CLIENTE,body.MOTOBOY,body.FILIAL,body.VALOR_TOTAL,body.FORMA_DE_PAGAMENTO,body.OBSERVACAO)
            
            const resposta = await novoPedidoDAO.inserePedido(novoPedido)
            console.log(resposta)
            res.json(resposta)
        } catch (error){
            res.json({
                "mensagem" : error.message,
                "erro" : true 
            })
        }
    })

    app.put('/pedido/:id', async (req,res)=>{
        const id = req.params.id
        const body = req.body
        
        try {
            const respostaGet = await novoPedidoDAO.pegaPedidosPorId(id)
            const pedidoAntigo = respostaGet.requisicao[0]
            
            if(pedidoAntigo){
                const pedidoAtualizado = new Pedido (
                    body.numero_do_pedido || pedidoAntigo.NUMERO_DO_PEDIDO,
                    body.qtd_prato1 || pedidoAntigo.QTD_PRATO1,
                    body.prato1 || pedidoAntigo.PRATO1,
                    body.qtd_prato2 || pedidoAntigo.QTD_PRATO2,
                    body.prato2 || pedidoAntigo.PRATO2,
                    body.qtd_prato3 || pedidoAntigo.QTD_PRATO3,
                    body.prato3 || pedidoAntigo.PRATO3,
                    body.nome_do_cliente || pedidoAntigo.NOME_DO_CLIENTE,
                    body.motoboy || pedidoAntigo.MOTOBOY,
                    body.filial || pedidoAntigo.FILIAL,
                    body.valor_total || pedidoAntigo.VALOR_TOTAL,
                    body.forma_de_pagamento || pedidoAntigo.FORMA_DE_PAGAMENTO,
                    body.observacao || pedidoAntigo.OBSERVACAO,
                    body.data_do_pedido || pedidoAntigo.DATA_DO_PEDIDO,
                )
                const resposta = await novoPedidoDAO.atualizaPedido(id, pedidoAtualizado)
                res.json(resposta)               
            } else {
                res.json({
                    "mensagem": `Pedido com número "${id}" não existe`,
                    "error" : true
                })
            }
        } catch (error) {
            console.log(error)
            res.json({
                "mensagem" : error.message,
                "error" : true
            })
        }
    })

    app.delete('/pedido', async (req,res)=>{
        const id = parseInt(req.params.numero_do_pedido)
        try {
            const resposta = await novoPedidoDAO.deletaPedido(id)
            res.json(resposta)
        } catch (error) {
            res.status(404).json({
                "mensagem" : error.message,
                "erro" : true
            })
        }

    })

}

module.exports = pedido
