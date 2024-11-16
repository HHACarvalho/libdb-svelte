import { serverApiRequest } from '$lib/utils-server';
import { stringIsNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (stringIsNullOrEmpty(params)) {
		return await serverApiRequest('book?pageNumber=1&pageSize=16', 'GET', null);
	}

	return await serverApiRequest('book/search?' + params, 'GET', null);
}
