import { apiRequest } from '$lib/utils';

const apiUrl = 'http://localhost:5173/';

export async function clientApiRequest(endpoint, requestType, requestBody) {
	return await apiRequest(apiUrl + endpoint, requestType, requestBody);
}
