<script>
	import Search from '$lib/search.svelte';
	import ItemDisplay from '$lib/item-display.svelte';
	import Pagination from '$lib/pagination.svelte';
	import { goto } from '$app/navigation';

	export let data;
	const searchParams = new URLSearchParams();
	let pageNumber = Number(import.meta.env.VITE_DEFAULT_PAGE_NUMBER);
	let pageSize = Number(import.meta.env.VITE_DEFAULT_PAGE_SIZE);

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

<Search on:searchSubmit={simpleSearchSubmit} on:pageSizeSubmit={pageSizeSubmit} pageTitle={'Authors'} />

<ItemDisplay {data} type={'author'} />

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />
