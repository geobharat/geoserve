import { defineConfig } from "tsup";
import type { Options } from "tsup";

const commonConfig: Options = {
	clean: true,
	dts: true,
	minify: true,
	splitting: true,
	treeshake: true,
	tsconfig: "tsconfig.json",
};

export default defineConfig((options) => {
	const isWatchMode = !!options.watch;

	return [
		{
			...commonConfig,
			entry: ["src/**/**.ts", "!src/**/*.test.*", "!src/cli/**.ts"],
			format: ["esm"],
			platform: "browser",
			target: "es2020",
			outDir: "dist/esm",
			bundle: true,
			noExternal: ["axios"],
			esbuildOptions(options) {
				options.conditions = ["browser", "import"];
			},
			minify: !isWatchMode,
			treeshake: !isWatchMode,
		},

		{
			...commonConfig,
			entry: ["src/**/**.ts", "!src/**/*.test.*", "!src/cli/**.ts"],
			format: ["cjs"],
			platform: "node",
			outDir: "dist/cjs",
			bundle: true,
			noExternal: ["axios"],
			esbuildOptions(options) {
				options.conditions = ["node", "require"];
			},
			minify: !isWatchMode,
			treeshake: !isWatchMode,
		},

		{
			outDir: "dist/cli",
			bundle: true,
			entry: ["src/cli/index.ts"],
			noExternal: ["axios", "termost", "console-table-printer"],
			platform: "node",
			minify: true,
		},
	];
});
