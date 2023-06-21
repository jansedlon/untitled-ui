import { tv } from "tailwind-variants";

export const radioGroupStyles = tv({
	slots: {
		error: "flex text-xs text-red-500",
		description: "text-xs leading-tight text-slate-500",
	},
});
