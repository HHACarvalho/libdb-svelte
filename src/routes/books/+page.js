import { queryResult } from '$lib/utils';

export async function load({ url }) {
	return await queryResult(import.meta.env.VITE_BOOK_BASE_URL, import.meta.env.VITE_BOOK_QUERY_URL, url.searchParams, [
		'title'
	]);
}
