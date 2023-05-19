import { Label } from "../label";
import { radioGroupStyles } from "./radio-group.styles";
import { AriaRadioGroupProps, useRadioGroup } from "@react-aria/radio";
import { ReactNode, createContext } from "react";
import { RadioGroupState, useRadioGroupState } from "react-stately";

type RadioGroupProps = AriaRadioGroupProps & {
	children: ReactNode;
};

export const RadioContext = createContext<RadioGroupState | null>(null);

const styles = radioGroupStyles();

export const RadioGroup = (props: RadioGroupProps) => {
	const state = useRadioGroupState(props);
	const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
		useRadioGroup(props, state);

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
			{props.errorMessage && state.validationState === "invalid" && (
				<div {...errorMessageProps} className={styles.errorMessage()}>
					{props.errorMessage}
				</div>
			)}
		</div>
	);
};
