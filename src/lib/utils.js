const apiUrl = process.env.ENVIRONMENT
	? import.meta.env.VITE_API_URL_PRODUCTION
	: import.meta.env.VITE_API_URL_DEVELOPMENT;

export async function get(endpoint) {
	try {
		const request = await fetch(apiUrl + endpoint);
		const result = await request.json();

		return result;
	} catch (error) {
		return { error: 'Internal Server Error: Network Error' };
	}
}
export async function put(endpoint, bodyContent) {
	try {
		const request = await fetch(apiUrl + endpoint, requestSettings('PUT', bodyContent));

		return request.status === 200;
	} catch (error) {
		return { error: 'Internal Server Error: Network Error' };
	}
}

export async function deleteRequest(endpoint) {
	try {
		const request = await fetch(apiUrl + endpoint, requestSettings('DELETE'), null);

		return request.status === 200;
	} catch (error) {
		return { error: 'Internal Server Error: Network Error' };
	}
}

function requestSettings(requestType, bodyContent) {
	const requestSettings = {
		method: requestType,
		headers: { 'Content-Type': 'application/json' },
	};

	if (bodyContent) {
		requestSettings['body'] = JSON.stringify(bodyContent);
	}

	return requestSettings;
}

export function isNullOrEmpty(str) {
	return str === null || str === '';
}
