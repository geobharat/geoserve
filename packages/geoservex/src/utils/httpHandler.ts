import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { GSReponseEnum, GSResponseCode } from "./enums.js";
import { apiResponse } from "./enums.js";

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
>;

export async function apiHandler<T>(
	url: string,
	config: AxiosRequestConfig = {},
): Promise<ResponseType<T>> {
	try {
		const response: AxiosResponse<T> = await axios({ url, ...config });

		return apiResponse("_200", response.data);
	} catch (error) {
		//@ts-ignore
		const statusCode = (error)?.response?.status || 500;
		const status = `_${statusCode}` as keyof typeof GSResponseCode;

		return apiResponse(status, null);
	}
}
