import { dataRequest, makeRequest } from '$lib/utils';

const apiUrl = 'http://localhost:5173/';

export async function clientDataRequest(endpoint, requestType, requestBody) {
	return await dataRequest(apiUrl + endpoint, requestType, requestBody);
}

export async function clientMakeRequest(endpoint, requestType, requestBody) {
	return await makeRequest(apiUrl + endpoint, requestType, requestBody);
}
