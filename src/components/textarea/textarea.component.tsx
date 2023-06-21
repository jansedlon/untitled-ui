import { Label } from "../label";
import { textareaStyles } from "./textarea.styles";
import { ForwardedRef, HTMLProps, ReactNode, forwardRef, useId } from "react";

export type TextareaProps = {
	icon?: ReactNode;
	endAdornment?: ReactNode;
	rightSection?: ReactNode;
	error?: string;
	className?: string;
	description?: string;
};

export const Textarea = forwardRef(
	(
		{
			error,
			required,
			className,
			icon,
			description,
			label,
			children: _children,
			...props
		}: TextareaProps & HTMLProps<HTMLTextAreaElement>,
		ref: ForwardedRef<HTMLTextAreaElement>,
	) => {
		const id = useId();
		const labelId = useId();
		const descriptionId = useId();
		const styles = textareaStyles({ withError: !!error });

		return (
			<div className={styles.root({ className })}>
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
					<div className={styles.description()} id={descriptionId}>
						{description}
					</div>
				)}
				<div className={styles.inputContainer()}>
					{icon && <div className={styles.icon()}>{icon}</div>}
					<textarea
						className={styles.input()}
						{...props}
						ref={ref}
						data-with-icon={!!icon}
						id={id}
						aria-labelledby={label ? labelId : undefined}
						aria-describedby={description ? descriptionId : undefined}
						aria-invalid={!!error}
					/>
					{props.rightSection && (
						<div className={styles.rightSection()}>{props.rightSection}</div>
					)}
				</div>
				{error && <p className={styles.error()}>{error}</p>}
			</div>
		);
	},
);
