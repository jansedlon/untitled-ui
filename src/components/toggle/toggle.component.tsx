import { toggleStyles } from "./toggle.styles";
import { useMergedRef } from "@/hooks";
import { useFocusRing } from "@react-aria/focus";
import { useSwitch } from "@react-aria/switch";
import { AriaToggleProps } from "@react-aria/toggle";
import { ReactNode, forwardRef, useRef } from "react";
import { useToggleState } from "react-stately";

export type ToggleProps = AriaToggleProps & {
	className?: string;
	label: ReactNode;
	errorMessage?: ReactNode;
	description?: ReactNode;
};

export const Toggle = forwardRef((props: ToggleProps, ref_) => {
	const state = useToggleState(props);
	const inputRef = useRef<HTMLInputElement>(null);
	const ref = useMergedRef(inputRef, ref_);
	const { inputProps, isSelected } = useSwitch(props, state, ref);
	const { focusProps } = useFocusRing();

	const styles = toggleStyles({ isDisabled: props.isDisabled, isSelected });

	return (
		<label className={styles.root({ className: props.className })}>
			<input
				{...inputProps}
				{...focusProps}
				className={styles.input()}
				ref={ref}
			/>
			{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
			<div className={styles.toggleContainer()}>
				<div className={styles.toggle()} />
			</div>
			<div className={styles.content()}>
				{props.label && <span className={styles.label()}>{props.label}</span>}
				{props.description && (
					<span className={styles.description()}>{props.description}</span>
				)}
				{props.errorMessage && (
					<span className={styles.error()}>{props.errorMessage}</span>
				)}
			</div>
		</label>
	);
});
