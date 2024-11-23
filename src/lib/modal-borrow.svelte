<script>
	import { page } from '$app/stores';
	import { apiRequest, formatDateToString } from '$lib/utils';
	import Modal from '$lib/modal.svelte';

	export let isActive;
	export let data;
	export let openModalInfo;
	let memberId;

	async function confirm() {
		const url = $page.url.origin + '/api/';
		const today = new Date();
		const future = new Date();
		future.setDate(today.getDate() + 21);

		const req = await apiRequest(url, 'POST', {
			entityType: 'borrow',
			entityId: null,
			body: {
				bookEntryId: data.entity.id,
				memberId: memberId,
				borrowDate: formatDateToString(today),
				dueDate: formatDateToString(future),
			},
		});

		cancel();

		if (req.error) {
			openModalInfo({ info: req.error });
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
	<h1>Borrow</h1>
	<div class="spacer_20"></div>
	<h3>Member ID:</h3>
	<div class="spacer_20"></div>
	<input type="text" bind:value={memberId} />
	<div class="spacer_20"></div>
	<div class="button_container">
		<button on:click={confirm}>Confirm</button>
		<button on:click={cancel}>Cancel</button>
	</div>
</Modal>
