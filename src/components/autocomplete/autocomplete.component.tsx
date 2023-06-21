import {
	ChangeEvent,
	HTMLProps,
	ReactNode,
	forwardRef,
	useId,
	useRef,
	useState,
} from "react";

import { Popover } from "../popover";
import { TextInput } from "../text-input";
import {
	FloatingFocusManager,
	FloatingPortal,
	autoUpdate,
	flip,
	offset,
	size,
	useDismiss,
	useFloating,
	useInteractions,
	useListNavigation,
	useRole,
} from "@floating-ui/react";
import clsx from "clsx";

type AutocompleteValue = {
	label: string;
	value: string;
	[key: string]: unknown;
};

export type AutocompleteProps<TValue extends AutocompleteValue> = {
	leftIcon?: ReactNode;
	endAdornment?: ReactNode;
	data: TValue[];
	label?: string;
	description?: string;
	name?: string;
	value?: TValue;
	error?: string;
	placeholder?: string;
	nothingFound?: string;
	onItemSubmit?: (value: string) => void;
	getOptionValue?: (item: TValue) => string;
	getOptionLabel?: (item: TValue) => string;
};

export function Autocomplete<TValue extends AutocompleteValue>({
	leftIcon,
	endAdornment,
	data,
	label,
	description,
	name,
	value,
	error,
	placeholder,
	nothingFound,
	onItemSubmit,
	getOptionLabel,
	getOptionValue,
}: AutocompleteProps<TValue>) {
	const [inputValue, setInputValue] = useState(
		value ? (getOptionLabel ? getOptionLabel(value) : value.label) : "",
	);
	const [selectedItem, setSelectedItem] = useState<TValue | null>(
		value || null,
	);
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const listRef = useRef<Array<HTMLElement | null>>([]);

	const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
		whileElementsMounted: autoUpdate,
		open,
		onOpenChange: setOpen,
		middleware: [
			offset(2),
			flip({ padding: 10 }),
			size({
				apply({ rects, availableHeight, elements }) {
					Object.assign(elements.floating.style, {
						width: `${rects.reference.width}px`,
						maxHeight: `${availableHeight}px`,
					});
				},
				padding: 10,
			}),
		],
	});

	const role = useRole(context, { role: "listbox" });
	const dismiss = useDismiss(context);
	const listNav = useListNavigation(context, {
		listRef,
		activeIndex,
		onNavigate: setActiveIndex,
		virtual: true,
		loop: true,
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
		[role, dismiss, listNav],
	);

	function onChange(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		setInputValue(value);

		if (value) {
			setOpen(true);
			setActiveIndex(0);
		} else {
			setOpen(false);
		}
	}

	const items = data.filter((item) =>
		item.label.toLowerCase().includes(inputValue.toLowerCase()),
	);

	return (
		<>
			{name && (
				<input
					type="hidden"
					name={name}
					value={
						selectedItem
							? getOptionValue
								? getOptionValue(selectedItem)
								: selectedItem.value
							: undefined
					}
				/>
			)}
			<TextInput
				icon={leftIcon}
				endAdornment={endAdornment}
				label={label}
				description={description}
				error={error}
				value={inputValue}
				{...getReferenceProps({
					ref: refs.setReference,
					onChange,
					value: inputValue,
					placeholder,
					"aria-autocomplete": "list",
					onClick() {
						setOpen(true);
					},
					onKeyDown(event) {
						if (
							event.key === "Enter" &&
							activeIndex != null &&
							items[activeIndex]
						) {
							const activeItem = items[activeIndex]!;

							setInputValue(
								getOptionLabel ? getOptionLabel(activeItem) : activeItem.label,
							);
							setSelectedItem(activeItem ?? null);
							onItemSubmit?.(
								getOptionValue ? getOptionValue(activeItem) : activeItem?.value,
							);
							setActiveIndex(null);
							setOpen(false);
						}
					},
				})}
			/>
			<FloatingPortal>
				{open && (nothingFound || items.length > 0) && (
					<FloatingFocusManager
						context={context}
						initialFocus={-1}
						visuallyHiddenDismiss
					>
						<div
							className="shadow-lg rounded-lg border-slate-100 border outline-none py-1"
							{...getFloatingProps({
								ref: refs.setFloating,
								style: {
									...floatingStyles,
									overflow: "auto",
								},
							})}
						>
							{items.length > 0 ? (
								items.map((item, index) => (
									<Item
										{...getItemProps({
											key: item.value,
											ref(node) {
												listRef.current[index] = node;
											},
											onClick() {
												setInputValue(
													getOptionLabel ? getOptionLabel(item) : item.label,
												);
												setSelectedItem(item);
												onItemSubmit?.(
													getOptionValue ? getOptionValue(item) : item.value,
												);
												setOpen(false);
												refs.domReference.current?.focus();
											},
										})}
										active={index === activeIndex}
									>
										{item.label}
									</Item>
								))
							) : (
								<Item active={false}>{nothingFound}</Item>
							)}
						</div>
					</FloatingFocusManager>
				)}
			</FloatingPortal>
		</>
	);
}

interface ItemProps {
	children: ReactNode;
	active: boolean;
}

const Item = forwardRef<HTMLDivElement, ItemProps & HTMLProps<HTMLDivElement>>(
	({ children, active, ...rest }, ref) => {
		const id = useId();
		return (
			<div
				ref={ref}
				role="option"
				id={id}
				aria-selected={active}
				className="py-0.5 px-1.5"
				{...rest}
			>
				<div
					className={clsx(
						"py-2 pr-2.5 pl-2 rounded-md flex sm:text-sm gap-2 font-medium text-slate-800",
						active && "bg-slate-50",
					)}
				>
					{children}
				</div>
			</div>
		);
	},
);
