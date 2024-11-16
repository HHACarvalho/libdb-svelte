import { dataRequest, makeRequest } from '$lib/utils';

const apiUrl = process.env.ENVIRONMENT
	? import.meta.env.VITE_API_URL_PRODUCTION
	: import.meta.env.VITE_API_URL_DEVELOPMENT;

export async function serverDataRequest(endpoint, requestType, requestBody) {
	return await dataRequest(apiUrl + endpoint, requestType, requestBody);
}

export async function serverMakeRequest(endpoint, requestType, requestBody) {
	return await makeRequest(apiUrl + endpoint, requestType, requestBody);
}
