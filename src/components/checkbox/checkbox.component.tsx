import { checkboxStyles } from "./checkbox.styles";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { ReactNode, forwardRef, useId } from "react";

export type CheckboxProps = RadixCheckbox.CheckboxProps & {
	label: ReactNode;
	description?: ReactNode;
	error?: ReactNode;
};

const styles = checkboxStyles();

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
	({ label, description, error, ...props }, ref) => {
		const id = useId();
		return (
			<label className={styles.root()}>
				<div className={styles.inputWrapper()}>
					<div className={styles.inputContainer()}>
						<RadixCheckbox.Root
							className={styles.input()}
							{...props}
							ref={ref}
							id={id}
						>
							<RadixCheckbox.Indicator forceMount>
								{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									className={styles.icon()}
									fill="none"
									height="12"
									viewBox="0 0 12 12"
									width="12"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 3L4.5 8.5L2 6"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.6666"
									/>
								</svg>
							</RadixCheckbox.Indicator>
						</RadixCheckbox.Root>
					</div>
				</div>
				<div className={styles.contentContainer()}>
					{label && <div className={styles.label()}>{label}</div>}
					{description && <p className={styles.description()}>{description}</p>}
					{!!error && <span className={styles.error()}>{error}</span>}
				</div>
			</label>
		);
	},
);

Checkbox.displayName = "Checkbox";
