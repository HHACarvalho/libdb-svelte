import axios from 'axios';

export async function get(url) {
	try {
		const res = await axios.get(url, {
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

export async function customQuery(queryUrl, pageNumber, pageSize, queryParams) {
	let customUrl = queryUrl;

	customUrl += 'pageNumber=' + pageNumber;
	customUrl += '&pageSize=' + pageSize;

	for (let [param, paramValue] of Object.entries(queryParams)) {
		if (!isNullOrEmpty(paramValue)) {
			customUrl += '&' + param + '=' + paramValue;
		}
	}

	return await get(customUrl);
}

function isNullOrEmpty(str) {
	return str === null || str === '';
}
