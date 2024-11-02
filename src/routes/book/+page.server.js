import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get('book?pageNumber=1&pageSize=' + import.meta.env.VITE_DEFAULT_PAGE_SIZE);
	}

	return await get('book/search?' + params);
}
