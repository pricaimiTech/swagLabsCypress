import LoginPage from "../../support/pageObjects/Login.page";

describe('Logar na aplicação', () => {
    
    beforeEach('Acessa o site', () => {
        cy.visit('/')
    });
    
    it('QUANDO adiciono dados de login válidos \nENTÃO logo na aplicação com sucesso', () => {
        LoginPage.signIn()
    });
    
});