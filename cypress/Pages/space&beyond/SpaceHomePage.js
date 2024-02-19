class SpaceHomePage {
  elements = {
    loginButton: () => cy.get(".NavButton__nav-button___34wHC"),
    headerButton: () => cy.xpath("//button[contains(.,'Hello,')]"),
  };

  // Actions

  clickLoginButton() {
    this.elements.loginButton().click();
  }
}

export default new SpaceHomePage();
