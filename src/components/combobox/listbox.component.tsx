/* eslint-disable @typescript-eslint/no-use-before-define */
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { Node } from "@react-types/shared";
import { IconCheck } from "@tabler/icons-react";
import clsx from "clsx";
import * as React from "react";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import type { ListState } from "react-stately";

interface ListBoxProps extends AriaListBoxOptions<unknown> {
	listBoxRef?: React.RefObject<HTMLUListElement>;
	state: ListState<unknown>;
}

interface SectionProps {
	section: Node<unknown>;
	state: ListState<unknown>;
}

interface OptionProps {
	item: Node<unknown>;
	state: ListState<unknown>;
}

export function ListBox(props: ListBoxProps) {
	const ref = React.useRef<HTMLUListElement>(null);
	const { listBoxRef = ref, state } = props;
	const { listBoxProps } = useListBox(props, state, listBoxRef);

	return (
		<ul
			{...listBoxProps}
			className="mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 font-medium shadow-[0_4px_6px_-2px_theme(colors.slate.100),0_12px_16px_-4px_theme(colors.slate.100)] ring-1 ring-slate-200 focus:outline-none"
			ref={listBoxRef}
		>
			{[...state.collection].map((item) =>
				item.type === "section" ? (
					<ListBoxSection key={item.key} section={item} state={state} />
				) : (
					<Option item={item} key={item.key} state={state} />
				),
			)}
		</ul>
	);
}

function ListBoxSection({ section, state }: SectionProps) {
	const { itemProps, headingProps, groupProps } = useListBoxSection({
		heading: section.rendered,
		"aria-label": section["aria-label"],
	});

	return (
		<li {...itemProps} className="pt-2">
			{section.rendered && (
				<span
					{...headingProps}
					className="text-xs font-bold uppercase text-gray-500 mx-3"
				>
					{section.rendered}
				</span>
			)}
			<ul {...groupProps}>
				{[...section.childNodes].map((node) => (
					<Option item={node} key={node.key} state={state} />
				))}
			</ul>
		</li>
	);
}

function Option({ item, state }: OptionProps) {
	const ref = React.useRef<HTMLLIElement>(null);
	const { optionProps, isDisabled, isSelected, isFocused } = useOption(
		{
			key: item.key,
		},
		state,
		ref,
	);

	return (
		<li
			{...optionProps}
			className="group cursor-default select-none px-1.5 py-0.5"
			ref={ref}
		>
            <div className={clsx(
                "relative flex w-full items-center gap-2 rounded-md p-2.5 text-sm ",
                {
                    "bg-slate-50": isFocused || isSelected,
                    "text-slate-300": isDisabled,
                }
                )}>

			{item.rendered}
			{isSelected && (
				<span className="pointer-events-none absolute inset-y-0 right-0 items-center pr-2 flex">
                <IconCheck
                    aria-hidden="true"
                    className="h-5 w-5 text-slate-500"
                />
            </span>
			)}
            </div>
		</li>
	);
}
