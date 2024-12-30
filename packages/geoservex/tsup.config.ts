import { defineConfig } from "tsup";
import type { Options } from "tsup";

const commonConfig: Options = {
	clean: true,
	dts: true,
	minify: true,
	splitting: false,
	treeshake: true,
	tsconfig: "tsconfig.json",
};

export default defineConfig((options) => {
	const isWatchMode = !!options.watch;

	return [
		// Browser/ESM build
		{
			...commonConfig,
			entry: ["src/**/**.ts", "!src/**/*.test.*"],
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
		// Node.js/CJS build
		{
			...commonConfig,
			entry: ["src/**/**.ts", "!src/**/*.test.*"],
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
	];
});
