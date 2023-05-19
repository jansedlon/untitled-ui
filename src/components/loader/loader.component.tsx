import { Oval } from "./loaders/oval.component";
import { UINumberSize } from "../../types";
import { getSize } from "../../utils";

export type LoaderProps = JSX.IntrinsicElements["svg"] & {
  size?: UINumberSize;
  color?: string;
};

const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export function Loader({
  className,
  size = "md",
  color = "currentColor",
  ...props
}: LoaderProps) {
  return (
    <Oval
      className={className}
      color={color}
      size={getSize({ size, sizes })}
      {...props}
    />
  );
}
