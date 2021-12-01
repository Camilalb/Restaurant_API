class PedidoDAO {
    constructor(bd) {
        this.bd = bd
    }
    pegaTodosPedidos() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM PEDIDO;', (error, rows) => {
                
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "error": true
                    })
                } else {
                    console.log(rows)
                    resolve({
                        "pedido": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            })
        })
    }

    pegaPedidosPorId(id) {
        const SELECT_BY_NUMERO_DO_PEDIDO = `SELECT * FROM PEDIDO WHERE NUMERO_DO_PEDIDO = ?`
        return new Promise((resolve, reject) => {
            this.bd.all(SELECT_BY_NUMERO_DO_PEDIDO, id, (error, rows) => {
                if (error) {
                    console.log(error)
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }
    
    pegaPedidosPorMotoboy(motoboy) {
        const SELECT_BY_MOTOBOY = `SELECT * FROM PEDIDO WHERE MOTOBOY = ?`
        return new Promise((resolve, reject) => {
            this.bd.all(SELECT_BY_MOTOBOY, motoboy, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaPedidosPorCliente(cliente) {
        const SELECT_BY_NOME_DO_CLIENTE = `SELECT * FROM PEDIDO WHERE NOME_DO_CLIENTE = ?`
        return new Promise((resolve, reject) => {
            this.bd.all(SELECT_BY_NOME_DO_CLIENTE, cliente, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "requisicao": rows,
                        "erro": false
                    })
                }
            })
        })
    }
    
    //pegar somente os campos que podem sofrer atualização
    inserePedido(novoPedido) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PEDIDO (NUMERO_DO_PEDIDO, QTD_PRATO1, PRATO1, QTD_PRATO2, PRATO2, QTD_PRATO3, PRATO3, NOME_DO_CLIENTE, MOTOBOY, FILIAL, VALOR_TOTAL, FORMA_DE_PAGAMENTO, OBSERVACAO, DATA_DO_PEDIDO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);`,
                [novoPedido.numero_do_pedido, novoPedido.qtd_prato1, novoPedido.prato1, novoPedido.qtd_prato2, novoPedido.prato2, novoPedido.qtd_prato3, novoPedido.prato3, novoPedido.nome_do_cliente, novoPedido.motoboy, novoPedido.filial, novoPedido.valor_total, novoPedido.forma_de_pagamento, novoPedido.observacao, novoPedido.data_do_pedido],
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    } else {
                        resolve({
                            "requisicao": novoPedido,
                            "erro": false
                        })
                    }
                })
        })
    }

    async deletaPedido(id) {
        try {
            const pedido = await this.pegaPedidosPorId
            if(pedido.requisicao.length){
                const DELETE = `DELETE FROM PEDIDO WHERE NUMERO_DO_PEDIDO = ?`
                return new Promise((resolve, reject) => {                
                    this.bd.run(DELETE, id, (error) => {
                        if (error) {
                            reject({
                                "mensagem": error.message,
                                "erro": true
                            })
                        } else {
                            resolve({
                                "mensagem": `Pedido de número ${id} excluído com sucesso!`,
                                "erro": false
                            })
                        }
                    })
                })
            }
            else{
                throw new Error (`Pedido com número ${NUMERO_DO_PEDIDO} não existe`)
            }

        } catch (error){
            throw new Error (error.message)
        }
        
    }
// receber os dados do body, setiver no body, eu nao mexo. Se nao tiver, eu altero.
//Os unicos campos que podem ser atualizado
    atualizaPedido(id, pedido) {
       return new Promise((resolve, reject) => {                  
            const UPDATE = `
                UPDATE PEDIDO
                SET QTD_PRATO1 = ?, PRATO1 = ?, QTD_PRATO2 = ?, PRATO2 = ?, QTD_PRATO3 = ?, PRATO3 = ?, NOME_DO_CLIENTE = ?, MOTOBOY = ?, FILIAL = ?, VALOR_TOTAL = ?, FORMA_DE_PAGAMENTO = ?, OBSERVACAO = ?, DATA_DO_PEDIDO  = ? 
                WHERE NUMERO_DO_PEDIDO = ?`
                const array = [...pedido, id]
                this.bd.run(UPDATE, array, (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "mensagem": `Pedido de número ${id} atualizado com sucesso.`,
                            "pedido": pedido,
                            "erro": false
                        })
                    }
                })
            })
        

    }
}
module.exports = PedidoDAO