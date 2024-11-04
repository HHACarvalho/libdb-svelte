import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get('book?pageNumber=1&pageSize=16');
	}

	return await get('book/search?' + params);
}
