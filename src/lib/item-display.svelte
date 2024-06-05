<script>
	import ItemAuthor from '$lib/item-author.svelte';
	import ItemBook from '$lib/item-book.svelte';

	export let data;
	export let type;
</script>

<div class="item-display">
	{#if data.error}
		<h1>{data.error}</h1>
	{:else if type == 'author'}
		{#if data.error}
			<h1>{data.error}</h1>
		{:else}
			{#each data.array as obj}
				<ItemAuthor id={obj.id} imageUrl={obj.imageUrl} description={obj.name} />
			{/each}
		{/if}
	{:else if type == 'book'}
		{#each data.array as obj}
			<ItemBook
				id={obj.id}
				imageUrl={obj.imageUrl}
				description={obj.title}
				authorId={obj.author.id}
				authorName={obj.author.name}
			/>
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
