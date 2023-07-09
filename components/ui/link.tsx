import clsx from "clsx";
import Link from "next/link";

const LinkCustom: React.FC<React.ComponentProps<typeof Link>> = ({ ...props }) => {
	return (
		<Link {...props} className={clsx("text-sm text-blue-500", "focus:scale-105 transition-all", props.className)}>
			{props.children}
		</Link>
	);
};

export { LinkCustom };
