import { produtoPage } from "../elements/Produto.elements";

class ProdutoPage {

    escolherProduto(){
        cy.get(produtoPage.produtoList)
        .find('div a')
        .last()
        .click()
    }
}

export default new ProdutoPage();