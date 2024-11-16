import { serverApiRequest } from '$lib/utils-server';

export async function load({ params }) {
	return await serverApiRequest('book/' + params.slug, 'GET', null);
}
