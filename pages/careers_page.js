
import { Selector } from "testcafe";

class CareersPage {
    constructor(){
        this.openPositionsButton = Selector("span").withAttribute("data-alt","Check our open positions")
    }
}
export default new CareersPage();
