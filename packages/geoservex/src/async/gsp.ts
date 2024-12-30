import type { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import type {
	NewWorkspaceInfoType,
	WorkspaceModelType,
	WorkspacesModelType,
} from "../models/index.js";
import { apiHandler } from "../utils/index.js";

export class AsyncGeoserveX {
	protected username: string;
	protected password: string;
	public url: string;
	public head: RawAxiosRequestHeaders;

	constructor(
		username = "admin",
		password = "geoserver",
		url = "http://127.0.0.1:8080/geoserver/rest/",
	) {
		this.username = username;
		this.password = password;
		this.url = url;
		this.head = {
			"Content-Type": "application/json",
			Accept: "application/json",
		};
	}

	private getAuthHeaders(): RawAxiosRequestHeaders {
		const credentials = btoa(`${this.username}:${this.password}`); // Base64
		return {
			...this.head,
			Authorization: `Basic ${credentials}`,
		};
	}

	public async getAllWorkspace() {
		const endpoint = `${this.url}workspaces`;
		const options: AxiosRequestConfig = {
			method: "GET",
			headers: this.getAuthHeaders(),
		};
		return apiHandler<WorkspacesModelType>(endpoint, options);
	}

	public async getWorkspace(workspace: string) {
		const endpoint = `${this.url}workspaces/${workspace}`;
		const options: AxiosRequestConfig = {
			method: "GET",
			headers: this.getAuthHeaders(),
		};
		return apiHandler<WorkspaceModelType>(endpoint, options);
	}

	public async createWorkspace(
		workspace: NewWorkspaceInfoType & { default: boolean },
	) {
		const endpoint = `${this.url}workspaces?default=${workspace.default}`;
		const options: AxiosRequestConfig = {
			method: "POST",
			headers: this.getAuthHeaders(),
			data: { workspace },
		};
		return apiHandler<unknown>(endpoint, options);
	}

	public async deleteWorkspace(workspaceName: string, recurse = false) {
		const endpoint = `${this.url}workspaces/${workspaceName}?recurse=${recurse}`;
		const options: AxiosRequestConfig = {
			method: "DELETE",
			headers: this.getAuthHeaders(),
		};
		return apiHandler<unknown>(endpoint, options);
	}
}
