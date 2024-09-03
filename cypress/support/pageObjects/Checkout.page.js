
import { formCheckout,  finishOrder} from "../elements/Checkout";

class CheckoutPage{

    formularioCheckout(){
        cy.get(formCheckout.inputFirstName).type('Priscila');
        cy.get(formCheckout.inputLastName).type('Caimi');
        cy.get(formCheckout.inputPostalCode).type('123456');
        cy.get(formCheckout.btnContinueCheckout).click();
    }

    checkPage(titulo){
        cy.get(formCheckout.labelTituto).contains(titulo)
    }

    checkFinishOrder(message){
        cy.get(finishOrder.labelThankOrder).contains(message)
    }
}

export default new CheckoutPage();