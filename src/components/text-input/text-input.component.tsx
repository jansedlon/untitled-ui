import { Label } from "../label";
import { textInputStyles } from "./text-input.styles";
import * as RadixForm from "@radix-ui/react-form";
import clsx from "clsx";
import { ForwardedRef, ReactNode, forwardRef } from "react";

export type TextInputProps = RadixForm.FormFieldProps & {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	className?: string;
	label?: ReactNode;
	description?: ReactNode;
	error?: string;
};

export const TextInput = forwardRef(
	(
		{ className, ...props }: TextInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const {
			root,
			hint,
			inputContainer,
			icon,
			input,
			endAdornment,
			rightSection,
			error,
		} = textInputStyles({ withError: !!props.error });

		return (
			<RadixForm.Field className={root({ className })}>
				{props.label && (
					<RadixForm.Label asChild>
						<Label>
							{props.label}
							{props.required && (
								<span aria-hidden="true" className="text-red-500">
									&nbsp;*
								</span>
							)}
						</Label>
					</RadixForm.Label>
				)}
				{props.description && (
					<RadixForm.Message className={clsx(hint(), props.label && "-mt-1.5")}>
						{props.description}
					</RadixForm.Message>
				)}
				<div className={inputContainer()}>
					{props.icon && <div className={icon()}>{props.icon}</div>}
					<input
						className={input()}
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
				{props.error && (
					<RadixForm.ValidityState className={error()}>
						{props.error}
					</RadixForm.ValidityState>
				)}
			</RadixForm.Field>
		);
	},
);
