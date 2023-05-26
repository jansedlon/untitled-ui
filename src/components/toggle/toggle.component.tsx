import { toggleStyles } from "./toggle.styles";
import * as RadixSwitch from "@radix-ui/react-switch";
import { ReactNode, forwardRef, useId } from "react";

export type ToggleProps = RadixSwitch.SwitchProps & {
	className?: string;
	label: ReactNode;
	error?: ReactNode;
	description?: ReactNode;
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
	({ error, label, description, ...props }, ref) => {
		const styles = toggleStyles();
		const id = useId();

		return (
			<div className={styles.root({ className: props.className })}>
				<RadixSwitch.Root
					{...props}
					id={props.id || id}
					className={styles.toggleContainer()}
					ref={ref}
				>
					<RadixSwitch.Thumb className={styles.toggle()} />
				</RadixSwitch.Root>
				<div className={styles.content()}>
					{label && (
						<label htmlFor={props.id || id} className={styles.label()}>
							{label}
						</label>
					)}
					{description && (
						<span className={styles.description()}>{description}</span>
					)}
					{error && <span className={styles.error()}>{error}</span>}
				</div>
			</div>
		);
	},
);
