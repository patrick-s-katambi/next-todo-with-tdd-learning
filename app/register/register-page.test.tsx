import { RegitrationForm } from "@/components/registration-form";
import { expect, jest } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));

describe("<Register />", () => {
	it("shows the registration form with username, email and passwords fields with a submit button", async () => {
		render(<RegitrationForm handleSubmit={jest.fn()} />);
		expect(await screen.findByTestId("username-field")).toBeInTheDocument();
		expect(await screen.findByTestId("email-field")).toBeInTheDocument();
		expect(await screen.findByTestId("password-field")).toBeInTheDocument();
		expect(await screen.findByTestId("confirm-password-field")).toBeInTheDocument();
		expect(await screen.findByTestId("register-btn")).toBeInTheDocument();
	});

	it("starts with empty registration form with username, email and passwords fields", async () => {
		render(<RegitrationForm handleSubmit={jest.fn()} />);
		expect(await screen.findByTestId("username-field")).toHaveValue("");
		expect(await screen.findByTestId("email-field")).toHaveValue("");
		expect(await screen.findByTestId("password-field")).toHaveValue("");
		expect(await screen.findByTestId("confirm-password-field")).toHaveValue("");
	});

	it("changes input values when typed", async () => {
		render(<RegitrationForm handleSubmit={jest.fn()} />);
		let someValue = "some field value";

		let username_field = await screen.findByTestId("username-field");
		fireEvent.change(username_field, { target: { value: someValue } });
		expect(username_field).toHaveValue(someValue);

		let email_field = await screen.findByTestId("email-field");
		fireEvent.change(email_field, { target: { value: someValue } });
		expect(email_field).toHaveValue(someValue);

		let password_field = await screen.findByTestId("password-field");
		fireEvent.change(password_field, { target: { value: someValue } });
		expect(password_field).toHaveValue(someValue);

		let confirm_password_field = await screen.findByTestId("confirm-password-field");
		fireEvent.change(confirm_password_field, { target: { value: someValue } });
		expect(confirm_password_field).toHaveValue(someValue);
	});

	it("disables submit button when any of the fields is empty", async () => {
		let submitFunction = jest.fn();
		render(<RegitrationForm handleSubmit={submitFunction} />);
		let emptyValue = "";
		let someValue = "some field value";

		let username_field = await screen.findByTestId("username-field");
		fireEvent.change(username_field, { target: { value: emptyValue } });

		let email_field = await screen.findByTestId("email-field");
		fireEvent.change(email_field, { target: { value: someValue } });

		let password_field = await screen.findByTestId("password-field");
		fireEvent.change(password_field, { target: { value: emptyValue } });

		let confirm_password_field = await screen.findByTestId("confirm-password-field");
		fireEvent.change(confirm_password_field, { target: { value: someValue } });

		fireEvent.click(await screen.findByTestId("register-btn"));

		expect(submitFunction).toHaveBeenCalledTimes(0);
	});

	it("should not submit when passwords do not match", async () => {
		let submitFunction = jest.fn();
		render(<RegitrationForm handleSubmit={submitFunction} />);

		let someValue = "some field value";
		let someValue2 = "some field value no.2";

		let username_field = await screen.findByTestId("username-field");
		fireEvent.change(username_field, { target: { value: someValue } });

		let email_field = await screen.findByTestId("email-field");
		fireEvent.change(email_field, { target: { value: someValue } });

		let password_field = await screen.findByTestId("password-field");
		fireEvent.change(password_field, { target: { value: someValue } });

		let confirm_password_field = await screen.findByTestId("confirm-password-field");
		fireEvent.change(confirm_password_field, { target: { value: someValue2 } });

		fireEvent.click(await screen.findByTestId("register-btn"));

		expect(submitFunction).toHaveBeenCalledTimes(0);
	});

	it("calls onSubmit only once when pressed", async () => {
		let submitFunction = jest.fn();
		render(<RegitrationForm handleSubmit={submitFunction} />);
		let someValue = "some field value";

		let username_field = await screen.findByTestId("username-field");
		fireEvent.change(username_field, { target: { value: someValue } });

		let email_field = await screen.findByTestId("email-field");
		fireEvent.change(email_field, { target: { value: someValue } });

		let password_field = await screen.findByTestId("password-field");
		fireEvent.change(password_field, { target: { value: someValue } });

		let confirm_password_field = await screen.findByTestId("confirm-password-field");
		fireEvent.change(confirm_password_field, { target: { value: someValue } });

		fireEvent.click(await screen.findByTestId("register-btn"));

		expect(submitFunction).toHaveBeenCalledTimes(1);
	});
});
