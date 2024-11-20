<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let entityType;
	export let dataEntries;
	export let dataHeaders;
	export let dataVariables;
</script>

<table>
	<tr>
		{#each dataHeaders as obj}
			<th>{obj}</th>
		{/each}
	</tr>
	{#if entityType === 'member'}
		{#each dataEntries as obj}
			<tr class="tr-data">
				{#each dataVariables as e}
					{#if e === 'name'}
						<td><a href="/member/{obj.id}">{obj[e]}</a></td>
					{:else}
						<td>{obj[e]}</td>
					{/if}
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
							<button
								on:click={() => {
									dispatch('openModalBorrow', { entityType: 'bookEntry', entity: obj }); //TODO: entityType
								}}>Borrow</button
							>
							|
							<button
								on:click={() => {
									dispatch('openModalEdit', { entityType: 'bookEntry', entity: obj }); //TODO: entityType
								}}>Edit</button
							>
							|
							<button
								on:click={() => {
									dispatch('openModalDelete', { entityType: 'bookEntry', id: obj.id }); //TODO: entityType
								}}>Delete</button
							>
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
		border: 5px solid var(--background-blue);
		border-radius: 10px;
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

	.Availability {
		align-items: center;
		display: flex;
		gap: 10px;
	}

	button {
		background: none;
		font-size: 1em;
		cursor: pointer;
		transition: 0.3s;
	}

	button:hover {
		color: var(--light-purple);
	}
</style>
