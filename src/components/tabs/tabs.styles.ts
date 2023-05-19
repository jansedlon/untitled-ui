import { tv } from "tailwind-variants";

export const tabsStyle = tv({
	base: "flex items-center gap-2",
});

export const tabStyle = tv({
	base:
		"group flex select-none items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-500 ring-slate-100 transition hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus:ring-4 aria-disabled:text-slate-300",
	variants: {
		disabled: {
			true: "pointer-events-none",
		},
		selected: {
			true: "bg-slate-50 text-slate-800",
		},
	},
});
