import { formCheckout } from "../elements/Checkout";

class CheckoutPage{

    formularioCheckout(){
        cy.get(formCheckout.inputFirstName).type('Priscila');
        cy.get(formCheckout.inputLastName).type('Caimi');
        cy.get(formCheckout.inputPostalCode).type('123456');
        cy.get(formCheckout.btnContinueCheckout).click();
    }
}

export default new CheckoutPage();