<script>
	import { customQuery } from '$lib/utils';
	import Search from '$lib/search.svelte';
	import ItemDisplay from '$lib/item-display.svelte';
	import Pagination from '$lib/pagination.svelte';

	export let data;
	let pageNumber = Number(import.meta.env.VITE_DEFAULT_PAGE_NUMBER);
	let pageSize = Number(import.meta.env.VITE_DEFAULT_PAGE_SIZE);
	let queryParams = {};

	function simpleSearchSubmit(event) {
		queryParams['name'] = event.detail;
		executeQuery();
	}

	function pageSizeSubmit(event) {
		pageSize = event.detail;
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

<Search
	on:searchSubmit={simpleSearchSubmit}
	on:pageSizeSubmit={pageSizeSubmit}
	pageTitle={'Authors'}
	queryParam={'name'}
	placeholder={'Name'}
/>

<ItemDisplay {data} type={'author'} />

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />
