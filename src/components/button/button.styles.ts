import { tv } from "tailwind-variants";

export const buttonStyles = tv({
	slots: {
		root:
			"rounded-lg border font-semibold shadow transition-colors focus-visible:outline-none active:translate-y-[1px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:select-none",
		wrapper: "flex h-full items-center justify-center gap-2 overflow-visible",
		leftContent: "flex items-center",
		rightIcon: "flex items-center",
		content: "flex h-full items-center overflow-hidden whitespace-nowrap",
		loader: "",
	},
	variants: {
		size: {
			xs: {
				root: "px-3.5 text-xs h-7",
			},
			sm: {
				root: "px-3.5 text-sm h-9",
			},
			md: {
				root: "px-4 text-sm h-10",
			},
			lg: {
				root: "px-[18px] text-base h-11",
			},
			xl: {
				root: "px-5 text-base h-12",
			},
		},
		variant: {
			primary: {
				root:
					"text-white border-transparent shadow-sm shadow-slate-200 bg-slate-800 hover:bg-slate-900 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.200)] disabled:bg-slate-300",
				loader: "text-slate-400",
			},
			secondary: {
				root:
					"bg-white border border-slate-200 shadow-sm shadow-slate-100 text-slate-700 hover:bg-slate-50 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)] disabled:text-slate-300 disabled:border-slate-100",
				loader: "text-slate-400",
			},
			tertiary: {
				root:
					"bg-slate-50 hover:bg-slate-100 shadow-none text-slate-700 border-transparent shadow-none hover:text-slate-800 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.slate.100)] disabled:text-slate-300 disabled:bg-slate-25",
				loader: "text-slate-400",
			},
			text: {
				root:
					"text-slate-600 shadow-none border-transparent hover:text-slate-700 bg-white hover:bg-slate-50 disabled:text-slate-300",
				loader: "text-slate-400",
			},
		},
		destructive: {
			true: "",
		},
		fullWidth: {
			true: { root: "block w-full" },
			false: { root: "inline-block w-auto" },
		},
	},
	compoundVariants: [
		{
			destructive: true,
			variant: "primary",
			className: {
				root:
					"bg-red-600 hover:bg-red-700 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.red.200)] disabled:bg-red-200",
				loader: "text-red-400",
			},
		},
		{
			destructive: true,
			variant: "secondary",
			className: {
				root:
					"border-red-300 text-red-700 hover:bg-red-50 hover:text-red-800 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.red.100)] disabled:text-red-300 disabled:border-red-200",
				loader: "text-red-400",
			},
		},
		{
			destructive: true,
			variant: "tertiary",
			className: {
				root:
					"bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-800 hover:text-red-800 focus-visible:shadow-[0px_0px_0px_4px_theme(colors.red.100)] disabled:text-red-300 disabled:bg-red-50/50",
				loader: "text-red-400",
			},
		},
		{
			destructive: true,
			variant: "text",
			className: {
				root:
					"text-red-700 hover:text-red-800 hover:bg-red-50 disabled:text-red-300",
				loader: "text-red-400",
			},
		},
	],
});
