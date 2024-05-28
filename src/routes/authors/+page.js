import { queryResult } from '$lib/utils';
import { AUTHOR_BASE_URL, AUTHOR_QUERY_URL } from '$lib/constants';

export async function load({ url }) {
    return await queryResult(AUTHOR_BASE_URL, AUTHOR_QUERY_URL, url.searchParams, ['name']);
}