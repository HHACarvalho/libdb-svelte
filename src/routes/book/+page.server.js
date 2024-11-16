import { serverDataRequest } from '$lib/utils-server';
import { stringIsNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (stringIsNullOrEmpty(params)) {
		return await serverDataRequest('book?pageNumber=1&pageSize=16', 'GET', null);
	}

	return await serverDataRequest('book/search?' + params, 'GET', null);
}
