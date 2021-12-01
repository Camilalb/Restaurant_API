const moment = require('moment')

class Pedido {  
    static verificaPagamento (formaDePagamento){
        if (formaDePagamento == "dinheiro" || formaDePagamento == "cartão"){
            return formaDePagamento
        } else {
            throw new Error("Forma de pagamento inválida")
        }
    }

    static verificaValorMinimo (valor_total){
        if (valor_total >= 20){
            return valor_total
        }
        else{
            console.log(valor_total)
            throw new Error("Pedido mínimo é de R$20")

        }
    }

    static colocaData(){
        const dataPedido = moment().format('YYYY-MM-DD HH:mm:ss')
        return dataPedido
    }

    constructor (qtd_prato1, prato1, qtd_prato2, prato2, qtd_prato3, prato3, nomeDoCliente, motoboy, filial, valor_total, formaDePagamento, observacao){
        this.qtd_prato1 = qtd_prato1
        this.prato1 = prato1
        this.qtd_prato2 = qtd_prato2
        this.prato2 = prato2
        this.qtd_prato3 = qtd_prato3
        this.prato3 = prato3
        this.nomeDoCliente = nomeDoCliente
        this.motoboy = motoboy
        this.filial = filial
        this.valor_total = Pedido.verificaValorMinimo(valor_total)
        this.formaDePagamento = Pedido.verificaPagamento(formaDePagamento)
        this.observacao = observacao
        this.data= Pedido.colocaData()        
    }
}

module.exports = Pedido