class SpaceLoginPage {
  elements = {
    usernameInput: () => cy.contains("Username").parent().find("input"),
    passwordInput: () => cy.contains("Password").parent().find("input"),
    loginButton: () => cy.get('[data-react-toolbox="button"]').contains("Log in"),
  };

  // Actions

  typeUserName(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }

  getInvalidCredentialsPopup() {
    return this.elements.invalidCredentialsPopup();
  }
}

export default new SpaceLoginPage();
