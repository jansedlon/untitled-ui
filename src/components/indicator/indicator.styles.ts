import { tv } from "tailwind-variants";

export const indicatorStyles = tv({
	slots: {
		root: "relative",
		container: "absolute z-10 flex items-center justify-center rounded-full",
		indicator: "relative rounded-full",
		processing: "absolute inline-flex h-full w-full animate-ping rounded-full",
	},
	variants: {
		color: {
			primary: {
				container: "bg-slate-600",
				indicator: "bg-slate-600",
				processing: "bg-slate-600",
			},
			red: {
				container: "bg-red-600",
				indicator: "bg-red-600",
				processing: "bg-red-600",
			},
		},
		inline: {
			true: { root: "inline-block" },
			false: { root: "block" },
		},
		position: {
			"top-start": {
				container:
					"top-[var(--offset)] left-[var(--offset)] -translate-x-1/2 -translate-y-1/2",
			},
			"top-center": {
				container: "top-[var(--offset)] left-1/2 -translate-x-1/2 -translate-y-1/2",
			},
			"top-end": {
				container:
					"top-[var(--offset)] right-[var(--offset)] translate-x-1/2 -translate-y-1/2",
			},
			"middle-start": {
				container: "top-1/2 left-[var(--offset)] -translate-x-1/2 -translate-y-1/2",
			},
			"middle-center": {
				container: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
			},
			"middle-end": {
				container: "top-1/2 right-[var(--offset)] translate-x-1/2 -translate-y-1/2",
			},
			"bottom-start": {
				container:
					"bottom-[var(--offset)] left-[var(--offset)] -translate-x-1/2 translate-y-1/2",
			},
			"bottom-center": {
				container:
					"bottom-[var(--offset)] left-1/2 -translate-x-1/2 translate-y-1/2",
			},
			"bottom-end": {
				container:
					"bottom-[var(--offset)] right-[var(--offset)] translate-x-1/2 translate-y-1/2",
			},
		},
	},
});
