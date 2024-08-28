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

    it('Validar Checkout', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-badge"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear('Priscila');
        cy.get('[data-test="firstName"]').type('Priscila');
        cy.get('[data-test="lastName"]').clear('Caimi');
        cy.get('[data-test="lastName"]').type('Caimi');
        cy.get('[data-test="postalCode"]').clear('123456');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.get('[data-test="continue"]').click();
        /* ==== End Cypress Studio ==== */
    }); 
    
})