export type WorkspaceInBulkType = {
	name: string;
	href: string;
};

export type WorkspaceDictType = {
	workspace: WorkspaceInBulkType[];
};

export type WorkspacesModelType = {
	workspaces: WorkspaceDictType;
};

export type SingleWorkspaceType = {
	name: string;
	isolated: boolean;
	dateCreated?: string;
	dataStores: string;
	coverageStores: string;
	wmsStores: string;
	wmtsStores: string;
};

export type WorkspaceModelType = {
	workspace: SingleWorkspaceType;
};

export type NewWorkspaceInfoType = {
	name: string;
	isolated?: boolean;
};

export type NewWorkspaceType = {
	workspace: NewWorkspaceInfoType;
};
