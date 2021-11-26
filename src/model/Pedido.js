const moment = require('moment')
const pedido = require('../controller/pedido-controller')
class Pedido {  

    static verificaPrato(prato){
        if (prato.length > 0 ){
            return prato
        } else {
            throw new Error("Nenhum prato pedido")
        }
    }

    static verificaPagamento (formaDePagamento){
        if (formaDePagamento == "dinheiro" || formaDePagamento == "cartão"){
            return formaDePagamento
        } else {
            throw new Error("Forma de pagamento inválida")
        }
    }

    static verificaValorMinimo (valorTotal){
        if (valorTotal >= 20){
            return valorTotal
        }
        else{
            throw new Error("Pedido mínimo é de R$20")
        }
    }

    static colocaData(){
        const dataPedido = moment().format('YYYY-MM-DD HH:mm:ss')
        return dataPedido
    }

    constructor (prato, nomeDoCliente, motoboy, valorTotal, formaDePagamento, observacao){
        this.prato = Pedido.verificaPrato(prato)
        this.nomeDoCliente = nomeDoCliente
        this.motoboy = motoboy
        this.valorTotal = Pedido.verificaValorMinimo(valorTotal)
        this.formaDePagamento = Pedido.verificaPagamento(formaDePagamento)
        this.observacao = observacao
        this.data= Pedido.colocaData()
        
    }
}

module.exports = Pedido