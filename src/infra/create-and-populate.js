/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
// Arquivo responsável por criar a tabela e popular nosso bd
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
// Importante que o caminho abaixo seja o mesmo que o indicado no arquivo
// que exporta o bd (sqlite-db.js)
const db = new sqlite3.Database(caminhoArq);

//==== Pedidos
const PEDIDO_SCHEMA = `
CREATE TABLE IF NOT EXISTS pedidos (
    numeroDoPedido INTEGER PRIMARY KEY AUTOINCREMENT,
    pratos varchar(255),
    nomeDoCliente varchar(100),
    motoboy varchar(100),
    valorTotal decimal,
    formaDePagamento varchar(100),
    observacao text,
    dataPedido date
);`;

// const ADD_PEDIDO_DATA = `
// INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA)
// VALUES 
//     (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
//     (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
//     (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
// `

function criaTabelaPed() {
    db.run(PEDIDO_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
}


// function populaTabelaUsr() {
//     db.run(ADD_USUARIOS_DATA, (error)=> {
//        if (error) console.log("Erro ao popular tabela de usuários");
//     });
// }


// //==== Tarefas
// const TAREFAS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS TAREFAS (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT, 
//     TITULO VARCHAR(64),
//     DESCRICAO TEXT,
//     STATUS VARCHAR(32),
//     DATACRIACAO VARCHAR(32),
//     ID_USUARIO INTEGER,
//     FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
// );`;

// const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
// VALUES 
//        ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
//        ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
//        ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
//        ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
//        ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
//        ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
// `

// function criaTabelaTarefas() {
//     db.run(TAREFAS_SCHEMA, (error)=> {
//         if(error) console.log("Erro ao criar tabela de Tarefas");
//     });
// }


// function populaTabelaTarefas() {
//     db.run(ADD_TAREFAS_DATA, (error)=> {
//        if (error) console.log("Erro ao popular tabela de Tarefas");
//     });
// }

db.serialize( ()=> {
    criaTabelaPed();
    // populaTabelaUsr();
    // criaTabelaTarefas();
    // populaTabelaTarefas();
});