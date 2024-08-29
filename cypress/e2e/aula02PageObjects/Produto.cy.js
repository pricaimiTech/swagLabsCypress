import LoginPage from "../../support/pageObjects/Login.page";
import ProdutoPage from "../../support/pageObjects/Produto.page";

describe('Validar página do produto', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
    });

    it('QUANDO clico em um produto \nEntão deve abrir a tela de produtos', () => {
        ProdutoPage.escolherProduto()
    });

});