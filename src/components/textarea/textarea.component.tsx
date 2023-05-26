import { Label } from "../label";
import { textareaStyles } from "./textarea.styles";
import { useMergedRef } from "@/hooks";
import { AriaTextFieldProps, useTextField } from "@react-aria/textfield";
import { ForwardedRef, ReactNode, forwardRef, useRef } from "react";

export type TextareaProps = Omit<
	AriaTextFieldProps,
	"isRequired" | "isDisabled" | "errorMessage"
> & {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	className?: string;
	error?: string;
	required?: boolean;
	disabled?: boolean;
};

export const Textarea = forwardRef(
	(
		{ error, required, disabled, ...props }: TextareaProps,
		ref_: ForwardedRef<HTMLTextAreaElement>,
	) => {
		const inputRef = useRef<HTMLTextAreaElement>(null);
		const ref = useMergedRef<HTMLTextAreaElement>(ref_, inputRef);

		const { labelProps, inputProps, descriptionProps, errorMessageProps } =
			useTextField(
				{
					...props,
					errorMessage: error,
					isRequired: required,
					isDisabled: disabled,
					inputElementType: "textarea",
				},
				// @ts-ignore
				ref,
			);

		const styles = textareaStyles({ withError: !!error });

		return (
			<div className={styles.root({ className: props.className })}>
				{props.label && (
					<Label {...labelProps}>
						{props.label}
						{required && (
							<span aria-hidden="true" className="text-red-500">
								&nbsp;*
							</span>
						)}
					</Label>
				)}
				{props.description && (
					<div className={styles.description()} {...descriptionProps}>
						{props.description}
					</div>
				)}
				<div className={styles.inputContainer()}>
					{props.icon && <div className={styles.icon()}>{props.icon}</div>}
					<textarea
						className={styles.input()}
						{...inputProps}
						ref={ref}
						data-with-icon={!!props.icon}
					/>
					{props.rightSection && (
						<div className={styles.rightSection()}>{props.rightSection}</div>
					)}
				</div>
				{error && (
					<p className={styles.error()} {...errorMessageProps}>
						{error}
					</p>
				)}
			</div>
		);
	},
);
