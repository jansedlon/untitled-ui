import { Label } from "../label";
import { radioGroupStyles } from "./radio-group.styles";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { ReactNode, createContext, useId } from "react";

type RadioGroupProps = RadixRadioGroup.RadioGroupProps & {
	label?: string;
	error?: string;
	description?: ReactNode;
};

const styles = radioGroupStyles();

export const RadioGroup = ({
	children,
	label,
	error,
	description,
	...props
}: RadioGroupProps) => {
	const labelId = useId();
	return (
		<RadixRadioGroup.Root {...props} aria-describedby={labelId}>
			{label && (
				<Label component="div" id={labelId}>
					{label}
				</Label>
			)}
			{description && (
				<span className={styles.description()}>{description}</span>
			)}
			{children}
			{error && <span className={styles.error()}>{error}</span>}
		</RadixRadioGroup.Root>
	);
};
