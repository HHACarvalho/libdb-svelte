<script>
	import ModalCollection from '$lib/modal-collection.svelte';
	import TableDisplay from '$lib/table-display.svelte';

	export let data;
	let modalCollection;

	// function openModalBorrow(e) {
	// 	modalCollection.openModalBorrow(e.detail);
	// }

	// function openModalEdit(e) {
	// 	modalCollection.openModalEdit(e.detail);
	// }

	function openModalDelete(e) {
		modalCollection.openModalDelete(e.detail);
	}
</script>

{#if data.error}
	<h1>An error occurred: {data.error}</h1>
{:else}
	<div class="page">
		<div class="window">
			<div class="pad">
				<img src={data.imageUrl} alt="book-cover" />
			</div>

			<div class="pad">
				<div class="info">
					<h1>{data.title} ({data.year})</h1>
					<h2><a href="/author/{data.author.id}">{data.author.name}</a></h2>
					<p style="color: var(--text-grey)">Genre: {data.genre}</p>
					<p>
						<strong>Synopsys:</strong>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugit voluptatum asperiores atque eaque! A enim,
						molestias deleniti, debitis sunt excepturi tempora facilis ipsum sapiente praesentium inventore non dolor laborum.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugit voluptatum asperiores atque eaque! A enim,
						molestias deleniti, debitis sunt excepturi tempora facilis ipsum sapiente praesentium inventore non dolor laborum.
					</p>
				</div>
			</div>
		</div>
		<TableDisplay
			entityType={'bookEntry'}
			dataArray={data.bookEntries}
			dataHeaders={['Id', 'ISBN', 'Availability', '']}
			dataVariables={['id', 'isbn', 'isAvailable']}
			actions={['Borrow', 'Edit', 'Delete']}
			on:openModalBorrow={openModalBorrow}
			on:openModalEdit={openModalEdit}
			on:openModalDelete={openModalDelete}
		/>
	</div>

	<ModalCollection bind:this={modalCollection} modalList={['borrow', 'edit', 'delete']} />
{/if}

<style>
	.page {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.window {
		display: flex;
		gap: 20px;
	}

	.pad {
		display: flex;
		background-color: var(--background-blue);
		border-radius: 10px;
		padding: 40px;
	}

	img {
		width: 165px;
	}

	.info {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
