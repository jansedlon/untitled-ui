import { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "./toggle.component";

export default {
	title: "Toggle",
	component: Toggle,
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col space-y-4">
			<Toggle label="Label" />
			<Toggle disabled label="Label" />
			<Toggle
				description="Save my login details for next time."
				label="Remember me"
			/>
			<Toggle
				description="Save my login details for next time."
				error="This field is required"
				label="Remember me"
			/>
			<Toggle
				defaultChecked
				disabled
				description="Save my login details for next time."
				error="This field is required"
				label="Remember me"
			/>
		</div>
	),
};
