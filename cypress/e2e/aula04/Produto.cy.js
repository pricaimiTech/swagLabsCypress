import ProdutoPage from "../../support/pageObjects/Produto.page";

describe('Validar página do produto', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.Login()
    });

    /**
     * @description valida que ao escolher um produto aleatório do pagina e entrar na pagina do produto a url irá conter o texto inforado
     */
    it('QUANDO clico em um produto \nEntão deve abrir a tela de produtos', () => {
        ProdutoPage.escolherProduto()
        cy.url().should('include', 'inventory-item');
    });

});