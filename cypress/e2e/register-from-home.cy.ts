it("Register process from Home page", async () => {
	cy.visit("http://localhost:3000/");
	cy.get('[data-testid="register-link"]').click();
	cy.url().should("eq", "http://localhost:3000/register");
	cy.get('[data-testid="username-field"]').type("Patrick Simon Katambi");
	cy.get('[data-testid="email-field"]').type("patrick.simon.katambi@gmail.com");
	cy.get('[data-testid="password-field"]').type("123qwe");
	cy.get('[data-testid="confirm-password-field"]').type("123qwee");
	cy.get('[data-testid="register-btn"]').should("be.disabled");
	cy.get('[data-testid="confirm-password-field"]').clear().type("123qwe");
	cy.get('[data-testid="register-btn"]').should("be.enabled");
	cy.get('[data-testid="register-btn"]').click();
	cy.url().should("eq", "http://localhost:3000/todos");
});
