export enum GSResponseCode {
	_404 = 404,
	_403 = 403,
	_401 = 401,
	_500 = 500,
	_201 = 201,
	_200 = 200,
	_204 = 204,
	_400 = 400,
	_409 = 409,
	_503 = 503,
}

export enum GSReponseEnum {
	_404 = "Result not found",
	_403 = "Forbidden Request",
	_401 = "Unauthorized request",
	_500 = "Internal Server error",
	_201 = "Data added successfully",
	_200 = "Executed successfully",
	_204 = "No Content",
	_400 = "Bad Request",
	_409 = "Same Data Found",
	_503 = "Can't connnect to Geoserver",
}

export function apiResponse<T extends keyof typeof GSResponseCode, U>(
	code: T,
	data: U,
) {
	const message = GSReponseEnum[code];
	const retriveCode = GSResponseCode[code];

	return {
		message,
		data,
		status_code: retriveCode,
	};
}
