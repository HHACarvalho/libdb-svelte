import axios from 'axios';

async function get(url) {
    try {
        const res = await axios.get(url, {
            validateStatus: function (status) {
                return status < 500;
            }
        })

        if (res.status !== 200) {
            return { error: res.statusText + ": " + res.data.error };
        }

        return res.data
    } catch (error) {
        return { error: "Internal Server Error: Network Error" };
    }
}

export async function queryResult(baseUrl, queryUrl, urlParams, domainParams) {

    if (urlParams.size == 0) {
        return await get(baseUrl);
    }

    let customUrl = queryUrl;
    let paramValue = "";

    paramValue = urlParams.get('pageNumber');
    customUrl += 'pageNumber=' + (!isNullOrEmpty(paramValue) ? paramValue : 1);

    paramValue = urlParams.get('pageSize');
    customUrl += '&pageSize=' + (!isNullOrEmpty(paramValue) ? paramValue : 14);

    domainParams.forEach(e => {

        paramValue = urlParams.get(e);
        if (!isNullOrEmpty(paramValue)) {
            customUrl += "&" + e + "=" + paramValue;
        }
    });

    return await get(customUrl);
}

function isNullOrEmpty(str) {
    return str === null || str === '';
}