import { apiRequest } from '$lib/utils';

const apiUrl = process.env.ENVIRONMENT
	? import.meta.env.VITE_API_URL_PRODUCTION
	: import.meta.env.VITE_API_URL_DEVELOPMENT;

export async function serverApiRequest(endpoint, requestType, requestBody) {
	return await apiRequest(apiUrl + endpoint, requestType, requestBody);
}
