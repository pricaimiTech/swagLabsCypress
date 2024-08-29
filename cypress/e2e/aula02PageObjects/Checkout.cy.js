import LoginPage from "../../support/pageObjects/Login.page";
import ProdutoPage from "../../support/pageObjects/Produto.page";
import CarrinhoPage from "../../support/pageObjects/Carrinho.page";
import CheckoutPage from "../../support/pageObjects/Checkout.page";

describe('Validar tela de checkout', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
        ProdutoPage.escolherProduto()
        CarrinhoPage.addProduct()
        CarrinhoPage.btnAcessarCarrinho()
    });


    it('QUANDO estou na tela de Checkout \nENTÃO o formulario de dados do usuário deve ser exibido', () => {
        CarrinhoPage.btnGoCheckout()
        CheckoutPage.formularioCheckout()
    });

});