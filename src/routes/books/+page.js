import { queryResult } from '$lib/utils';
import { BOOK_BASE_URL, BOOK_QUERY_URL } from '$lib/constants';

export async function load({ url }) {
    return await queryResult(BOOK_BASE_URL, BOOK_QUERY_URL, url.searchParams, ['title']);
}