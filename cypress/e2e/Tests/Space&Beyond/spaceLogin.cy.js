import SpaceHomePage from "../../../Pages/space&beyond/SpaceHomePage";
import SpaceLoginPage from "../../../Pages/space&beyond/SpaceLoginPage";

describe("Book a Destination", () => {
  beforeEach(() => {
    cy.visit("https://demo.testim.io");
    SpaceHomePage.clickLoginButton();
  });

  it("Book a Destination", () => {
    SpaceLoginPage.typeUserName("testim");
    SpaceLoginPage.typePassword("testim");
    SpaceLoginPage.clickLoginButton();
    SpaceHomePage.elements.headerButton().contains("Hello,");
  });
});
