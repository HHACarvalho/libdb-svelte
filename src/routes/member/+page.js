import { get, isNullOrEmpty } from '$lib/utils';

export async function load({ url }) {
	const params = url.searchParams.toString();
	if (isNullOrEmpty(params)) {
		return await get(import.meta.env.VITE_MEMBER_BASE_URL);
	}
	console.log(import.meta.env.VITE_MEMBER_QUERY_URL + params);
	return await get(import.meta.env.VITE_MEMBER_QUERY_URL + params);
}
