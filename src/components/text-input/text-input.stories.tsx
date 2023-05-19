import { Button } from "../button";
import { TextInput, TextInputProps } from "./text-input.component";
import { Meta, StoryObj } from "@storybook/react";
import { IconCopy, IconHelpCircle } from "@tabler/icons-react";

export default {
	title: "TextInput",
	component: TextInput,
} satisfies Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Default: Story = {
	render: () => (
		<div className="grid grid-cols-4 gap-4">
			<TextInput label="Value" defaultValue="Value" />
			<TextInput
				errorMessage={"Something went wrong"}
				label="Error"
				defaultValue="Error"
			/>
			<TextInput description="Hint" label="Hint" placeholder="Placeholder" />
			<TextInput
				isDisabled
				description="Hint"
				label="Disabled"
				defaultValue="Disabled"
			/>
			<TextInput
				description="Hint"
				icon={<IconHelpCircle className="h-4 w-4" />}
				label="Icon"
				defaultValue="Icon"
			/>
			<TextInput
				endAdornment={
					<Button
						className="rounded-l-none border-l-0"
						leftIcon={<IconCopy className="h-5 w-5" />}
						variant="secondary"
					>
						Copy
					</Button>
				}
				description="Hint"
				icon={<IconHelpCircle className="h-4 w-4" />}
				label="End adornment"
				defaultValue="End adornment"
			/>
		</div>
	),
};
