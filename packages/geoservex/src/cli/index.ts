#!/bin/env node

import { printTable } from "console-table-printer";
import { AsyncGeoserveX } from "../async/index.js";
import { helpers, termost } from "termost";

const geoserver = new AsyncGeoserveX();

const program = termost({
	name: "geoserve",
	description: "CLI description",
	version: "1.0.0",
	onException(error) {
		console.error(`Error logic ${error.message}`);
	},
	onShutdown() {
		console.log("Clean-up logic");
	},
});

program
	.command({
		name: "workspaces",
		description:
			"A custom command example runnable via `bin-name build` (command help available via `bin-name build --help`)",
	})
	.task({
		label: "Fetching Workspaces",
		async handler() {
			const response = await geoserver.getAllWorkspace();

			helpers.message(JSON.stringify(response.message), { type: "success" });

			// response.data!.workspaces.workspace

			if (response.data !== null) {
				printTable(response.data?.workspaces.workspace || []);
			}
		},
	});
