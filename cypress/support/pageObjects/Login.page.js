import {formLogin}  from '../elements/Login.elements'

class Login {

    signIn(){
        cy.get(formLogin.inputUserName).type('standard_user');
        cy.get(formLogin.inputSenha).type('secret_sauce');
        cy.get(formLogin.btnLogin).click();
    }
}


export default new Login();