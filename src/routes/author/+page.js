import { get } from '$lib/utils';

export async function load() {
	return await get(import.meta.env.VITE_AUTHOR_BASE_URL);
}