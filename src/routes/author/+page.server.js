import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get('author?pageNumber=1&pageSize=16');
	}

	return await get('author/search?' + params);
}
