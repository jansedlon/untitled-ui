import { indicatorStyles } from "./indicator.styles";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Position = "top" | "middle" | "bottom";
type Placement = "start" | "center" | "end";

export type IndicatorPosition = `${Position}-${Placement}`;

type IndicatorProps = ComponentPropsWithoutRef<"div"> & {
	children: ReactNode;
	position?: IndicatorPosition;
	offset?: number;
	inline?: boolean;
	color?: "primary" | "red";
	size?: number | string;
	disabled?: boolean;
	processing?: boolean;
};

export function Indicator({
	className,
	children,
	position = "top-end",
	offset = 0,
	inline = false,
	color = "primary",
	disabled = false,
	processing = false,
	size = 10,
	...rest
}: IndicatorProps) {
	const styles = indicatorStyles({ color, inline, position });

	return (
		<div className={styles.root({ className })} {...rest}>
			{!disabled && (
				<div
					className={styles.container()}
					style={{
						// @ts-ignore
						"--offset": `${offset}px`,
						height: size,
						width: size,
					}}
				>
					<div
						className={styles.indicator()}
						style={{ height: size, width: size }}
					/>
					{processing && <div className={styles.processing()} />}
				</div>
			)}
			{children}
		</div>
	);
}
