<script>
	import { customQuery } from '$lib/utils';
	import SearchHeader from '$lib/search-header.svelte';
	import Item from '$lib/item-book.svelte';
	import Pagination from '$lib/pagination.svelte';

	export let data;
	let pageNumber = 1;
	let pageSize = 14;
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

<SearchHeader on:searchSubmit={simpleSearchSubmit} pageTitle={'Books'} queryParam={'title'} />

<div class="item-display">
	{#if data.error}
		<h1>{data.error}</h1>
	{:else}
		{#each data.array as obj}
			<Item
				id={obj.id}
				imageUrl={obj.imageUrl}
				description={obj.title}
				authorId={obj.author.id}
				authorName={obj.author.name}
			/>
		{/each}
	{/if}
</div>

<Pagination on:pageSubmit={pageNumberSubmit} {pageNumber} {pageSize} totalCount={data.total} />

<style>
	.item-display {
		margin-top: 25px;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
