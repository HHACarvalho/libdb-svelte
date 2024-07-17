import { get } from '$lib/utils';

export async function load({ params }) {
	return await get(import.meta.env.VITE_BOOK_QUERY + params.slug);
}
