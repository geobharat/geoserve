import type { GSReponseEnum, GSResponseCode } from "./enums";
import { apiResponse } from "./enums";

export type ResponseType<T> = Promise<
	| {
		message: GSReponseEnum;
		data: null;
		status_code: GSResponseCode;
	}
	| {
		message: GSReponseEnum._200;
		data: T;
		status_code: GSResponseCode._200;
	}
>


export async function apiHandler<T>(
	url: string,
	options: RequestInit = {},
): ResponseType<T> {
	const response = await fetch(url, options);

	if (!response.ok) {
		const status = `_${response.status}` as keyof typeof GSResponseCode;
		return apiResponse(status, null);
	}

	const data = await response.json();
	return apiResponse("_200", data as T);
}
