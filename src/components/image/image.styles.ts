import { tv } from "tailwind-variants";

export const imageStyles = tv({
	slots: {
		root: "overflow-hidden",
		figure: "m-0",
		container: "relative",
		image: "block h-full w-full border-0",
		placeholderContainer:
			"absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-600",
		placeholder: "w-10 h-10",
	},
});
