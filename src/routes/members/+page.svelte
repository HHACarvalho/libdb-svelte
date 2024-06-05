<script>
	import { customQuery } from '$lib/utils';
	import SearchHeader from '$lib/search-header.svelte';
	import TableDisplay from '$lib/table-display.svelte';
	import Pagination from '$lib/pagination.svelte';

	export let data;
	let pageNumber = Number(import.meta.env.VITE_DEFAULT_PAGE_NUMBER);
	let pageSize = Number(import.meta.env.VITE_DEFAULT_PAGE_SIZE);
	let queryParams = {};

	function simpleSearchSubmit(event) {
		queryParams['name'] = event.detail;
		executeQuery();
	}

	function pageNumberSubmit(event) {
		pageNumber = event.detail;
		executeQuery();
	}

	async function executeQuery() {
		data = await customQuery(import.meta.env.VITE_AUTHOR_QUERY_URL, pageNumber, pageSize, queryParams);
	}
</script>

<SearchHeader on:searchSubmit={simpleSearchSubmit} pageTitle={'Members'} queryParam={'name'} placeholder={'Name'} />

<TableDisplay
	{data}
	dataHeaders={['Id', 'Name', 'Email', 'Address', 'Phone Number']}
	dataVariables={['id', 'name', 'email', 'address', 'phoneNumber']}
/>

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />
