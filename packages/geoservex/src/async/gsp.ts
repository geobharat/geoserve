import type {
	NewWorkspaceInfoType,
	WorkspaceModelType,
	WorkspacesModelType,
} from "../models/index";
import { apiHandler } from "../utils/index";

interface Request extends RequestInit {
	method: "GET" | "POST" | "DELETE" | "PUT";
}

export class AsyncGeoserveX {
	protected username: string;
	protected password: string;
	public url: string;
	public head: Record<string, string>;

	constructor(
		username = "admin",
		password = "geoserver",
		url = "http://127.0.0.1:8080/geoserver/rest/",
	) {
		this.username = username;
		this.password = password;
		this.url = url;
		this.head = {
			"content-type": "application/json",
			accept: "application/json",
		};
	}

	private getAuthHeaders(): HeadersInit {
		const credentials = btoa(`${this.username}:${this.password}`); // Base64
		return {
			...this.head,
			Authorization: `Basic ${credentials}`,
		};
	}

	public async getAllWorkspace() {
		const endpoint = `${this.url}workspaces`;
		const options: Request = {
			method: "GET",
			headers: this.getAuthHeaders(),
		};
		return apiHandler<WorkspacesModelType>(endpoint, options);
	}

	public async getWorkspace(workspace: string) {
		const endpoint = `${this.url}workspaces/${workspace}`;
		const options: Request = {
			method: "GET",
			headers: this.getAuthHeaders(),
		};

		const result = apiHandler<WorkspaceModelType>(endpoint, options);
		return result;
	}

	public async createWorkspace(
		workspace: NewWorkspaceInfoType & { default: boolean },
	) {
		const endpoint = `${this.url}workspaces?default=${workspace.default}`;

		const options: Request = {
			method: "POST",
			headers: this.getAuthHeaders(),
			body: JSON.stringify({ workspace }),
		};

		return apiHandler<unknown>(endpoint, options);
	}

	public async deconsteWorkspace(workspaceName: string, recurse = false) {
		const endpoint = `${this.url}workspaces/${workspaceName}?recurse=${recurse}`;

		const options: Request = {
			method: "DELETE",
			headers: this.getAuthHeaders(),
		};

		return apiHandler<unknown>(endpoint, options);
	}
}
