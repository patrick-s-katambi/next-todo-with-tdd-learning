import { useReducer } from "react";
import { Button } from "./ui/button";
import { FieldSet } from "./ui/field-set";
import { Input } from "./ui/input";

import { Rock_Salt } from "next/font/google";
import clsx from "clsx";

const rockSaltFont = Rock_Salt({ subsets: ["latin"], weight: "400" });

export interface registrationFormDataI {
	username: string;
	email: string;
	password: string;
	confirm_password: string;
}

interface registrationFormDataActionI {
	type: "update";
	data: Partial<registrationFormDataI>;
}

export interface RegitrationFormI {
	handleSubmit(submitData: registrationFormDataI): void;
}

export function RegitrationForm({ handleSubmit }: RegitrationFormI) {
	const initialData: registrationFormDataI = {
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	};
	const [data, dispatch] = useReducer(function (
		_data: registrationFormDataI,
		action: registrationFormDataActionI
	): registrationFormDataI {
		switch (action.type) {
			case "update":
				return { ..._data, ...action.data };

			default:
				throw "Unknown action dispatched";
		}
	},
	initialData);

	const shouldDisableButton =
		!data.email ||
		!data.username ||
		!data.password ||
		!data.confirm_password ||
		data.password !== data.confirm_password;

	return (
		<>
			<h1 className={clsx(rockSaltFont.className, "text-4xl")}>REGISTER</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(data);
				}}
				className={clsx(
					"max-w-md w-full flex flex-col gap-4",
					"border border-gray-100 p-4 rounded-md shadow-md"
				)}
			>
				<FieldSet
					labelData={{ htmlFor: "username", label: "Username" }}
					Element={
						<Input
							placeholder="patricio_King"
							value={data.username}
							onChange={({ target: { value } }) =>
								dispatch({ type: "update", data: { username: value } })
							}
							data-testid="username-field"
							name="username"
						/>
					}
				/>
				<FieldSet
					labelData={{ htmlFor: "email", label: "Email" }}
					Element={
						<Input
							placeholder="email@mail.com"
							value={data.email}
							onChange={({ target: { value } }) => dispatch({ type: "update", data: { email: value } })}
							data-testid="email-field"
							name="email"
						/>
					}
				/>
				<FieldSet
					labelData={{ htmlFor: "password", label: "Password" }}
					Element={
						<Input
							placeholder="my-password"
							type="password"
							value={data.password}
							onChange={({ target: { value } }) =>
								dispatch({ type: "update", data: { password: value } })
							}
							data-testid="password-field"
							name="password"
						/>
					}
				/>
				<FieldSet
					labelData={{ htmlFor: "confirm-password", label: "Confirm password" }}
					Element={
						<Input
							placeholder="my-password-confirmed"
							type="password"
							value={data.confirm_password}
							onChange={({ target: { value } }) =>
								dispatch({ type: "update", data: { confirm_password: value } })
							}
							data-testid="confirm-password-field"
							name="confirm-password"
						/>
					}
				/>
				<Button type="submit" disabled={shouldDisableButton} data-testid="register-btn">
					Register
				</Button>
			</form>
		</>
	);
}
