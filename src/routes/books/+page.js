import { get } from '$lib/utils';

export async function load() {
    return {
        authorArray: await get("http://localhost:4000/book/all?pageNumber=1&pageSize=20")
    }
}