import ButtonsPage from "../../Pages/ToolsQA/ButtonsPage";

describe("Buttons page", () => {
  beforeEach(() => {
    cy.visit("/buttons");
  });

  it("Click Me button", () => {
    ButtonsPage.clickClickMeButton();
    ButtonsPage.elements.dynamicClickMessage().should("be.visible");
  });

  it("Double Click button", () => {
    ButtonsPage.clickDoubleClickButton();
    ButtonsPage.elements.doubleClickMessage().should("be.visible");
  });

  it("Right Click button", () => {
    ButtonsPage.clickRightClickButton();
    ButtonsPage.elements.rightClickMessage().should("be.visible");
  });
});
