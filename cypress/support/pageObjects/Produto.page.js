import { produtoPage } from "../elements/Produto.elements";
const productName = null

class ProdutoPage {

    takeProductName() {
        return cy.get(produtoPage.produtoList)
            .find('div[class="inventory_item_description"] a div')
            .last()
            .invoke('text')
            .then(productName => {
                return productName; // Retorna o productName para ser utilizado em outros testes
            });
    }
    
    
    escolherProduto() {
        cy.get(produtoPage.produtoList)
            .find('div a')
            .last()
            .click()

    }
}

export default new ProdutoPage();