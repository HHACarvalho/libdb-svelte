export async function dataRequest(url, requestType, requestBody) {
	try {
		const options = requestOptions(requestType, requestBody);
		const request = await fetch(url, options);
		const result = await request.json();

		return result;
	} catch (error) {
		//TODO: logger
		return { error: 'Internal Server Error' };
	}
}

export async function makeRequest(url, requestType, requestBody) {
	try {
		const options = requestOptions(requestType, requestBody);
		const request = await fetch(url, options);
		let result = {};

		if (request.status !== 200) {
			result = await request.json();
		}

		return result;
	} catch (error) {
		//TODO: logger
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

export function objectIsNullOrEmpty(obj) {
	return obj === null || Object.keys(obj).length === 0;
}
