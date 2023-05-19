import React from "react";
import { UINumberSize } from "./types";

type ExtendedProps<Props = {}, OverrideProps = {}> = OverrideProps &
  Omit<Props, keyof OverrideProps>;

type ElementType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<
  C,
  React.ComponentPropsWithoutRef<C>
>;

type ComponentProp<C> = {
  component?: C;
};

type InheritedProps<C extends ElementType, Props = {}> = ExtendedProps<
  PropsOf<C>,
  Props
>;

export type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>["ref"]
  : never;

export type PolymorphicComponentProps<
  C,
  Props = {},
> = C extends React.ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: React.ElementType };

export function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>,
>(component: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>;

  type _PolymorphicComponent = <C = ComponentDefaultType>(
    props: ComponentProps<C>,
  ) => React.ReactElement;

  type ComponentProperties = Omit<
    React.FunctionComponent<ComponentProps<any>>,
    never
  >;

  type PolymorphicComponent = _PolymorphicComponent &
    ComponentProperties &
    StaticComponents;

  return component as PolymorphicComponent;
}

export function getSize<
  Sizes extends Record<string, any>,
  Key extends keyof Sizes,
  Size extends UINumberSize,
>({
  size,
  sizes,
}: {
  size: Size;
  sizes: Sizes;
}): Size extends Key ? Sizes[Size] : Size extends number ? string : Size {
  if (size in sizes) {
    return sizes[size as any];
  }

  if (typeof size === "number") {
    return `${size}px` as any;
  }

  return (size as any) || sizes.md;
}

export function isElement(value: any): value is React.ReactElement {
  if (Array.isArray(value) || value === null) return false;

  if (typeof value === "object") {
    if (value.type === React.Fragment) return false;

    return true;
  }

  return false;
}
