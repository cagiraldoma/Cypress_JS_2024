// Import the ButtonsPage module
import ButtonsPage from "../../Pages/ToolsQA/ButtonsPage";

// Describe block for the Buttons page
describe("Buttons page", () => {
  beforeEach(() => {
    // Visit the "/buttons" page before each test
    cy.visit("/buttons");
  });

  // Test case for the "Click Me" button
  it("Click Me button", () => {
    // Click the "Click Me" button
    ButtonsPage.clickClickMeButton();
    // Assert that the dynamic click message is visible
    ButtonsPage.elements.dynamicClickMessage().should("be.visible");
  });

  // Test case for the "Double Click" button
  it("Double Click button", () => {
    // Click the "Double Click" button
    ButtonsPage.clickDoubleClickButton();
    // Assert that the double click message is visible
    ButtonsPage.elements.doubleClickMessage().should("be.visible");
  });

  // Test case for the "Right Click" button
  it("Right Click button", () => {
    // Click the "Right Click" button
    ButtonsPage.clickRightClickButton();
    // Assert that the right click message is visible
    ButtonsPage.elements.rightClickMessage().should("be.visible");
  });
});
