<script>
	import TableDisplay from '$lib/table-display.svelte';

	export let data;
</script>

{#if data.error}
	<h1>An error occurred: {data.error}</h1>
{:else}
	<div class="page">
		<h3>Id: {data.id}</h3>
		<h3>Name: {data.name}</h3>
		<h3>Email: {data.email}</h3>
		<h3>Address: {data.address}</h3>
		<h3>Phone Number: {data.phoneNumber}</h3>

		<TableDisplay
			entityType={'borrow'}
			dataArray={data.borrows}
			dataHeaders={['Id', 'Book title', 'Borrow date', 'Due date', 'Return date', 'Fine']}
			dataVariables={['id', 'bookTitle', 'borrowDate', 'dueDate', 'returnDate', 'fine']}
		/>
	</div>
{/if}

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
