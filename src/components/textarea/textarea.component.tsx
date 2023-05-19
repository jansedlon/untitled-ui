import { Label } from "../label";
import { textareaStyles } from "./textarea.styles";
import { useMergedRef } from "@/hooks";
import { AriaTextFieldProps, useTextField } from "@react-aria/textfield";
import { ForwardedRef, ReactNode, forwardRef, useRef } from "react";

export type TextareaProps = AriaTextFieldProps & {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	className?: string;
};

export const Textarea = forwardRef(
	(props: TextareaProps, ref_: ForwardedRef<HTMLTextAreaElement>) => {
		const inputRef = useRef<HTMLTextAreaElement>(null);
		const ref = useMergedRef<HTMLTextAreaElement>(ref_, inputRef);

		const { labelProps, inputProps, descriptionProps, errorMessageProps } =
			useTextField({ ...props, inputElementType: "textarea" }, ref);

		const styles = textareaStyles({ withError: !!props.errorMessage });

		return (
			<div className={styles.root({ className: props.className })}>
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
				{props.errorMessage && (
					<p className={styles.error()} {...errorMessageProps}>
						{props.errorMessage}
					</p>
				)}
			</div>
		);
	},
);
