import * as RadixAvatar from "@radix-ui/react-avatar";
import {
	ComponentPropsWithoutRef,
	ReactNode,
	forwardRef,
	useEffect,
	useState,
} from "react";

import { AvatarPlaceholderIcon } from "./avatar-placeholder-icon.component";
import { avatarSizes, avatarStyles } from "./avatar.styles";
import { UINumberSize } from "@/types";
export type AvatarProps = Omit<ComponentPropsWithoutRef<"img">, "src"> & {
	size?: UINumberSize | "2xl";
	src?: string | null;
	children?: ReactNode;
};

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
	({ size = "sm", className, style, src, children, ...rest }, ref) => {
		const [_error, setError] = useState(!src);

		// @ts-ignore
		const styles = avatarStyles({ size });

		useEffect(() => {
			if (src) {
				setError(false);
			} else {
				setError(true);
			}
		}, [src]);

		return (
			<RadixAvatar.Root
				className={styles.root({ className })}
				style={{
					...style,
					...(size in avatarSizes ? {} : { width: size, height: size }),
				}}
			>
				<RadixAvatar.Image
					className={styles.image()}
					src={src ?? undefined}
					ref={ref}
					{...rest}
				/>
				<RadixAvatar.AvatarFallback
					className={styles.placeholderContainer()}
					title={rest.alt}
				>
					{children ?? (
						<AvatarPlaceholderIcon className={styles.placeholder()} />
					)}
				</RadixAvatar.AvatarFallback>
			</RadixAvatar.Root>
		);
	},
);
