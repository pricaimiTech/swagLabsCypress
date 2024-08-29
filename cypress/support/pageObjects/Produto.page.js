import { produtoPage } from "../elements/Produto.elements";

class ProdutoPage {

    escolherProduto(){
        cy.get(produtoPage.produto).click()
    }
}

export default new ProdutoPage();