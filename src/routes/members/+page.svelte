<script>
	import { customQuery } from '$lib/utils';
	import SearchHeader from '$lib/search-header.svelte';
	import TableDisplay from '$lib/table-display.svelte';

	export let data;
	let pageNumber = 1;
	let pageSize = 14;
	let queryParams = {};

	async function simpleSearchSubmit(event) {
		queryParams['name'] = event.detail;
		data = await customQuery(import.meta.env.VITE_MEMBER_QUERY_URL, pageNumber, pageSize, queryParams);
	}
</script>

<SearchHeader on:searchSubmit={simpleSearchSubmit} pageTitle={'Members'} queryParam={'name'} />

<TableDisplay
	{data}
	dataHeaders={['Id', 'Name', 'Email', 'Address', 'Phone Number']}
	dataVariables={['id', 'name', 'email', 'address', 'phoneNumber']}
/>
