import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
	it("renders <Home />", () => {
		const { container } = render(<Home />);
		expect(container).toBeInTheDocument();
	});

	it("renders login link", async () => {
		render(<Home />);
		const loginLink = await screen.findByTestId("login-link");
		expect(loginLink).toBeInTheDocument();
	});
});
