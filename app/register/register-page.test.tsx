import { expect, jest } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Register from "./page";

describe("<Register />", () => {
	it("renders Register page", () => {
		const { container } = render(<Register />);
		expect(container).toBeInTheDocument();
	});
});
