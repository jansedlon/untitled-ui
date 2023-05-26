import { RadioContext } from "./radio-group.component";
import { useMergedRef } from "@/hooks";
import { AriaRadioProps, useRadio } from "@react-aria/radio";
import { ForwardedRef, ReactNode, forwardRef, useContext, useRef } from "react";
import { tv } from "tailwind-variants";

type RadioProps = AriaRadioProps & {
	className?: string;
	label: ReactNode;
};

const radioStyles = tv({
	slots: {
		root: "flex",
		container: "flex h-5 items-center",
		label: "ml-2 text-sm select-none font-medium text-slate-700",
		input:
			"peer m-0 block h-4 w-4 appearance-none rounded-full border border-slate-300 bg-white transition-colors checked:border-slate-700 checked:text-slate-700 focus:outline-none focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)]  disabled:border-slate-300 disabled:bg-slate-100",
		icon: "pointer-events-none absolute inset-0 m-auto translate-y-0 scale-100 opacity-0 transition-opacity peer-checked:opacity-100 peer-disabled:text-slate-300",
	},
});

const styles = radioStyles();

export const Radio = forwardRef(
	(props: RadioProps, ref_: ForwardedRef<HTMLInputElement>) => {
		const state = useContext(RadioContext);
		const inputRef = useRef<HTMLInputElement>(null);
		const ref = useMergedRef(inputRef, ref_);

		if (!state) {
			throw new Error(
				"Radio components must be rendered within a RadioGroup component.",
			);
		}

		// @ts-ignore
		const { inputProps } = useRadio(props, state, ref);

		return (
			<label className={styles.root({ className: props.className })}>
				<div className={styles.container()}>
					<div className="relative h-4">
						<input
							className="peer m-0 block h-4 w-4 appearance-none rounded-full border border-slate-300 bg-white transition-colors checked:border-slate-700 checked:text-slate-700 focus:outline-none focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)]  disabled:border-slate-300 disabled:bg-slate-100"
							ref={ref}
							{...inputProps}
						/>
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
					</div>
				</div>
				<span className={styles.label()}>{props.label}</span>
			</label>
		);
	},
);

Radio.displayName = "Radio";
