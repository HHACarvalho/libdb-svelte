export async function apiRequest(url, requestType, requestBody) {
	try {
		const options = buildRequestOptions(requestType, requestBody);
		const request = await fetch(url, options);

		let result = {};

		const contentType = request.headers.get('Content-Type') || '';
		if (contentType.includes('application/json')) {
			result = await request.json();
		}

		return result;
	} catch (error) {
		console.error(error);
		return { error: 'Internal Server Error' };
	}
}

function buildRequestOptions(requestType, bodyContent) {
	const requestSettings = { method: requestType };

	if (bodyContent) {
		requestSettings['headers'] = { 'Content-Type': 'application/json' };
		requestSettings['body'] = JSON.stringify(bodyContent);
	}

	return requestSettings;
}

export function stringIsNullOrEmpty(str) {
	return str === null || str === '';
}

export function objectIsNullOrEmpty(obj) {
	return obj === null || Object.keys(obj).length === 0;
}
