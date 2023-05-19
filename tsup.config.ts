import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  splitting: true,
  sourcemap: false,
  treeshake: true,
  minify: true,
  format: ["cjs", "esm"],
  dts: true,
});
