describe('Validar carrinho', () => {

    beforeEach('DADO que o login foi realizado com sucesso', () => {
        cy.Login()
    });


    it('QUANDO adiciono um produto ao carrinho \nENTÃO os produtos adicionados ao carrinho devem ser exibidos', () => {
        cy.AddProduct()
    });

});