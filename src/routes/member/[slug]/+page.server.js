import { serverApiRequest } from '$lib/utils-server';

export async function load({ params }) {
	return await serverApiRequest('member/' + params.slug, 'GET', null);
}
