import { tv } from "tailwind-variants";

export const textareaStyles = tv({
	slots: {
		root: "flex flex-col gap-1.5",
		description: "text-xs leading-tight text-slate-500",
		inputContainer: "relative flex items-center",
		icon:
			"pointer-events-none absolute bottom-0 left-0 top-0 z-[2] flex w-9 items-center justify-center text-slate-500",
		input:
			"flex-grow-1 min-h-[36px] w-full flex-shrink-0 rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-4 disabled:pointer-events-none disabled:select-none disabled:bg-slate-50 disabled:text-slate-500 sm:text-sm sm:leading-6 [&[data-with-end-adornment='true']]:rounded-r-none [&[data-with-icon='true']]:pl-8",
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
