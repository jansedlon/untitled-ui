import { Label } from "../label";
import { textInputStyles } from "./text-input.styles";
import { useMergedRef } from "@/hooks";
import clsx from "clsx";
import {
	ForwardedRef,
	HTMLProps,
	ReactNode,
	forwardRef,
	useId,
	useRef,
} from "react";

export type TextInputProps = {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	className?: string;
	description?: string;
	error?: string;
};

export const TextInput = forwardRef(
	(
		{
			className,
			required,
			error,
			endAdornment,
			icon,
			description,
			label,
			rightSection,
			// If used within Popover, it passes down children and throwing error
			children: _children,
			...props
		}: TextInputProps & HTMLProps<HTMLInputElement>,
		ref_: ForwardedRef<HTMLInputElement>,
	) => {
		const id = useId();
		const labelId = useId();
		const descriptionId = useId();
		const inputRef = useRef<HTMLInputElement>(null);
		const ref = useMergedRef<HTMLInputElement>(ref_, inputRef);

		const {
			root,
			hint,
			inputContainer,
			icon: iconStyles,
			input,
			endAdornment: endAdornmentStyles,
			rightSection: rightSectionStyles,
			error: errorStyle,
		} = textInputStyles({ withError: !!error });

		return (
			<div className={root({ className })}>
				{label && (
					<Label htmlFor={id} id={labelId}>
						{label}
						{required && (
							<span aria-hidden="true" className="text-red-500">
								&nbsp;*
							</span>
						)}
					</Label>
				)}
				{description && (
					<div id={descriptionId} className={clsx(hint(), label && "-mt-1.5")}>
						{description}
					</div>
				)}
				<div className={inputContainer()}>
					{icon && <div className={iconStyles()}>{icon}</div>}
					<input
						className={input()}
						{...props}
						data-with-end-adornment={!!endAdornment}
						data-with-icon={!!icon}
						id={id}
						ref={ref}
						aria-labelledby={label ? labelId : undefined}
						aria-describedby={description ? descriptionId : undefined}
						aria-invalid={!!error}
					/>
					{endAdornment && (
						<div className={endAdornmentStyles()}>{endAdornment}</div>
					)}
					{rightSection && (
						<div className={rightSectionStyles()}>{rightSection}</div>
					)}
				</div>
				{error && <p className={errorStyle()}>{error}</p>}
			</div>
		);
	},
);
