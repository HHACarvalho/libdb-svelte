<script>
	import { customQuery } from '$lib/utils';
	import SearchHeader from '$lib/search-header.svelte';
	import Item from '$lib/item-author.svelte';

	export let data;
	let pageNumber = 1;
	let pageSize = 14;
	let queryParams = {};

	async function simpleSearchSubmit(event) {
		queryParams['name'] = event.detail;
		data = await customQuery(import.meta.env.VITE_AUTHOR_QUERY_URL, pageNumber, pageSize, queryParams);
	}
</script>

<SearchHeader on:searchSubmit={simpleSearchSubmit} pageTitle={'Authors'} queryParam={'name'} />

<div class="item-display">
	{#if data.error}
		<h1>{data.error}</h1>
	{:else}
		{#each data.array as obj}
			<Item id={obj.id} imageUrl={obj.imageUrl} description={obj.name} />
		{/each}
	{/if}
</div>

<style>
	.item-display {
		margin-top: 25px;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
</style>
