<script>
	import { page } from '$app/stores';
	import { apiRequest } from '$lib/utils';
	import Modal from '$lib/modal.svelte';

	export let isActive;
	export let data;
	export let openModalInfo;

	async function confirm() {
		const url = $page.url.origin + '/api/';

		const req = await apiRequest(url, 'DELETE', {
			entityType: data.entityType,
			entityId: data.entity.id,
			body: null,
		});

		cancel();

		if (req.error) {
			openModalInfo({ error: req.error });
		} else {
			location.reload(); //TODO: Reloading makes it impossible to display a successful message
		}
	}

	function cancel() {
		isActive = false;
		data = null;
	}
</script>

<Modal bind:isActive>
	<h2>Are you sure you want to delete?</h2>
	<div class="spacer_10"></div>
	<h4>You can't undo this action.</h4>
	<div class="spacer_20"></div>
	<div class="button_container">
		<button class="shadow" on:click={confirm}>Confirm</button>
		<button class="shadow" on:click={cancel}>Cancel</button>
	</div>
</Modal>
