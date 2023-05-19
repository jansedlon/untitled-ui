import { Textarea } from "./textarea.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	component: Textarea,
	title: "Textarea",
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		label: "Labe",
		description: "Description",
		errorMessage: "Error message",
		isDisabled: false,
	},
};
