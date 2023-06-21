import { ModalContext, useModalContext } from "./modal.context";
import { modalSizes, modalStyles } from "./modal.styles";
import { DialogOptions, useDialog } from "./use-dialog.hook";
import { ClassNames, UINumberSize } from "@/types";
import {
	FloatingFocusManager,
	FloatingOverlay,
	FloatingPortal,
	useMergeRefs,
} from "@floating-ui/react";
import { IconX } from "@tabler/icons-react";
import type React from "react";
import { HTMLProps, ReactNode, forwardRef } from "react";

export type ModalProps = Omit<DialogOptions, "initialOpen" | "onOpenChange"> & {
	opened: boolean;
	onClose: () => void;
	children: ReactNode;
	centered?: boolean;
	withCloseButton?: boolean;
	title?: string;
	classNames?: ClassNames<typeof modalStyles>;
	size?: UINumberSize;
};

type ModalComponent = ReturnType<
	typeof forwardRef<
		HTMLDivElement,
		ModalProps & Omit<HTMLProps<HTMLDivElement>, "size">
	>
> & {
	Title: (props: HTMLProps<HTMLHeadingElement>) => React.JSX.Element;
};

// @ts-ignore
export const Modal: ModalComponent = forwardRef(
	(
		{
			children,
			opened,
			onClose,
			centered,
			title,
			classNames,
			size = "sm",
			withCloseButton = true,
			...props
		},
		propRef,
	) => {
		const styles = modalStyles({ centered, withTitle: !!title, size });

		const modal = useDialog({
			opened,
			initialOpen: opened,
			onOpenChange: (o) => {
				if (!o) onClose();
			},
		});
		const ref = useMergeRefs([modal.context.refs.setFloating, propRef]);

		if (!modal.context.open) return null;

		return (
			<FloatingPortal>
				<FloatingOverlay
					lockScroll
					className={styles.overlay({ className: classNames?.overlay })}
				/>
				<FloatingFocusManager context={modal.context}>
					<ModalContext.Provider value={{ styles }}>
						<div
							ref={ref}
							aria-labelledby={modal.labelId}
							aria-describedby={modal.descriptionId}
							className={styles.inner({ className: classNames?.inner })}
							{...modal.getFloatingProps(props)}
						>
							<section
								className={styles.content({ className: classNames?.content })}
								style={{
									...(typeof size === "string" && size in modalSizes
										? undefined
										: { width: size as string | number }),
								}}
							>
								{(title || withCloseButton) && (
									<div
										className={styles.header({ className: classNames?.header })}
									>
										{title && <Modal.Title>{title}</Modal.Title>}
										{withCloseButton && (
											<button
												className={styles.closeButton({
													className: classNames?.closeButton,
												})}
												type="button"
												onClick={() => modal.setOpen(false)}
											>
												<IconX size={16} />
											</button>
										)}
									</div>
								)}
								<div className={styles.body({ className: classNames?.body })}>
									{children}
								</div>
							</section>
						</div>
					</ModalContext.Provider>
				</FloatingFocusManager>
			</FloatingPortal>
		);
	},
);

Modal.Title = (props: HTMLProps<HTMLHeadingElement>) => {
	const context = useModalContext();

	return (
		<h2
			{...props}
			className={context.styles.title({ className: props.className })}
		/>
	);
};
