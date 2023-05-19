import { tv } from "tailwind-variants";

export const alertStyles = tv({
	slots: {
		root: "flex space-x-3 rounded-lg p-4 text-sm",
		iconWrapper: "flex h-5 w-5 items-center justify-center",
		icon: "h-4 w-4",
		content: "flex flex-col space-y-1",
		title: "font-semibold",
		message: "text-sm",
	},
	variants: {
		type: {
			error: {
				root: "bg-red-50 border-red-300 border rounded-xl text-red-700",
			},
			success: {
				root: "bg-green-50 border-green-300 text-green-700 border rounded-xl",
			},
			warning: {
				root: "bg-yellow-50 border-yellow-300 text-yellow-700 border rounded-xl",
			},
			default: {
				root: "bg-zinc-50 border-zinc-300 text-zinc-700 border rounded-xl",
			},
			primary: {
				root: "bg-purple-50 border-purple-300 text-purple-700 border rounded-xl",
			},
			info: {
				root: "bg-blue-50 border-blue-300 text-blue-800 border rounded-xl",
			},
		},
	},
});
