import { LoginFormDataI } from "@/components/login-form";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export function handleLoginSubmit(data: LoginFormDataI, router: AppRouterInstance) {
	router.replace("/todos");
}
