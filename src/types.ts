import React from "react";

export type UILiteralSize = "xs" | "sm" | "md" | "lg" | "xl";
export type UISize = UILiteralSize | (string & {});
export type UINumberSize = UISize | number | (string & {});
export type UISizes = Record<UISize, string>;
