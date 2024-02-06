class LoginPage {
  elements = {
    userNameInput: () => cy.get('[name="username"]'),
    passwordInput: () => cy.get('[name="password"]'),
    loginButton: () => cy.get('[type="submit"]'),
    invalidCredentialsPopup: () =>
      cy.xpath(
        '//*/div[@class="oxd-alert-content oxd-alert-content--error" and @data-v-87fcf455 ]'
      ),
  };

  typeUserName(userName) {
    this.elements.userNameInput().type(userName);
  }
  typePassword(password) {
    this.elements.passwordInput().type(password);
  }
  clickLoginButton() {
    this.elements.loginButton().click();
  }
}

module.exports = new LoginPage();
