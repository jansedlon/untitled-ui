import { tv } from "tailwind-variants";

export const avatarSizes = {
	xs: "xs",
	sm: "sm",
	md: "md",
	lg: "lg",
	xl: "xl",
	"2xl": "2xl",
} as const;

export const avatarStyles = tv({
	slots: {
		root: "relative block select-none overflow-hidden rounded-full",
		placeholderContainer:
			"flex h-full w-full select-none items-center justify-center rounded-full bg-slate-50 font-semibold",
		placeholder: "h-[70%] w-[70%] text-slate-500",
		image: "block h-full w-full object-cover",
	},
	variants: {
		size: {
			xs: { root: "w-6 h-6" },
			sm: { root: "w-8 h-8" },
			md: { root: "w-10 h-10" },
			lg: { root: "w-12 h-12" },
			xl: { root: "w-14 h-14" },
			"2xl": { root: "w-16 h-16" },
		},
	},
});
