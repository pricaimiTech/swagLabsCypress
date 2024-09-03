import CarrinhoPage from "../../support/pageObjects/Carrinho.page";
import CheckoutPage from "../../support/pageObjects/Checkout.page";
import OverviewPage from "../../support/pageObjects/Overview.page";

describe('E2E Shop Swag Labs', () => {
    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.Login()
    });


    it('E escolho um produto \nQUANDO clico em Finish \nENTÃO sou redirecionada para a tela de Finalizar o Pedido', () => {
        cy.AddProduct()
        CarrinhoPage.btnGoCheckout()
        CheckoutPage.formularioCheckout()
        CheckoutPage.checkPage("Checkout: Overview")
        OverviewPage.finishPedido()
        CheckoutPage.checkFinishOrder("Thank you for your order!")
    });
});