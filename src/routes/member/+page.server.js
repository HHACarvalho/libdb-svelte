import { serverDataRequest } from '$lib/utils-server';
import { stringIsNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (stringIsNullOrEmpty(params)) {
		return await serverDataRequest('member?pageNumber=1&pageSize=16', 'GET', null);
	}

	return await serverDataRequest('member/search?' + params, 'GET', null);
}
