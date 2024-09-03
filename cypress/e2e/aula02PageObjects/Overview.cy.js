import LoginPage from "../../support/pageObjects/Login.page";
import ProdutoPage from "../../support/pageObjects/Produto.page";
import CarrinhoPage from "../../support/pageObjects/Carrinho.page";
import CheckoutPage from "../../support/pageObjects/Checkout.page";
import OverviewPage from "../../support/pageObjects/Overview.page";

describe('Finalizar pedido', () => {
    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.visit('/')
        LoginPage.signIn()
        ProdutoPage.escolherProduto()
        CarrinhoPage.addProduct()
        CarrinhoPage.btnAcessarCarrinho()
        CarrinhoPage.btnGoCheckout()
        CheckoutPage.formularioCheckout()
    });


    it('QUANDO clico em Finish \nENTÃO sou redirecionada para a tela de Finalizar o Pedido', () => {
        CheckoutPage.checkPage("Checkout: Overview")
        /**
         * @description validar produto no overview 
         * pegar método do carrinho
         */
        OverviewPage.finishPedido()
        CheckoutPage.checkFinishOrder("Thank you for your order!")
    });
});