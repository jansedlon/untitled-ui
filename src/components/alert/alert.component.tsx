import { alertStyles } from "./alert.styles";
import {
	IconAlertCircle,
	IconAlertTriangle,
	IconCircleCheck,
	TablerIconsProps,
} from "@tabler/icons-react";
import React, { ComponentType, ReactNode, forwardRef, useId } from "react";

export type AlertProps = React.JSX.IntrinsicElements["div"] & {
	type?: "error" | "success" | "warning" | "default" | "primary" | "info";
	title?: string;
	message?: string | null;
	icon?: ComponentType<TablerIconsProps>;
	children?: ReactNode;
};

const typeIcon: {
	[type in
		Exclude<AlertProps["type"], undefined>]: ComponentType<TablerIconsProps>;
} = {
	error: IconAlertCircle,
	success: IconCircleCheck,
	warning: IconAlertTriangle,
	default: IconAlertCircle,
	primary: IconAlertCircle,
	info: IconAlertCircle,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
	(
		{ type: variant = "default", title, children, icon, message, className },
		ref,
	) => {
		const id = useId();
		const Icon = icon || typeIcon[variant];

		const styles = alertStyles({ type: variant });

		return (
			<div
				aria-describedby={message ? `${id}-message` : undefined}
				aria-labelledby={title ? `${id}-title` : undefined}
				className={styles.root({ className })}
				id={id}
				ref={ref}
				role="alert"
				aria-live="polite"
			>
				<div className={styles.iconWrapper()}>
					<Icon className={styles.icon()} />
				</div>
				<div className={styles.content()}>
					{title && (
						<span className={styles.title()} id={`${id}-title`}>
							{title}
						</span>
					)}
					{message && (
						<span className={styles.message()} id={`${id}-message`}>
							{message}
						</span>
					)}
					{children}
				</div>
			</div>
		);
	},
);
