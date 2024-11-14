import { dataRequest, stringIsNullOrEmpty } from '$lib/server-utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (stringIsNullOrEmpty(params)) {
		return await dataRequest('book?pageNumber=1&pageSize=16', 'GET', null);
	}

	return await dataRequest('book/search?' + params, 'GET', null);
}
