import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/**/**.ts", "!src/**/*.test.*"],
	clean: true,
	splitting: false,
	format: ["esm", "cjs"],
	dts: true,
});
