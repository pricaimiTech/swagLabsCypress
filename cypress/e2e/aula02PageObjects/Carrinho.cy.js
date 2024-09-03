import LoginPage from "../../support/pageObjects/Login.page";
import CarrinhoPage from "../../support/pageObjects/Carrinho.page";

describe('Validar carrinho', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
    });


    it('QUANDO adiciono um produto ao carrinho \nENTÃO os produtos adicionados ao carrinho devem ser exibidos', () => {
        /**
         * @description Como Cypress é baseado em promessas e comandos encadeados, usamos cy.wrap(null) para criar uma nova cadeia de comandos que permite capturar o valor retornado e utilizá-lo em outros testes.
         * isso irá salvar o nome do produto para validar depois
         */
        CarrinhoPage.addAndCheckProduct()
    });

});