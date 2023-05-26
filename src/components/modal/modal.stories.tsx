import { Modal } from "./modal.component";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Modal",
	component: Modal,
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: (props) => (
		<>
			bg text
			<Modal {...props} />
		</>
	),
	args: {
		opened: true,
		centered: false,
		onClose: () => {},
		title: "Title",
		withCloseButton: true,
		size: "sm",
		children: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
	},
};
