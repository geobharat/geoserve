import { describe, it, expect, vi } from "vitest";
import { AsyncGeoserveX } from "./gsp.js";
import { apiResponse } from "../utils/index.js";
import { WorkspacesModelType } from "../models/index.js";
import { apiHandler } from "../utils/httpHandler.js";


vi.mock("../utils/httpHandler", () => ({
    apiHandler: vi.fn()
}));

describe("AsyncGeoserveX", () => {
    it("should fetch all workspaces", async () => {

        const mockData: WorkspacesModelType = {
            workspaces: {
                workspace: [
                    { name: "workspace1", href: "" },
                    { name: "workspace2", href: "" },
                ],
            },
        };
        const mockResponse = apiResponse("_200", mockData);

       
        const mockApiHandler = vi.mocked(apiHandler);
        mockApiHandler.mockResolvedValueOnce(mockResponse);

        const username = "admin";
        const password = "geoserver";
        const credentials = btoa(`${username}:${password}`);
        const geoserve = new AsyncGeoserveX();


        const result = await geoserve.getAllWorkspace();

        expect(mockApiHandler).toHaveBeenCalledTimes(1);
        expect(mockApiHandler).toHaveBeenCalledWith(
            "http://127.0.0.1:8080/geoserver/rest/workspaces",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Basic ${credentials}`,
                },
            }
        );
        expect(result).toEqual(mockResponse);
    });
});