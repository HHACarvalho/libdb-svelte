import { get } from '$lib/utils';

export async function load() {
    return await get("http://localhost:4000/author/all?pageNumber=1&pageSize=20")
}