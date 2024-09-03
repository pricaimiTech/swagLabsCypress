# Automação Cypress Swag Labs


### Instalação

- Instalar o Cypress
```
yarn add cypress
``` 


### Cenários a serem automatizados

- Login 

```
DADO que me encontro no site
E adiciono standard_user 
E a senha secret_sauce
QUANDO clico em logar
ENTÃO logo na aplicação com sucesso
```

- Produto 
```
DADO que o login foi realizado com sucesso
E que fui redirecionado para a home
E escolho um produto
QUANDO clico nele
ENTÃO ele deve abrir em outra tela e mostrar todos os detalhes
```

- Carrinho
```
DADO que pelo menos um produto foi adicionado ao carrinho
E clico no icone de carrinho
E ele deve ter o número de itens adicionado
QUANDO me encontro na tela de carrinho
ENTÃO os produtos adicionados ao carrinho devem ser exibidos
```

- Checkout
```
DADO que estou na tela de Checkout information
ENTÃO os campos de Primeiro nome
E o campo de último nome
E o campo de zip code
```

- Overview
```
DADO que estou na tela de Overview
E a opção de Finish é exibida
QUANDO clico em Finish
ENTÃO sou redirecionada para a tela de Finalizar o Pedido
```

### Arquitetura do projeto 



### Branchs 

Cada aula estará em uma branch exemplo:

- aula 01: Primeiros passos no mapeamento de elementos com Cypress Studio na branch `aula01-cypreStudio`

- aula 02: Convertendo o código do Cypress Studio para Page Objects na branch `aula02-PageObjects`

- aula 03: Adicionando validações ao nosso teste na branch `aula03-validacoes`

- aula 04: Utilizando os commands e adicionando dados de arquivos externos para criar funções "cypress" na branch `aula04-Commands`

- aula 05: Adicionando report aos testes na branch `aula05-Report`

- aula 06: Adicionando os testes em pipeline na branch `aula06-Pipeline`


E a branch `main` ficará o código completo e final do projeto para você ter o gabarito