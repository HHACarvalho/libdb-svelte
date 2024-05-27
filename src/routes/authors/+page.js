import { get, isNullOrEmpty } from '$lib/utils';

const baseUrl = "http://localhost:4000/author/all?pageNumber=1&pageSize=20";
const baseQueryUrl = "http://localhost:4000/author/search?pageNumber=1&pageSize=20";

export async function load({ url }) {

    if (url.searchParams.size == 0) {
        return await get(baseUrl);
    }

    let queryUrl = baseQueryUrl;
    let param = "";

    param = url.searchParams.get('name');
    if (!isNullOrEmpty(param)) {
        queryUrl += "&name=" + param;
    }

    return await get(queryUrl);
}