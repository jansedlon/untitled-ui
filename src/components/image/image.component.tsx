import { imageStyles } from "./image.styles";
import { useDidUpdate } from "@/hooks";
import { IconPhoto } from "@tabler/icons-react";
import { ReactNode, forwardRef, useState } from "react";
import type React from "react";

type ImageProps = Omit<React.JSX.IntrinsicElements["div"], "placeholder"> & {
	placeholder?: ReactNode;
	withPlaceholder?: boolean;
	src?: string | null;
	width?: number;
	alt?: string;
	height?: number;
	fit?: React.CSSProperties["objectFit"];
	imageProps?: React.JSX.IntrinsicElements["img"];
	imageRef?: React.ForwardedRef<HTMLImageElement>;
};

const styles = imageStyles();

export const Image = forwardRef<HTMLImageElement, ImageProps>(
	(
		{
			src,
			withPlaceholder,
			style,
			placeholder,
			className,
			imageProps,
			alt,
			width = "100%",
			fit = "cover",
			height = "auto",
			...props
		},
		ref,
	) => {
		const [error, setError] = useState(!src);
		const isPlaceholder = withPlaceholder && error;

		useDidUpdate(() => {
			if (!src) {
				setError(true);
			}
		}, [src]);

		return (
			<div
				ref={ref}
				style={{ width, ...style }}
				{...props}
				className={styles.root({ className })}
			>
				<figure className={styles.figure()}>
					<div className={styles.container()}>
						{/* rome-ignore lint/a11y/useAltText: <explanation> */}
						<img
							alt={alt}
							className={styles.image({ className: imageProps?.className })}
							ref={ref}
							src={src ?? undefined}
							{...imageProps}
							style={{ objectFit: fit, width, height, ...imageProps?.style }}
							onError={(errorEvent) => {
								setError(true);
								props.onError?.(errorEvent);
							}}
						/>
						{isPlaceholder && (
							<div
								className={styles.placeholderContainer({ className })}
								title={alt}
							>
								{placeholder || <IconPhoto className={styles.placeholder()} />}
							</div>
						)}
					</div>
				</figure>
			</div>
		);
	},
);
