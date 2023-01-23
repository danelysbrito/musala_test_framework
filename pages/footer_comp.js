
import { Selector } from "testcafe";

class FooterComp {
    constructor(){
        this.acceptCookiesButton = Selector("a#wt-cli-accept-all-btn")
        this.facebookLink = Selector("span").withAttribute("class","musala musala-icon-facebook").parent("a")
    }
}
export default new FooterComp();
