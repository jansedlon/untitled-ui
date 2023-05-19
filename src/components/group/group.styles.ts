import { tv } from "tailwind-variants";

export const groupStyles = tv({
	base: "flex items-center",
	variants: {
		spacing: {
			xs: "space-x-1",
			sm: "space-x-2",
			md: "space-x-4",
			lg: "space-x-6",
			xl: "space-x-8",
		},
	},
});
