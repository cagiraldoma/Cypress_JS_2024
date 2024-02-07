class ButtonsPage {
  elements = {
    doubleClickButton: () => cy.get("#doubleClickBtn"),
    rightClickButton: () => cy.get("#rightClickBtn"),
    clickMeButton: () => cy.get("button.btn").eq(2),
    doubleClickMessage: () => cy.get("#doubleClickMessage"),
    rightClickMessage: () => cy.get("#rightClickMessage"),
    dynamicClickMessage: () => cy.get("#dynamicClickMessage"),
  };

  // Actions

  clickDoubleClickButton() {
    this.elements.doubleClickButton().dblclick();
  }
  clickRightClickButton() {
    this.elements.rightClickButton().rightclick();
  }
  clickClickMeButton() {
    this.elements.clickMeButton().click();
  }
}

module.exports = new ButtonsPage();
