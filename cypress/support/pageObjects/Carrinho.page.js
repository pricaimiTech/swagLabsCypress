import { carrinho, productCarrinhoList } from "../elements/Carrinho.elements";
import ProdutoPage from "../../support/pageObjects/Produto.page";

var capturedProductName = null

class CarrinhoPage {

    addProduct() {
        cy.get(carrinho.btnAddCart).click()
    }

    btnAcessarCarrinho() {
        cy.get(carrinho.btnCarrinho).click()
    }

    btnGoCheckout() {
        cy.get(carrinho.bntCheckout).click()
    }

    checkProductName(productName) {
        cy.get(productCarrinhoList.productListName)
            .first()
            .contains(productName)
    }

    /**
         * @description Como Cypress é baseado em promessas e comandos encadeados, usamos cy.wrap(null) para criar uma nova cadeia de comandos que permite capturar o valor retornado e utilizá-lo em outros testes.
         * isso irá salvar o nome do produto para validar depois
         */
    addAndCheckProduct() {
        cy.wrap(null).then(() => {
            return ProdutoPage.takeProductName()
        }).then((productName) => {
            capturedProductName = productName
            ProdutoPage.escolherProduto()
            this.addProduct()
            this.btnAcessarCarrinho()
            /**
             * @description Pega o primeiro item da lista de produtos do carrinho e valida com o produto escolhido
             */
            this.checkProductName(productName)
        })
    }
}

export default new CarrinhoPage();