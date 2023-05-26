import { Label } from "../label";
import { radioGroupStyles } from "./radio-group.styles";
import { AriaRadioGroupProps, useRadioGroup } from "@react-aria/radio";
import { ReactNode, createContext } from "react";
import { RadioGroupState, useRadioGroupState } from "react-stately";

type RadioGroupProps = Omit<
	AriaRadioGroupProps,
	"isRequired" | "isDisabled" | "errorMessage"
> & {
	children: ReactNode;
	error?: string;
	required?: boolean;
	disabled?: boolean;
};

export const RadioContext = createContext<RadioGroupState | null>(null);

const styles = radioGroupStyles();

export const RadioGroup = ({
	error,
	required,
	disabled,
	...props
}: RadioGroupProps) => {
	const state = useRadioGroupState(props);
	const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
		useRadioGroup(
			{
				errorMessage: error,
				isRequired: required,
				isDisabled: disabled,
				...props,
			},
			state,
		);

	return (
		<div {...radioGroupProps}>
			<Label component="span" {...labelProps}>
				{props.label}
			</Label>
			<RadioContext.Provider value={state}>
				{props.children}
			</RadioContext.Provider>
			{props.description && (
				<div {...descriptionProps} className={styles.description()}>
					{props.description}
				</div>
			)}
			{error && state.validationState === "invalid" && (
				<div {...errorMessageProps} className={styles.errorMessage()}>
					{error}
				</div>
			)}
		</div>
	);
};
