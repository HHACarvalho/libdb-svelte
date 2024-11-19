import { apiRequest } from '$lib/utils';

async function clientApiRequest(apiUrl, requestType, requestBody) {
	return await apiRequest(apiUrl + '/api/', requestType, requestBody);
}

export async function deleteEntity(apiUrl, entityType, entityId) {
	return await clientApiRequest(apiUrl, 'DELETE', {
		entityType: entityType,
		entityId: entityId,
		body: null,
	});
}
