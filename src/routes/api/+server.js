import { objectIsNullOrEmpty } from '$lib/utils';
import { serverMakeRequest } from '$lib/utils-server';

export async function POST({ request }) {
	try {
		const data = await request.json();
		const apiResult = await serverMakeRequest(data.entity + '/' + data.parameter, data.requestType, data.body);

		console.log(100, apiResult);

		if (apiResult.error) {
			return requestResponse(apiResult, 400);
		}

		return requestResponse(apiResult, 200);
	} catch (error) {
		//TODO: logger
		return requestResponse({ error: 'Internal Server Error' }, 500);
	}
}

function requestResponse(body, statusCode) {
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
