import { carrinho } from "../elements/Carrinho.elements";


class CarrinhoPage {

    addProduct(){
        cy.get(carrinho.btnAddCart).click()
    }

    btnAcessarCarrinho(){
        cy.get(carrinho.btnCarrinho).click()
    }

    btnGoCheckout(){
        cy.get(carrinho.bntCheckout).click()
    }
}

export default new CarrinhoPage();