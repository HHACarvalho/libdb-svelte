import { get } from '$lib/utils';

export async function load() {
	return await get(import.meta.env.VITE_BOOK_BASE_URL);
}
