import { tv } from "tailwind-variants";

export const checkboxStyles = tv({
	slots: {
		root: "flex",
		contentContainer: "ml-2 text-sm",
		label: "font-medium text-slate-700",
		description: "text-xs text-slate-600",
		error: "block text-xs text-red-500",
		inputWrapper: "flex h-5 items-center",
		inputContainer: "relative h-4",
		input:
			"group m-0 block h-4 w-4 appearance-none rounded-[4px] border border-slate-300 bg-white transition-colors [&:not(:disabled)]:data-[state=checked]:border-slate-700 data-[state=checked]:text-slate-600 focus:outline-none focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)] disabled:border-slate-300 disabled:bg-slate-100",
		icon:
			"pointer-events-none absolute inset-0 m-auto translate-y-0 scale-100 text-slate-700 opacity-0 transition-opacity group-data-[state=checked]:opacity-100 group-disabled:text-slate-300",
	},
});
