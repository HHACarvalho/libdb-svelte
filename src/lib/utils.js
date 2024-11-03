import axios from 'axios';

const apiUrl = process.env.ENVIRONMENT
	? import.meta.env.VITE_API_URL_PRODUCTION
	: import.meta.env.VITE_API_URL_DEVELOPMENT;

export async function get(endpoint) {
	try {
		const res = await axios.get(apiUrl + endpoint, {
			validateStatus: function (status) {
				return status < 500;
			},
		});

		if (res.status !== 200) {
			return { error: res.statusText + ': ' + res.data.error };
		}

		return res.data;
	} catch (error) {
		return { error: 'Internal Server Error: Network Error' };
	}
}

export function isNullOrEmpty(str) {
	return str === null || str === '';
}
