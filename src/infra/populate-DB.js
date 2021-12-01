const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
// Importante que o caminho abaixo seja o mesmo que o indicado no arquivo
// que exporta o bd (sqlite-db.js)
const db = new sqlite3.Database(caminhoArq);


// numeroDoPedido INTEGER PRIMARY KEY AUTOINCREMENT,
// pratos varchar(255),
// nomeDoCliente varchar(100),
// motoboy varchar(100),
// valorTotal decimal,
// formaDePagamento varchar(100),
// observacao text,
// dataPedido date

const ADD_PEDIDO_DATA = `
INSERT INTO USUARIOS (? ? ? ? ? ? ? ? ?)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`


function populaTabelaPedido() {
    db.run(ADD_PEDIDO_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    // populaTabelaUsr();
});