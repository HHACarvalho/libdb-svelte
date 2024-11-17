import { apiRequest } from '$lib/utils';

const apiUrl = 'http://localhost:5173/';

async function clientApiRequest(endpoint, requestType, requestBody) {
	return await apiRequest(apiUrl + endpoint, requestType, requestBody);
}

export async function deleteEntity(entityType, entityId) {
	return await clientApiRequest('api', 'DELETE', {
		entityType: entityType,
		entityId: entityId,
		body: null,
	});
}
