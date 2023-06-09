import { tv } from "tailwind-variants";

export const textInputStyles = tv({
	slots: {
		root: "flex flex-col gap-1.5",
		hint: "text-xs leading-tight text-slate-500",
		inputContainer: "relative flex items-center",
		icon: "pointer-events-none absolute bottom-0 left-0 top-0 z-[2] flex w-9 items-center justify-center text-slate-500",
		input:
			"flex-grow-1 z-[1] h-10 w-full rounded-lg border px-3 py-2 shadow-xs focus:outline-none focus:ring-4 focus:ring-slate-100 transition disabled:pointer-events-none disabled:select-none disabled:bg-slate-50 disabled:text-slate-500 sm:text-sm sm:leading-6 [&[data-with-end-adornment='true']]:rounded-r-none [&[data-with-icon='true']]:pl-8",
		endAdornment:
			"z-0 flex h-10 flex-grow-0 items-center justify-center rounded-lg rounded-l-none shadow-xs [&>*]:h-full [&>*]:rounded-l-none",
		rightSection:
			"pointer-events-none absolute bottom-0 right-0 top-0 z-[2] flex w-9 items-center justify-center text-slate-500",
		error: "flex text-xs text-red-500",
	},
	variants: {
		withError: {
			true: {
				input:
					"border-red-300 text-red-900 placeholder:text-red-300 focus:ring-red-100",
			},
			false: {
				input:
					"border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-slate-300 focus:ring-slate-100",
			},
		},
	},
});
