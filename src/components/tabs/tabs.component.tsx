import { tabStyle, tabsStyle } from "./tabs.styles";
import { PolymorphicComponentProps } from "@/utils";
import { AriaTabListProps, useTab, useTabList } from "@react-aria/tabs";
import { type Node, Orientation } from "@react-types/shared";
import React, { ElementType, ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
import { Item, TabListState, useTabListState } from "react-stately";

export type TabsProps = AriaTabListProps<object> & {
	tabComponent?: ElementType;
};

const tabsClassName = tabsStyle();

export function Tabs(props: TabsProps) {
	const state = useTabListState(props);
	const ref = useRef<HTMLDivElement>(null);
	const { tabListProps } = useTabList(props, state, ref);

	return (
		<div ref={ref} {...tabListProps} className={tabsClassName}>
			{[...state.collection].map((tab) => (
				<VisualTab
					key={tab.key}
					item={tab}
					state={state}
					orientation={props.orientation}
				/>
			))}
		</div>
	);
}

type VisualTabProps = {
	key: React.Key;
	item: Node<object>;
	state: TabListState<object>;
	orientation?: Orientation;
};

function VisualTab({ item, state, ...rest }: VisualTabProps) {
	const { key, rendered } = item;
	const ref = useRef(null);
	const { tabProps, isSelected } = useTab({ key }, state, ref);

	const style = tabStyle({ selected: isSelected });

	return (
		<div {...tabProps} ref={ref} className={style} {...rest}>
			{rendered}
		</div>
	);
}
