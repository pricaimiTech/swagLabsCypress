import { overview } from "../elements/Overview.elements";

class OverviewPage {

    finishPedido(){
        cy.get(overview.btnFinish).click()
    }
}

export default new OverviewPage();