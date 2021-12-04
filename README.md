
## Descrição
Esse projeto faz parte do Projeto Final do módulo 4 do curso de Dev. Web FullStack da [Resilia](https://www.resilia.com.br/).
A aplicação desenvolvida em NodeJs, com Express e SQLite, para gerar e administrar a rota da API de pedidos do Restaurante com sistema de delivery.

## Status do Projeto
![Bagde](https://img.shields.io/badge/Status%20do%20Projeo-Concluído-red)

## Ferramentas
 -   VScode
 -   Insomnia ou Postman
 
 ## As dependências utilizadas no projeto foram:
![image]({https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white})
![image]({https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white})
![image]({https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white})

  
 ## Inicializando o projeto

 - Clone este repositório no seu computador: 

     git clone https://github.com/Camilalb/Restaurant_API.git

- Instale o [Node JS](https://nodejs.org/en/) na sua máquina. Recomenda-se a versão LTS. 

- Acesse a pasta criada através do cmd:

      cd Restaurante_API
      
- Instale as dependências: 

      npm install
      	    
- Inicie do servidor inserindo o comando abaixo: 

      npm run dev


## Rotas e métodos 

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `/pedido` | Mostra todos os pedidos |
| **GET** | `/pedido/{numero_do_pedido}` | Mostra o pedido feito com o número do pedido |
| **POST** | `/pedido` | Cria novo pedido |
| **PUT** | `/pedido/{numero_do_pedido}` | Atualiza o pedido |
| **DELETE** | `/pedido/{numero_do_pedido}` | Deleta o pedido |




Desenvolvido por [Camila de Albuquerque}(https://www.linkedin.com/in/camila-viana-de-albuquerque-73286127/)
