describe('Acessar a pagina', () => {
    before('passes', () => {
        cy.visit('http://www.saucedemo.com')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="login-credentials"]').click();
        cy.get('[data-test="username"]').clear('standard_user');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="login-password"]').click();
        cy.get('[data-test="password"]').clear('secret_sauce');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('.app_logo').click();
        /* ==== End Cypress Studio ==== */
    })
    it('Adicionar o produto ao carrinho', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click();
        cy.get('[data-test="inventory-item-name"]').click();
        /* ==== End Cypress Studio ==== */
    });

})