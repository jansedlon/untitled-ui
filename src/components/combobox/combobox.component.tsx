import { ComboBoxProps as BaseProps } from "@react-types/combobox";
import { IconChevronDown } from "@tabler/icons-react";
import clsx from "clsx";
import { ReactNode, useRef } from "react";
import { useComboBoxState } from "react-stately";

import { Popover } from "../popover";

import { ListBox } from "./listbox.component";

export { Item } from "react-stately";

export type ComboBoxProps<TValue extends object> = BaseProps<TValue> & {
	leftIcon?: ReactNode;
	endAdornment?: ReactNode;
};

export function ComboBox<TValue extends object>(props: ComboBoxProps<TValue>) {
	const { contains } = useFilter({ sensitivity: "base" });
	const state = useComboBoxState({
		shouldCloseOnBlur: true,
		menuTrigger: "focus",
		...props,
		defaultFilter: contains,
	});

	const buttonRef = useRef<HTMLButtonElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const listBoxRef = useRef<HTMLUListElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const inputContainerRef = useRef<HTMLDivElement>(null);

	const {
		buttonProps: triggerProps,
		inputProps,
		listBoxProps,
		labelProps,
	} = useComboBox(
		{ ...props, inputRef, buttonRef, listBoxRef, popoverRef },
		state,
	);

	const { buttonProps } = useButton(triggerProps, buttonRef);

	return (
		<div className="inline-flex flex-col relative" ref={containerRef}>
			{props.label && (
				<label {...labelProps} className="block text-left mb-1.5">
					{props.label}
					{props.isRequired && (
						<span aria-hidden="true" className="text-red-500">
							&nbsp;*
						</span>
					)}
				</label>
			)}
			<div className="relative flex items-center" ref={inputContainerRef}>
				{props.leftIcon && (
					<div className="pointer-events-none absolute bottom-0 left-0 top-0 z-[2] flex w-9 items-center justify-center text-slate-500">
						{props.leftIcon}
					</div>
				)}
				<input
					{...inputProps}
					className={clsx(
						"flex-grow-1 z-[1] h-10 w-full rounded-lg border px-3 py-2 shadow-sm focus:outline-none focus:ring-4 disabled:pointer-events-none disabled:select-none disabled:bg-slate-50 disabled:text-slate-500 sm:text-sm sm:leading-6 [&[data-with-end-adornment='true']]:rounded-r-none [&[data-with-icon='true']]:pl-8",
						{
							"border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-slate-300 focus:ring-slate-100":
								!props.errorMessage,
							"border-red-300 text-red-900 placeholder:text-red-300 focus:ring-red-100":
								!!props.errorMessage,
						},
					)}
					data-with-end-adornment={!!props.endAdornment}
					data-with-icon={!!props.leftIcon}
					ref={inputRef}
				/>
				{props.endAdornment && (
					<div className="z-0 flex h-10 flex-grow-0 items-center justify-center rounded-lg rounded-l-none shadow-sm [&>*]:h-full [&>*]:rounded-l-none">
						{props.endAdornment}
					</div>
				)}
				<button
					{...buttonProps}
					className="absolute bottom-0 right-0 top-0 z-[2] flex w-9 items-center justify-center text-slate-500"
					ref={buttonRef}
					type="button"
				>
					<IconChevronDown size={16} />
				</button>
			</div>
			{props.errorMessage && (
				<div className="flex flex-col">
					<p className="text-xs text-red-500">{props.errorMessage}</p>
				</div>
			)}

			{state.isOpen && (
				<Popover
					isNonModal
					unstyled
					placement="bottom start"
					style={{
						width: inputContainerRef.current?.offsetWidth,
					}}
					popoverRef={popoverRef}
					state={state}
					triggerRef={inputRef}
				>
					<ListBox {...listBoxProps} listBoxRef={listBoxRef} state={state} />
				</Popover>
			)}
		</div>
	);
}
