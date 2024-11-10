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

export function isNullOrEmpty(str) {
	return str === null || str === '';
}
