import { groupStyles } from "./group.styles";
import { UILiteralSize } from "@/types";
import type React from "react";

export type GroupProps = React.JSX.IntrinsicElements["div"] & {
	spacing?: UILiteralSize;
};

/**
 * Renders children horizontally with spacing.
 *
 * **Default value:** md (16px)
 */
export function Group({
	spacing = "md",
	children,
	className,
	...rest
}: GroupProps) {
	const styles = groupStyles({ spacing, className });

	return (
		<div className={styles} {...rest}>
			{children}
		</div>
	);
}
