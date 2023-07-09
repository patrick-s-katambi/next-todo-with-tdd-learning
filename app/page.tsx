import { LinkCustom } from "@/components/ui/link";

export default function Home() {
	return (
		<div className="min-h-screen h-full w-full p-4 flex items-center justify-center flex-col gap-4">
			<LinkCustom data-testid="login-link" href={"/login"} id="login">
				Login
			</LinkCustom>

			<LinkCustom data-testid="register-link" href={"/register"} id="register">
				Register
			</LinkCustom>
		</div>
	);
}
