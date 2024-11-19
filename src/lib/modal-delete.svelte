<script>
	import { page } from '$app/stores';
	import { apiRequest } from '$lib/utils';
	import Modal from '$lib/modal.svelte';

	export let isActive;
	export let data;

	async function confirm() {
		const url = $page.url.origin + '/api/';
		const req = await apiRequest(url, 'DELETE', {
			entityType: data.entityType,
			entityId: data.id,
			body: null,
		});

		cancel();

		if (req.error) {
			//TODO: Display an error message
			console.error(req.error);
		} else {
			//TODO: Reloading makes it impossible to display a successful message
			location.reload();
		}
	}

	function cancel() {
		isActive = false;
		data = null;
	}
</script>

<Modal bind:isActive>
	<h1>Are you sure you want to delete?</h1>
	<h3>You can't undo this action.</h3>
	<div class="spacer-25"></div>
	<button on:click={confirm}>Confirm</button>
	<button on:click={cancel}>Cancel</button>
</Modal>

<style>
	button {
		background-color: var(--background-blue);
		border-radius: 10px;
		font-size: 1em;
		padding: 10px;
	}
</style>
