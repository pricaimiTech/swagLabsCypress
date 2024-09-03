import LoginPage from "../../support/pageObjects/Login.page";
import ProdutoPage from "../../support/pageObjects/Produto.page";
import HomePage from "../../support/pageObjects/Home.page";


describe('Validar página do produto', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
        HomePage.checkIsLogado()
    });

    /**
     * @description valida que ao escolher um produto aleatório do pagina e entrar na pagina do produto a url irá conter o texto inforado
     */
    it('QUANDO clico em um produto \nEntão deve abrir a tela de produtos', () => {
        ProdutoPage.escolherProduto()
        cy.url().should('include', 'inventory-item');
    });

});