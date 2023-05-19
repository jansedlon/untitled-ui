import { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert.component";

export default {
	title: "Alert",
	component: Alert,
} satisfies Meta<typeof Alert>;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	render: (props) => <Alert {...props} />,
	args: {
		type: "primary",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		title: "We've just released a new feature",
	},
	argTypes: {
		type: {
			control: "radio",
			options: ["error", "success", "warning", "default", "primary", "info"],
		},
	},
};
