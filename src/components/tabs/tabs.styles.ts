import { tv } from "tailwind-variants";

export const tabsStyle = tv({
	base: "flex items-center gap-2",
});

export const tabStyle = tv({
	base: 'group flex select-none data-[disabled]:pointer-events-none data-[state="active"]:bg-slate-50 data-[state="active"]:text-slate-800 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-500 ring-slate-100 transition hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus:ring-4 aria-disabled:text-slate-300',
});
