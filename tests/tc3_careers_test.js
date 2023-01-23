import { ClientFunction } from 'testcafe';
import HomePage from "../pages/home_page";
import JoinUsPage from "../pages/joinUs_page";
import FooterComp from "../pages/footer_comp";
import CareersPage from "../pages/careers_page";
import ApplyForPage from "../pages/applyFor_form";

const URLDATA = require('../data/URL.json');
const APPLYDATA = require('../data/applyData.json');

const getPageURL = ClientFunction(() => window.location.href);

fixture("Test Suite Carreers Menu")
    .page(URLDATA.url)
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .click(HomePage.careersTap)
            .click(FooterComp.acceptCookiesButton)
            .click(CareersPage.openPositionsButton)
    });

    test("TC-03a Verify that ‘Join Us’ page is opened", async t => {
        await t
            .expect(getPageURL()).contains(URLDATA.careersUrl);
    });

    test("TC-03b Verify that 4 main sections are shown: General Description, Requirements, Responsibilities, What we offer", async t => {
        await JoinUsPage.selectLocation('Anywhere')
        await JoinUsPage.selectPositionByName('Automation QA Engineer')
        await t
            .expect(JoinUsPage.generalDescription.visible).ok()
            .expect(JoinUsPage.requirements.visible).ok()
            .expect(JoinUsPage.responsibilities.visible).ok()
            .expect(JoinUsPage.whatWeOffer.visible).ok()
    });

    test("TC-03c Verify that ‘Apply’ button is present at the bottom", async t => {
        await JoinUsPage.selectLocation('Anywhere')
        await JoinUsPage.selectPositionByName('Automation QA Engineer')
        await t.expect(JoinUsPage.applyButton.visible).ok()
    });

    test("TC-03d Verify shown error messages: The field is required", async t => {
        await JoinUsPage.selectLocation('Anywhere')
        await JoinUsPage.selectPositionByName('Automation QA Engineer')
        await t
            .click(JoinUsPage.applyButton)
            .expect(ApplyForPage.applyForTitle.visible).ok()
            // .typeText(ApplyForPage.nameInput,APPLYDATA[0].name)  // Name Set Skipped
            .typeText(ApplyForPage.emailInput,APPLYDATA[0].email)
            .typeText(ApplyForPage.mobileInput,APPLYDATA[0].mobile)
            .clearUpload(ApplyForPage.uploadFileInput)
            .setFilesToUpload(ApplyForPage.uploadFileInput, APPLYDATA[0].cvFile)
            .typeText(ApplyForPage.linkedinProfileInput,APPLYDATA[0].linkedInProfileLink)
            .typeText(ApplyForPage.messageInput,APPLYDATA[0].message)
            .click(ApplyForPage.agreeCheckBox)
            .click(ApplyForPage.sendButton)
            .expect(ApplyForPage.getErrorMesageLocator(APPLYDATA[0].errorMessage).visible).ok()
    });

    test("TC-03e Verify shown error messages: The e-mail address entered is invalid.", async t => {
        await JoinUsPage.selectLocation('Anywhere')
        await JoinUsPage.selectPositionByName('Automation QA Engineer')
        await t
            .click(JoinUsPage.applyButton)
            .expect(ApplyForPage.applyForTitle.visible).ok()
            .typeText(ApplyForPage.nameInput,APPLYDATA[1].name)
            .typeText(ApplyForPage.emailInput,APPLYDATA[1].email)
            .typeText(ApplyForPage.mobileInput,APPLYDATA[1].mobile)
            .click(ApplyForPage.linkedinProfileInput)
            .clearUpload(ApplyForPage.uploadFileInput)
            .setFilesToUpload(ApplyForPage.uploadFileInput, APPLYDATA[1].cvFile)
            .typeText(ApplyForPage.linkedinProfileInput,APPLYDATA[1].linkedInProfileLink)
            .typeText(ApplyForPage.messageInput,APPLYDATA[1].message)
            .click(ApplyForPage.agreeCheckBox)
            .click(ApplyForPage.sendButton)
            .expect(ApplyForPage.getErrorMesageLocator(APPLYDATA[1].errorMessage).visible).ok()
    });

    test("TC-04 Verify the list with available positions by city Sofia", async t => {
        await JoinUsPage.printPositionsByCity('Sofia')
        await JoinUsPage.printPositionsByCity('Skopje')
    });

    





