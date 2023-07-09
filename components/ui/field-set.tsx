import clsx from "clsx";
import { Label } from "./label";

const FieldSet: React.FC<{
	labelData?: { htmlFor: string; label: string };
	Element: React.ReactNode;
}> = ({ labelData, Element }) => {
	return (
		<fieldset className={clsx("flex flex-col gap-1")}>
			{labelData?.htmlFor ? (
				<Label htmlFor={labelData.htmlFor} className={clsx("text-sm")}>
					{labelData.label}
				</Label>
			) : undefined}
			{Element}
		</fieldset>
	);
};

export { FieldSet };
