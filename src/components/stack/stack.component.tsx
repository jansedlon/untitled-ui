import { UILiteralSize } from "@/types";
import clsx from "clsx";
import React from "react";

export type StackProps = React.JSX.IntrinsicElements["div"] & {
	spacing?: UILiteralSize;
};

const spacingClassName: Record<UILiteralSize, string> = {
	xs: "space-y-1",
	sm: "space-y-2",
	md: "space-y-4",
	lg: "space-y-6",
	xl: "space-y-8",
};

/**
 * Renders children vertically with spacing.
 *
 * **Default value:** md (16px)
 */
export function Stack({
	spacing = "md",
	children,
	className,
	...rest
}: StackProps) {
	return (
		<div
			className={clsx("flex flex-col", spacingClassName[spacing], className)}
			{...rest}
		>
			{children}
		</div>
	);
}
