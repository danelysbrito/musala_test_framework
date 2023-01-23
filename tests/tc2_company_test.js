import { ClientFunction } from "testcafe"; //leer informacion de las ventanas
import HomePage from "../pages/home_page";
import CompanyPage from "../pages/company_page";
import FooterComp from "../pages/footer_comp";
import MusalaFacebookPage from "../pages/facebook_page";

const URLDATA = require("../data/URL.json");

const getPageURL = ClientFunction(() => window.location.href); //capturar url de la ventana abierta

fixture("Test Suite Company Tab")
  .page(URLDATA.url)
  .beforeEach(async (t) => {
    await t
      .maximizeWindow()
      .click(HomePage.companyTap)
      .click(FooterComp.acceptCookiesButton);
  });

test("TC-02a Verify the correct URL loads", async (t) => {
  await t.expect(getPageURL()).contains(URLDATA.companyUrl);
});

test("TC-02b Verify that there is 'Leadership' section", async (t) => {
  await t.expect(CompanyPage.leadershipSection.visible).ok();
});

test("TC-02c Verify the correct Facebook URL loads", async (t) => {
  await t
    .click(FooterComp.facebookLink)
    .expect(getPageURL())
    .contains(URLDATA.facebookUrl);
});

test("TC-02d Verify if the Musala Soft profile appears in facebook page", async (t) => {
  await t
    .click(FooterComp.facebookLink)
    .expect(MusalaFacebookPage.profilePicture.visible)
    .ok();
});
