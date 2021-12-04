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
            throw new Error("Pedido mínimo é de R$20")
        }
    }

    static colocaData(){
        const dataPedido = moment().format('YYYY-MM-DD HH:mm:ss')
        return dataPedido
    }

    constructor (qtd_prato1, prato1, qtd_prato2, prato2, qtd_prato3, prato3, nomeDoCliente, motoboy, filial, valor_total, formaDePagamento, observacao){
        this.QTD_PRATO1 = qtd_prato1
        this.PRATO1 = prato1
        this.QTD_PRATO2 = qtd_prato2
        this.PRATO2 = prato2
        this.QTD_PRATO3 = qtd_prato3
        this.PRATO3 = prato3
        this.NOME_DO_CLIENTE = nomeDoCliente
        this.MOTOBOY = motoboy
        this.FILIAL = filial
        this.VALOR_TOTAL = Pedido.verificaValorMinimo(valor_total)
        this.FORMA_DE_PAGAMENTO = Pedido.verificaPagamento(formaDePagamento)
        this.OBSERVACAO = observacao
        this.data_do_pedido= Pedido.colocaData()        
    }
}

module.exports = Pedido