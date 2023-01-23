
import { Selector } from "testcafe";

class HomePage {
    constructor(){
        this.contactUsButton = Selector("button").withAttribute("class","contact-label btn btn-1b")
        this.companyTap = Selector("a.main-link").withText("COMPANY")
        this.careersTap = Selector("a.main-link").withText("CAREERS")

    }
}
export default new HomePage();
