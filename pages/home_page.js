
import { Selector,t } from "testcafe";

class HomePage {
    constructor(){
        this.contactUsButton = Selector("button").withAttribute("class","contact-label btn btn-1b")
    }
}
export default new HomePage();
