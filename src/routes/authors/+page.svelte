<script>
	import SearchHeader from '$lib/search-header.svelte';
	import Item from '$lib/item-author.svelte';

	export let data;
</script>

<SearchHeader pageTitle={'Authors'} queryParam={'name'} />

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
