import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get(import.meta.env.VITE_BOOK_BASE_URL);
	}
	return await get(import.meta.env.VITE_BOOK_QUERY_URL + params);
}
