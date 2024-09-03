import { home } from "../elements/Home.elements";

class HomePage{

    checkIsLogado(){
        cy.get(home.titulo)
        .contains("Swag Labs")
    }
}

export default new HomePage();