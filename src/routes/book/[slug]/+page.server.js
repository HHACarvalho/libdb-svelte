import { serverDataRequest } from '$lib/utils-server';

export async function load({ params }) {
	return await serverDataRequest('book/' + params.slug, 'GET', null);
}
