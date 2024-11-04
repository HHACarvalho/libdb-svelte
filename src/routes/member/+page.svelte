<script>
	import Search from '$lib/search.svelte';
	import TableDisplay from '$lib/table-display.svelte';
	import Pagination from '$lib/pagination.svelte';
	import { goto } from '$app/navigation';

	export let data;
	const searchParams = new URLSearchParams();
	let pageNumber = 1;
	let pageSize = 16;

	function simpleSearchSubmit(event) {
		searchParams.set('name', event.detail);
		executeQuery();
	}

	function pageNumberSubmit(event) {
		searchParams.set('pageNumber', event.detail);
		pageNumber = event.detail;
		executeQuery();
	}

	function pageSizeSubmit(event) {
		searchParams.set('pageSize', event.detail);
		searchParams.set('pageNumber', 1);
		pageSize = event.detail;
		pageNumber = 1;
		executeQuery();
	}

	async function executeQuery() {
		goto(`?${searchParams.toString()}`);
	}
</script>

<Search on:searchSubmit={simpleSearchSubmit} on:pageSizeSubmit={pageSizeSubmit} pageTitle={'Members'} />

<TableDisplay
	{data}
	dataHeaders={['Id', 'Name', 'Email', 'Address', 'Phone Number']}
	dataVariables={['id', 'name', 'email', 'address', 'phoneNumber']}
/>

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />
