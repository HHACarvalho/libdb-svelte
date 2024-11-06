<script>
	import TableDisplay from '$lib/table-display.svelte';

	export let data;
</script>

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
	<div class="table-border">
		<TableDisplay
			dataEntries={data.bookEntries}
			dataHeaders={['Id', 'ISBN', 'Availability', '']}
			dataVariables={['id', 'isbn', 'isAvailable', 'options']}
			hyperlink={false}
		/>
	</div>
</div>

<style>
	.table-border {
		border: 5px solid var(--background-blue);
		border-radius: 10px;
	}

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
