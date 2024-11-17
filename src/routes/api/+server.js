import { objectIsNullOrEmpty } from '$lib/utils';
import { serverApiRequest } from '$lib/utils-server';

export async function GET({ request }) {
	return await callApi(request, 'GET');
}

export async function POST({ request }) {
	return await callApi(request, 'POST');
}

export async function PUT({ request }) {
	return await callApi(request, 'PUT');
}

export async function DELETE({ request }) {
	return await callApi(request, 'DELETE');
}

async function callApi(request, requestType) {
	try {
		const data = await request.json();

		const apiResult = await serverApiRequest(data.entityType + '/' + data.entityId, requestType, data.body);
		if (apiResult.error) {
			return buildRequestResponse(apiResult, 400);
		}

		return buildRequestResponse(apiResult, 200);
	} catch (error) {
		console.error(error);
		return buildRequestResponse({ error: 'Internal Server Error' }, 500);
	}
}

function buildRequestResponse(body, statusCode) {
	if (objectIsNullOrEmpty(body)) {
		return new Response(null, {
			status: statusCode,
		});
	}

	return new Response(JSON.stringify(body), {
		headers: { 'Content-Type': 'application/json' },
		status: statusCode,
	});
}
