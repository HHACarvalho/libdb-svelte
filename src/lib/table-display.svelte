<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let entityType = '';
	export let dataArray = [];
	export let dataHeaders = [];
	export let dataVariables = [];
	export let actions = [];
</script>

<table class="standard_border">
	<tr>
		{#each dataHeaders as header}
			<th>{header}</th>
		{/each}

		{#if actions.length > 0}
			<th></th>
		{/if}
	</tr>

	{#each dataArray as dataEntry}
		<tr>
			{#each dataVariables as varName}
				<td>
					{#if varName === 'name' && entityType === 'member'}
						<a href="/member/{dataEntry.id}">{dataEntry[varName]}</a>
					{:else if varName === 'isAvailable' && entityType === 'bookEntry'}
						<div class="table_container">
							<p>{dataEntry[varName] ? 'Available' : 'Unavailable'}</p>
							<svg viewBox="0 0 2 2">
								<circle cx="1" cy="1" r="1" fill={dataEntry[varName] ? 'green' : 'red'} />
							</svg>
						</div>
					{:else if varName === 'fine' && entityType === 'borrow'}
						{dataEntry[varName]} €
					{:else}
						{dataEntry[varName]}
					{/if}
				</td>
			{/each}

			{#if actions.length > 0}
				<td>
					<div class="table_container">
						{#each actions as action}
							<button
								on:click={() => {
									dispatch('openModal' + action, {
										entityType: entityType,
										entity: dataEntry,
									});
								}}>{action}</button
							>
							{#if actions[actions.length - 1] !== action}
								|
							{/if}
						{/each}
					</div>
				</td>
			{/if}
		</tr>
	{/each}
</table>

<style>
	table {
		border-radius: 10px;
		text-align: left;
	}

	tr {
		background: var(--dark-blue);
		transition: 0.3s;
	}

	tr:nth-child(even) {
		background: var(--darkest-blue);
	}

	tr:hover {
		opacity: 0.75;
	}

	th,
	td {
		padding: 12px 24px;
	}

	.table_container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	button {
		background: none;
		cursor: pointer;
		font-size: 1em;
		padding: 0;
		transition: 0.3s;
	}

	button:hover {
		color: var(--light-purple);
	}

	svg {
		height: 1em;
		width: 1em;
	}
</style>
