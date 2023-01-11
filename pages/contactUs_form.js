
import { Selector,t } from "testcafe";

class ContactUsForm {
    constructor(){
    this.contactUsButton = Selector("button").withAttribute("class","contact-label btn btn-1b")
    this.contactUsForm = Selector("#fancybox-content");
    this.contactUsTitle = Selector("h2").withText("CONTACT US");
    this.nameInput = Selector("#cf-1");
    this.emailInput = Selector("#cf-2");
    this.mobileInput = Selector("#cf-3");
    this.subjectInput = Selector("#cf-4");
    this.messageInput = Selector("#cf-5");
    this.sendButton = Selector("input").withAttribute("value","Send");
    this.emailErrorMessage = Selector("span.wpcf7-not-valid-tip")
   
    }
}
export default new ContactUsForm();
