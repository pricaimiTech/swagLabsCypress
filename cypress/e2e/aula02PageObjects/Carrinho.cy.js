import LoginPage from "../../support/pageObjects/Login.page";
import ProdutoPage from "../../support/pageObjects/Produto.page";
import CarrinhoPage from "../../support/pageObjects/Carrinho.page";

describe('Validar carrinho', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
    });


    it('QUANDO adiciono um produto ao carrinho \nENTÃO os produtos adicionados ao carrinho devem ser exibidos', () => {
        ProdutoPage.escolherProduto()
        CarrinhoPage.addProduct()
        CarrinhoPage.btnAcessarCarrinho()
    });

});