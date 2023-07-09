import LoginForm, { LoginFormDataI } from "@/components/login-form";
import { expect, jest } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./page";

describe("Login", () => {
	it("renders login form", async () => {
		render(<Login />);

		const emailField = await screen.findByTestId("email-field");
		expect(emailField).toBeInTheDocument();

		const passwordField = await screen.findByTestId("password-field");
		expect(passwordField).toBeInTheDocument();

		const submitButton = await screen.findByTestId("login-submit-btn");
		expect(submitButton).toBeInTheDocument();
	});

	it("starts with empty email and password value", async () => {
		render(<LoginForm onSubmit={jest.fn()} />);

		const emailField = await screen.findByTestId("email-field");
		expect(emailField).toHaveValue("");

		const passwordField = await screen.findByTestId("password-field");
		expect(passwordField).toHaveValue("");
	});

	it("changes input field value when a user types", async () => {
		render(<LoginForm onSubmit={jest.fn()} />);

		let { emailValue, passwordValue } = { emailValue: "patrick.simon.katambi@gmail.com", passwordValue: "123qwe" };

		const emailField = await screen.findByTestId("email-field");
		const passwordField = await screen.findByTestId("password-field");

		fireEvent.change(emailField, { target: { value: emailValue } });
		expect(emailField).toHaveValue(emailValue);

		fireEvent.change(passwordField, { target: { value: passwordValue } });
		expect(passwordField).toHaveValue(passwordValue);
	});

	it("calls onSubmit one time only when the form is submitted", async () => {
		const handleLoginSubmitMock = jest.fn();
		let data: LoginFormDataI = { email: "", password: "" };
		render(<LoginForm onSubmit={handleLoginSubmitMock} />);

		let { emailValue, passwordValue } = { emailValue: "patrick.simon.katambi@gmail.com", passwordValue: "123qwe" };

		const emailField = await screen.findByTestId("email-field");
		fireEvent.change(emailField, { target: { value: emailValue } });

		const passwordField = await screen.findByTestId("password-field");
		fireEvent.change(passwordField, { target: { value: passwordValue } });

		const submitButton = await screen.findByTestId("login-submit-btn");
		fireEvent(submitButton, new MouseEvent("click"));

		let updatedData: LoginFormDataI = { email: emailValue, password: passwordValue };

		expect(handleLoginSubmitMock).toHaveBeenCalledTimes(1);
		expect(handleLoginSubmitMock).toHaveBeenCalledWith(updatedData);
	});

	it("doesnot call onSubmit when the form is submitted with empty email", async () => {
		const handleLoginSubmitMock = jest.fn();
		let data: LoginFormDataI = { email: "", password: "" };
		render(<LoginForm onSubmit={handleLoginSubmitMock} />);

		let { emailValue, passwordValue } = { emailValue: "", passwordValue: "123qwe" };

		const emailField = await screen.findByTestId("email-field");
		fireEvent.change(emailField, { target: { value: emailValue } });

		const passwordField = await screen.findByTestId("password-field");
		fireEvent.change(passwordField, { target: { value: passwordValue } });

		const submitButton = await screen.findByTestId("login-submit-btn");
		fireEvent(submitButton, new MouseEvent("click"));

		expect(handleLoginSubmitMock).toHaveBeenCalledTimes(0);
	});

	it("doesnot call onSubmit when the form is submitted with empty password", async () => {
		const handleLoginSubmitMock = jest.fn();
		let data: LoginFormDataI = { email: "", password: "" };
		render(<LoginForm onSubmit={handleLoginSubmitMock} />);

		let { emailValue, passwordValue } = { emailValue: "patrick.simon.katambi@gmail.com", passwordValue: "" };

		const emailField = await screen.findByTestId("email-field");
		fireEvent.change(emailField, { target: { value: emailValue } });

		const passwordField = await screen.findByTestId("password-field");
		fireEvent.change(passwordField, { target: { value: passwordValue } });

		const submitButton = await screen.findByTestId("login-submit-btn");
		fireEvent(submitButton, new MouseEvent("click"));

		expect(handleLoginSubmitMock).toHaveBeenCalledTimes(0);
	});

	it("doesnot call onSubmit when the form is submitted with empty email and password", async () => {
		const handleLoginSubmitMock = jest.fn();
		let data: LoginFormDataI = { email: "", password: "" };
		render(<LoginForm onSubmit={handleLoginSubmitMock} />);

		let { emailValue, passwordValue } = { emailValue: "", passwordValue: "" };

		const emailField = await screen.findByTestId("email-field");
		fireEvent.change(emailField, { target: { value: emailValue } });

		const passwordField = await screen.findByTestId("password-field");
		fireEvent.change(passwordField, { target: { value: passwordValue } });

		const submitButton = await screen.findByTestId("login-submit-btn");
		fireEvent(submitButton, new MouseEvent("click"));

		expect(handleLoginSubmitMock).toHaveBeenCalledTimes(0);
	});

	it("shows a register link", async () => {
		render(<Login />);

		const registerLink = await screen.findByTestId("register-link");
		expect(registerLink).toBeInTheDocument();
	});
});
