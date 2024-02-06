class Admin_UserManagementPage {
  // Elements
  elements = {
    userNameInput: () => cy.get("[data-v-1f99f73c]").eq(1),
    userRoleDropdown: () => cy.get(".oxd-select-wrapper").eq(0),
    resetSystemUsersButton: () =>
      cy.xpath(
        '//*[@type="button" and @data-v-10d463b7 and @class="oxd-button oxd-button--medium oxd-button--ghost"]'
      ),
  };

  // Actions
  clickAddUserButton() {
    this.getAddUserButton().click();
  }
}
