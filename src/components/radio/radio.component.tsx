import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { ForwardedRef, ReactNode, forwardRef, useId } from "react";
import { tv } from "tailwind-variants";

type RadioProps = RadixRadioGroup.RadioGroupItemProps & {
	label?: ReactNode;
};

const radioStyles = tv(
	{
		slots: {
			root: "flex group outline-none",
			container: "flex h-5 items-center",
			label: "ml-2 text-sm select-none font-medium text-slate-700",
			radioGroupIndicator:
				"m-0 flex items-center justify-center h-4 w-4 appearance-none rounded-full border border-slate-300 bg-white transition-colors group-data-[state~=checked]:border-slate-700 group-data-[state=checked]:bg-slate-50 group-data-[state=checked]:text-slate-700 group-focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)] group-disabled:border-slate-300 group-disabled:bg-slate-100",
			icon: "pointer-events-none scale-100 opacity-0 transition-opacity group-data-[state=checked]:opacity-100 group-disabled:text-slate-300",
		},
	},
	{
		twMerge: false,
	},
);

const styles = radioStyles();

export const Radio = forwardRef(
	(
		{ className, label, ...props }: RadioProps,
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		const id = useId();

		return (
			<div className="flex items-center">
				<RadixRadioGroup.RadioGroupItem
					ref={ref}
					className={styles.root({ className })}
					id={id}
					{...props}
				>
					<RadixRadioGroup.RadioGroupIndicator
						forceMount
						className={styles.radioGroupIndicator()}
					>
						{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							className={styles.icon()}
							fill="none"
							height="6"
							viewBox="0 0 6 6"
							width="6"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="3" cy="3" fill="currentColor" r="3" />
						</svg>
					</RadixRadioGroup.RadioGroupIndicator>
				</RadixRadioGroup.RadioGroupItem>
				<label htmlFor={id} className={styles.label()}>
					{label}
				</label>
			</div>
		);
	},
);

Radio.displayName = "Radio";
