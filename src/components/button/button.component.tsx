import { Loader } from "../loader";
import { buttonStyles } from "./button.styles";
import { UILiteralSize } from "@/types";
import { PolymorphicComponentProps, PolymorphicRef } from "@/utils";
import {
	ComponentPropsWithoutRef,
	ElementType,
	ReactNode,
	forwardRef,
} from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";

export type ButtonProps = {
	variant?: ButtonVariant;
	loading?: boolean;
	fullWidth?: boolean;
	leftIcon?: ReactNode;
	size?: UILiteralSize;
	rightIcon?: ReactNode;
	destructive?: boolean;
	children?: ReactNode;
	className?: string;
};

export const Button = forwardRef(
	<TElement extends ElementType>(
		{
			loading,
			children,
			fullWidth,
			leftIcon,
			rightIcon,
			className,
			destructive,
			component,
			size = "sm",
			variant = "primary",
			...props
		}: PolymorphicComponentProps<TElement, ButtonProps>,
		ref: PolymorphicRef<TElement>,
	) => {
		const Component: ElementType = component || "button";

		const {
			root,
			wrapper,
			leftContent,
			rightIcon: rightIconStyle,
			content,
			loader,
		} = buttonStyles({
			variant,
			destructive,
			size,
			fullWidth,
		});

		return (
			<Component
				{...props}
				ref={ref}
				className={root({ className })}
				disabled={loading || ("disabled" in props && props.disabled)}
				type={
					Component === "button"
						? (props as ComponentPropsWithoutRef<"button">).type || "button"
						: undefined
				}
			>
				<div className={wrapper()}>
					{(loading || leftIcon) && (
						<div className={leftContent()}>
							{loading ? <Loader size="xs" className={loader()} /> : leftIcon}
						</div>
					)}
					<span className={content()}>{children}</span>
					{rightIcon && <div className={rightIconStyle()}>{rightIcon}</div>}
				</div>
			</Component>
		);
	},
);

Button.displayName = "Button";
