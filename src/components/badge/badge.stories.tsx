import { Meta, StoryObj } from "@storybook/react";
import { IconBrandStripe } from "@tabler/icons-react";

import { Badge } from "@/components";

export default {
	title: "Badge",
	component: Badge,
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4">
				<Badge color="primary" size="sm">
					Label
				</Badge>
				<Badge color="primary" size="md">
					Label
				</Badge>
				<Badge color="primary" size="lg">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="red" size="sm">
					Label
				</Badge>
				<Badge color="red" size="md">
					Label
				</Badge>
				<Badge color="red" size="lg">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="blue" size="sm">
					Label
				</Badge>
				<Badge color="blue" size="md">
					Label
				</Badge>
				<Badge color="blue" size="lg">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="yellow" size="sm">
					Label
				</Badge>
				<Badge color="yellow" size="md">
					Label
				</Badge>
				<Badge color="yellow" size="lg">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="green" size="sm">
					Label
				</Badge>
				<Badge color="green" size="md">
					Label
				</Badge>
				<Badge color="green" size="lg">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="primary" size="sm" variant="outlined">
					Label
				</Badge>
				<Badge color="primary" size="md" variant="outlined">
					Label
				</Badge>
				<Badge color="primary" size="lg" variant="outlined">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="red" size="sm" variant="outlined">
					Label
				</Badge>
				<Badge color="red" size="md" variant="outlined">
					Label
				</Badge>
				<Badge color="red" size="lg" variant="outlined">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="blue" size="sm" variant="outlined">
					Label
				</Badge>
				<Badge color="blue" size="md" variant="outlined">
					Label
				</Badge>
				<Badge color="blue" size="lg" variant="outlined">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="yellow" size="sm" variant="outlined">
					Label
				</Badge>
				<Badge color="yellow" size="md" variant="outlined">
					Label
				</Badge>
				<Badge color="yellow" size="lg" variant="outlined">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge color="green" size="sm" variant="outlined">
					Label
				</Badge>
				<Badge color="green" size="md" variant="outlined">
					Label
				</Badge>
				<Badge color="green" size="lg" variant="outlined">
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge
					color="green"
					leftSection={<IconBrandStripe size={16} />}
					size="sm"
					variant="filled"
				>
					Label
				</Badge>
				<Badge
					color="green"
					rightSection={<IconBrandStripe size={16} />}
					size="md"
					variant="filled"
				>
					Label
				</Badge>
				<Badge
					color="green"
					leftSection={<IconBrandStripe size={16} />}
					rightSection={<IconBrandStripe size={16} />}
					size="lg"
					variant="filled"
				>
					Label
				</Badge>
			</div>
			<div className="flex gap-4">
				<Badge
					color="green"
					leftSection={<IconBrandStripe size={16} />}
					size="sm"
					variant="outlined"
				>
					Label
				</Badge>
				<Badge
					color="green"
					rightSection={<IconBrandStripe size={16} />}
					size="md"
					variant="outlined"
				>
					Label
				</Badge>
				<Badge
					color="green"
					leftSection={<IconBrandStripe size={16} />}
					rightSection={<IconBrandStripe size={16} />}
					size="lg"
					variant="outlined"
				>
					Label
				</Badge>
			</div>
		</div>
	),
};
