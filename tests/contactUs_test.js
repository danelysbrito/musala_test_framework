import { Selector } from 'testcafe';
import HomePage from "../pages/home_page";
import ContactUsForm from "../pages/contactUs_form";

fixture("Test Suite Contact Us")
    .page("https://www.musala.com/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            // .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    });

    test("TC-01 Verify error message when wrong email is set", async t => {
        await t
            .click(HomePage.contactUsButton)
            .expect(ContactUsForm.contactUsForm.exists).ok()
        await t.expect(ContactUsForm.contactUsTitle.exists).ok()
        await t 
            .typeText(ContactUsForm.nameInput, "Danelys Brito") 
            .typeText(ContactUsForm.emailInput, "danelys.gmail.com")    
            .typeText(ContactUsForm.mobileInput, "234568876543")     
            .typeText(ContactUsForm.subjectInput, "Automated Test Case")   
            .typeText(ContactUsForm.messageInput, "Automated Test Case Message") 
            .click(ContactUsForm.sendButton) 
            .expect(ContactUsForm.emailErrorMessage.exists).ok()
        let text = await ContactUsForm.emailErrorMessage.textContent
        await t.expect(text).eql("The e-mail address entered is invalid.")
        await t.takeScreenshot();
    });


