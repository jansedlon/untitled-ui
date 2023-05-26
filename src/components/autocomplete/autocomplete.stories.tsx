import { Autocomplete } from "./autocomplete.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Autocomplete",
	component: Autocomplete,
} satisfies Meta<typeof Autocomplete>;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
	args: {
		label: "Label",
		description: "Description",
		placeholder: "Placeholder",
		nothingFound: "Nothing found",
		name: "name",
		data: [
			{ label: "Item 1", value: "item-1" },
			{ label: "Item 2", value: "item-2" },
			{ label: "Item 3", value: "item-3" },
			{ label: "Item 4", value: "item-4" },
		],
	},
};
