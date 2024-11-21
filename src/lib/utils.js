export async function apiRequest(url, requestType, requestBody) {
	try {
		const opt = buildRequestOptions(requestType, requestBody);
		const req = await fetch(url, opt);

		let res = {};

		const contentType = req.headers.get('Content-Type') || '';
		if (contentType.includes('application/json')) {
			res = await req.json();
		} else if (!req.ok) {
			res = { error: req.statusText };
		}

		return res;
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

export function formatDateToString(date) {
	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const year = date.getFullYear();

	return `${day}-${month}-${year}`;
}

export function stringIsNullOrEmpty(str) {
	return str === null || str === '';
}

export function objectIsNullOrEmpty(obj) {
	return obj === null || Object.keys(obj).length === 0;
}
