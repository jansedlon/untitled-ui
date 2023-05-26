import { tv } from "tailwind-variants";

export const modalSizes = {
	xs: "xs",
	sm: "sm",
	md: "md",
	lg: "lg",
	xl: "xl",
} as const;

export const modalStyles = tv({
	slots: {
		overlay: "bg-black bg-opacity-60 z-[200]",
		inner:
			"z-[201] fixed w-full top-0 bottom-0 max-h-full pointer-events-none px-[5vw] py-[5vh] flex items-start justify-center",
		content:
			"pointer-events-auto max-w-full max-h-[90vh] shadow-xl overflow-y-auto bg-white rounded-xl text-slate-900",
		header: "flex items-center py-4 pr-2.5 pl-4",
		closeButton:
			" bg-white w-6 h-6 outline-none flex active:translate-y-[1px] items-center justify-center text-slate-600 rounded-lg transition hover:bg-slate-50",
		title: "text-lg font-semibold text-slate-900",
		body: "p-4 [&:not(:only-child)]:pt-0",
	},
	variants: {
		centered: {
			true: {
				inner: "items-center",
			},
		},
		withTitle: {
			true: {
				header: "justify-between",
			},
		},
		size: {
			xs: {
				content: "flex-[0_0_20rem]",
			},
			sm: {
				content: "flex-[0_0_23.75rem]",
			},
			md: {
				content: "flex-[0_0_27.5rem]",
			},
			lg: {
				content: "flex-[0_0_38.75rem]",
			},
			xl: {
				content: "flex-[0_0_48.75rem]",
			},
		},
	},
});
