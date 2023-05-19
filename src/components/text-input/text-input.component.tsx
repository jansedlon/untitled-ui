import { Label } from "../label";
import { textInputStyles } from "./text-input.styles";
import { useMergedRef } from "@/hooks";
import { AriaTextFieldProps, useTextField } from "@react-aria/textfield";
import clsx from "clsx";
import { ForwardedRef, ReactNode, forwardRef, useRef } from "react";

export type TextInputProps = AriaTextFieldProps & {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	className?: string;
};

export const TextInput = forwardRef(
	(
		{ className, ...props }: TextInputProps,
		ref_: ForwardedRef<HTMLInputElement>,
	) => {
		const inputRef = useRef<HTMLInputElement>(null);
		const ref = useMergedRef<HTMLInputElement>(ref_, inputRef);

		const { labelProps, inputProps, descriptionProps, errorMessageProps } =
			// @ts-ignore
			useTextField(props, ref);

		const {
			root,
			hint,
			inputContainer,
			icon,
			input,
			endAdornment,
			rightSection,
			error,
		} = textInputStyles({ withError: !!props.errorMessage });

		return (
			<div className={root({ className })}>
				{props.label && (
					<Label {...labelProps}>
						{props.label}
						{props.isRequired && (
							<span aria-hidden="true" className="text-red-500">
								&nbsp;*
							</span>
						)}
					</Label>
				)}
				{props.description && (
					<div
						className={clsx(hint(), props.label && "-mt-1.5")}
						{...descriptionProps}
					>
						{props.description}
					</div>
				)}
				<div className={inputContainer()}>
					{props.icon && <div className={icon()}>{props.icon}</div>}
					<input
						className={input()}
						{...inputProps}
						data-with-end-adornment={!!props.endAdornment}
						data-with-icon={!!props.icon}
						ref={ref}
					/>
					{props.endAdornment && (
						<div className={endAdornment()}>{props.endAdornment}</div>
					)}
					{props.rightSection && (
						<div className={rightSection()}>{props.rightSection}</div>
					)}
				</div>
				{props.errorMessage && (
					<p className={error()} {...errorMessageProps}>
						{props.errorMessage}
					</p>
				)}
			</div>
		);
	},
);
