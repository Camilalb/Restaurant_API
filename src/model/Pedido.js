class Pedido {
    constructor (numeroDoPedido, prato, nomeDoCliente, motoboy){
        this.numeroDoPedido = numeroDoPedido
        this.prato = this.verificaPrato(prato)
        this.nomeDoCliente = nomeDoCliente
        this.motoboy = motoboy
    }

    verificaPrato(prato){
        if (prato.length > 2){
            return prato
        } else {
            throw new Error("Nenhum prato pedido")
        }
    }
}

module.exports = Pedido