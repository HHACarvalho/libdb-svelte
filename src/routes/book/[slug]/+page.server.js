import { get } from '$lib/utils';

export async function load({ params }) {
	return await get('book/' + params.slug);
}
