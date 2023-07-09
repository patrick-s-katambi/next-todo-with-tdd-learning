import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import clsx from "clsx";
import React, { useReducer } from "react";
import { FieldSet } from "./ui/field-set";

import { Rock_Salt } from "next/font/google";

const rockSaltFont = Rock_Salt({ subsets: ["latin"], weight: "400" });

const LoginForm: React.FC<LoginFormI> = ({ onSubmit }) => {
	const initialData: LoginFormDataI = { email: "", password: "" };
	const [data, dispatch] = useReducer(loginFormReducer, initialData);
	const shouldDisableForm = !data.email || !data.password;
	return (
		<>
			<h1 className={clsx(rockSaltFont.className, "text-4xl")}>LOGIN</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(data);
				}}
				className={clsx(
					"max-w-md w-full flex flex-col gap-4",
					"border border-gray-100 p-4 rounded-md shadow-md"
				)}
			>
				<FieldSet
					labelData={{ htmlFor: "email", label: "Email" }}
					Element={
						<Input
							value={data.email}
							onChange={(e) => dispatch({ type: "update", data: { email: e.target.value } })}
							type="email"
							placeholder="myemail@mail.com"
							name="email"
							data-testid="email-field"
						/>
					}
				/>

				<FieldSet
					labelData={{ htmlFor: "password", label: "Password" }}
					Element={
						<Input
							value={data.password}
							onChange={(e) => dispatch({ type: "update", data: { password: e.target.value } })}
							type="password"
							placeholder="my-password"
							name="password"
							data-testid="password-field"
						/>
					}
				/>

				<Button disabled={shouldDisableForm} type="submit" data-testid="login-submit-btn">
					Login
				</Button>
			</form>
		</>
	);
};

export default LoginForm;

function loginFormReducer(
	_data: LoginFormDataI,
	action: { type: "update"; data: Partial<LoginFormDataI> }
): LoginFormDataI {
	switch (action.type) {
		case "update":
			return { ..._data, ...action.data };

		default:
			throw Error("Unknown action: " + action.type);
	}
}

export interface LoginFormDataI {
	email: string;
	password: string;
}

export interface LoginFormI {
	onSubmit(data: LoginFormDataI): void;
}
