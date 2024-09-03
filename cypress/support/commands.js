// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../support/pageObjects/Login.page";
import HomePage from "../support/pageObjects/Home.page";
import ProdutoPage from "../support/pageObjects/Produto.page";
import CarrinhoPage from "./pageObjects/Carrinho.page";

Cypress.Commands.add('Login', () => {
    cy.visit('/')
    LoginPage.signIn()
    HomePage.checkIsLogado()
})

/**
 * @description Como Cypress é baseado em promessas e comandos encadeados, usamos cy.wrap(null) para criar uma nova cadeia de comandos que permite capturar o valor retornado e utilizá-lo em outros testes.
 * isso irá salvar o nome do produto para validar depois
 */

Cypress.Commands.add('AddProduct', () => {
    cy.wrap(null).then(() => {
        return ProdutoPage.takeProductName()
    }).then((productName) => {
        ProdutoPage.escolherProduto()
        CarrinhoPage.addProduct()
        CarrinhoPage.btnAcessarCarrinho()
        /**
         * @description Pega o primeiro item da lista de produtos do carrinho e valida com o produto escolhido
         */
        CarrinhoPage.checkProductName(productName)
    })
})