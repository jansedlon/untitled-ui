import { ReactNode } from "react";
import clsx from "clsx";

export function ButtonGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex [&>:first-of-type]:rounded-r-none [&>:last-of-type]:rounded-l-none [&>:not(:first-of-type):not(:last-of-type)]:rounded-none",
        className,
      )}
    >
      {children}
    </div>
  );
}
