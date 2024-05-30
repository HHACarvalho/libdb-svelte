import { queryResult } from '$lib/utils';

export async function load({ url }) {
	return await queryResult(
		import.meta.env.VITE_MEMBER_BASE_URL,
		import.meta.env.VITE_MEMBER_QUERY_URL,
		url.searchParams,
		['name']
	);
}
