describe("<Home />", () => {
	it("clicking on login link navigates to login page", () => {
		cy.visit("http://localhost:3000/");
		cy.get("#login").click();
	});
});
