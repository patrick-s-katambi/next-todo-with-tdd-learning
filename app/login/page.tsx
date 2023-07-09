"use client";
import LoginForm from "@/components/login-form";
import { handleLoginSubmit } from "./handleSubmit.func";
import Link from "next/link";

export default function Login() {
	return (
		<div className="min-h-screen h-full w-full p-4 flex items-center justify-center flex-col gap-4">
			<LoginForm onSubmit={handleLoginSubmit} />
			<Link data-testid={"register-link"} href="/register">
				or Register instead
			</Link>
		</div>
	);
}
