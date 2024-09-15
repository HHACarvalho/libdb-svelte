import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get(
			import.meta.env.VITE_ENDPOINT_URL_AUTHOR + '?pageNumber=1&pageSize=' + import.meta.env.VITE_DEFAULT_PAGE_SIZE
		);
	}

	return await get(import.meta.env.VITE_ENDPOINT_URL_AUTHOR + '/search?' + params);
}
