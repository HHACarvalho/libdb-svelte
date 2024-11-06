<script>
	export let dataEntries;
	export let dataHeaders;
	export let dataVariables;
	export let hyperlink;
</script>

<table>
	<tr>
		{#each dataHeaders as obj}
			<th>{obj}</th>
		{/each}
	</tr>
	{#if hyperlink}
		{#each dataEntries as obj}
			<tr class="tr-data">
				{#each dataVariables as e}
					<td><a href="/member/{obj.id}">{obj[e]}</a></td>
				{/each}
			</tr>
		{/each}
	{:else}
		{#each dataEntries as obj}
			<tr class="tr-data">
				{#each dataVariables as e}
					{#if e === 'isAvailable'}
						<td class="Availability">
							<p>{obj[e] ? 'Available' : 'Unavailable'}</p>
							<svg width="1em" height="1em" viewBox="0 0 100 100">
								<circle cx="50" cy="50" r="50" fill={obj[e] ? 'green' : 'red'} />
							</svg>
						</td>
					{:else if e === 'options'}
						<td>
							<button on:click={() => {}}>Borrow</button> |
							<button on:click={() => {}}>Edit</button> |
							<button on:click={() => {}}>Delete</button>
						</td>
					{:else}
						<td>{obj[e]}</td>
					{/if}
				{/each}
			</tr>
		{/each}
	{/if}
</table>

<style>
	table {
		width: 100%;
	}

	.tr-data {
		transition: 0.3s;
	}

	.tr-data:hover {
		opacity: 0.75;
	}

	th,
	td {
		background-color: var(--dark-blue);
		padding: 12px 24px;
		text-align: left;
	}

	tr:nth-child(even) td {
		background-color: var(--background-blue);
	}

	/* th:first-child {
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
	} */

	.Availability {
		align-items: center;
		display: flex;
		gap: 10px;
	}

	button {
		background: none;
		font-size: 1em;
	}
</style>
