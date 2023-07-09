import { registrationFormDataI } from "@/components/registration-form";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export function handleRegistration(data: registrationFormDataI, router: AppRouterInstance) {
	router.replace("/todos");
}
