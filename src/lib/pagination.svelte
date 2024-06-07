<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let pageNumber;
	export let pageSize;
	export let totalCount;
	let maxPageNumber;

	$: pageSize, (maxPageNumber = Math.ceil(totalCount / pageSize));

	function pageSubmit(newPageNumber) {
		dispatch('pageSubmit', newPageNumber);
	}
</script>

<div class="pagination">
	<button on:click={pageSubmit(pageNumber - 1)} disabled={pageNumber == 1} class="shadow"
		><img src="/arrow-left.png" alt="arrow-left" /></button
	>

	{#if pageNumber == 1}
		<button on:click={pageSubmit(pageNumber)} class="shadow">{pageNumber}</button>
		{#if pageNumber + 1 <= maxPageNumber}
			<button on:click={pageSubmit(pageNumber + 1)} class="shadow">{pageNumber + 1}</button>
		{/if}
		{#if pageNumber + 2 <= maxPageNumber}
			<button on:click={pageSubmit(pageNumber + 2)} class="shadow">{pageNumber + 2}</button>
		{/if}
	{:else if pageNumber == maxPageNumber}
		{#if pageNumber - 2 >= 1}
			<button on:click={pageSubmit(pageNumber - 2)} class="shadow">{pageNumber - 2}</button>
		{/if}
		{#if pageNumber - 1 >= 1}
			<button on:click={pageSubmit(pageNumber - 1)} class="shadow">{pageNumber - 1}</button>
		{/if}
		<button on:click={pageSubmit(pageNumber)} class="shadow">{pageNumber}</button>
	{:else}
		<button on:click={pageSubmit(pageNumber - 1)} class="shadow">{pageNumber - 1}</button>
		<button on:click={pageSubmit(pageNumber)} class="shadow">{pageNumber}</button>
		<button on:click={pageSubmit(pageNumber + 1)} class="shadow">{pageNumber + 1}</button>
	{/if}

	<button on:click={pageSubmit(pageNumber + 1)} disabled={pageNumber == maxPageNumber} class="shadow"
		><img src="/arrow-right.png" alt="arrow-right" /></button
	>
</div>

<style>
	.pagination {
		display: flex;
		gap: 10px;
		margin-top: 35px;
	}

	button {
		padding: 10px 15px;
		background-color: var(--dark-blue);
		border-radius: 5px;
		transition: 0.3s;
		font-size: 1em;
	}

	button:hover {
		background-color: var(--light-purple);
	}

	img {
		height: 1em;
		display: block;
	}
</style>
