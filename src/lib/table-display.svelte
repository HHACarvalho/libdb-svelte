<script>
	export let data;
	export let dataHeaders;
	export let dataVariables;
</script>

<div class="table-display">
	{#if data.error}
		<h1>{data.error}</h1>
	{:else}
		<table>
			<tr>
				{#each dataHeaders as obj}
					<th>{obj}</th>
				{/each}
			</tr>
			{#each data.array as obj}
				<tr class="tr-data">
					{#each dataVariables as e}
						<td><a href="/member/{obj.id}">{obj[e]}</a></td>
					{/each}
				</tr>
			{/each}
		</table>
	{/if}
</div>

<style>
	.table-display {
		margin-top: 25px;
	}

	.tr-data {
		transition: 0.3s;
	}

	.tr-data:hover {
		opacity: 0.6;
	}

	td,
	th {
		padding: 12px 24px;
		background-color: var(--dark-blue);
		text-align: left;
	}

	tr:nth-child(even) td {
		background-color: var(--background-blue);
	}

	th:first-child {
		border-top-left-radius: 10px;
		box-shadow: 0 0 0 1px var(--darker-blue);
	}

	th:last-child {
		border-top-right-radius: 10px;
		box-shadow: 0 0 0 1px var(--darker-blue);
	}

	tr:last-child td:first-child {
		border-bottom-left-radius: 10px;
		box-shadow: 0 0 0 1px var(--darker-blue);
	}

	tr:last-child td:last-child {
		border-bottom-right-radius: 10px;
		box-shadow: 0 0 0 1px var(--darker-blue);
	}
</style>
