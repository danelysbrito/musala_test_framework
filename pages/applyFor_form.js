
import { Selector } from "testcafe";

class ApplyForForm {
    constructor(){
        this.applyForTitle = Selector("h2").withText("APPLY FOR");
        this.nameInput = Selector("#cf-1");
        this.emailInput = Selector("#cf-2");
        this.mobileInput = Selector("#cf-3");
        this.uploadFileInput = Selector("#cf-4");
        this.linkedinProfileInput = Selector("#cf-5");
        this.messageInput = Selector("#cf-6");
        this.agreeCheckBox = Selector("#adConsentChx")
        this.sendButton = Selector("input").withAttribute("value","Send")
        // this.fieldRequieredErrorMessage = Selector("span").withText("The field is required.")
    }

    getErrorMesageLocator(message){
        return Selector("span").withText(message)
    }

}
export default new ApplyForForm();
