const apiUrl = process.env.ENVIRONMENT
	? import.meta.env.VITE_API_URL_PRODUCTION
	: import.meta.env.VITE_API_URL_DEVELOPMENT;

export async function dataRequest(endpoint, requestType, requestBody) {
	try {
		const options = requestOptions(requestType, requestBody);
		const request = await fetch(apiUrl + endpoint, options);
		const result = await request.json();

		return result;
	} catch (error) {
		return { error: 'Internal Server Error' };
	}
}

export async function operationRequest(endpoint, requestType, requestBody) {
	try {
		const options = requestOptions(requestType, requestBody);
		const request = await fetch(apiUrl + endpoint, options);

		return request.status === 200;
	} catch (error) {
		return { error: 'Internal Server Error' };
	}
}

function requestOptions(requestType, bodyContent) {
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
