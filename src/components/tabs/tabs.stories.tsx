import { Tabs } from "./tabs.component";
import { Meta, StoryObj } from "@storybook/react";
import { Link, MemoryRouter, useParams } from "react-router-dom";

export default {
	title: "Tabs",
	component: Tabs,
	decorators: [
		// eslint-disable-next-line @typescript-eslint/naming-convention
		(Story) => {
			return (
				<MemoryRouter initialEntries={["/", "/1", "/2", "/3"]}>
					<Story />
				</MemoryRouter>
			);
		},
	],
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;
type ExtractStoryProps<T> = T extends StoryObj<infer P> ? P : never;

function StoryComponent(props: ExtractStoryProps<Story>) {
	const params = useParams<"id">();
	return (
		<div>
			<Tabs {...props}>
				<Tabs.List>
					<Tabs.Tab component={Link} to="/1" value="/1">
						Tab 1
					</Tabs.Tab>
					<Tabs.Tab value="/2" component={Link} to="/2">
						Tab 2
					</Tabs.Tab>
					<Tabs.Tab value="/3" disabled component={Link} to="/3">
						Tab 3
					</Tabs.Tab>
				</Tabs.List>
			</Tabs>
			{params.id}
		</div>
	);
}

export const Default: Story = {
	render: StoryComponent,
};
