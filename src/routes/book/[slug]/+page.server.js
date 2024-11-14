import { dataRequest } from '$lib/server-utils';

export async function load({ params }) {
	return await dataRequest('book/' + params.slug, 'GET', null);
}
