<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let pageTitle;
	export let queryParam;
	export let placeholder;
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
			<input bind:value={searchValue} name={queryParam} {placeholder} />
		</form>
	</div>
	<div>
		<span>Page size:</span>
		<select bind:value={pageSize} on:change={pageSizeSubmit}>
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

	input {
		padding: 10px 20px;
		background-color: var(--dark-blue);
		border-radius: 30px;
	}

	input::placeholder {
		color: rgb(225, 225, 225);
	}

	select {
		padding: 10px;
		background-color: var(--background-blue);
		border-radius: 5px;
		border: 0;
	}
</style>
