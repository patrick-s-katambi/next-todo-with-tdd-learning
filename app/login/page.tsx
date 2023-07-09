"use client";
import LoginForm from "@/components/login-form";
import { handleLoginSubmit } from "./handleSubmit.func";
import { LinkCustom } from "@/components/ui/link";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();
	return (
		<div className="min-h-screen h-full w-full p-4 flex items-center justify-center flex-col gap-4">
			<LoginForm onSubmit={(data) => handleLoginSubmit(data, router)} />
			<LinkCustom data-testid={"register-link"} href="/register">
				or Register instead
			</LinkCustom>
		</div>
	);
}
