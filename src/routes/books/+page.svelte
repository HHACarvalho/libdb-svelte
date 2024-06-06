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
		queryParams['title'] = event.detail;
		executeQuery();
	}

	function pageNumberSubmit(event) {
		pageNumber = event.detail;
		executeQuery();
	}

	async function executeQuery() {
		data = await customQuery(import.meta.env.VITE_BOOK_QUERY_URL, pageNumber, pageSize, queryParams);
	}
</script>

<Search on:searchSubmit={simpleSearchSubmit} pageTitle={'Books'} queryParam={'title'} placeholder={'Title'} />

<ItemDisplay {data} type={'book'} />

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />
