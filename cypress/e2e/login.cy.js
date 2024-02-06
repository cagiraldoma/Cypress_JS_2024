import LoginPage from "../Pages/LoginPage";

describe("Login page", () => {
  beforeEach(() => {
    cy.visit("auth/login");
  });
  const { username, password } =
    it("Login Success with Valid Credentials", () => {
      cy.fixture("data/loginCredentials").then((data) => {
        LoginPage.typeUserName(data.ValidCredentials.username);
        LoginPage.typePassword(data.ValidCredentials.password);
        LoginPage.clickLoginButton();
        cy.url().should("include", "dashboard/index");
      });
    });

  it("Login fail with Invalid Credentials", () => {
    cy.fixture("data/loginCredentials").then((data) => {
      LoginPage.typeUserName(data.InvalidCredentials.username);
      LoginPage.typePassword(data.InvalidCredentials.password);
      LoginPage.clickLoginButton();
      LoginPage.elements
        .invalidCredentialsPopup()
        .should("be.visible")
        .and("contain", "Invalid credentials");
    });
  });
});
