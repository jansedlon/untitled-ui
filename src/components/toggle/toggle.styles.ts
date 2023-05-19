import { tv } from "tailwind-variants";

export const toggleStyles = tv({
	slots: {
		root: "flex",
		input: "peer absolute h-0 w-0 overflow-hidden whitespace-nowrap",
		toggleContainer:
			"flex h-5 w-9 flex-shrink-0 select-none items-center rounded-[2rem] bg-slate-100 p-0.5 transition disabled:bg-slate-50 peer-focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.50)] peer-[&:not(:disabled):not(:checked)]:hover:bg-slate-200 peer-[&:not(:disabled)]:peer-checked:bg-slate-600 peer-[&:not(:disabled)]:peer-checked:hover:bg-slate-700",
		error: "text-xs text-red-500",
		toggle:
			"shadow-slate-300 flex h-4 w-4 rounded-full bg-white shadow-sm transition",
		content: "ml-2 flex flex-col",
		label: "text-sm font-medium text-slate-700",
		description: "text-sm text-slate-600",
	},
	variants: {
		isDisabled: {
			true: {
				toggle: "bg-slate-50",
			},
		},
		isSelected: {
			true: {
				toggle: "translate-x-[calc(100%)]",
			},
		},
	},
});
