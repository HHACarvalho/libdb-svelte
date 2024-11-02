import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get('author?pageNumber=1&pageSize=' + import.meta.env.VITE_DEFAULT_PAGE_SIZE);
	}

	return await get('author/search?' + params);
}
