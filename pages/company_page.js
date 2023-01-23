
import { Selector } from "testcafe";

class CompanyPage {
    constructor(){
        this.leadershipSection = Selector("section.company-members")
    }
}
export default new CompanyPage();
