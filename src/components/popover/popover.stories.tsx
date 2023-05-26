import { Button } from "../button";
import { Popover } from "./popover.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Popover",
	component: Popover,
} satisfies Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render: (props) => (
		<Popover {...props}>
			<Popover.Trigger>
				<Button>Button</Button>
			</Popover.Trigger>
			<Popover.Dropdown>
				<div>Hello</div>
			</Popover.Dropdown>
		</Popover>
	),
	args: {
		onOpenChange: undefined,
	},
};
