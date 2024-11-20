<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let entityType = '';
	export let dataArray = [];
	export let dataHeaders = [];
	export let dataVariables = [];
	export let actions = [];
</script>

<table>
	<tr>
		{#each dataHeaders as header}
			<th>{header}</th>
		{/each}
	</tr>

	{#each dataArray as dataEntry}
		<tr>
			{#each dataVariables as varName}
				<td>
					{#if varName === 'name' && entityType === 'member'}
						<a href="/member/{dataEntry.id}">{dataEntry[varName]}</a>
					{:else if varName === 'isAvailable' && entityType === 'bookEntry'}
						<div class="container_gap10">
							<p>{dataEntry[varName] ? 'Available' : 'Unavailable'}</p>
							<svg viewBox="0 0 2 2">
								<circle cx="1" cy="1" r="1" fill={dataEntry[varName] ? 'green' : 'red'} />
							</svg>
						</div>
					{:else}
						{dataEntry[varName]}
					{/if}
				</td>
			{/each}

			{#if actions.length > 0}
				<td>
					<div class="container_gap10">
						{#each actions as action}
							<button
								on:click={() => {
									dispatch('openModal' + action, { entityType: entityType, entity: dataEntry });
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
		width: 100%;
		border: 5px solid var(--background-blue);
		border-radius: 10px;
	}

	tr {
		background: var(--dark-blue);
		transition: 0.3s;
	}

	tr:nth-child(even) {
		background: var(--background-blue);
	}

	tr:hover {
		opacity: 0.75;
	}

	th,
	td {
		padding: 12px 24px;
		text-align: left;
	}

	.container_gap10 {
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

	svg {
		height: 1em;
		width: 1em;
	}
</style>
