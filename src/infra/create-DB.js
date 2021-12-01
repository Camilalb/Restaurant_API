//Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
// Arquivo responsável por criar a tabela nosso bd
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const bd = new sqlite3.Database(caminhoArq);

//==== Schema para criar tabela Pedidos
const PEDIDO_SCHEMA = `
CREATE TABLE IF NOT EXISTS PEDIDO (
    NUMERO_DO_PEDIDO INTEGER PRIMARY KEY AUTOINCREMENT,
    QTD_PRATO1 INT,
    PRATO1 varchar(255),
    QTD_PRATO2 INT,
    PRATO2 varchar(255),
    QTD_PRATO3 INT,
    PRATO3 varchar(255),
    NOME_DO_CLIENTE varchar(100),
    MOTOBOY varchar(100),
    FILIAL varchar(100),
    VALOR_TOTAL decimal,
    FORMA_DE_PAGAMENTO varchar(100),
    OBSERVACAO text,
    DATA_DO_PEDIDO date
);`;

//Função para criar a tabela
function criaTabelaPed() {
    bd.run(PEDIDO_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
}

bd.serialize( ()=> {
    criaTabelaPed();
});