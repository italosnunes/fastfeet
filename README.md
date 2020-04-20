<p align="center">
<img src="https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/.github/logo.png"><br>
<span>"Fiz meu melhor, com o prazo de entrega"</span><br><br>
</p>


 

Como parte da avaliação do Bootcamp da Rocketseat, o Fastfeet é um aplicativo para controle de entrega de encomendas.

Utilizando as tecnologias NodeJS, ReactJS e React-Native desenvolvi desde o backend até a versão mobile.

Esse é a versão de "Entrega do Projeto" com as funcionalidades básicas afim de respeitar a data pré-estabelecida pelo pessoal da Rocketseat.

Apesar do prazo de entrega ter sido relativamente adequado, a correria do dia a dia impediu que fosse desenvolvido todas as features como gostaria.

Por isso, em breve estarei lançando a versão Final.

### Começando 

Execute o comando ```yarn``` tanto na pasta **backend, frontend e mobile** para instalação dos módulos necessários.

------------------------------------------------------------------------------------------------------

### Backend

Para perfeito funcionamento, deverá editar o arquivo .env na raiz do projeto

------------------------------------------------------------------------------------------------------

### Frontend

Alterar a BaseURL no arquivo /src/services/api.js com o ip para comunicaçã
o com o backend.

Esse módulo é o gerencial. Onde serão realizados os cadastros de Entregadores, Destinatários e Cancelar encomendas. 
Entregadores não tem acesso ao módulo.

Para acesso, informar o seguinte usuário:

usuário: admin@fastfeet.com
senha: 123456

------------------------------------------------------------------------------------------------------

### Mobile

Alterar a BaseURL no arquivo /src/services/api.js com o ip para comunicaçã
o com o backend.

O app é para uso exclusivo dos Entregadores. 

Para ter acesso, precisará informar o ID do cadastro realizado pelo admin no frontend.


