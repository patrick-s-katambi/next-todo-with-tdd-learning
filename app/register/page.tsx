"use client";
import { RegitrationForm, registrationFormDataI } from "@/components/registration-form";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";
import { handleRegistration } from "./handleRegister.func";
import { LinkCustom } from "@/components/ui/link";

export default function Register() {
	const router = useRouter();
	return (
		<div className="min-h-screen h-full w-full p-4 flex items-center justify-center flex-col gap-4">
			<RegitrationForm handleSubmit={(data) => handleRegistration(data, router)} />

			<LinkCustom data-testid={"login-link"} href="/login">
				or Login instead
			</LinkCustom>
		</div>
	);
}
