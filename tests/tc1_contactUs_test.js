import HomePage from "../pages/home_page";
import ContactUsForm from "../pages/contactUs_form";
const URLDATA = require("../data/URL.json");
const DATASET = require("../data/invalidEmailAdd.json");

fixture("Test Suite Contact Us")
  .page(URLDATA.url)
  //hooks
  .beforeEach(async (t) => {
    await t.maximizeWindow(); //maximizar ventana
    await t
      .click(HomePage.contactUsButton)
      .expect(ContactUsForm.contactUsForm.exists)
      .ok();
    await t.expect(ContactUsForm.contactUsTitle.visible).ok();
  });

DATASET.forEach((data) => {
  test("TC-01 Verify error message when wrong email is set", async (t) => {
    await t
      .typeText(ContactUsForm.nameInput, data.name)
      .typeText(ContactUsForm.emailInput, data.email)
      .typeText(ContactUsForm.mobileInput, data.mobile)
      .typeText(ContactUsForm.subjectInput, data.subject)
      .typeText(ContactUsForm.messageInput, data.message)
      .click(ContactUsForm.sendButton)
      .expect(ContactUsForm.emailErrorMessage.visible)
      .ok();
    let text = await ContactUsForm.emailErrorMessage.textContent;
    await t.expect(text).eql(data.errorMessage);
  });
});
