import { tv } from "tailwind-variants";

export const badgeStyles = tv(
	{
		base: "inline-flex items-center rounded-2xl font-semibold uppercase",
		variants: {
			size: {
				sm: "px-2.5 h-[20px] text-xxs gap-1 leading-sm",
				md: "py-0.5 px-2.5 h-6 text-xs gap-1.5",
				lg: "py-1 px-3 text-xs h-7 gap-1.5",
			},
			variant: {
				filled: "",
				outlined: "",
			},
			color: {
				primary: "",
				green: "",
				yellow: "",
				red: "",
				blue: "",
			},
		},
		compoundVariants: [
			{
				variant: "filled",
				color: "primary",
				className: "bg-slate-100 text-slate-700",
			},
			{
				variant: "filled",
				color: "green",
				className: "bg-green-50 text-green-700",
			},
			{
				variant: "filled",
				color: "yellow",
				className: "bg-yellow-50 text-yellow-700",
			},
			{
				variant: "filled",
				color: "red",
				className: "bg-red-50 text-red-700",
			},
			{
				variant: "filled",
				color: "blue",
				className: "bg-blue-50 text-blue-700",
			},
			{
				variant: "outlined",
				color: "primary",
				className: "border border-solid border-slate-600 text-slate-700",
			},
			{
				variant: "outlined",
				color: "green",
				className: "border border-solid border-green-600 text-green-700",
			},
			{
				variant: "outlined",
				color: "yellow",
				className: "border border-solid border-yellow-600 text-yellow-700",
			},
			{
				variant: "outlined",
				color: "red",
				className: "border border-solid border-red-600 text-red-700",
			},
			{
				variant: "outlined",
				color: "blue",
				className: "border border-solid border-blue-600 text-blue-700",
			},
		],
	},
	{
		twMerge: false,
	},
);
