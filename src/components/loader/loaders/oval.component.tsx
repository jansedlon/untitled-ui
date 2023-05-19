type LoaderProps = JSX.IntrinsicElements["svg"] & {
  size: number | string;
  color: string;
};

export function Oval({
  size,
  color = "#fff",
  className,
  ...others
}: LoaderProps) {
  return (
    <svg
      className={className || "text-slate-700"}
      height={size}
      stroke={color}
      strokeLinecap="round"
      viewBox="0 0 38 38"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <g fill="none" fillRule="evenodd">
        <g strokeWidth="5" transform="translate(2.5 2.5)">
          <circle cx="16" cy="16" r="16" strokeOpacity=".5" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              dur="1s"
              from="0 16 16"
              repeatCount="indefinite"
              to="360 16 16"
              type="rotate"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}
