it("Login process from Home page", () => {
	cy.visit("http://localhost:3000/");
	cy.get("#login").click();
	cy.url().should("eq", "http://localhost:3000/login");
	cy.get('[data-testid="email-field"]').type("patrick.simon.katambi@gmail.com");
	cy.get('[data-testid="password-field"]').type("123qwe");
	cy.get('[data-testid="login-submit-btn"]').click();
	// cy.url().should("eq", "http://localhost:3000/todos");
});
