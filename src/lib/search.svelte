<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let pageTitle;
	let searchValue;
	let pageSize;

	function searchSubmit() {
		dispatch('searchSubmit', searchValue);
	}

	function pageSizeSubmit() {
		dispatch('pageSizeSubmit', pageSize);
	}
</script>

<div class="header">
	<div>
		<h1>{pageTitle}</h1>
		<form on:submit|preventDefault={searchSubmit}>
			<input bind:value={searchValue} name="search" placeholder="Search" />
		</form>
	</div>
	<div>
		<span>Page size:</span>
		<select bind:value={pageSize} on:change={pageSizeSubmit} name="size">
			<option value="16">16</option>
			<option value="32">32</option>
			<option value="64">64</option>
		</select>
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
	}

	.header div {
		display: flex;
		align-items: center;
		gap: 20px;
	}
</style>
