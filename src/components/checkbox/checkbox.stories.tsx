import { Meta, StoryObj } from "@storybook/react";

import type { CheckboxProps } from "./checkbox.component";
import { Checkbox } from "./checkbox.component";

export default {
	title: "Checkbox",
	component: Checkbox,
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
	render: () => (
		<form className="flex flex-col space-y-4">
			<Checkbox label="LAbel" />
			<Checkbox disabled label="Label" />
			<Checkbox
				description="description"
				name="name"
				error="Error"
				label="Label"
			/>
			<Checkbox defaultChecked description="description" label="Label" />
			<Checkbox
				defaultChecked
				disabled
				description="description"
				label="Label"
			/>
		</form>
	),
};
