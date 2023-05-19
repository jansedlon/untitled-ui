import { badgeStyles } from "./badge.styles";
import { UILiteralSize } from "@/types";
import { ElementType, ReactNode } from "react";

type BadgeProps<TElement extends ElementType = "span"> = {
	as?: TElement;
	children: ReactNode;
	size?: Extract<UILiteralSize, "sm" | "md" | "lg">;
	color?: "primary" | "green" | "yellow" | "red" | "blue";
	leftSection?: ReactNode;
	rightSection?: ReactNode;
	variant?: "filled" | "outlined";
	className?: string;
};

export function Badge<TElement extends ElementType = "span">({
	as,
	children,
	leftSection,
	rightSection,
	className,
	size = "sm",
	color = "primary",
	variant = "filled",
}: BadgeProps<TElement>) {
	const Component = as || "span";

	const styles = badgeStyles({ size, color, variant, className });

	return (
		<Component className={styles}>
			{leftSection && <span>{leftSection}</span>}
			<span>{children}</span>
			{rightSection && <span>{rightSection}</span>}
		</Component>
	);
}
